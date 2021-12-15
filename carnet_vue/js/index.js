new Vue({
    el: '#app',
    
    //lien avec les composants
    components:{'AddContact' : httpVueLoader('./js/components/AddContact.vue'),'ShowContacts': httpVueLoader('./js/components/ShowContacts.vue')},
    data: {
        contacts:[]
    },
    methods:{
        loadContacts(){
            let contacts=window.localStorage.getItem('contacts');
            
            //si l'étiquette contacts existe dans le localstorage
            if(contacts != null){
                this.contacts = JSON.parse(contacts);
            }
            
           console.log(this.contacts);
        },
        save(){
           let contacts=JSON.stringify(this.contacts); 
           window.localStorage.setItem('contacts',contacts);
        }
    },
    beforeMount(){
        //ce qu'on appelle au chargement de l'application
        this.loadContacts();
    }
   
});
