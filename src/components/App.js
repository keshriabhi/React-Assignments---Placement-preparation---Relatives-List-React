import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    state = ['Akshay', 'Satyendra', 'Sahil', 'Bhargavi', 'Mithun', 'Rohit'];
    render() {
        var list = this.state.map((item,index) => {
            return <li key={'relativeListItem'+(index+1)}>{item}</li>
    })
        return(
            <div id="main">
               {/* Do not remove the main div */}
               <ol>
                   {list}
               </ol>
            </div>
        )
    }
}


export default App;

// import React from 'react';
// const List =(props)=>{
//   const  myList=props.myList;
//     const listItem=myList.map((myList,index)=><li key={'relativeListItem'+(index+1)}>{myList}</li>);
//     return (
//         <div>
//            <ol>{listItem}</ol>  
//         </div>
//     )
// };
// export  default List;