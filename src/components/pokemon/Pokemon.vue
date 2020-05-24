<template>
    <div class="col-md-4 mb-4">
        <div class="card" style="width: 18rem;">
            <img class="card-img-top" :src="pokemon.img" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">{{pokemon.name}}</h5>
                <p class="card-text">Pokemon description</p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Type 1</li>
                <li class="list-group-item">Type 2</li>
                <li class="list-group-item">Type 3</li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        props: [
            'pokemon'
        ]
    }
</script>