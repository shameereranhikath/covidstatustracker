import React, { Component } from 'react'
import Axios from 'axios'

export default class UAE extends Component {
    state = {
        uaeData:[]
    }

    componentDidMount(){
        Axios.get("https://corona.lmao.ninja/v2/countries/uae").then(response=>{

            this.setState({
                uaeData: response.data
            });
            // console.log(this.state.indiaData)
    
            })

    }
    render() {
        return (
            <div className="row">
            <div className="col-md-12 text-center">
            <img className="rounded" src="https://www.countryflags.io/AE/shiny/64.png" alt="india" data-holder-rendered="true"></img>
            <h4 className="text-center text-muted"> <kbd>UAE</kbd></h4>
            <div className="card p-3">
                 <div className="row">
                    <div className="col-md-3">
                         <div className="badge badge-info">
                        {/* <img class="card-img-top" src="..." alt="Card image cap"/> */}
                        <div className="card-body">
                            <h5 className="card-title">TOTAL CASES</h5>
                            <h3>{this.state.uaeData.cases}</h3>
                            <p className="card-text"><kbd>Today:{this.state.uaeData.todayCases}</kbd></p>
                            {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                        </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                    <div className="badge badge-warning">
                        {/* <img class="card-img-top" src="..." alt="Card image cap"/> */}
                        <div className="card-body">
                            <h5 className="card-title">ACTIVE CASES</h5>
                            <h3>{this.state.uaeData.active}</h3>
                            <p className="card-text text-warning">{this.state.uaeData.active}</p>
                            {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                        </div>
                        </div>
                    </div>

                    <div className="col-md-3">
                         <div className="badge badge-success">
                        {/* <img class="card-img-top" src="..." alt="Card image cap"/> */}
                        <div className="card-body">
                            <h5 className="card-title">RECOVERED</h5>
        <h3>{this.state.uaeData.recovered}</h3>
                            <p className="card-text"><kbd>Today:{this.state.uaeData.todayRecovered}</kbd></p>
                            {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                        </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                         <div className="badge badge-danger">
                        {/* <img class="card-img-top" src="..." alt="Card image cap"/> */}
                        <div className="card-body">
                            <h5 className="card-title">DEATHS</h5>
                            <h3>{this.state.uaeData.deaths}</h3>
                            <p className="card-text"><kbd>Today:{this.state.uaeData.todayDeaths}</kbd></p>
                            {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                        </div>
                        </div>
                    </div>

                 </div>
               </div>

            </div>     
        </div>
        )
    }
}
