import { createStore } from 'vuex'
import axios from 'axios';

export default createStore({
  state: {
    starshipList: [],
    characterList: [],
    starship: null,
    nextPage: 2,
    nextPageCharacters: 2,
    buttonMoreShips: true,
    buttonMoreCharacters: true,
    loggedin: false,
    pilotList: [],
    filmList: [],
  },
  getters: {
    getStarshipList(state){
      return state.starshipList;
    },
    getCharacterList(state){
      return state.characterList;
    },
    getStarship(state){
      return state.starship;
    },
    getButtonMoreShips(state){
      return state.buttonMoreShips;
    },
    getButtonMoreCharacters(state){
      return state.buttonMoreCharacters;
    },
    getLoggedin(state){
      return state.loggedin;
    },
    getPilotList(state){
      return state.pilotList;
    },
    getFilmList(state){
      return state.filmList;
    },
  },
  mutations: {
    setStarshipList(state, starships){
      state.starshipList  = starships;
    },
    setCharacterList(state, characters){
      state.characterList  = characters;
    },
    setStarship(state, starship){
      state.starship  = starship;
    },
    setMoreShips(state, starships){
      state.starshipList.push(...starships);
    },
    setMoreCharacters(state, characters){
      state.characterList.push(...characters);
    },
    setLoggedin(state){
      state.loggedin = true;
    },
    setLoggedout(state){
      state.loggedin = false;
    },
    setPilotList(state, obj){
      state.pilotList[obj.index] = obj.pilot;
    },
    setFilmList(state, obj){
      state.filmList[obj.index] = obj.film;
    }
  },
  actions: {
    async getStarshipList (context) {
      let responseAPI = await axios.get("https://swapi.dev/api/starships/");
      let starships = responseAPI.data.results;
      starships.forEach( function(element) {
        let id = element.url.split('https://swapi.dev/api/starships/')[1].slice(0,-1);
        element.id = id;
      });
      context.commit('setStarshipList', starships);
    },
    async getCharacterList (context) {
      let responseAPI = await axios.get("https://swapi.dev/api/people/");
      let characters = responseAPI.data.results;
      characters.forEach( function(element) {
        let id = element.url.split('https://swapi.dev/api/people/')[1].slice(0,-1);
        element.id = id;
      });
      context.commit('setCharacterList', characters);
    },
    async getStarship (context, id) {
      let responseAPI = await axios.get(`https://swapi.dev/api/starships/${id}`);
      let starship = responseAPI.data;
      starship.id = id;
      let url = window.location.href;
      function UrlExists(url) {
          var http = new XMLHttpRequest();
          http.open('HEAD', url, false);
          http.send();
          if (http.status != 404)
              return true;
          else
              return false;
      }
      let result = UrlExists(`https://starwars-visualguide.com/assets/img/starships/${id}.jpg`);
      if(result){
        starship.image = `https://starwars-visualguide.com/assets/img/starships/${id}.jpg`;
      }else{
        starship.image = `https://coacademy-server-jc.com/uploads/courses/images/890.jpg`;
      }
      context.commit('setStarship', starship);
    },
    async getMoreShips ({commit, state}) {
      let responseAPIcount = await axios.get(`https://swapi.dev/api/starships`);
      if(responseAPIcount.data.count > state.starshipList.length){
        let responseAPI = await axios.get(`https://swapi.dev/api/starships/?page=${state.nextPage}`);
        let starships = responseAPI.data.results;
        starships.forEach( function(element) {
          let id = element.url.split('https://swapi.dev/api/starships/')[1].slice(0,-1);
          element.id = id;
        });
        commit('setMoreShips', starships);
        state.nextPage++;
      }else{
        console.log('maxim');
        state.buttonMoreShips = false;
      }
    },
    async getMoreCharacters ({commit, state}) {
      let responseAPIcount = await axios.get(`https://swapi.dev/api/people`);
      if(responseAPIcount.data.count > state.characterList.length){
        let responseAPI = await axios.get(`https://swapi.dev/api/people/?page=${state.nextPageCharacters}`);
        let characters = responseAPI.data.results;
        characters.forEach( function(element) {
          let id = element.url.split('https://swapi.dev/api/people/')[1].slice(0,-1);
          element.id = id;
        });
        commit('setMoreCharacters', characters);
        state.nextPageCharacters++;
      }else{
        console.log('maxim');
        state.buttonMoreCharacters = false;
      }
    },
    async getPilotAPI (context, obj) {
      let responseAPI = await axios.get(obj.url);
      let pilot = responseAPI.data;
      pilot.id = obj.url.split('https://swapi.dev/api/people/')[1].slice(0,-1);
      context.commit('setPilotList', {pilot: pilot, index: obj.index});
    },
    async getFilmAPI (context, obj) {
      let responseAPI = await axios.get(obj.url);
      let film = responseAPI.data;
      film.id = obj.url.split('https://swapi.dev/api/films/')[1].slice(0,-1);
      context.commit('setFilmList', {film: film, index: obj.index});
    },
    setLoggedinAction (context) {
      context.commit('setLoggedin');
    },
    setLoggedoutAction (context) {
      context.commit('setLoggedout');
    }
  },
  modules: {
  }
})
