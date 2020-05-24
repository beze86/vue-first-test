<template>
    <div class="row">
        <single-pokemon v-for="pokemon in getPokemons" :key="pokemon.id" :pokemon="pokemon"></single-pokemon>
    </div>
</template>

<script>
    import Pokemon from './Pokemon.vue';
    import { mapGetters } from 'vuex';

    export default {
        mounted: function() {
            this.$store.dispatch('initPokemonApi');
        },
        components: {
            singlePokemon: Pokemon
        },
        computed: {
            ...mapGetters([
                'getPokemons'
            ])
        },
    }
</script>