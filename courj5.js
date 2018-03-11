// Jour 5
// REDUX
//

/* 
Installer l'extension redux dev tools dans chrome

Reducer : Un pour chaque action


Install de babel :
npm i babel-preset-es2015
creer fichier .babelrc 
y mettre : {
  "presets": ["es2015"]
}

npm i -g babel-cli
 execute babel-node index.js



 this.props.state va etre remplacé par redux => this.props.

 la variable doit ertre immuable
 //BAD
 state.cpunter++; return counter
 //GOOD
 return {
     ...state, //copie les racines ne aps oublé de cloné les enfants
     obj: {
         ...state.obj
     }
     counter: counter++
 }
*/

import { Button, Dimensions, Switch, TextInput, ShadowPropTypesIOS } from "react-native";

import PropTypes from "prop-types";
import React from "react";

export default class CoursJ5 extends React.Component {

//Layout

Layout {
    <View>
        <Text>

        </Text>
        {this.props.children}
    </View>
}

Header {
    <Text>My Header</Text>
}
<Layout>
<Header></Header>
</Layout>



// Transmission de props
// via le context

class Child extends React.Component{
  static contextType = {
      grandFatherName: PropTypes.string
  };
    render (){
        return <Text >My grandFather is {this.context.grandFatherName}</Text>
    } 
 } 
 
const Father () => <Child />
class GrandFather extends React.Component{
   static childContextType = {
    grandFatherName: PropTypes.string
   }
   getChildContext() {
       return {grandFatherName: "Xavier"};
   }
   render (){
       return <Father></Father>
   } 
} 



// REDUX CONTEXT AVEC PROVIDER
//APP
// Provider est un utilisatire qui permet de mettre le store dans le context 
return <Provider store={store}>
<App/>
</Provider>


// Acces aux variables pour les styles
<View style={[styles.mystyle, {backgroundColor: "red"}]}></View>
// La vealuer de droite ecrase mystyle


// destructiuring

const user = {
    name: 'AGO',
    age : 30
}
const address = {
    city: "Paris"
}

const profile = {
    ...user,
    ...address
}

const {age, ...nameAndCity} = profile;
// => affiche name, city

Father = () => <Child {...this.props} /> // Retansmet toutes les props
Father = () => <Child familyName={this.props.familyName} city={this.props.city} />



/*******
 * INSTALL react native CAMERA  pb
 * For thoses who still have issues this worked for me:

    clean /android/settings.gradle

rootProject.name = 'GrifitupApp'
include ':react-native-camera'
project(':react-native-camera').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-camera/android')

include ':app'

to

rootProject.name = 'GrifitupApp'
include ':app'

    unlink previously linked package:

react-native unlink react-native-camera

    Make sure you don't have any npm dependencies

Example:

npm WARN react-native-qrcode-scanner@0.0.29 requires a peer of react-native-camera@^0.10.0 but none is installed. You must install peer dependencies yourself.

Then:

npm i react-native-camera@^0.10.0

    Follow the README using the react-native link command

npm install react-native-camera --save
react-native link react-native-camera

 * 
 * 
 * 
 */



 /* REACT NATIVE WEB pour simuler le device sur une doc */


 /* JEST */

 /* facile a tester les fonctions commes les actions REDUX
TEST des composants

Les snapshot
const tree = renderer.create(<Counter />).toJson();

=> on récupère l'empreinte du component en JSON ... FACILE

expect(tree).toMatchSnapshot();

creer un fichier dans __snapshots__  qui est l'empreinte en JSON du composants
et au prochain test, compare le composant avec le __snapshot d'avant


./node_modules/.bin/snapshot update


Pour les test avec clic, on peut utiliser Enzyme



 */
