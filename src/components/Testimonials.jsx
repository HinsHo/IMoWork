import { motion } from "framer-motion";

import { QuoteIcon } from "../assets/icons/QuoteIcon";
import testimonial1 from "../assets/images/testimonial1.png";
import testimonial2 from "../assets/images/testimonial2.png";
import testimonial3 from "../assets/images/testimonial3.png";

const testimonialsData = [  
  {
    customerName: "HinsHo",
    customerTitle: "IMowork 创始人",
    content:
      "我们打造的是一款简单易用，但又不失功能强大的软件，用户在可以极少培训与使用的情况下，就能完成复杂的仿真工作。",
    image: testimonial3,
  },
  {
    customerName: "刘*聪",
    customerTitle: "德慷软件资深工程师",
    content:
      "简单易用，功能强大，现在我不需要在Vericut里，手动配置众多参数，可一键仿真，确保程序安全！",
    image: testimonial1,
  },
  {
    customerName: "张*月",
    customerTitle: "德慷软件资深工程师",
    content:
      "喜欢使用其多工位仿真功能，根据不同的坐标系，指定不同的定位坐标，仿真参数，简单易用！",
    image: testimonial2,
  },
];

export const Testimonials = () => (
  <section className="w-full flex justify-center pt-16 mb-16 lg:mb-32 bg-bgDark2 relative">
    <div className="absolute -top-16" id="feedback" />
    <div className="flex flex-col w-full lg:w-[1150px] justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.3 }}
      >
        <div className="block-subtitle text-center mb-6">听听用户的声音</div>
        <div className="block-big-title text-center mb-20 px-8 sm:px-24 md:px-48">
          谁在使用它？
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-5 xl:gap-10 px-6 xl:px-0 items-center">
          {testimonialsData.map((testimonial, index) => (
            <div
              className="w-11/12 sm:w-4/5 md:w-[560px] lg:w-1/3 main-border-gray-darker rounded-xl bg-bgDark3 flex flex-col px-6 py-4"
              key={`${testimonial.customerName}-${index}`}
            >
              <div className="flex mb-2">
                <QuoteIcon />
              </div>
              <div className="content-text-white">"{testimonial.content}"</div>
              <div className="flex mt-4 mb-2 xl:mt-8 xl:mb-4">
                <div>
                  <img
                    src={testimonial.image.src}
                    alt="Customer avatar"
                    width="45px"
                    height="5px"
                    aria-label={testimonial.customerName}
                  />
                </div>
                <div className="flex flex-col ml-4">
                  <div className="content-text-white font-medium">
                    {testimonial.customerName}
                  </div>
                  <div className="content-text-gray">
                    {testimonial.customerTitle}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);
