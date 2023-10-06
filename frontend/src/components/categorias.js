import axios from "axios";
import React, { useState, useEffect } from "react";
import { Button } from "semantic-ui-react";
import { Link, Route } from "react-router-dom";
import Update_Collection from './Colletion/update';
import Create_Collection from './Colletion/create';
import Read_Delete_Collection from './Colletion/read_Delete';
import Mochila from "./mochila";

export default function CategoriaRead() {
    const [dataApi, setDataApi] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:6998/api/categoria/getAll`)
            .then((res) => {
                setDataApi(res.data);
            })
            .catch((error) => {
                // Manejar errores aquí, por ejemplo, mostrar un mensaje de error al usuario
                // console.error('Error en la solicitud:', error);
            });
    }, [])

    return (
        <div className="categorias">
            {dataApi.map((item) => {
                return (
                    <div key={item.tipo}>
                        <Link to={`/${item.tipo}`}>
                            <Button className="btn_categoria">{item.tipo}</Button>
                        </Link>
                        <div className='main'>
                            <Mochila/>
                        <div>
                            <Route exact path={`/${item.tipo}`} render={(props) => <Read_Delete_Collection {...props} collection={item.tipo} />} />
                        </div>
                        <div>
                            <Route exact path={`/${item.tipo}/update`} render={(props) => <Update_Collection {...props} collection={item.tipo} />} />
                        </div>
                        <div>
                            <Route exact path={`/${item.tipo}/create`} render={(props) => <Create_Collection {...props} collection={item.tipo} />} />
                        </div>
                        </div>
                        
                    </div>
                )
            })}
        </div>
    )
}
