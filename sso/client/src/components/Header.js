import UserAuthContext from "../utils/userAuth";
import { useContext } from "react";

const Header=()=>{
    const {isLoggedIn,setIsLoggedIn}=useContext(UserAuthContext);
    const handleLogIn=()=>{
        setIsLoggedIn(!isLoggedIn);
    }
    return <>
            <div className="h-32 border-indigo-800 border-4">
            <h1>Header page</h1>
            {isLoggedIn ? (
                <>

               <h2>you are now logged in</h2>
               <button onClick={handleLogIn}>Click-to-login</button>
               </>
            )
            :( <>

                <h2>you are not logged in</h2>
                <button onClick={handleLogIn}>Click-to-login</button>
                </>)}

          </div>
    
    </>
}

export default Header;