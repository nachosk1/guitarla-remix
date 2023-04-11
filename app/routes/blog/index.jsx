import { useLoaderData } from "@remix-run/react"
import { getPosts } from "~/models/posts.server"
import ListPost from "~/components/list-posts"


export async function loader() {
    const posts = await getPosts()
    return posts.data
}


export function meta() {
    return {
        title: 'GuitarLA - Nuestro Blog',
        description: 'GuitarLA - blog de musica'
    }
}

const Blog = () => {
    const posts = useLoaderData()

    return (
        <ListPost posts={posts} />
    )
}

export default Blog
