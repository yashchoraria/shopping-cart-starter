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
        (
          <div>
               {
                 posts.map((post) => {
                    return <Product key={post.id} post = {post}/>
                 })
               }
          </div>
        ) 
      }
    </div>
  )
}

export default Home 