import { Navigate, useNavigate } from 'react-router-dom'
import { isTokenValid,getUserRole } from '../Utility/authUtility'

const ProtectedRoutes = ({children,requireRole}) => {
    const navigate = useNavigate();
    if(!isTokenValid()){
        navigate('/')
        return;
    } 

    const userRole = getUserRole();
    if(requireRole && userRole !== requireRole){
        navigate('/unauthorized')
        return
    }
  return children
}

export default ProtectedRoutes