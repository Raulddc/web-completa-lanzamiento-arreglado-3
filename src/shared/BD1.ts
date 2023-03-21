import { useRouter } from 'next/router';
const BDButton = () => {
    const router = useRouter();
  
    const handleClick = () => {
      router.push("/BD");
    };
    return handleClick;
    }
    export { BDButton };

