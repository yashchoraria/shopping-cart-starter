import React, { useEffect } from 'react'
import { useState } from 'react'
import Product from '../components/Product'

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]); 

  async function fetchProductData(){
      setLoading(true);

      try{
          const response = await fetch(API_URL);
          const data = await response.json();
          setPosts(data);
          console.log(data);
      }
      catch(error){
          console.log(error);
          setPosts([]);
      }

      setLoading(false);
  }

  useEffect(() => {
      fetchProductData();
  }
  , []);

  return (
    <div>
      {
        loading ?
        (<p>Loading...</p>) :
        posts.length >0 ?
        (
          <div className='grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-18 space-x-5'>
               {
                 posts.map((post) => {
                    return <Product key={post.id} post = {post}/>
                 })
               }
          </div>
        ) :
        (
          <div className='flex justify-center items-center'>
            <p>No data found</p>
          </div>
        )
      }
    </div>
  )
}

export default Home 