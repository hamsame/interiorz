import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { createClient } from 'contentful'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { renderOptions } from '../../components/renderOptions'
import { setPageTitle } from '../../components/updatePageTitle'

function Post() {
  const [post, setPost] = useState(null)
  const params = useParams()
  const client = createClient({
    space: process.env.REACT_APP_SPACE_SECRET,
    accessToken: process.env.REACT_APP_CMS_SECRET,
  })

  const getArticle = async () => {
    const res = await client.getEntry(params.id)
    const data = await res
    setPost(data)
  }

  useEffect(() => {
    getArticle()
    setPageTitle('Interiorz | Blog')
  }, [])

  if (!post) {
    return <h1>loading</h1>
  } else {
    return (
      <section>
        <article className='fetchedArticle'>
          <img
            width='50%'
            src={post.fields.thumbnail.fields.file.url}
            alt={post.fields.thumbnail.fields.description}
          />
          <h1 className='blogTitle'>{post.fields.title}</h1>
          {documentToReactComponents(post.fields.blogContent, renderOptions)}
        </article>
      </section>
    )
  }
}

export default Post