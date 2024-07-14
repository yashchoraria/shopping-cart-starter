import React from 'react';
import toast from 'react-hot-toast';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { add, remove } from '../redux/Slices/cartSlice';
import { Link } from 'react-router-dom';

const Product = ({post}) => {
  
  const {cart} = useSelector((state) => state);
  const dispatch = useDispatch(); 

  const addToCart = () => {
    dispatch(add(post));
    toast.success("Item Added to Cart");
  };

  const removeFromCart = () => {
    dispatch(remove(post.id));
    toast.error("Item Removed from Cart");
  }


  return (
    <div className='flex flex-col items-center justify-between 
    hover:shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]
    hover:scale-110 transition duration-300 ease-in gap-5 p-4 mt-10 ml-6 rounded-xl outline'>
        <div>
            <p className='text-gray-700 font-semibold text-lg 
            text-left truncate w-40 mt-1 rounded-xl'>{post.title}</p>
        </div>
        <div>
            <p className='w-40 text-gray-400 font-normal text-[10px] text-left'>{post.description.split(" ").slice(0,10).join(" ") + "..."}</p>
        </div>
        <div className='h-[180px]'> 
            <img src={post.image} alt={post.title} className='h-full w-full'/>
        </div>
        <div className='flex justify-between gap-11'>
          <div>
              <p className='text-green-600 font-semibold'>$ {post.price}</p>
          </div>
          <div>
            { 
              cart.some((p) => p.id === post.id) ?
              (
                <button className='text-greay-700 border-2 border-gray-700 
                rounded-full font-semibold text-[12px] p-1 px-3 uppercase
                hover:text-white transition duration-300 ease-in hover:bg-gray-700' onClick={removeFromCart}>
                  Remove Item
                </button>
              ) :
              (
                <button className='text-greay-700 border-2 border-gray-700 
                rounded-full font-semibold text-[12px] p-1 px-3 uppercase
                hover:text-white transition duration-300 ease-in hover:bg-gray-700' onClick={addToCart}>
                  Add Item
                </button>
              )
            }
          </div>
        </div>
    </div>
  )
};

export default Product;
