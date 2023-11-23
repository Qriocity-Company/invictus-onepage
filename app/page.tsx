"use client";

import { sendEmail } from "@/action/sendmail";
import logo from "@/public/logo.png";
import Image from "next/image";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";
import icon1 from "@/public/design1.png";
import { toast } from "react-hot-toast/headless";

export default function Home() {
  async function onSubmit(event: any) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget)
    console.log(formData)
    const { data, error } = await sendEmail(formData);
    if (error) {
      toast.error(error);
      return;
    }
    toast.success("Thanks you, you will be notified for any future updates")
  }

  return (
    <section className="relative w-screen h-screen flex justify-center items-center flex-col ">
      {/* <motion.div
        className=" absolute top-[300px] left-[80px] -z-40"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ease: "linear", duration: 0.4, delay: 2 }}
      >
        <Image src={icon1} alt="logo" width={150} height={150} />
      </motion.div>

      <motion.div
        className=" absolute top-[150px] left-[200px] -z-40"
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ease: "linear", duration: 0.4, delay: 2.4 }}
      >
        <Image src={icon1} alt="logo" width={150} height={150} />
      </motion.div>
      <motion.div
        className=" absolute top-[150px] right-[200px] -z-40"
        initial={{ y: -70, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ease: "linear", duration: 0.4, delay: 2.8 }}
      >
        <Image src={icon1} alt="logo" width={150} height={150} />
      </motion.div>
      <motion.div
        className=" absolute top-[50px] right-[300px] -z-40"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ease: "linear", duration: 0.4, delay: 2.4 }}
      >
        <Image src={icon1} alt="logo" width={150} height={150} />
      </motion.div>
      <motion.div
        className=" absolute top-[300px] right-[250px] -z-40"
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ease: "linear", duration: 0.4, delay: 2 }}
      >
        <Image src={icon1} alt="logo" width={150} height={150} />
      </motion.div> */}



      <div className="flex justify-center items-center flex-col gap-5 mx-[15%] z-10">
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ease: "linear", duration: 0.5 }}
        >
          <Image src={logo} alt="logo" width={350} height={150} />
        </motion.div>
        <motion.h1
          className=" text-center flex justify-center items-center font-Poppins text-transparent bg-clip-text bg-gradient-to-r from-[#1f7055] font-semibold to-[#0be09a] text-[24px] md:text-[55px] leading-6 md:leading-[56px] pb-4"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ease: "linear", delay: 0.8, duration: 0.4 }}
        >
          We are <br />
          launching soon
        </motion.h1>
        <motion.p
          className=" text-[10px] md:text-[12px]  text-[#828282] font-Roboto w-[80%] text-center leading-6"
          style={{ opacity: 1, transform: "translateY(0px) translateZ(0px)" }}
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ease: "linear", delay: 1.5, duration: 0.2 }}
        >
          We're currently working hard on this page. Subscribe our newsletter to
          get an update when it'll be live.
        </motion.p>
        <motion.span
          className="font-Poppins text-[18px] md:text-[38px] text-[#232323] font-semibold"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "linear", delay: 1.8, duration: 0.5 }}
        >
          You are good to go !
        </motion.span>
      </div>
      <div className="flex justify-center items-center ">
        <motion.h1
          className="-z-10 font-Poppins text-white text-[48px]  md:text-[60px] lg:text-[120px] drop-shadow-md font-bold lg:-mt-8 -mt-4 text-shadow-md"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ease: "linear", delay: 0.8, duration: 0.5 }}
        >
          COMING SOON
        </motion.h1>
      </div>
      <footer className="bg-white w-full flex flex-col gap-5 lg:-mt-20 md:-mt-10 -mt-8 justify-center items-center p-20  h-screen ">
        <div className="w-[350px] border rounded-md">
          <form className="flex gap-3  p-3" onSubmit={onSubmit}>
            <input
              type="email"
              name="senderEmail"
              placeholder="Your email address "
              className="text-[12px] flex-[7]"
              style={{ outline: "none" }}
            />
            <div className=" text-[#828282]">|</div>
            <button
              className="text-[12px] text-[#232323]  px-4 font-Poppins"
              type="submit"
            >
              NOTIFY
            </button>
          </form>
        </div>
        <div className="flex gap-5 ">
          <FaFacebookF className="hover:text-green-600 cursor-pointer" />
          <FaXTwitter className="hover:text-green-600 cursor-pointer" />
          <FaInstagram className="hover:text-green-600 cursor-pointer" />
          <FaLinkedinIn className="hover:text-green-600 cursor-pointer" />
        </div>
      </footer>
    </section>
  );
}
