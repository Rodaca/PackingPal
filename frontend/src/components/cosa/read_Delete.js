import axios from "axios";
import React, { useState, useEffect } from "react";
import { Table, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default function Read() {
    const [dataApi, setDataApi] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:6998/api/cosa/getAll`)
            .then((res) => {
                setDataApi(res.data);
                
            })
            .catch((error) => {
                // Manejar errores aquí, por ejemplo, mostrar un mensaje de error al usuario
                //console.error('Error en la solicitud:', error);
            });
    }, [])

    const setData = (dataApi) => {
        const { _id, tipo } = dataApi;
        localStorage.setItem("ID", _id);
        localStorage.setItem("Tipo", tipo);
    }

    const getData = () => {
        axios.get(`http://localhost:6998/api/cosa/getAll`)
            .then((getData) => {
                setDataApi(getData.dataApi);
            })
    }

    const onDelete = (id) => {
        axios.delete(`http://localhost:6998/api/cosa/delete/${id._id}`)
            .then((res) => {
                getData(res.data)
                window.location.href = '/';
            })
        
    }
    let incremental = 1
    return (
        <div>
            <Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>ID</Table.HeaderCell>
                        <Table.HeaderCell>Tipo</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {dataApi.map((item) => {
                        return (

                            <Table.Row key={item._id}>
                                <Table.Cell>{incremental++}</Table.Cell>
                                <Table.Cell>{item.tipo}</Table.Cell>
                                <Link to='/update'>
                                    <Table.Cell>
                                        <Button onClick={() => { setData(item) }}>Actualizar</Button>
                                    </Table.Cell>
                                </Link>
                                <Link to='/delete'>
                                    <Table.Cell>
                                        <Button color='red' onClick={() => { onDelete(item) }}>Eliminar</Button>
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