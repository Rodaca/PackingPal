import axios from "axios";
import React, {useState,useEffect} from "react";
import {Form,Button} from "semantic-ui-react";
import {useHistory} from "react-router";

export default function Update(){
    let history = useHistory();
    const [id,setId]=useState("");
    const [tipo,setTipo]=useState("");

    useEffect(() =>{
        setId(localStorage.getItem("IDElectronico",id));
        setTipo(localStorage.getItem("TipoElectronico",tipo));
    },[])

    const updateData = ()=>{
        axios.put(`http://localhost:6998/api/electronico/update/${id}`,{
            tipo
        })
            .then((response)=>{

                 history.push("/electronico");
                 console.log(response.data);
            })
    }

    return(
        <div>
            <Form>
                <Form.Field>
                    <label>Tipo</label>
                    <Form.Input value={tipo} onChange={(e)=>setTipo(e.target.value)}/>
                </Form.Field>
                <Button color="teal" type="submit" onClick={updateData}>Guardar</Button>
            </Form>
        </div>
    )

}