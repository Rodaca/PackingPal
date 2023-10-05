import axios from "axios";
import React, { useState, useEffect } from "react";
import {Form,Button} from "semantic-ui-react";
import {useHistory} from "react-router";


export default function Create(){
    let history = useHistory();
    const [tipo,setTipo]=useState("");
    const estado=false
    const createData = ()=>{
        axios.post(`http://localhost:6998/api/comida/insert`,{
            tipo,estado
        })
           .then((response)=>{
                 history.push("/comida");
                 window.location.reload(false);
            })
    }

    return(
        <div>
            <Form>
                <Form.Field>
                    <label>Tipo</label>
                    <Form.Input value={tipo} onChange={(e)=>setTipo(e.target.value)}/>
                </Form.Field>
                <Button type="submit" onClick={createData}>Guardar</Button>
            </Form>
        </div>
    )
}