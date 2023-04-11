import { useLoaderData } from '@remix-run/react'
import { getPost } from '~/models/posts.server'
import { formatDate } from '~/utils/helpers'

export async function loader({ params }) {
    const post = await getPost(params.postUrl)
    if (post.data.length === 0) {
        throw new Response('', {
            status: 404,
            statusText: 'Blog No Encontrado'
        })
    }
    return post
}

export function meta({ data }) {
    if (!data) {
        return {
            title: 'GuitarLA - Blog no encontrado',
            description: `Guitarras, blog de guitarras, blog no encontrado`
        }
    }
    return {
        title: `GuitarLA - ${data.data[0].attributes.title}`,
        description: `Guitarras, blog de guitarras, blog: ${data.data[0].attributes.title}`
    }
}

const Post = () => {
    const post = useLoaderData()
    const { title, content, image, publishedAt } = post?.data[0]?.attributes
    return (
        <article className='post mt-3'>
            <img src={image?.data?.attributes?.formats?.medium?.url} alt={`Imagen ${title}`} className="image"/>
            <div className="content">
                <h3 className="title">{title}</h3>
                <p className="date">{formatDate(publishedAt)}</p>
                <p className="text">{content}</p>
            </div>
        </article>
    )
}

export default Post
