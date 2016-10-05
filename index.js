import React from 'react'
import { render } from 'react-dom'
import App from './components/app'

render(<App/>, document.querySelector('main'))
console.log('welcome to ygoApp')
//

// import React from 'react'
// import { render } from 'react-dom'
// import Sortable from 'sortablejs'
//
// //
// // Groups
// //
//
// export class SortableExampleEsnext extends React.Component {
//
//   sortableContainersDecorator(componentBackingInstance){
//     // check if backing instance not null
//     if (componentBackingInstance) {
//       let options = {
//         handle: ".group-title" // Restricts sort start click/touch to the specified element
//       };
//       Sortable.create(componentBackingInstance, options);
//     }
//   };
//
//   sortableGroupDecorator(componentBackingInstance){
//     // check if backing instance not null
//     if (componentBackingInstance) {
//       let options = {
//         draggable: "div", // Specifies which items inside the element should be sortable
//         group: "shared"
//       };
//       Sortable.create(componentBackingInstance, options);
//     }
//   };
//
//   render() {
//     return (
//       <div className="container" ref={this.sortableContainersDecorator}>
//         <div className="group">
//           <h2 className="group-title">Group 1</h2>
//           <div className="group-list" ref={this.sortableGroupDecorator}>
//             <div>88888888</div>
//             <div>7777777</div>
//             <div>666666</div>
//             <div>55555</div>
//           </div>
//         </div>
//         <div className="group">
//           <h2 className="group-title">Group 2</h2>
//           <div className="group-list" ref={this.sortableGroupDecorator}>
//             <div>1</div>
//             <div>22</div>
//             <div>333</div>
//             <div>4444</div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
//
// render(<div>
//     <SortableExampleEsnext/>
// </div>, document.body);
