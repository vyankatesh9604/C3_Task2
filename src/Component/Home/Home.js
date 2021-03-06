import React from 'react'
import { CircularProgressbarWithChildren  } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import algebra from '../../assets/algebra1.jpg'
import prob from '../../assets/probability.png'
import math from '../../assets/math.png'
import physics from '../../assets/physics.jpg'
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts'

export default function Home() {
    const percentage = 66;
    const data = [{name: 'ML', uv: 100, pv: 100, amt: 100},{name: 'Data structure', uv: 50, pv: 2400, amt: 2400},{name: 'Math', uv:75, pv: 2400, amt: 2400},];
    return (
        <div>
            <div className="row row-cols-1 row-cols-md-3 ml-5 pl-4 mt-5">
                    <div className="col mb-4">
                            <div className="card">
                                <div className="card-body">
                                    <h6 className="card-title pb-1">Upcomming Lessons</h6>
                                    <div className="card ">
                                        <div className="card-body">
                                            <table >
                                            <tr>
                                                <th  className="col-1">jun-10<br/>7.00PM</th>
                                                <th  className=" col-2 pr-5 ">Algebra<br/>Math-II</th>
                                                <th   className=" col-3 "><img src={algebra} width = "100" classNameName="img-responsive" /></th>    
                                            </tr>
                                            </table>
                                        </div>
                                    </div>
                                    <div className="card mt-2">
                                        <div className="card-body">
                                        <table >
                                            <tr>
                                                <th  className="col-1">jun-15<br/>4.00PM</th>
                                                <th  className=" col-2 pr-5  ">probability<br/>Math</th>
                                                <th   className=" col-3 "><img src={prob} width = "70"  classNameName="img-responsive"/></th>   
                                            </tr>
                                        </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                    <div className="col mb-4">
                        <div className="card">
                            <div className="card-body">
                                <h6 className="card-title">Task To Do</h6>
                                <ol className="pb-4">
                                    <li>Computer Network course</li>
                                    <li>DBMS Course</li>
                                    <li>Data Structure Course</li>
                                    <li>Discrete  Mathmatics Course</li>
                                    <li>Math-II</li>
                                    <li>Spoken Tutorial</li>
                                    <li>Apptitude Course</li>
                                    <li>Programming Question</li>
                                    <li>ML Course</li>
                                    <li>React Course</li>

                                </ol>
                            </div>  
                        </div>
                    </div>
                    <div className="col mb-4">
                        <div className="card">
                            <div className="card-body">
                                <h6 className="card-title pb-4">Leaderboard</h6>
                                <table className="mt-2  ml-4 ">
                                    <tr>
                                        <th colspan="2">SrNo</th>
                                        <th colspan="2" className="pl-4">Name</th>
                                        <th colspan="2"className="pl-3">Rank</th>    
                                    </tr>
                                    <tr>
                                        <td colspan="2" className="pl-1">1</td>
                                        <td colspan="2 " className="pl-1">Vyankatesh</td>    
                                        <td colspan="2"className="pl-3">1st</td>
                                        
                                        
                                    </tr>
                                    <tr>
                                        <td colspan="2" className="pl-1">2</td>
                                        <td colspan="2 "className="pl-1" >Rohan</td>    
                                        <td colspan="2"className="pl-3">2nd</td>
                                    </tr>
                                    <tr>
                                        <td colspan="2" className="pl-1">3</td>
                                        <td colspan="2 "className="pl-1">Raghuveer</td>    
                                        <td colspan="2"className="pl-3">3rd</td>
                                    </tr>
                                    <tr>
                                        <td colspan="2" className="pl-1">4</td>
                                        <td colspan="2 "className="pl-1">Vedant</td>    
                                        <td colspan="2"className="pl-3">4th</td>
                                    </tr>
                                    <tr>
                                        <td colspan="2" className="pl-1">5</td>
                                        <td colspan="2 "className="pl-1">Tejas</td>    
                                        <td colspan="2"className="pl-3">5th</td>
                                    </tr>
                                    <tr>
                                        <td colspan="2" className="pl-1">6</td>
                                        <td colspan="2 "className="pl-1">Shantanu</td>    
                                        <td colspan="2"className="pl-3">6th</td>
                                    </tr>
                                    <tr>
                                        <td colspan="2" className="pl-1">7</td>
                                        <td colspan="2 "className="pl-1">Prajwal</td>    
                                        <td colspan="2"className="pl-3">7th</td>
                                    </tr>
                                    <tr>
                                        <td colspan="2" className="pl-1">8</td>
                                        <td colspan="2 "className="pl-1">harish</td>    
                                        <td colspan="2"className="pl-3">8th</td>
                                    </tr>
                                <br/>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8  ">
                            <div className=" card ">
                            <div className=" card-body">
                                <div className="row">
                                <h6 className="card-title ">My Courses</h6>
                                <p className="col-10 text-right"> see All</p>
                                </div>
                                <div className="row mt-4 ">
                                <div className=" col-md-5 card mb-2  ml-2 ">
                                    <div className="card-body">
                                        <div className="row">
                                        <img src={math} width="40" className="col-3 "/>
                                        <h6 className="card-title text-center col-8">Maths<br/>30Lessons</h6>
                                        </div>
                                        
                                       <button className="btn btn-block bg-primary mt-2">view course</button>
                                    </div>
                                </div>
                                <div className=" col-md-5 card mx-auto ">
                                    <div className="card-body">
                                    <div className="row">
                                        <img src={physics} width="30" className="col-3 "/>
                                        <h6 className="card-title text-center col-8">physics<br/>35Lessons</h6>
                                        </div>
                                        <button className="btn btn-block bg-primary mt-2">view course</button>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="row   mt-3 " >
                                <div className="col-md-6">
                                <div className="card " >
                                    <div className="card-body">
                                        <h6 className="card-title">Graph</h6>
                                        <BarChart width={200} height={200} data={data}>
                                            <XAxis dataKey="name" stroke="#8884d8" />
                                            <YAxis type="number" domain={[0, 50]} />
                                            <Tooltip />
                                            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                                            <Bar dataKey="uv" fill="#8884d8" barSize={30} />
                                        </BarChart>
                                        <p className="text-center">Course Completed</p>
                                    </div>
                                </div>
                                </div>
                            </div>
                    </div>
                    
                    <div className="col-md-4 mb-4 text-center mt-2  " >
                            <div className="card " style={{height:'88vh'}} >
                                <div className="card-body">
                                    <h5 className="card-title">Homework progress</h5>
                                    <CircularProgressbarWithChildren  value={percentage} text={`${percentage}% `}  className="w-75 p-3 ml-3 mt-5"></CircularProgressbarWithChildren >
                                    <strong className="mt-5  text-center justify-content-center">Completed</strong>
                                </div>
                            </div>
                    </div>
                    
            </div>
        </div>
    )
}
