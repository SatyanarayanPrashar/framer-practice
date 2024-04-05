"use client"
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div>
      <div className="h-[120vh]"></div>
      <div className="relative mx-auto grid h-32 w-96 place-content-center">
        {/* <h1 className="relative z-0 text-3xl font-black uppercase">Show me on Scroll</h1> */}
        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            margin: "-200px"
          }}
          className="z-10 text-[100px] duration-[20000]"
        >
          <div>Hello World</div> 
      </motion.div>
      </div>
      <div className="h-[120vh]"></div>
    </div>
  );
}
