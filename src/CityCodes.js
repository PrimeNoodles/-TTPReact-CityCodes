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
            <div className = "text-center">
            {this.state.allData.map(data => {
                 return (
                  
                         <div>
                             <h4>ZipCode: {data}</h4>
                        </div>
                       
                  
                 )
             })}
             </div>
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
            <div className = "text-center">
            <h4>Results Not Found</h4>
            </div>
         </div>
     )
     return (<div>{x}</div>)
     
   }
}



export default CityCodes;
