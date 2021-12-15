new Vue({
    el:'#app',
    data:{
        message:'',
        nom:'Dupont'
    },
    methods:{
        onClick(){
            console.log(this.nom);
            console.log(this.message);
        },
        showAlert(){
            alert("Et non, pas de google !!!!");
        }
    }
    
    
    
})