import { useDispatch, useSelector } from "react-redux";
import {addAction} from '../utils/cartSlice';
const Header=()=> {
     
    const dispatch=useDispatch();

    const cartItems=useSelector((store)=>store.cart.items);
    const userItems=useSelector((store)=>store.userAuth.authDetails);

    const handleAddCart=()=>{
        dispatch(addAction("777"))
    }
    return ( 
    <div className="h-42 w-full">
        <h1 onClick={handleAddCart}> cart --- {cartItems.length} </h1>
        <h1> user-name --- {userItems.name} </h1>
        <h1> user-profile--- {userItems.profile} </h1>
        <h1> user-login-status---- {userItems.loginStatus} </h1>
    </div>  
    );
}

export default Header;