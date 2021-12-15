export default Vue.component('ShowContacts', {
   
// Le template HTML
    template: `
        <table class="table table-dark table-striped table-hover">
            <thead>
            <tr>
                <th>Nom</th>
                <th>Prénom</th>
                <th>Téléphone</th>
                <th>Email</th>
                <th>Modifier</th>
                <th>Supprimer</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(contact,index) of contacts">
                <td v-if="!contact.modifyOn"> {{contact.nom}}</td>
                <td v-else><input v-model="contact.nom"></td>
                <td v-if="!contact.modifyOn"> {{contact.prenom}}</td>
                <td v-else><input v-model="contact.prenom"></td>
                <td v-if="!contact.modifyOn"> {{contact.tel}}</td>
                <td v-else><input v-model="contact.tel"></td>
                <td v-if="!contact.modifyOn"> {{contact.email}}</td>
                <td v-else><input v-model="contact.email"></td>
                <td><i @click="modify(contact)" class="far fa-edit"></i></td>
                <td><i @click="deleteOne(index)" class="far fa-trash-alt"></i></td>
            </tr>
            </tbody>
        </table>`, 

    // Dans un composant le data object ***DOIT*** être une fonction qui retourne un objet
   
    props: ['contacts'],
    methods:{
       modify(contact){
             //on change le statut modyfyOn de l'élément en cours de modif
             contact.modifyOn=!contact.modifyOn;
             this.$emit('save');
           
          
        },
        deleteOne(index){
            if(confirm('Etes-vous sûr de vouloir supprimer ce contact? Cette action sera irréversible.')){
                this.contacts.splice(index,1);
                this.$emit('save');
            }
        }
        
    }
    
   
});
