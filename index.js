import React from 'react'
import { render } from 'react-dom'
import App from './components/app'

render(<App/>, document.querySelector('main'))
console.log('welcome to ygoApp')


//Draggable Test

// import React from 'react'
// import ReactDOM from 'react-dom'
// import Draggable from 'react-draggable'
//
// class App extends React.Component {
//
//   render() {
//     return (
//       <Draggable
//         axis="both"
//         grid={[1, 1]}
//         zIndex={100}
//         onStart={this.handleStart}
//         onDrag={this.handleDrag}
//         onStop={this.handleStop}>
//         <div>
//           <img src="http://vignette1.wikia.nocookie.net/yugioh/images/f/fc/TwinTwisters-MP16-EN-SR-1E.png/revision/latest/scale-to-width-down/300?cb=20160901210043"/>
//         </div>
//       </Draggable>
//
//     )
//   }
// }
//
// ReactDOM.render(<App/>, document.querySelector('main'))

// <Draggable
//   axis="both"
//   grid={[1, 1]}
//   zIndex={100}
//   onStart={this.handleStart}
//   onDrag={this.handleDrag}
//   onStop={this.handleStop}>
//   <div>
//     <img src="http://vignette1.wikia.nocookie.net/yugioh/images/f/fc/TwinTwisters-MP16-EN-SR-1E.png/revision/latest/scale-to-width-down/300?cb=20160901210043"/>
//   </div>
// </Draggable>
