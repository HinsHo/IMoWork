import { useState } from "react";
import { motion } from "framer-motion";

import { InvitationModal } from "./InvitationModal";
import dashboard from "../assets/images/main.png";

export const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section
      className="w-screen  flex justify-center items-center bg-bgDark1 mb-[28vw] md:mb-[18vw] lg:mb-[10vw] xl:mb-[13vw] 2xl:mb-60 hero-bg-gradient pb-24 sm:pb-32 md:pb-44 lg:pb-0"
      id="home"
    >
      <div className="w-full md:w-[800px] xl:w-[900px] flex flex-col justify-center items-center pt-16 md:pt-16 lg:pt-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* <h3 className="text-secondaryColor text-sm sm:text-base  mb-6 sm:mt-32 mt-16  font-bold">
            简单好用的软件工具
          </h3> */}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 20 }}
          transition={{ duration: 0.5, delay: 0.05 }}
        >
          <div className="text-5xl sm:text-6xl lg:text-7xl xl:text-7xl font-bold tracking-wide  text-primaryText  px-8 sm:px-8 md:px-20 lg:px-4">           
            <h2 className="hidden md:inline">简单易用的编程软件</h2>
          </div>
          
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h2 className="text-secondaryText text-sm lg:text-base xl:text-lg sm:text-base mt-10 px-12 sm:px-48 ">
            一款面向CAM编程工程理的辅助工具，帮助工程师更好、更多的产生刀具路径，提升工作效率.
          </h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <div className="flex flex-col gap-2 sm:flex-row mt-14 mb-24 sm:mb-40 justify-center">
            <button
              className="contained-button w-64 sm:w-52 h-12 mr-0 sm:mr-4 lg:mr-6 mb-2 sm:mb-0"
              onClick={() => window.location.href = '/download/IMoWorkSetup.exe'}
              aria-label="Get started"
            >
              免费下载
            </button>
            {/* <button  
  onClick={() => {  
    window.location.href = '/download/IMoWork.2024.0.0.0.exe'; // 文件的路径  
  }}  
  style={{  
    backgroundColor: '#007BFF',  
    color: '#fff',  
    border: 'none',  
    padding: '10px 20px',  
    borderRadius: '5px',  
    cursor: 'pointer',  
    fontSize: '16px'  
  }}  
>  
  下载安装包  
</button>   */}
            <button
              className="w-64 sm:w-52 h-12 rounded-xl font-bold text-primaryText border border-solid  flex justify-center items-center cursor-pointer bg-bgDark2 hover:bg-bgDark3 border-primaryColor transition"
              onClick={()=>window.open("https://space.bilibili.com/474851190?spm_id_from=333.1007.0.0")}
              aria-label="Live demo"
            >
              观看视频演示
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 0, zIndex: 20 }}
          animate={{ opacity: 1, y: 0, zIndex: 20 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <div className="relative w-screen flex justify-center ">
            <img
              src={dashboard.src}
              alt="Dashboard image"
              className="w-4/5 2xl:w-[1200px] mx-auto absolute z-10 rounded-xl hero-dashboard-border-gradient lg:top-6 xl:top-0"
            />
             {/* <img
              src={dashboard.src}
              alt="Dashboard image"
              className="w-4/5 2xl:w-[1200px] mx-auto absolute z-10 rounded-xl main-border-gray hero-dashboard-border-gradient lg:top-6 xl:top-0"
            /> */}
          </div>
        </motion.div>
        <div className="relative w-screen flex justify-center ">
          <div className="shape-divider-bottom-1665343298 mt-4 sm:mt-16 md:mt-52 hidden lg:block">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
              className="bg-bgDark2"
            >
              <path
                d="M1200 0L0 0 598.97 114.72 1200 0z"
                className="shape-fill bg-bgDark1  fill-bgDark1"
              ></path>
            </svg>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <InvitationModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
      )}
    </section>
  );
};
