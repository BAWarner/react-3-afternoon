import React, {Component} from 'react';
import data from './components/data';
import Card from './components/card/Card';
import Header from './components/header/Header';
// CSS Imports
import './App.css';
import './components/header/header.css';
import './components/card/card.css';

class App extends Component{
  constructor(){
    super();
    this.state ={
      employeeList: data,
      employeeIndex: 0
    };
    this.nextCard = this.nextCard.bind(this);
    this.deleteCard = this.deleteCard.bind(this);
  }

  nextCard(){
    let employeeIndex = this.state.employeeIndex;
    if(employeeIndex < this.state.employeeList.length -1){
      employeeIndex++;
    }else{
      employeeIndex = 0;
    }
    this.setState({employeeIndex})
  }
  prevCard = () => {
    let employeeIndex = this.state.employeeIndex;
    if(employeeIndex >= 1){
      employeeIndex--;
    }else{
      employeeIndex = this.state.employeeList.length -1;
    }
    this.setState({employeeIndex});
  }
  resetCards = () => {
    this.setState({employeeIndex: 0});
  }
  deleteCard(){
    let currentCard = this.state.employeeIndex;
    let employeeList = this.state.employeeList;
    employeeList.splice(currentCard, 1);
    this.prevCard();
  }

  render(){
    return(
      <div className='main-content bg-black height-100vh flex align-top justify-center'>
        <Header 
          resetCards={this.resetCards}
        />
        <Card 
          employeeList={this.state.employeeList}
          employeeIndex={this.state.employeeIndex}
          previousCard={this.prevCard}
          nextCard={this.nextCard}
          deleteCard={this.deleteCard}
          
        />
      </div>
    );
  }

}

export default App;