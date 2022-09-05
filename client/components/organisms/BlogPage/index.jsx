import React, {useEffect, useState}from 'react'
import styled from 'styled-components'
import * as s from './styles'

const BlogPage = ( {data}) => {
    const [heroImage, setHeroImage] = useState(null)

    const renderMedia = async (media) => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/media/${media}`)
        const data = await res.json()
        setHeroImage(data?.source_url)
       }
    
       useEffect(() => {
        if (data?.featured_media > 0){renderMedia(data?.featured_media)}
      },[])

  return (
    <s.Container>
        <s.HeroImage src={heroImage}/>
        <h2>{data?.title?.rendered}</h2>
        {data && (
          <p
            dangerouslySetInnerHTML={{ __html: data?.content?.rendered }}
          ></p>
        )}
    </s.Container>
  )
}

export default BlogPage