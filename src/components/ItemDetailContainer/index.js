import React, { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Spinner from 'react-bootstrap/Spinner'
import { Products } from '../../data/Products'
import ItemDetail from "./ItemDetail"
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {

    const [products, setProducts] = useState([])
    const [estado, setEstado] = useState("pendiente");
    const params = useParams()

    console.log(params)
    console.log(typeof params.id)
    
    useEffect(() => {
        const getItem = new Promise((res, rej) => {
            setTimeout(() => {
                if(params.id) {
                    res(Products.find(producto => producto.id.toString() === params.id))
                }else{
                    res(console.log("No se encontro producto buscado"))
                }
            }, 2000)
            setEstado("pendiente")
        })
        getItem.then((data_product) =>
            setProducts(data_product))
            .then(() => setEstado("terminado"))
    }, [params.id])

    if (estado === "pendiente") {
        return(

        <div>
            <h3>Detalle de Producto:</h3>
            <Spinner animation="border" role="status" className="d-block m-auto" >
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </div>
        )
    } else {
        return (
            <Container className="mt-5">
                <Row>
                    <h5>Item Detail</h5>
                    <ItemDetail item={products} />
                </Row>
            </Container>
        )
    }

}

export default ItemDetailContainer