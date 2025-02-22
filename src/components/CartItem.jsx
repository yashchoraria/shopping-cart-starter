import {FcDeleteDatabase} from 'react-icons/fc';  
import {useSelector, useDispatch} from 'react-redux';
import { remove } from '../redux/Slices/cartSlice';
import { toast } from 'react-hot-toast';

const CartItem = ({item, itemIndex}) => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.error("Item Removed from Cart");
  }

  return (
    <div>
      <div>
        <div>
          <img src={item.image} />
        </div>
        <div>
          <h1 className='text-gray-700 font-semibold text-lg 
            text-left truncate w-40 mt-1 rounded-xl'>{item.title}</h1>
          <h1 className='w-40 text-gray-400 font-normal text-[10px] text-left'>{item.description}</h1>
          <div>
            <p>{item.price}</p>
            <div>
              <FcDeleteDatabase />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
