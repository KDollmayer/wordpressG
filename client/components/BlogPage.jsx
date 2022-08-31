import React, {useEffect, useState}from 'react'
import styled from 'styled-components'

const Container = styled.div`
width: 50%;
margin: auto;
`

const HeroImage = styled.img`
width: 100%;
max-width: 500px;
height: auto;
`

const BlogPage = ( {data}) => {
    const [heroImage, setHeroImage] = useState(null)

    const renderMedia = async (media) => {
        const res = await fetch(`http://localhost/wp-json/wp/v2/media/${media}`)
        const data = await res.json()
        setHeroImage(data?.source_url)
       }
    
       useEffect(() => {
        if (data?.featured_media > 0){renderMedia(data?.featured_media)}
      },[])

  return (
    <Container>
        <HeroImage src={heroImage}/>
        <h2>{data?.title?.rendered}</h2>
        {data && (
          <p
            dangerouslySetInnerHTML={{ __html: data?.content?.rendered }}
          ></p>
        )}
    </Container>
  )
}

export default BlogPage