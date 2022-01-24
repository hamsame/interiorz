import React, { useEffect, useState } from 'react'
import { createClient } from 'contentful'

function Blog() {
  const [articles, setArticles] = useState([])

  const client = createClient({
    space: process.env.REACT_APP_SPACE_SECRET,
    accessToken: process.env.REACT_APP_CMS_SECRET,
  })

  const getData = async () => {
    const res = await client.getEntries()
    const data = await res
    console.log(data.items)
    setArticles(data.items)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div>
      <h1>Articles</h1>
      {articles.map((article, index) => {
        return <h4 key={index}>{article.fields.title}</h4>
      })}
    </div>
  )
}

export default Blog
