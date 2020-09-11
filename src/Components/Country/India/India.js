import React, { Component } from 'react'
import Statedata from '../../StateData/Statedata'
import Axios from 'axios'
// import Navbar from '../../Navbar/Navbar'


export default class India extends Component {
    state = {
        indiaData:[]
    }

    componentDidMount(){
        Axios.get("https://corona.lmao.ninja/v2/countries/india").then(response=>{

        this.setState({
            indiaData: response.data
        });
        console.log(this.state.indiaData)

        })
    }
    render() {
        return (
            <div className="justify-content-center text-center">
                <img className="rounded" src="https://www.countryflags.io/in/shiny/64.png" alt="india" data-holder-rendered="true"></img>
               <h4 className="text-center text-muted"> <kbd>INDIA</kbd></h4>
               <div className="card p-3">
                 <div className="row">
                    <div className="col-md-3">
                         <div className="badge badge-info">
                        {/* <img class="card-img-top" src="..." alt="Card image cap"/> */}
                        <div className="card-body">
                            <h5 className="card-title">TOTAL CASES</h5>
                            <h3>{this.state.indiaData.cases}</h3>
                            <p className="card-text"><kbd>Today:{this.state.indiaData.todayCases}</kbd></p>
                            {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                        </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                    <div className="badge badge-warning">
                        {/* <img class="card-img-top" src="..." alt="Card image cap"/> */}
                        <div className="card-body">
                            <h5 className="card-title">ACTIVE CASES</h5>
                            <h3>{this.state.indiaData.active}</h3>
                            <p className="card-text text-warning">{this.state.indiaData.active}</p>
                            {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                        </div>
                        </div>
                    </div>

                    <div className="col-md-3">
                         <div className="badge badge-success">
                        {/* <img class="card-img-top" src="..." alt="Card image cap"/> */}
                        <div className="card-body">
                            <h5 className="card-title">RECOVERED</h5>
        <h3>{this.state.indiaData.recovered}</h3>
                            <p className="card-text"><kbd>Today:{this.state.indiaData.todayRecovered}</kbd></p>
                            {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                        </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                         <div className="badge badge-danger">
                        {/* <img class="card-img-top" src="..." alt="Card image cap"/> */}
                        <div className="card-body">
                            <h5 className="card-title">DEATHS</h5>
                            <h3>{this.state.indiaData.deaths}</h3>
                            <p className="card-text"><kbd>Today:{this.state.indiaData.todayDeaths}</kbd></p>
                            {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                        </div>
                        </div>
                    </div>

                 </div>
               </div>
       <Statedata/>
                
            </div>
        )
    }
}
