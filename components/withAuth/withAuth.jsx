import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';

export default function withAuth(Component) {
  return function ProtectedRoute(props) {
    const router = useRouter();
    const token = Cookies.get('jwt');

    useEffect(() => {
      if (!token) {
        router.push('/login');
      }
    }, [token]);

    return <Component {...props} />;
  }
}
