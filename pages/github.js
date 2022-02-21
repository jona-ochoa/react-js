import React from 'react'
import Layout from '../components/Layout'

const Github = ({user}) => {
  return (
    <Layout>
        <div className='row'>
          <div className='col-md-4 offset-md-4'>
            <div className='card card-body text-center'>
              <h1>{user.name}</h1>
              <img src={user.avatar_url} alt='' />
              <p>{user.bio}</p>
              <a href={user.blog} target="_blank" className='btn btn-outline-info my-2'>My Blog</a>
              <a href={user.html_url} target="_blank" className='btn btn-outline-info my-2'>Go to Github</a>
            </div>
          </div>
        </div>
    </Layout>
  )
}

export async function getServerSideProps(){
  const res = await fetch('https://api.github.com/users/jona-ochoa')
  const data = await res.json()
  return {
    props: {
      user: data
    }
  }
}

export default Github