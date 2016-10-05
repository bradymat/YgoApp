import React, { Component } from 'react'
import SearchApi from '../lib/searchApi'
let _ = require('lodash')
import Sortable from 'sortablejs'

class App extends React.Component {
  constructor(){
    super()
    this.state = { cards: [], ids: [], images: [], query: "burning abyss"}
  }

  //Sortable
  sortableContainersDecorator(componentBackingInstance){
    // check if backing instance not null
    if (componentBackingInstance) {
      let options = {
        handle: ".group-title" // Restricts sort start click/touch to the specified element
      };
      Sortable.create(componentBackingInstance, options);
    }
  };

  sortableGroupDecorator(componentBackingInstance){
    // check if backing instance not null
    if (componentBackingInstance) {
      let options = {
        draggable: "div", // Specifies which items inside the element should be sortable
        group: {
          name: 'advanced',
          pull: 'clone',
          put: 'false',
          animation: 100
        }
      };
      Sortable.create(componentBackingInstance, options);
    }
  };

  //Search
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
      <div className="project" ref={this.sortableContainersDecorator}>
        <div className='selectedDeck col-md-9'>
          <input className="deckTitle" placeholder="Enter Deck Name" type="text"/>
          <div className="deckSpace group-list" ref={this.sortableGroupDecorator}></div>
        </div>
        <div className='searchCards col-md-3'>
          <div className="searchQuery">
          <input ref="query" placeholder="search" onChange={ (e) => { this.updateSearch() } } type="text" />
          </div>
          <div className="searchResults group-list" ref={this.sortableGroupDecorator}>{
            this.state.images.map((image) => {
              return (
                <div className="searchItem"><img src={image}/></div>
              )
            })
          }
          </div>
        </div>
      </div>
    )
  }
}
export default App
