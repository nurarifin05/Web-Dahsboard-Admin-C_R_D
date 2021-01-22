import React, { Component } from "react";
import { Table, Button } from "reactstrap";
import axios from "axios"
import CreateMenu1 from './CreateMenu1';
import updateMenu1 from './updateMenu1';


export default class Menu1 extends Component {
    constructor(props){
        super(props);
        this.state = {
            students: [],
            newTrData: {
                Device_ID: "",
                id_Account: "",
                id_location: "",
                item_id: "",
                UoM: "",
                Quantity: "",
                Line_number: "",
                Rack_number: "",
                Bin_number: "",
                Time_Enter: "",
                status: "",
            },
            isLoading: false,
            status: "",
            newTrModal: false,
            editTrData: {
                id: "",
                Device_ID: "",
                id_Account: "",
                id_location: "",
                item_id: "",
                UoM: "",
                Quantity: "",
                Line_number: "",
                Rack_number: "",
                Bin_number: "",
                Time_Enter: "",
                status: "",
            },
            editTrModal: false,
            noDataFound: "",
        };
    }

    componentDidMount() {
        this.getStudents();
    }
    getStudents(){
        axios.get("http://192.168.0.105:5000/api/v1/tr")
        .then((response) => {
            if (response.status === 200){
                this.setState({
                    students:response.data ? response.data : [],
                });
                console.log("isi data", response)
            }
            if (
                response.data.status === "failed" &&
                response.data.success == false
            ){
                this.setState({
                    noDataFound: response.data.message,
                });
            }
        });
    }

    toggleNewTrModal = () => {
        this.setState({
            newTrModal: !this.state.newTrModal,
        });
    };
    onChangeCreateTrHandler = (e) => {
        let {newTrData} = this.state;
        newTrData[e.target.name] = e.target.value;
        this.setState({newTrData});
    };
    createTr = () => {
        axios.post("http://192.168.0.105:5000/api/v1/tr",
        this.state.newTrData
        ).then((response) => {
            const {students} = this.state;
            const newStudents = [...students];
            newStudents.push(response.data);
            this.setState(
                {
                students: newStudents,
                newTrModal: false,
                newTrData: {
                        Device_ID: "",
                        id_Account: "",
                        id_location: "",
                        item_id: "",
                        UoM: "",
                        Quantity: "",
                        Line_number: "",
                        Rack_number: "",
                        Bin_number: "",
                        Time_Enter: "",
                        status: "",
                    },
                },
                () => this.getStudents()
            );
        });

    };

    toggleEditTrModal = () => {
        this.setState({
            editTrModal: !this.state.editTrData,
        });
    };

    onChangeEditTrHandler = (e) => {
        let {editTrData} = this.state;
        editTrData[e.target.name] = e.target.value;
        this.setState({editTrData});
    };

    editTr = (id, Device_ID, id_Account, id_location, item_id, UoM, Quantity, Line_number, Rack_number, Bin_number, Time_Enter, status) => {
        this.setState({
            editTrData: {id, Device_ID, id_Account, id_location, item_id, UoM, Quantity, Line_number, Rack_number, Bin_number, Time_Enter, status},
            editTrModal: !this.state.editTrModal,
        });
    };

    updateTr = () => {
        let{
            id, 
            Device_ID, 
            id_Account, 
            id_location, 
            item_id, 
            UoM, 
            Quantity, 
            Line_number, 
            Rack_number, 
            Bin_number, 
            Time_Enter, 
            status,
        } = this.state.editTrData;
        this.setState({
            isLoading: true,
        });
        axios.post("http://192.168.0.105:5000/api/v1/tr" + item_id, {
            id, 
            Device_ID, 
            id_Account, 
            id_location, 
            item_id, 
            UoM, 
            Quantity, 
            Line_number, 
            Rack_number, 
            Bin_number, 
            Time_Enter, 
            status,
        })
        .then((response) => {
            this.getStudents();
            this.setState({
                editTrModal: false,
                editTrData: {Device_ID, id_Account, id_location, item_id, UoM, Quantity, Line_number, Rack_number, Bin_number, Time_Enter, status},
                isLoading: false,
            });
        })
        .catch((error) => {
            this.setState({isLoading:false})
            console.log(error.response);
        });
    };


    deleteTr = (item_id) => {
        this.setState({
            isLoading: true,
        });
        axios.delete("http://192.168.0.105:5000/api/v1/tr/" + item_id)
        .then((response) => {
            this.setState({
                isLoading: false,
            });
            this.getStudents();
        })
        .catch((error) => {
            this.setState({
                isLoading: false,
            })
        });
    
    };

    render() {
        const {newTrData, editTrData ,noDataFound, students} = this.state;
        let studentsDetails = [];
        if (students.length){
            studentsDetails = students.map((student) => {
                return(
                    <tr key={student.id}>
                        <td>{student.id}</td>
                        <td>{student.Device_ID}</td>
                        <td>{student.id_Account}</td>
                        <td>{student.id_location}</td>
                        <td>{student.item_id}</td>
                        <td>{student.UoM}</td>
                        <td>{student.Quantity}</td>
                        <td>{student.Line_number}</td>
                        <td>{student.Rack_number}</td>
                        <td>{student.Bin_number}</td>
                        <td>{student.Time_Enter}</td>
                        <td>{student.status}</td>
                        
                        <td>
                            <Button 
                                color="success"
                                className="mr-3"
                                size="sm" 
                                onClick={() => 
                                this.editTr(
                                    student.id,
                                    student.Device_ID,
                                    student.id_Account,
                                    student.id_location,
                                    student.item_id,
                                    student.UoM,
                                    student.Quantity,
                                    student.Line_number,
                                    student.Rack_number,
                                    student.Bin_number,
                                    student.Time_Enter,
                                    student.status
                                )
                            } 
                        >
                         Edit
                        </Button>

                            <Button 
                                color="danger"
                                size="sm"
                                onClick={() => this.deleteTr(student.item_id)}
                            >
                                 Delete
                            </Button>
                        </td>
                    </tr>
                );
            });
        }

        if (this.state.isLoading){
            return <div className="spinner-border text-center" role="status"> <span className="sr-only">Loading...</span>
            </div>
        }
        return (
            <div className="App container mt-4">
                <CreateMenu1 
                    toggleNewTrModal={this.toggleNewTrModal}
                    newTrModal={this.state.newTrModal}
                    onChangeCreateTrHandler={this.onChangeCreateTrHandler}
                    createTr={this.createTr}
                    newTrData={newTrData}
                />
                <updateMenu1
                toggleEditTrModal= {this.toggleEditTrModal}
                editTrModal= {this.state.editTrModal}
                onChangeEditTrHandler= {this.onChangeEditTrHandler}
                editTr= {this.editTr}
                editTrData= {editTrData}
                updateTr={this.editTr}
                />
                <Table>
                    <thead>
                        <tr>
                        <th>ID</th>
                        <th>Device_ID</th>
                        <th>ID_Account</th>
                        <th>id_location</th>
                        <th>item_id</th>
                        <th>UoM</th>
                        <th>Quantity</th>
                        <th>Line_number</th>
                        <th>Rack_number</th>
                        <th>Bin_number</th>
                        <th>Time_Enter</th>
                        <th>status</th>
                        
                        <th>Action</th>
                        </tr>
                    </thead>
                    
                       {students.length === 0 ? (
                           <tbody>
                               <h3>{noDataFound}</h3>
                            </tbody>
                       ):(
                           <tbody>{studentsDetails}</tbody>
                       )}
                    
                </Table>
            </div>
        );
    }
}





// import updateMenu1 from './updateMenu1'
// import React, {useState, useEffect} from 'react'
// import axios from 'axios'
// import './style.css'
// import {Link} from 'react-router-dom'
// import { propTypes } from 'react-bootstrap/esm/Image'



// const URL = 'http://192.168.0.105:5000/api/v1/tr'

// const Menu1 = () => {

//     //pengganti componentDidMount
//     const [employees, setEmployees] = useState([])
//     useEffect(() => {
//         getData()
//     }, [])
// // axios get data
//     const getData = async () => {
//         const response = await axios.get(URL)
//         setEmployees(response.data)
//         console.log('ini output res', response)
//     }
// //axios delete data
//     const removeData = (item_id, e) => {
//         axios.delete(`${URL}/${item_id}`)
//         .then(res => {
//             const del = employees.filter(
//                 employee => item_id !== employee.item_id)
//                 setEmployees(del)
//         })
//     }

//     const updateData = (item_id, e) => {
//         console.log(item_id)
        
        

//     }
    
   
// //create header tabel
//     const renderHeader = () => {
//         let headerElement = ['id', 'Device_ID', 'id_Account','is_location', 'item_id', 'UoM', 'Quantity', 'Line_number', 'Rack_number', 'Bin_number', 'Time_Enter', 'status', 'Action']
//         return headerElement.map((key, index) => {
//             return <th key={index}>{key.toUpperCase()}</th>
//         })
//     }

// //create body tabel
//     const renderBody = () => {
//         return employees && employees.map(({id,Device_ID,id_Account,id_location, item_id, UoM, Quantity, Line_number, Rack_number, Bin_number, Time_Enter, status}) => {
//             return (
//                 <tr key={id}>
//                     <td>{id}</td>
//                     <td>{Device_ID}</td>
//                     <td>{id_Account}</td>
//                     <td>{id_location}</td>
//                     <td>{item_id}</td>
//                     <td>{UoM}</td>
//                     <td>{Quantity}</td>
//                     <td>{Line_number}</td>
//                     <td>{Rack_number}</td>
//                     <td>{Bin_number}</td>
//                     <td>{Time_Enter}</td>
//                     <td>{status}</td>
//                      <td className='opration'>
//                     <button className='buttonDelete' onClick={(e) => removeData(item_id, e)}>Delete</button>
                  
//                     <button className='buttonEdit' onClick={(e) => updateData(item_id)}>Edit</button>
                   
//                     </td> 
                    
//                 </tr>
//             )
//         })
//     }
//     return (
//         <>
//         <h1 id='title'></h1>
//         <button className='buttonEdit'>Create</button>
//         <table id='employee'>
//             <thead>
//                 <tr>{renderHeader()}</tr>
//             </thead>
//             <tbody>
//                 {renderBody()}
//             </tbody>
//         </table>
//         </>
//     )
// }

// export default Menu1


