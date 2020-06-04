import React, { Component } from "react";
import axios from "axios";

class CityCodes extends Component {
    constructor(props){
        super(props);
        this.state={
            city: '',
            allData: [],
            show: true,
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
                 .catch((err) => this.setState({show: false}));
                 this.setState({show: true});
     }
 
 render(){
     let x = this.state.show === true ? (
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
     ) : (
         <div>
             <form className = "text-center mt-3" onSubmit = {this.onSubmit}>
                <label>
                CityCode
                <input className="ml-2"type="text" placeholder ="Enter Your City" value={this.state.city} onChange = {this.cityChange} />
                </label>
                <input type="submit" value="submit"/>
            </form>
            <p>Results Not Found</p>
         </div>
     )
     return (<div>{x}</div>)
     
   }
}



export default CityCodes;
