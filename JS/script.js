//1) Stampare all'interno di una lista HTML un item per ogni todo.

//1.1) creo una lista oggetti in javascript:

   const { createApp } = Vue

  createApp({
    data() {
      return {
       todoList: [
        {
            text:'Fragole',
            done: false,
        },
          {
            text:'Carote',
            done: false,
        },
          {
            text:'Sapone',
            done: false,
        },
          {
            text:'T-shirt',
            done: false,
        },
          {
            text:'Batterie',
            done: false,
        },
          {
            text:'Pasta',
            done: false,
        },

       ],
       newTaskText:'',
      }
    },

//2) Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.

    methods:{
        switchDone: function(itemIndex){
            this.todoList[itemIndex].done = !this.todoList[itemIndex].done;
        },

        removeTasck: function(taskIndex){
          this.todoList.splice(taskIndex, 1);
        },

        addNewTask: function(newText){
          const newTask={
            text:newText,
            done: false,
          }
          this.todoList.push(newText);
          this.clearNewTask();
        },

        clearNewTask: function(){
          this.newTaskText= '';
        }
    }
  }).mount('#app')