import Header from './components/Header';
import {Outlet} from 'react-router-dom';
import UserAuthContext from "./utils/userAuth";
import { useState } from 'react';
const App=()=>{
 
    const [isLoggedIn,setIsLoggedIn]=useState(false);
    const [isRegister,setIsRegister]=useState(false);
    return (
        <>
        <UserAuthContext.Provider value={{isLoggedIn,isRegister,setIsLoggedIn,setIsRegister}}>
            <Header/>
            <Outlet/>
        </UserAuthContext.Provider>
        </>
    ) 

}

export default App;