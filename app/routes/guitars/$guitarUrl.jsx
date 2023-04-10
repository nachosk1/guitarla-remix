import { useLoaderData } from "@remix-run/react"
import { getGuitar } from "~/models/guitars.server"
import styles from "~/styles/guitars.css"

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

export function links(){
    return[
        {
            rel: "stylesheet",
            href: styles
        }
    ]
}

const Guitar = () => {
    const guitar = useLoaderData()
    const {name, description, image, price} = guitar.data[0].attributes

    return (
        <main className="container guitar">
            <img src={image.data.attributes.url} alt={`Imagen de la guitarra ${name}`} className="image"/>
            <div className="content">
                <h3>{name}</h3>
                <p className="text">{description}</p>
                <p className="price">${price}</p>
            </div>
        </main>
    )
}

export default Guitar
