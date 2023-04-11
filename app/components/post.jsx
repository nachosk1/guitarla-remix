import { Link } from "@remix-run/react"
import { formatDate } from '~/utils/helpers'

const Post = ({ post }) => {
    const {content, image, title, url, publishedAt} = post
    return (
        <article className="post">
            <img src={image?.data?.attributes?.formats?.medium?.url} alt={`Imagen ${title}`} className="image"/>
            <div className="content">
                <h3 className="title">{title}</h3>
                <p className="date">{formatDate(publishedAt)}</p>
                <p className="summary">{content}</p>
                <Link to={`/blog/${url}`} className="link">Leer Post</Link>
            </div>
        </article>
    )
}

export default Post
