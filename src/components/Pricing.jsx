import { useState } from "react";
import { motion } from "framer-motion";

import { InvitationModal } from "./InvitationModal";
import { CheckArrowIcon } from "../assets/icons/CheckArrowIcon";

const pricingData = [
  "局域网内授权浮动限制",
  "支持多个PowerMILL进程实例切换",
  "支持3轴，多轴刀具路径仿真验证",
  "智能生成单工位，多工位仿真项目",
  "多种仿真机床，内置8种机床模板",
  "可自动后自动仿真，仿真结束后，自动返回仿真报告。"
];

const pricingStandard =[
  "单个加密锁授权软件",
   "支持多个PowerMILL进程实例切换",
  "支持3轴，多轴刀具路径仿真验证",
  "智能生成单工位，多工位仿真项目",
  "多种仿真机床，内置8种机床模板",
  "可自动后自动仿真，仿真结束后，自动返回仿真报告。"];

  const pricingNet=[
    "联网打开软件",
    "支持多个PowerMILL进程实例切换",
   "支持3轴，多轴刀具路径仿真验证",
   "智能生成单工位，多工位仿真项目",
   "多种仿真机床，内置8种机床模板",
   "可自动后自动仿真，仿真结束后，自动返回仿真报告。"];

export const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = () => {
    setIsMonthly(!isMonthly);
  };

  return (
    <section className="w-screen flex justify-center bg-bgDark2 relative">
      <div className="absolute -top-16" id="pricing" />
      <div className="pb-20 pt-12 bg-bgDark2  2xl:w-[1150px] lg:w-[1050px]  md:w-4/5 ">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center mb-16"> 
              <h2 className="mt-6 mb-6 text-4xl lg:text-5xl font-bold font-heading text-primaryText">
                选择你需要的版本
              </h2>
              <p className="mb-6 text-secondaryText">
                根据自己的实际情况选择合适的版本，享受相应的软件功能。
              </p>              
            </div>
            <div className="flex flex-wrap flex-col lg:flex-row -mx-4 items-center mt-20">
              <div className="w-[350px] sm:w-[380px] lg:w-1/ px-4 mb-8 lg:mb-0">
                <div className="p-8 bg-bgDark3 rounded-3xl">
                  <h3 className="mb-2 text-xl font-bold font-heading text-primaryText text-left">
                    单机版
                  </h3>
                  <div className="flex justify-start items-end">
                    <div className="text-4xl sm:text-5xl font-bold text-primaryText text-left mt-4 mr-2">
                      ¥1999
                    </div>
                    <div className="text-gray-500">
                      / 永久
                    </div>
                  </div>
                  <p className="mt-4 mb-6 2xl:mb-10 text-gray-500 leading-loose text-left">
                    适用于个人电脑或笔记本的部署。
                  </p>
                  <ul className="mb-2 2xl:mb-6 text-primaryText">
                    {pricingStandard.map((text, index) => (
                      <li className="mb-4 flex" key={`${text}-${index}`}>
                        <CheckArrowIcon />
                        <span>{text}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    className="inline-block text-center py-2 px-4 w-full rounded-xl rounded-t-xl contained-button font-bold leading-loose mt-16"
                    onClick={() => window.open("https://item.taobao.com/item.htm?spm=a230r.7195193.1997079397.6.42da656auIAPLa&id=824761959495&abbucket=2")}
                    aria-label="Get started"
                  >
                    购买软件
                  </button>
                </div>
              </div>
              <div className="w-[350px] sm:w-[380px] lg:w-1/ px-4 mb-8 lg:mb-0">
                <div className="p-8 bg-bgDark3 rounded-3xl">
                  <h3 className="mb-2 text-xl font-bold font-heading text-primaryText text-left">
                    网络版
                  </h3>
                  <div className="flex justify-start items-end">
                    <div className="text-4xl sm:text-5xl font-bold text-primaryText text-left mt-4 mr-2">
                      ¥2599
                    </div>
                    <div className="text-gray-500">
                      / 永久
                    </div>
                  </div>
                  <p className="mt-4 mb-6 2xl:mb-10 text-gray-500 leading-loose text-left">
                    适用于企业内局域网环境下部署。
                  </p>
                  <ul className="mb-2 2xl:mb-6 text-primaryText">
                    {pricingData.map((text, index) => (
                      <li className="mb-4 flex" key={`${text}-${index}`}>
                        <CheckArrowIcon />
                        <span>{text}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    className="inline-block text-center py-2 px-4 w-full rounded-xl rounded-t-xl contained-button font-bold leading-loose mt-16"
                    onClick={() => window.open("https://item.taobao.com/item.htm?spm=a230r.7195193.1997079397.6.42da656auIAPLa&id=824761959495&abbucket=2")}
                    aria-label="Get started"
                  >
                    购买软件
                  </button>
                </div>
              </div>
              <div className="w-[350px] sm:w-[380px] lg:w-1/3 px-4 mb-8 lg:mb-0">
                <div className="p-8 bg-bgDark3 rounded-3xl">
                  <h3 className="mb-2 text-xl font-bold font-heading text-primaryText text-left">
                    联网版
                  </h3>
                  <div className="flex justify-start items-end">
                    <div className="text-4xl sm:text-5xl font-bold text-primaryText text-left mt-4 mr-2">
                      ¥1799
                    </div>
                    <div className="text-gray-500">
                      / 永久
                    </div>
                  </div>
                  <p className="mt-4 mb-6 2xl:mb-10 text-gray-500 leading-loose text-left">
                    适用于有联网条件的单机端使用。
                  </p>
                  <ul className="mb-2 2xl:mb-6 text-primaryText">
                    {pricingNet.map((text, index) => (
                      <li className="mb-4 flex" key={`${text}-${index}`}>
                        <CheckArrowIcon />
                        <span>{text}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    className="inline-block text-center py-2 px-4 w-full rounded-xl rounded-t-xl contained-button font-bold leading-loose mt-16"
                    onClick={() => window.open("https://item.taobao.com/item.htm?spm=a230r.7195193.1997079397.6.42da656auIAPLa&id=824761959495&abbucket=2")}
                    aria-label="Get started"
                  >
                    购买软件
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      {isModalOpen && (
        <InvitationModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
      )}
    </section>
  );
};
