<template>
    <div class="col-md-4 mb-4">
        <div class="card" style="width: 18rem;">
            <img class="card-img-top h-75" :src="pokemon.img" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title text-uppercase font-weight-bold">{{pokemon.name}}</h5>
                <p class="card-text pokemon__catch-box">Weight: {{pokemon.weight}}  <span class="pokemon__catch-box__star"><i class="fas fa-star"></i></span></p>
            </div>
            <ul class="list-group list-group-flush">
                <pokemon-type v-for="type in pokemon.types" :key="type.type.name" :typeObj="type"></pokemon-type>
            </ul>
        </div>
    </div>
</template>

<script>
    import PokemonType from './PokemonType.vue';

    export default {
        props: [
            'pokemon'
        ],
        components: {
            pokemonType: PokemonType
        }
    }
</script>

<style scoped>
    .pokemon__catch-box {
        display: flex;
        justify-content: space-between;
    }
    .pokemon__catch-box__star {
        font-family: 'FontAwesome';
        cursor: pointer;
        color: blue;
    }
</style>