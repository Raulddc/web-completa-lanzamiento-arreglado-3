import { useRouter } from 'next/router';
const ClientesButton = () => {
    const router = useRouter();
  
    const handleClick = () => {
      router.push("/clientes");
    };
    return handleClick;
    }
    export { ClientesButton };

