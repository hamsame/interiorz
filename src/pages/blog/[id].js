import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { createClient } from 'contentful'

function Post() {
  const [post, setPost] = useState({})
  const [paramsPresent, setParamsPresent] = useState(false)
  const params = useParams()
  // console.log(params.id)
  // console.log(post)

  const client = createClient({
    space: process.env.REACT_APP_SPACE_SECRET,
    accessToken: process.env.REACT_APP_CMS_SECRET,
  })

  const getArticle = async () => {
    const res = await client.getEntry(params.id)
    const data = await res
    setPost(data)
    setParamsPresent(true)
  }

  useEffect(() => {
    getArticle()
  }, [])

  if (!paramsPresent) {
    return <h1>loading</h1>
  } else {
    return (
      <section>
        <article>
          <h1>{post.fields.title}</h1>
        </article>
      </section>
    )
  }
}

export default Post
