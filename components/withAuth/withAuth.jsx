import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';
import { useSelector } from 'react-redux';  // Import useSelector

const withAuth = (Component, role) => {
  return function ProtectedRoute(props) {
    const router = useRouter();
    const token = Cookies.get('jwt');
    let userRole = useSelector((state) => state.user.role);  // Use useSelector to access the user role from the Redux store

    // If there's no token, consider the user as a "guest"
    if (!token) {
      userRole = 'guest';
      Cookies.set('userRole', userRole);
    }

    useEffect(() => {
      if (userRole === 'guest') {
        router.push('/login');
      } else if (role && userRole !== role) {
        // If a role is specified for this route and the user's role doesn't match,
        // redirect them to their own dashboard.
        router.push(`/${userRole}-dashboard/dashboard`);
      }
    }, [token, userRole]);

    return <Component {...props} />;
  }
}

export default withAuth;
