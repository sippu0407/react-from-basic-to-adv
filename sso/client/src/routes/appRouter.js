import {createBrowserRouter} from 'react-router-dom';
import Login from '../components/Login';
import Signup from '../components/Signup';
import Dashboard from '../components/Dashboard';
import Error from '../components/Error';
import Home from '../components/Home';
import App from '../App';
const appRouter=createBrowserRouter([
  
    {
        path:"/",
        element:<App/>,
        children:[
       {
           path:'',
           element:<Home/>,
           errorElement:<Error/>
        },
        {
            path:"/login",
            element:<Login/>,
            errorElement:<Error/>
        },
        {
            path:"/signup",
            element:<Signup/>,
            errorElement:<Error/>
        },
        {
            path:"/dashboard",
            element:<Dashboard/>,
            errorElement:<Error/>
        },
    
    
    
    
    ],
        errorElement:<Error/>
    }
   
]);

export default appRouter;