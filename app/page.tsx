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
    const formData = new FormData(event.currentTarget);
    console.log(formData.get("senderEmail"));
    const { data, error } = await sendEmail(formData);
    if (error) {
      toast.error(error);
      return;
    }
    toast.success("Thanks you, you will be notified for any future updates");
  }

  return (
    <section className="relative w-screen h-screen flex justify-center items-center flex-col ">
      <div className="flex justify-center items-center flex-col gap-5 mx-[15%] z-10 mt-28 md:mt-80 lg:mt-40">
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ease: "linear", duration: 0.5 }}
        >
          <Image src={logo} alt="logo" width={150} className="" />
        </motion.div>
        <motion.h1
          className=" text-center flex justify-center items-center font-Poppins text-transparent bg-clip-text bg-gradient-to-r from-[#1f7055] font-semibold to-[#0be09a] text-[32px] md:text-[55px] leading-7 md:leading-[56px] pb-4"
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
          We&apos;re currently working hard on this page. Subscribe our
          newsletter to get an update when it&apos;ll be live.
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
          className="-z-10 font-Poppins text-white text-[48px]  md:text-[90px] lg:text-[120px] drop-shadow-md font-bold lg:-mt-8 -mt-4 text-shadow-md"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ease: "linear", delay: 0.8, duration: 0.5 }}
        >
          COMING SOON
        </motion.h1>
      </div>
      <footer className="bg-white w-full flex flex-col gap-5 lg:-mt-20 md:-mt-16 -mt-8 justify-center items-center p-20  h-screen ">
        <motion.div className="mail-div w-[350px] border rounded-md "
         initial={{ x: -200, opacity: 0 }}
         animate={{ x: 0, opacity: 1 }}
         transition={{ type: "spring", delay: 2.5, duration: 0.5 }}
         >
          <form className="flex gap-3  p-3" onSubmit={onSubmit}>
            <input
              type="email"
              name="senderEmail"
              placeholder="Your email address "
              className="text-[12px] flex-[7] "
              style={{ outline: "none" }}
            />
            <div className=" text-[#828282]">|</div>
            <button
              className="text-[12px] text-[#232323]  px-4 font-Poppins"
              type="submit"
            >
              NOTIFY ME
            </button>
          </form>
        </motion.div>
        <div className="flex gap-5 ">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", delay: 1.8, duration: 0.5 }}
          >
            {" "}
            <FaFacebookF className="hover:text-green-600 cursor-pointer" />
          </motion.div>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", delay: 1.9, duration: 0.5 }}
          >
            <FaXTwitter className="hover:text-green-600 cursor-pointer" />
          </motion.div>
          <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", delay: 2, duration: 0.5 }}
          >
          <a href="https://www.instagram.com/invictusglobaltech/">
            {" "}
            <FaInstagram className="hover:text-green-600 cursor-pointer" />
          </a>
          </motion.div>
          <motion.div
           initial={{ y: 50, opacity: 0 }}
           animate={{ y: 0, opacity: 1 }}
           transition={{ type: "spring", delay: 2.1, duration: 0.5 }}
          >
          <a href="https://www.linkedin.com/company/invictus-global-tech/mycompany/?viewAsMember=true">
            <FaLinkedinIn className="hover:text-green-600 cursor-pointer" />
          </a>
          </motion.div>
        </div>
      </footer>
    </section>
  );
}
