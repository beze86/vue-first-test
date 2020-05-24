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
        initPokemonApi: function({commit} ) {
            let t = axios.get('https://pokeapi.co/api/v2/pokemon?limit=10')
            .then((res) => {
                return res.data.results;
            })
            .then(async (pokemons) => {
                let t = await Promise.all(pokemons.map((pokemon) => {
                    return axios.get(pokemon.url)
                    .then((pokemon) => {
                        return {
                            id: pokemon.data.id,
                            name: pokemon.data.species.name,
                            types: pokemon.data.types,
                            weight: pokemon.data.weight,
                            img: 'https://pokeres.bastionbot.org/images/pokemon/'+ pokemon.data.id +'.png'
                        }
                    })
                }))
                return t
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