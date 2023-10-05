import axios from "axios";
import React, { useState, useEffect } from "react";
import {BrowserRouter as Router,Route} from 'react-router-dom'
import { Table, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck,faXmark,faTrash,faPen } from '@fortawesome/free-solid-svg-icons'
import Create from "./create";
export default function Read() {
    const [dataApi, setDataApi] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:6998/api/comida/getAll`)
            .then((res) => {
                setDataApi(res.data);
                console.log(res.data);
            })
            .catch((error) => {
                //console.error('Error en la solicitud:', error);
            });
    }, [])

    const setData = (dataApi) => {
        const { _id, tipo } = dataApi;
        localStorage.setItem("IDComida", _id);
        localStorage.setItem("TipoComida", tipo);
    }

    const getData = () => {
        axios.get(`http://localhost:6998/api/comida/getAll`)
            .then((getData) => {
                setDataApi(getData.dataApi);
            })
    }

    const onDelete = (id) => {
        axios.delete(`http://localhost:6998/api/comida/delete/${id._id}`)
            .then((res) => {
                getData(res.data)
                window.location.href = '/comida';
            })
        
    }

    return (
        <div>
            <Link to="/comida/create">
                <button className='main-button'>Crear</button>
            </Link>
            
            <Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Estado</Table.HeaderCell>
                        <Table.HeaderCell>Tipo</Table.HeaderCell>
                        <Table.HeaderCell>Acciones</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {dataApi.map((item) => {
                        return (
                            
                            <Table.Row key={item._id}>
                                <Table.Cell>
                                   {item.estado ? 
                                    <FontAwesomeIcon icon={faCheck} style={{color: "#28a953",}}/>:
                                    <FontAwesomeIcon icon={faXmark} style={{color: "#d00b0b",}} /> }
                                </Table.Cell>
                                <Table.Cell>{item.tipo}</Table.Cell>
                                <Link to='/comida/update'>
                                    <Table.Cell>
                                        <Button onClick={() => { setData(item) }}><FontAwesomeIcon icon={faPen} style={{color: "#ff7b00",}} /></Button>
                                    </Table.Cell>
                                </Link>
                                <Link to='/comida/delete'>
                                    <Table.Cell>
                                        <Button color='red' onClick={() => { onDelete(item) }}><FontAwesomeIcon icon={faTrash} style={{color: "#b42727",}} /></Button>
                                    </Table.Cell>
                                </Link>
                            </Table.Row>
                        )
                    })}


                </Table.Body>
                
            </Table>
            
        </div>
    )
}