import React from 'react'
import Layout from '../components/Layout'
import { post } from '../profile'

const PostCard = ({post}) => (
  <div className='col-md-4 text-dark'>
    <div className='card bg-light p-2'>
      <div className='overflow'>
        <img src={post.imageURL} alt='' className='card-img-top' />
      </div>
      <div className='card-body '>
        <h1>{post.title}</h1>
        <p>{post.content}</p>
        <a href={post.website} target="_blank" className='btn btn-outline-danger rounded'>Read Learn</a>
      </div>
    </div>
  </div>
)

const Blog = () => {
  return (
    <Layout title="My Blog">
      <div className='row'>
         {
          post.map((post, i) => (
            <PostCard post={post} key={i} />
          ))
        }
      </div>
       
    </Layout>
  )
}

export default Blog  