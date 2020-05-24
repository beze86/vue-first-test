import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);


export const store = new Vuex.Store({
    state: {
        pokemons: []
    },
    getters: {
        getPokemons: function(state) {
            return state.pokemons;
        }
    },
    mutations: {
        'GET_POKEMONS': function(state, pokemonsApi) {
            state.pokemons = pokemonsApi;
        }
    },
    actions: {
        initPokemonApi: function( {commit} ) {
            axios.get('https://pokeapi.co/api/v2/pokemon?limit=10')
            .then((res) => {
                return res.data.results;
            })
            // .then((pokemons) => {
            //     return Promise.all(pokemons.map((pokemon) => {
            //         axios.get(pokemon.url)
            //          .then((pokemon) => {
            //              return {
            //                name: pokemon.data.species.name,
            //                id: pokemon.data.id
            //              };
            //          })
            //      }))
            // })
            .then((pokemons) => {
                return pokemons.map((pokemon) => {
                    let id = pokemon.url.split('https://pokeapi.co/api/v2/pokemon/')[1].replace('/', '');
                    console.log(id)
                    return {
                        name: pokemon.name,
                        img: 'https://pokeres.bastionbot.org/images/pokemon/'+ id +'.png'
                    }
                })
            })
            .then((pokemons) => {
                commit('GET_POKEMONS', pokemons)
            })
            .catch((err) => {
                console.log(err)
            })
        }
    }

})