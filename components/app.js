import React, { Component } from 'react'
import SelectedCard from './selectedCard'
import SelectedDeck from './selectedDeck'
import SearchCards from './searchCards'
import Request from 'superagent'
import cors from 'cors'
import _ from 'lodash'

var corsOptions = {
  origin: 'http://example.com',
  optionsSuccessStatus: 200
}
console.log(cors());

class App extends React.Component {

  constructor(){
    super();
    this.state = {};
  }

  componentWillMount(){
    this.search();
  }
  updateSearch(){
    this.search(this.refs.query.value);
  }
  render(){

    var cards = _.map(this.state.cards, (card) => {
      return <li>{card.id}</li>;
    });
    return <div>
      <input ref="query" onChange={ (e) => { this.updateSearch(); } } type="text" />
      <ul>{cards}</ul>
    </div>;
  }

  search(query = "star"){
    var url = `http://yugioh.wikia.com/api/v1/Search/List?query=${query}&limit=200&batch=1&namespaces=106`
    Request.get(url, cors()).then((response) => {
      this.setState({
        cards: response.body.items[0]
      });
    });
  }
}

export default App
