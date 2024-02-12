import {useContext} from 'react';
import UserAuthContext from '../utils/userAuth'
const Login=()=>{

    const {isLoggedIn}=useContext(UserAuthContext);
    console.log(isLoggedIn);
    return <>
            {isLoggedIn ? (
                <>
               <h2>you are now logged in and on sigin-page</h2>
               </>
            )
            :( <>
                <h2>bhag bhosdi pahile login kar</h2>
                </>)}
    
    </>
}
export default Login;