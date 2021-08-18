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
               <ol key="relativeList">
                   {list}
               </ol>
            </div>
        )
    }
}


export default App;