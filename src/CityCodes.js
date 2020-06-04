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

     onSubmit = (event) => {
             event.preventDefault();
             axios.get("http://ctp-zip-api.herokuapp.com/city/" + this.state.city.toUpperCase())
                 .then((response) => {
                 this.setState({allData: response.data});
                   })
                 .catch((err) => console.log(err));
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