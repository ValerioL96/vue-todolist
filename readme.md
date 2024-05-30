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

2.1) creo in HTML un div app in cui metterò la mia lista:
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


MILESTONE 2
Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista.
MILESTONE 3
Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante o premendo il tasto invio, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.