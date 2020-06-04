import React, { Component } from "react";
import axios from "axios";

class CityCodes extends Component {
    constructor(props){
        super(props);
        this.state={
            city: '',
            allData: [],
        };
     }
 
     cityChange = (event) => {
         this.setState({
             city: event.target.value
         });
     }
 
     upperCaseConv = (word) => {
        let text = this.state.city;
        let upperCaseText = text.toUpperCase();
        this.setState({ text: upperCaseText });
     }

     onSubmit = (event) => {
        console.log("State of word before", this.state.city);
             this.upperCaseConv(this.state.city);
        console.log("State of word after", this.state.city);
             event.preventDefault();
             axios.get("http://ctp-zip-api.herokuapp.com/city/" + this.state.text)
                 .then((response) => {
                 this.setState({allData: response.data});
                 console.log("State", this.state);
                   })
                 .catch((err) => console.log(err));
                 console.log(this.state);
     }
 
 render(){
     return (
         <div>
         <form className = "text-center mt-3" onSubmit = {this.onSubmit}>
             <label>
             CityCode
             <input className="ml-2"type="text" placeholder ="Enter Your City" value={this.state.city} onChange = {this.cityChange} />
             </label>
             <input type="submit" value="submit"/>
         </form>
             {this.state.allData.map(data => {
                 console.log("Here");
                 return (
                     <div>
                         <ul>
                             <li>ZipCode: {data}</li>
                         </ul>
                     </div>
                 )
             })}
         </div>
     );
   }
}



export default CityCodes;