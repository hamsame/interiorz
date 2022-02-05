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
    <main>
      <h1 className='pageTitle'>Blog</h1>
      <section className='articles'>
        {articles.map((article) => {
          console.log(article)
          return (
            <article className='article' key={article.sys.id}>
              <Link to={`/blog/${article.fields.slug}-${article.sys.id}`}>
                <img
                  src={article.fields.thumbnail.fields.file.url}
                  alt={article.fields.thumbnail.fields.description}
                />
              </Link>
              <h4 className='articleName'>
                <Link to={`/blog/${article.fields.slug}-${article.sys.id}`}>
                  {article.fields.title}
                </Link>
              </h4>
            </article>
          )
        })}
      </section>
    </main>
  )
}

export default Blog
