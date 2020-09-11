import React, { Component } from 'react'
import Axios from 'axios'
import {Accordion,Card,Button} from 'react-bootstrap';

export default class Statedata extends Component {
    state = {
        stateData:{}
    }

    componentDidMount(){
        Axios.get("https://api.covid19india.org/state_district_wise.json").then(response=>{
                           
            // console.log(response.data);
                           this.setState({stateData:response.data})



        });
    }
    render() {
        let key=Object.keys(this.state.stateData);
        return (
            <div>
                {/* ------------------------------------------- */}
                <Accordion>
                {key.map((data,index)=>{
                        let districts=this.state.stateData[data].districtData;
                        let district_keys=Object.keys(districts);
                        let total_active=0;
                        let total__confirmed=0;
                        let total_deceased=0;
                        let total_recovered=0;
                        let district_list=[];
                        for(let x in districts)
                        {
                            total_active+=districts[x].active;
                            total__confirmed+=districts[x].confirmed;
                            total_deceased+=districts[x].deceased;
                            total_recovered+=districts[x].recovered;
                            let obj=districts[x];
                            obj["district_name"]=x;
                            district_list.push(obj)   
                           
                        }
                        // console.log(district_list);
                        return (
                           <div className="row">
                               <div className="col-md-12">
                                    <Card>
                                        <Card.Header className="text-left">
                                        <Accordion.Toggle as={Button} variant="badge" className="text-left" eventKey={index}>
                                          <strong>{data}</strong>    - <kbd className="bg-info">Total Cases:{total__confirmed}</kbd> | <kbd className="badge-warning">Active:{total_active}</kbd> | <kbd className="badge-success"> Recovered:{total_recovered}</kbd> | <kbd className="badge-danger">Death:{total_deceased}</kbd>
                                        </Accordion.Toggle>
                                        </Card.Header>
                                        <Accordion.Collapse eventKey={index}>
                                        <Card.Body><table className="table table-striped">
  <thead>
    <tr>
    <th scope="col">SI.NO</th>
      <th scope="col">District</th>
      <th scope="col">Confirmed</th>
      <th scope="col">Active</th>
      <th scope="col">Recovered</th>
      <th scope="col">Deaths</th>
    </tr>
  </thead>
  <tbody>
     { district_list.map((data,index)=>{
          return(<tr>
            <td>{index+1}</td>
          <td>{data.district_name}</td>
            <td>{data.confirmed}</td>
            <td>{data.active}</td>
            <td>{data.recovered}</td>
            <td>{data.deceased}</td>

          </tr>)
      })}
    {/* <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>@mdo</td>
    </tr> */}
  </tbody>
</table></Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                
                               </div>
                           </div>
                        )
                })}
 
 
</Accordion>
                
                {/* -------------------------------------------*/}
             </div>
        )}}
