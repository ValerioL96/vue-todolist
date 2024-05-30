Descrizione:

Rifare l'esercizio della to do list visto insieme a lezione.
Ogni oggetto dovra' avere almeno due proprietà:
text, una stringa che indica il testo del todo
done, un booleano (true/false) che indica se il todo è stato fatto oppure no

MILESTONE 1
1) Stampare all'interno di una lista HTML un item per ogni todo.

1.1) creo una lista oggetti in javascript:

  - const { createApp } = Vue

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

1.2) creo in HTML un div app in cui metterò la mia lista:
- <div id="app">
    <h1>To do list</h1>
    <section class="container-todolist">
        <ul class="todolist">
          <li class="item-list" v-for="item in todoList">
          {{item.text}}
          </li>
        </ul>
    </section>
  </div>        

2) Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.

2.1) in HTML aggiungo al ciclo for una condizione che se item.done è uguale a true avrò che la clsse done creata in CSS viceversa è false non avrò nulla:

- <div id="app">
    <h1>To do list</h1>
    <section class="container-todolist">
        <ul class="todolist">
          <li class="item-list" v-for="item in todoList"
          :class="(item.done === true ) ? 'done' : '' "
          >
          {{item.text}}
          </li>
        </ul>
    </section>
  </div> 

2.2) in Javscript creo un metodo che mi inverte la condizione da me creata in precedenza con l'aggiunta ad item di un index in HTML:

- <div id="app">
    <h1>To do list</h1>
    <section class="container-todolist">
        <ul class="todolist">
          <li class="item-list" v-for="(item, index) in todoList" :key="index"
          :class="(item.done === true ) ? 'done' : '' "
          >
          {{item.text}}
          </li>
        </ul>
    </section>
  </div>


-  methods:{
        switchDone: function(itemIndex){
            this.todoList[itemIndex].done = !this.todoList[itemIndex].done;
        }
    }


2.3) a questo punto posso dire nel li che ha una funzione di tipo click chiamata switchDone con l'index:

-  <div id="app">
    <h1>To do list</h1>
    <section class="container-todolist">
        <ul class="todolist">
          <li class="item-list" v-for="(item, index) in todoList" :key="index"
          :class="(item.done === true ) ? 'done' : '' "
           @click="switchDone(index)"
          >
          {{item.text}}
          </li>
        </ul>
    </section>
  </div>



MILESTONE 2
Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista.
MILESTONE 3
Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante o premendo il tasto invio, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.