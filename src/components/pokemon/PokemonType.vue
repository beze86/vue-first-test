<template>
    <li class="list-group-item">Type {{typeObj.slot}} : {{typeObj.type.name}}</li>
</template>

<script>
    export default {
        props:[
            'typeObj'
        ]
    }
</script>