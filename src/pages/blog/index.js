import React, { useEffect, useState } from 'react'
import { createClient } from 'contentful'
import { Link } from 'react-router-dom'

function Blog() {
  const [articles, setArticles] = useState([])

  const client = createClient({
    space: process.env.REACT_APP_SPACE_SECRET,
    accessToken: process.env.REACT_APP_CMS_SECRET,
  })

  const getData = async (request) => {
    const res = await client.getEntries(request)
    const data = await res
    setArticles(data.items)
  }

  useEffect(() => {
    getData({ content_type: 'blog' })
  }, [])

  return (
    <div>
      <h1>Articles</h1>
      {articles.map((article) => {
        // const
        return (
          <article key={article.sys.id}>
            <Link to={`/blog/${article.sys.id}`}>
              <img
                style={{ width: '60%' }}
                src={article.fields.thumbnail.fields.file.url}
                alt={article.fields.thumbnail.fields.description}
              />
            </Link>
            <Link to={`/blog/${article.sys.id}`}>
              <h4>{article.fields.title}</h4>
            </Link>
          </article>
        )
      })}
    </div>
  )
}

export default Blog
