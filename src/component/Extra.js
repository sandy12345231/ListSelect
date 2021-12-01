// import React, { Component } from 'react';
// import Favourites from './Favourites';
       
// class Extra extends Component {
//   constructor() {
//     super();
//     this.state = {
//       categories: [
//         {id: 1, value: "high"},
//         {id: 2, value: "cruel"},
//         {id: 3, value: "sable"},
//         {id: 4, value: "mine"},
//         {id:5, value:"vagabond"},
//         {id:6, value:"sassy"},
//         {id:7, value:"steer"},
//         {id:8, value:"argument"},
//         {id:9, value:"unaccountable"},
//         {id:10, value:"tie"},
//         {id:11, value:"middle"}
//       ],
//       checkedItems: new Map()
//     };
  
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }
     
//   handleChange(event) {
//         var isChecked = event.target.checked;
//         var item = event.target.value;
         
//         this.setState(prevState => ({ checkedItems: prevState.checkedItems.set(item, isChecked) }));
//   }
     
//   handleSubmit(event) {
//     console.log(this.state);
//     event.preventDefault();
//   }
     
//   render() {
//     return (
//       <div>
//         <h1>List show in home</h1>
  
//         <form onSubmit={this.handleSubmit}>
           
//           {
//             this.state.categories.map(item => (
//               <li>
//                 <label>
//                   <input
//                     type="checkbox"
//                     value={item.id}
//                     onChange={this.handleChange}
//                   /> {item.value}
//                 </label>
//               </li>
//             ))
//           }
           
//           <br/>
//           <input type="submit" value="Show Favourite" />

//           <p>
    
//   </p>
//         </form>
//       </div>

//     );
    
   
//   }
// }

// export default Extra