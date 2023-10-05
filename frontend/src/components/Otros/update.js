import axios from "axios";
import React, {useState,useEffect} from "react";
import {Form,Button} from "semantic-ui-react";
import {useHistory} from "react-router";

export default function Update(){
    let history = useHistory();
    const [id,setId]=useState("");
    const [tipo,setTipo]=useState("");

    useEffect(() =>{
        setId(localStorage.getItem("IDOtros",id));
        setTipo(localStorage.getItem("TipoOtros",tipo));
    },[])

    const updateData = ()=>{
        axios.put(`http://localhost:6998/api/otros/update/${id}`,{
            tipo
        })
            .then((response)=>{

                 history.push("/otros");
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
                <Button className="btn_guardar" type="submit" onClick={updateData}>Guardar</Button>
            </Form>
        </div>
    )

}