let TaskList =  Vue.component('TaskList',{
    
    template:`
    <ul>
        <li>Acheter du café</li>
        <li>Réviser le Javascript</li>
        <li>Faire des cookies</li>
        <li>{{ task }}</li>
        <li>{{ task2 }}</li>
    </ul>
    
    `,
    data(){
        return {
           task : "Regarder Netflix",
           task2: "Aller promener"
        }
    }
    
    
})


export default TaskList;