import { getPosts } from '~/models/posts.server'
import { getGuitars } from '~/models/guitars.server'
import { useLoaderData } from '@remix-run/react'
import { getCourse } from '../models/course.server'
import ListGuitars from '~/components/list-guitars'
import ListPost from '~/components/list-posts'
import Course from '~/components/course'
import stylesGuitars from '~/styles/guitars.css'
import stylesPosts from '~/styles/blog.css'
import styleCourse from '~/styles/course.css'

export function meta() {
    return {
        title: 'GuitarLa - Inicio',
        description: 'GuitarLa - Inicio de Nuestra collecion de guitarras, blog y cursos'
    }
}

export function links() {
    return [
        {
            rel: 'stylesheet',
            href: stylesGuitars
        },
        {
            rel: 'stylesheet',
            href: stylesPosts
        },
        {
            rel: 'stylesheet',
            href: styleCourse
        }
    ]
}

export async function loader() {
    const [guitars, posts, course] = await Promise.all([
        getGuitars(),
        getPosts(),
        getCourse()
    ])
    return {
        guitars: guitars.data,
        posts: posts.data,
        course: course.data
    }

}



function Index() {
    const { guitars, posts, course } = useLoaderData()
    return (
        <>
            <main className="container">
                <ListGuitars guitars={guitars} />
            </main>
            <Course course={course.attributes} />
            <section className='container'>
                <ListPost posts={posts} />
            </section>
        </>
    )
}

export default Index
