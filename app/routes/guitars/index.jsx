import { useLoaderData } from "@remix-run/react"
import { getGuitars } from "~/models/guitars.server"
import ListGuitars from "~/components/list-guitars"

export function meta() {
    return {
        title: 'GuitarLa - Tienda de Guitarras',
        description: 'GuitarLa - Nuestra collecion de guitarras'
    }
}

export async function loader() {
    const guitars = await getGuitars()
    return guitars.data
}

const Store = () => {
    const guitars = useLoaderData()

    return (
        <ListGuitars guitars={guitars} />
    )
}

export default Store
