import { useLoaderData } from "@remix-run/react"
import { getGuitars } from "~/models/guitars.server"
import ListGuitars from "~/components/list-guitars"
import styles from '~/styles/guitars.css'


export function meta() {
  return {
    title: 'GuitarLa - Tienda de Guitarras',
    description: 'GuitarLa - Nuestra collecion de guitarras'
  }
}

export function links() {
  return [
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
    <main className="container">
      <ListGuitars guitars={guitars} />
    </main>
  )
}

export default Store
