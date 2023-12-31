import axios from "axios";
import React, { useState, useEffect } from "react";
import {Form,Button} from "semantic-ui-react";
import {useHistory} from "react-router";


export default function Create(props){
    let history = useHistory();
    const [tipo,setTipo]=useState("");
    const estado=true
    const createData = ()=>{
        axios.post(`http://localhost:6998/api/${props.collection}/insert`,{
            tipo,estado
        })
           .then((response)=>{
                 history.push(`/${props.collection}`);
                 window.location.reload();
            })
    }

    return(
        <div>
            <Form>
                <Form.Field>
                    <label>Tipo</label>
                    <Form.Input value={tipo} onChange={(e)=>setTipo(e.target.value)}/>
                </Form.Field>
                <Button className="btn_guardar" type="submit" onClick={createData}>Guardar</Button>
            </Form>
        </div>
    )
}