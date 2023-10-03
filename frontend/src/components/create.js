import axios from "axios";
import React, { useState, useEffect } from "react";
import {Form,Button} from "semantic-ui-react";
import {useHistory} from "react-router";


export default function Create(){
    let history = useHistory();
    const [tipo,setTipo]=useState("");

    const createData = ()=>{
        axios.post(`http://localhost:6997/api/cosa/create`,{
            tipo
        })
           .then((response)=>{

                 history.push("/");
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
                <Button color="greed" type="submit" onClick={createData}>Guardar</Button>
            </Form>
        </div>
    )
}