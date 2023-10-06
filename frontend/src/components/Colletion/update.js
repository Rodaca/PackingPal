import axios from "axios";
import React, {useState,useEffect} from "react";
import {Form,Button} from "semantic-ui-react";
import {useHistory} from "react-router";

export default function Update(props){
    let history = useHistory();
    const [id,setId]=useState("");
    const [tipo,setTipo]=useState("");

    useEffect(() =>{
        setId(localStorage.getItem(`ID_${props.collection}`,id));
        setTipo(localStorage.getItem(`Tipo_${props.collection}`,tipo));
    },[])

    const updateData = ()=>{
        axios.put(`http://localhost:6998/api/${props.collection}/update/${id}`,{
            tipo
        })
            .then((response)=>{

                 history.push(`/${props.collection}`);
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