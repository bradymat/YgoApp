import React, { Component } from 'react'
// import SelectedCard from './selectedCard'
// import SelectedDeck from './selectedDeck'
// import SearchCards from './searchCards'
import SearchApi from '../lib/searchApi'
let _ = require('lodash')
// import ReactDOM from 'react-dom'
import Draggable from 'react-draggable'

class App extends React.Component {
  constructor(){
    super()
    this.state = { cards: [], ids: [], images: [], query: "twin twister"}
  }
  eventLogger(e, data){
    console.log('Event: ', event)
    console.log('Data: ', data)
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
      <div className="project">
        <div className='selectedDeck col-md-9'>
          <input className="deckTitle" placeholder="Enter Deck Name" type="text"/>
          <div className="deckSpace"></div>
        </div>
        <div className='searchCards col-md-3'>
          <div className="searchQuery">
            <input ref="query" placeholder="search" onChange={ (e) => { this.updateSearch() } } type="text" />
          </div>
          <div className="searchResults">{
            this.state.images.slice(0).reverse().map((image) => {
              return (
                <Draggable
                  axis="both"
                  grid={[90, 130]}
                  onStart={this.handleStart}
                  onDrag={this.handleDrag}
                  onStop={this.handleStop}>
                    <div className="searchItem"><img src={image}/></div>
                </Draggable>)
              })
            }
          </div>
        </div>
      </div>
    )
  }
}
export default App
