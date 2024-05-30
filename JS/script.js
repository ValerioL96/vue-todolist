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

       ]
      }
    }
  }).mount('#app')