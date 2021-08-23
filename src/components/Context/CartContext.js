import {createContext, useState} from 'react'

export const contexto = createContext()

const { Consumer, Provider } = contexto


const CustomProvider = ({children}) => {
    
    const [carrito, setCarrito] = useState([])

    const addItem = (item) => {
        
        // const copia = carrito.slice(0)
        // copia.push(item)
        // setCarrito(copia)

        setCarrito([...carrito, item])
    }

    const removeItem = (itemId) => {
        const borrar = carrito.filter( (item) => item.id !== itemId);
        setCarrito(borrar);
        // console.log(itemId)
    }

    const clear = () => {
        console.log("Clear")
        setCarrito([]);
    }

    const isInCart = (id) => {}

    const contexto_para_consumir = {carrito, addItem, removeItem, clear}

    return (
        <Provider value={contexto_para_consumir}>
            {children}
        </Provider>
    )
}

export default CustomProvider