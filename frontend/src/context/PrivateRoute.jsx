import userAtom from '@/atom/userAtom'
import { Navigate } from 'react-router-dom'
import { useRecoilValue } from 'recoil'

const PrivateRoute = ({element}) => {
  const user = useRecoilValue(userAtom)
  if(!user){
    return <Navigate to={'/'} replace />;
  }

  return element; // Render the element if user exists
}

export default PrivateRoute
