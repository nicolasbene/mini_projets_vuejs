new Vue({
    el:'#app',
    data:{
        tasks:[
            {description:"Faire les courses",done:true},
            {description:"Réviser le JS",done:false},
            {description:"Bronzer",done:false},
            {description:"Faire un gateau au chocolat",done:true}
            ]
    },
    
    computed:{
        //insérer la liste des méthodes de type computed
        tasksDone(){
            //retourne les tâches qui sont faites
            let tasksDone = [];
            for(let i = 0;i<this.tasks.length ; i++){
                if(this.tasks[i].done == true){
                    tasksDone.push(this.tasks[i]);
                }
            }
            
            return tasksDone;
            
           // return this.tasks.filter(task => task.done==true);
            
        },
         tasksNotDone(){
            //retourne les tâches qui sont faites
            let tasksNot = [];
            for(let i = 0;i<this.tasks.length ; i++){
                if(this.tasks[i].done == false){
                    tasksNot.push(this.tasks[i]);
                }
            }
            
            return tasksNot;
        },
         tailleString(){
               for(let i = 0;i<this.tasks.length ; i++){
                    this.tasks[i].taille = this.tasks[i].description.length;
                }
                
                return this.tasks;
            
         }
        
        
        
    }
    
    
    
})