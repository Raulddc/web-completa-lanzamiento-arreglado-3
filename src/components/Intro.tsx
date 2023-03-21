import { FC, } from "react";

import { BiChevronsDown } from "react-icons/bi";
import Canvas from "./Canvas";

import { m } from "framer-motion";

//<Canvas />
const Intro: FC = () => {
  return (
    <div className="relative h-[85vh] flex justify-center items-center flex-col gap-5">
      
      <m.p
        
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 1.4 }}
        className="Ttext"
      >
        {
          <button data-text="Awesome" className="button">
          <span className="actual-text">&nbsp;RAULDDC.ETH&nbsp;</span>
          <span className="hover-text" aria-hidden="true">&nbsp;RAULDDC.ETH&nbsp;</span>
          </button>}
      </m.p>

      <m.p
        
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 1.4 }}
        className="text-1xl text-center z-[1] overflow-hidden"
      >
        {`Educador Físico Deportivo`}
      </m.p>

      <m.a
        
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 1.4 }}
        className="absolute left-[calc(50%-23px)] bottom-[15vh] cursor-pointer"
        href="#who"
        data-scroll-to
      >
        <BiChevronsDown className="animate-bounce" size={56} />
      </m.a>
    </div>
  );
};

export default Intro;
