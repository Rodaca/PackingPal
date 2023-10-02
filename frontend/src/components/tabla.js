import axios from "axios";
import React,{useState,useEffect} from "react";
import {Table,Button} from "semantic-ui-react";
import {Link} from "react-router-dom";

export default function Read(){
    const [dataApi,setDataApi] = useState([]);

    useEffect(()=>{
        axios.get(`http://localhost:6997/api/cosa/getAll`)
      .then((res)=>{
            setDataApi(res.data);
            console.log(res.data);
        })
    },[])

    const setData = (dataApi) =>{
        const {_id,tipo} = dataApi;
        localStorage.setItem("ID",_id);
        localStorage.setItem("Tipo",tipo);
    }

    const getData =  ()=>{
        axios.get(`http://localhost:6997/api/cosa/getAll`)
      .then((getData)=>{
        setDataApi(getData.dataApi);
      })
    }

    const onDelete = (id)=>{
        axios.delete(`http://localhost:6997/api/cosa/delete/${id}`)
      .then((res)=>{
        getData(res.data)
      })
    }
    
    return(
        <div>
            <Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>ID</Table.HeaderCell>
                        <Table.HeaderCell>Tipo</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {dataApi.map((item)=>{
                        return(
                            <Table.Row key={item._id}>
                                <Table.Cell>{item._id}</Table.Cell>
                                <Table.Cell>{item.tipo}</Table.Cell>
                                <Link to='/update'>
                                    <Table.Cell>
                                        <Button onClick={()=>{setData(item)}}>Actualizar</Button>
                                    </Table.Cell>
                                </Link>
                                <Link to='/delete'>
                                    <Table.Cell>
                                        <Button color='red' onClick={()=>{setData(item)}}>Eliminar</Button>
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