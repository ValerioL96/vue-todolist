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
- < div id="app">
    < h1>To do list< /h1>
    < section class="container-todolist">
        < ul class="todolist">
          < li class="item-list" v-for="item in todoList">
          {{item.text}}
          < /li>
        < /ul>
    < /section>
  < /div>        

2) Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.

2.1) in HTML aggiungo al ciclo for una condizione che se item.done è uguale a true avrò che la clsse done creata in CSS viceversa è false non avrò nulla:

- < div id="app" >
    < h1>To do list< /h1 >
    < section class="container-todolist">
        < ul class="todolist">
          < li class="item-list" v-for="item in todoList"
          :class="(item.done === true ) ? 'done' : '' "
          >
          {{item.text}}
          < /li>
        < /ul>
    < /section>
  < /div> 

2.2) in Javscript creo un metodo che mi inverte la condizione da me creata in precedenza con l'aggiunta ad item di un index in HTML:

- < div id="app">
    < h1>To do list< /h1>
    < section class="container-todolist">
        < ul class="todolist">
          < li class="item-list" v-for="(item, index) in todoList" :key="index"
          :class="(item.done === true ) ? 'done' : '' "
          >
          {{item.text}}
          < /li>
        < /ul>
    < /section>
  < /div>


-  methods:{
        switchDone: function(itemIndex){
            this.todoList[itemIndex].done = !this.todoList[itemIndex].done;
        }
    }


2.3) a questo punto posso dire nel li che ha una funzione di tipo click chiamata switchDone con l'index:

-  < div id="app">
    < h1>To do list< /h1>
    <  class="container-todolist">
        < ul class="todolist">
          < li class="item-list" v-for="(item, index) in todoList" :key="index"
          :class="(item.done === true ) ? 'done' : '' "
           @click="switchDone(index)"
          >
          {{item.text}}
          < /li>
        < /ul>
    < /section>
  < /div>


MILESTONE 2
1) Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista.

1.1) Aggiungo una funzione in javascript che mi permetta con click di rimuovere un elemento dalla lista:

- removeTasck: function(taskIndex){
          this.todoList.splice(taskIndex, 1);
        }

1.2) In HTML aggiungo una x con la funzione click  che mi permetterà di eliminare gli elementi dalla lista:

- < div id="app">

        < h1>To Do List< /h1>
        < section class="container-todolist">
            < ul class="todolist">
                < li class="item-list" v-for="(item, index) in todoList" :key="index"
                :class="(item.done === true ) ? 'done' : '' "
                @click="switchDone(index)"
                >

                    {{ item.text }}

                < i @click="removeTasck(index)">
                    X
                < /i>
                
                < /li>
              < /ul>
        < /section>
    < /div>

1.3) essendo che si verifica che l'evento del parent si propaga anche al figlio, quindi separo con uno span il parent dal figlio:

- < div id="app">

        < h1>To Do List< /h1>
        < section class="container-todolist">
            < ul class="todolist">
                < li class="item-list" v-for="(item, index) in todoList" :key="index">

                < span :class="(item.done === true ) ? 'done' : '' "
                @click="switchDone(index)"
                >

                    {{ item.text }}

                < /span>

                < i @click="removeTasck(index)">
                    X
                < /i>
                
                < /li>
              < /ul>
        < /section>
    < /div>


MILESTONE 3
Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante o premendo il tasto invio, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti:

1.1) creo in HTML una nuova section con input text per aggiungere item alla todo list:

-  < section class="input">
            < div>
                < label for="new-item-list">Scrivi un nuovo elemento< /label>
                < input type="text" id="new-item-list">
            < /div>
        < /section>

1.2) creo in methods una funzione che mi aggiunge un task alla lista, per fare ciò mi creo un oggetto che avrà text vuoto e done: false:

- addNewTask: function(){
          const newTask={
            text:'',
            done: false,
          }
        }

1.3) aggiungo un v-model nel input text per creare un collegamento con la lista in cui avrò il nuovo contenuto:

- < section class="input">
            < div>
                < label for="new-item-list">Scrivi un nuovo elemento< /label>
                < input type="text" id="new-item-list" v-model="newTaskText">
            < /div>
        < /section>

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

       ],

        newTaskText:'',

      }
    }
  }) 

1.4) creo una variabile che passo direttamente all'interno della funzione:

- addNewTask: function(newText){
          const newTask={
            text:newText,
            done: false,
          }
        }

1.5) all'interno del mio input aggiungo una funzione che mi permette di passare in newTaskText item con il pulsante invio,
dopo questo pusho all'interno dell'array:

- < section class="input">
            < div>
                < label for="new-item-list">Scrivi un nuovo elemento< /label>
                < input type="text" id="new-item-list" v-model="newTaskText"
                @keyup.enter= "addNewTask(newTaskText)">
            < /div>
        < /section>

- addNewTask: function(newText){
          const newTask={
            text:newText,
            done: false,
          }
          this.todoList.push(newText);
        }

1.6) creo una funzione che mi liberi la casella dopo aver digitato nell'input:

- addNewTask: function(newText){
          const newTask={
            text:newText,
            done: false,
          }
          this.todoList.push(newText);
          this.clearNewTask();
        },

        clearNewTask: function(){
          this.newTaskText:'',
        }

1.7)  In HTML aggiungo una edit con la funzione click  che mi permetterà di aggiungere gli elementi nuovi che digito nell'input text alla lista:

- < div>

        < i class="fa-solid fa-pen-to-square" @click="addNewTask(newTaskText)">   
        < /i>

        < i class="fa-solid fa-delete-left" @click="removeTasck(index)">
        < /i>

  < /div>
