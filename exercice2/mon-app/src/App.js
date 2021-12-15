import './App.css';

// ES7 React/Redux/GraphQL/React-Native snippets

// imr → import React from 'react'
// imrd → import ReactDOM from 'react-dom'
// rcc → créer un composant avec une classe React
// rfc → créer un composant avec une fonction React

import React, { Component } from 'react'
import Input from './components/Input';
import Footer from './components/Footer';
import Header from './components/Header';

export default class App extends Component {

  // k -> kilos
  // l -> pounds (livres)

  constructor(props) {
    super(props);
    this.state = { weight: '', unit: 'k' }
    this.handleKilosChange = this.handleKilosChange.bind(this);
    this.handlePoundsChange = this.handlePoundsChange.bind(this);

  }

  toLbs(kilos) {
    return kilos * 2.2;
  }

  toKilos(lbs) {
    return lbs * 0.45;
  }

  convert(weight, convertMethod) {
    // weight c'est le poids à partir duquel je vais convertir
    // convertMethod c'est la méthode à appeler pour faire la conversion
    const inputValue = parseFloat(weight);

    // si la valeur de l'input type text récupérée n'est pas un chiffre
    // ce que je renvoie c'est du vide
    // en gros je vais pas convetir une valeur qui n'est pas un chiffre
    if(Number.isNaN(inputValue)) {
      return '';
    }

    // si la valeur de l'input type text est bien un chiffre
    // j'appel la méthode de conversion récupérée en argument
    // convertMethod appel soit toLbs soit toKIlos
    const result = convertMethod(inputValue);
    // j'arrondi a deux chiffre après la virgule le resultat
    const roundedResult = Math.round(result, 2);
    // je renvoie ce résultat la en string
    // car je veux insérer une valeur dans un input type text
    return roundedResult.toString();

  }

  handleKilosChange(weight) {
    console.log('Poids en kilos :' + weight);
    this.setState( { unit:'l', weight: weight } );
  }

  handlePoundsChange(weight) {
    console.log('Poids en Pounds :' + weight);
    this.setState( { unit:'k', weight: weight } );
  }

  render() {
    const weight = this.state.weight; // le poids qu'on a rentré
    const unit = this.state.unit; // l'unité de mesure pour laquelle on veut convertir ce poids

    const kilos = unit === 'k' ? this.convert(weight, this.toKilos ) : weight;
    const pounds = unit === 'l' ? this.convert(weight, this.toLbs) : weight;

    return (
      <div className="convertor">
        <Header />

        {/*  onWeightChange props que j'envoie à Input */}
        <Input weight={kilos} unit='kilos' onWeightChange={this.handleKilosChange}/>
        <Input weight={pounds} unit='pounds' onWeightChange={this.handlePoundsChange}/>

        <Footer kilos={parseFloat(kilos)}/>

      </div>
    )
  }
}

