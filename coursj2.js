// ES6
let user = {
  username: "farid",
  age: 30
};

/***
 *
 * LES CLASSES
 *
 */

function Teacher() {
  this.talk = function() {
    console.log("Hello");
  };
}
const farid = new Teacher();
farid.talk();

//==> ES6, les classes arrivent et on va ecrire plutot ca

class Teacher {
  name = "no name";
  constructor(name) {
    this.name = name;
  }
  talk() {
    console.log("Hello, my name is" + this.name);
    console.log(`Hello, my name is ${this.name}`);
  }
}
const farid = new Teacher();
farid.talk();

/**
 *
 * LES LAMBDAS ou arrow function
 *
 */

// les bind permet d'attacher le contexte
class Teacher {
  name = "no name";
  constructor(name) {
    this.name = name;
    this.sayHello = this.sayHello.bind(this);
  }
  sayHello() {
    console.log(`Hello, my name is ${this.name}`);
  }
  talk() {
    setTimeout(this.sayHello, 100);

    setTimeout(() => {
      console.log(`Hello, my name is ${this.name}`);
    });
    let that = this;
  }
}
const farid = new Teacher();
farid.talk();

// REACT NATIVE
/*

 La programation declarative : Quand le render va utiliser les variables déclarer au dessus
 La reconciliation : met a jours que ce qu'il ne faut dans le render

 Arboresecence 
  /src
    /components
      Counter.js  => Ici les différents composants 
    /containers
      App.js


      Pour eviter le render d'un component
      Extends Component en React.PureComponent
      Va vérifier les props, et si elles ne changent pas, pas de render


  Dans les components, Si on veut hériter une fonction, il ne faut pas hériter d'une classe parente.
  la bonne pratique est de faire de la composition, c'est a dire de la composition de composants.

  les methodes avant et après  render : inclure du code impératif


  ActivityIndicator:  Component de chargement
 */

 componentWillMount(){
   // avant le render
   // Recommendations : Afficher un render le plus rapide possible
   // chargement par exemple

   

 }
 render(){

 }
 componentDidMount(){
  // Après le render
  fetch('myurl') //permet de faire des requetes http
    .then(response=>{
      return response.json();
    })
    .then(responseJson =>{
      console.log(responseJson)
    })  
 }


 /**********
  *
  * LES LISTES  
  *
  */

  // dans la génération dynamique, il faut mettre une clé unique dans le composant principal de la boucle
  //  FlatList : optimise car il n'affiche que ce qui est visible
  // a besoin d'une Key, on peut utiliser la propiete 
  keyExtractor = {(item, index)=>item.id}
  // 

  const movies = ['one', 'two', 'three'];
  {movies.map((movie,index)=>(
      <View key={index}><Text>{movie}</Text></View>
    )
  )}