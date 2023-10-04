import axios from "axios";
import React, { useState, useEffect } from "react";
import { Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default function CategoriaRead() {
    const [dataApi, setDataApi] = useState([]);
    useEffect(() => {
        
        axios.get(`http://localhost:6998/api/categoria/getAll`)
            .then((res) => {
                setDataApi(res.data);
                
            })
            .catch((error) => {
                // Manejar errores aquí, por ejemplo, mostrar un mensaje de error al usuario
                //console.error('Error en la solicitud:', error);
            });
    }, [])



    return (
        <div>
            {dataApi.map((item)=>{
                return(
                    <div>
                        <Link to={`/${item.tipo}`}>
                            <Button>{item.tipo}</Button>
                        </Link>
                        
                    </div>
                )
            })}
        </div>
    )
}