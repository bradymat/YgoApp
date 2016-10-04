import React, { Component } from 'react'
// import SelectedCard from './selectedCard'
// import SelectedDeck from './selectedDeck'
// import SearchCards from './searchCards'
import SearchApi from '../lib/searchApi'
let _ = require('lodash')

class App extends React.Component {
  constructor(){
    super()
    this.state = { cards: [], ids: [], images: [], query: "twin twister"}
  }
  componentWillMount(){
    console.log("call search")
    SearchApi(this.state.query,(response) => {
      console.log("res", response)
      this.setState({images: response})
    })
  }
  updateSearch(){
    console.log("update search")
    SearchApi(this.refs.query.value, (response) => {
      this.setState({images: response})
    })
    console.log("this images", this.state.images);

  }
  render(){
    return(
      <div>
        <div className='selectedCard col-md-3'>
        </div>
        <div className='selectedDeck col-md-6'>
        </div>
        <div className='searchCards col-md-3'>
          <div>
          <input ref="query" placeholder="search" onChange={ (e) => { this.updateSearch() } } type="text" />
          </div>
          <div className="searchResults">{
            this.state.images.map(function (image) {
              return <div className="searchItem"><img src={image}/></div>
            })
          }
          </div>
        </div>
      </div>
    )
  }
}
export default App
