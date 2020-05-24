import Home from './components/Home.vue';
import Pokemons from './components/pokemon/Pokemons.vue';
import PokemonUser from './components/pokemon/PokemonsUser.vue';

export const routes = [
    {path: '/', component: Home},
    {path: '/pokemon', component: Pokemons},
    {path: '/pokemon/user', component: PokemonUser}
]