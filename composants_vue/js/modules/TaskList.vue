<template>
    <ul>
        <li>Acheter du café</li>
        <li>Réviser le Javascript</li>
        <li>Faire des cookies</li>
        <li>{{ task }}</li>
        <li>{{ task2 }}</li>
    </ul>
    
</template>


<script>
    module.exports = {
        data(){
            return {
               task : "Regarder Netflix",
               task2: "Aller promener"
            }
        }
    }
    
    
</script>

<style scoped>
    /* scoped = règles CSS applicables uniquement au composant */
    
    ul{
        list-style-type:none;
    }
    
    li{
        color:green;
    }
    
</style>