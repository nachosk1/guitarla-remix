import { useState } from "react"
import { useLoaderData, useOutletContext } from "@remix-run/react"
import { getGuitar } from "~/models/guitars.server"

export async function loader({ params }) {
    const guitar = await getGuitar(params.guitarUrl)

    if(guitar.data.length === 0){
        throw new Response('',{
            status: 404,
            statusText: 'Guitarra No Encontrada'
        })
    }
    return guitar
}

export function meta({data}){  //una vez que se pasa informacion al loader y se la pasa al componente, el data estara disponible
    if(!data){
        return{
            title: 'GuitarLA - Guitarra no encontrada',
            description: `Guitarras, venta de guitarras, guitarra no encontrada`
        }
    }
    return{
        title: `GuitarLA - ${data.data[0].attributes.name}`,
        description: `Guitarras, venta de guitarras, guitarra: ${data.data[0].attributes.name}`
    }
}


const Guitar = () => {
    const {addShop} = useOutletContext()
    const guitar = useLoaderData()
    const {name, description, image, price} = guitar.data[0].attributes
    const [amount, setAmount] = useState(0)
    
    const handledSubmit = e => {
        e.preventDefault()
        if(amount < 1){
            alert("Debes seleccionar una cantidad")
            return
        }

        const guitarSelected = {
            id: guitar.data[0].id,
            image: image.data.attributes.url,
            name,
            price,
            amount
        }
        
        addShop(guitarSelected)
    }

    return (
        <div className="guitar">
            <img src={image.data.attributes.url} alt={`Imagen de la guitarra ${name}`} className="image"/>
            <div className="content">
                <h3>{name}</h3>
                <p className="text">{description}</p>
                <p className="price">${price}</p>
                <form action="" className="form" onSubmit={handledSubmit}>
                    <label htmlFor="amount">Cantidad</label>
                    <select className="select" id="amount" onChange={e => setAmount(parseInt(e.target.value))}>
                        <option value="0">-- Seleccione --</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                    <input type="submit" value="Agregar al Carrito"/>
                </form>
            </div>
        </div>
    )
}

export default Guitar
