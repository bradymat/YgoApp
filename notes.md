App

  Selected Card
    name
    image
    type
    attribute
    effect
    level
    cardText

  Selected Deck
    title
    mainDeck []
    extraDeck
    extraCards []
    sideDeck
    sideCards []

  Search Cards
    input
    cards []






    <div>{
      this.state.images.map(function (image, i) {
        return <div><img src={image[i]}/></div>
      })
    }</div>
    
    <div>{
    _.forEach(this.state.images, function(value) {
      return value
    })
    }</div>







    <div>
      <SelectedCard/>
      <SelectedDeck/>
      <SearchCards/>
    </div>

    // this.setState({
    //   cards: response.body.items,
    //   ids: ids
    // })

, pics: []

    // var pics = _.map(this.state.pics, (card) => {
    //   return <img key={card.thumbnail} src={card.thumbnail}/>
    // })

    // <ul>{pics}</ul>


    // for (var i = 0; i < props.state.ids.length; i++) {
    //   var url = `http://yugioh.wikia.com/api/v1/Articles/Details?ids=${props.state.ids[i]}&abstract=100&width=300&height=435`
    //   Request.get(url)
    //   .then((response) => {
    //     // console.log('response', response.body.items)
    //     props.setState({
    //       pics: response.body.items
    //     })
    //     var pics = _.map(props.state.cards, (pic) => {
    //       props.setState({
    //         pics: pic.thumbnail
    //       })
    //     }
    //   }
    // }
