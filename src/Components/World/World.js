import React, { Component } from 'react'
import Axios from 'axios'

export default class World extends Component {
    state={
        data:[]
    }

    componentDidMount(){

        Axios.get("https://corona.lmao.ninja/v2/countries").then(response=>{
            console.log(response.data)
            this.setState({
                data:response.data
            })

        })
    }
    render() {
        return (
            <div className="row">
                <div className="col-md-12 text-center">
                <img className="rounded" src="https://cdn.totalcomputersusa.com/butyoudontlooksick.com/uploads/2010/05/world-globe.jpg" alt="india" style={styleimg} data-holder-rendered="true"></img>
                <h4 className="text-center text-muted"> <kbd>WORLD</kbd></h4>
                <div className="card">
                <table className="table table-striped">
  <thead>
    <tr>
      <th scope="col">SI.NO</th>
      <th scope="col">Country</th>
      <th scope="col"></th>
      <th scope="col">Total Cases</th>
      <th scope="col">Recovered</th>
      <th scope="col">Death</th>
    </tr>
  </thead>
  <tbody>
      {this.state.data.map((data,index)=>{
          return (
            <tr>
            <th scope="row">{index+1}</th>
          <td>{data.country}</td>
          <td><img src={data.countryInfo.flag} style={styleimg} alt="world"></img> </td>
            <td>{data.cases}</td>
            <td>{data.recovered}</td>
            <td>{data.deaths}</td>
          </tr>
          )
      })}
  
   
   
  </tbody>
</table>
                    
                </div>

                </div> 
            </div>
       )
    }
   
}

const styleimg={
    height:"65px",
    width:"65px",
    marginLeft:"10px"
    
}