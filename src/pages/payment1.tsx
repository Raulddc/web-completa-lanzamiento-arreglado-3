import { useRouter } from 'next/router';
import { routes } from '../shared/router1';

const PaymentPage1 = () => {
  const router = useRouter();
  const { pathname } = router;

  const route = routes.find(route => route.path === pathname);

  if (!route) {
    return <div>Not Found</div>;
  }

  return <route.component />;
  
};

export default PaymentPage1;