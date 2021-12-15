<template>
    
        <form @submit.prevent="addContact" ref="form">
        <h1>Ajouter un contact</h1>
            <p>
                <label for='nom'>Nom</label>
                <input type='text' name='nom' v-model="nom">
            </p>
            <p>
                <label for='prenom'>Prénom</label>
                <input type='text' name='prenom' v-model="prenom">
            </p>
            <p>
                <label for='tel'>Téléphone</label>
                <input type='text' name='tel' v-model="tel">
            </p>
             <p>
                <label for='email'>Email</label>
                <input type='email' name='email' v-model="email">
            </p>
            <p>
                <button type="submit" class="btn btn-success">Ajouter un contact</button>
            </p>    
        </form>
</template>
<script>
module.exports = {
     // Dans un composant le data object ***DOIT*** être une fonction qui retourne un objet
    data() {
        return {
            nom:'',
            prenom:'',
            tel:'',
            email:''
       };
    },
    props: ['contacts'],
    methods:{
        addContact(){
            const contact = {nom:this.nom,prenom:this.prenom,tel:this.tel,email:this.email,modifyOn:false};
            this.contacts.push(contact);
            //le composant emet un event qui s'appelle save
            this.$emit('save');
            
            //réinitialiser le formulaire
            this.$refs.form.reset();
                    
        }
        
    }
}
</script>

<style scoped>
label{
    display:inline-block;
    width:100px;
}
</style>

   
