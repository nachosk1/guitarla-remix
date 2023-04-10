import { useLoaderData } from "@remix-run/react"
import { getGuitars } from "~/models/guitars.server"
import Guitar from "~/components/guitar"
import styles from '~/styles/guitars.css'

export function meta(){
  return {
    title: 'GuitarLa - Tienda de Guitarras',
    description: 'GuitarLa - Nuestra collecion de guitarras'
  }
}

export function links(){
  return[
    {
      rel: 'stylesheet',
      href: styles
    }
  ]
}

export async function loader() {
  const guitars = await getGuitars()
  return guitars.data
}

const Store = () => {
  const guitars = useLoaderData()

  return (
    <div className="container">
      <h2 className="heading">Nuestra Coleeción</h2>
      {guitars?.length && (
        <div className="guitarras-grid">
          {guitars.map(guitar => (
            <Guitar
              key={guitar?.attributes.url}
              guitar={guitar?.attributes}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default Store
