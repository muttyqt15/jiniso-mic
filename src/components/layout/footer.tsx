import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full">
      <div className="w-full h-64 relative">
        <Image src="/images/footer.png" alt="footer" fill />
      </div>
      <div className="h-40 p-6 px-20 lg:px-28 bg-navy">
        <div className="flex justify-between items-center gap-16">
          <div className="flex flex-wrap gap-4 w-1/2 lg:w-3/5">
            <button className="text-slate-500 text-xs hover:text-slate-400 animate-ease">
              About Us
            </button>
            <button className="text-slate-500 text-xs hover:text-slate-400 animate-ease">
              Contact Us
            </button>
            <button className="text-slate-500 text-xs hover:text-slate-400 animate-ease">
              How to Order
            </button>
            <button className="text-slate-500 text-xs hover:text-slate-400 animate-ease">
              Payment
            </button>
            <button className="text-slate-500 text-xs hover:text-slate-400 animate-ease">
              Track My Order
            </button>
            <button className="text-slate-500 text-xs hover:text-slate-400 animate-ease">
              FAQ
            </button>
            <button className="text-slate-500 text-xs hover:text-slate-400 animate-ease">
              Privacy Policy
            </button>
            <button className="text-slate-500 text-xs hover:text-slate-400 animate-ease">
              Return & Exchange
            </button>
            <button className="text-slate-500 text-xs hover:text-slate-400 animate-ease">
              Terms & Conditions
            </button>
          </div>
          <Image
            src="/images/partners.svg"
            alt="partners"
            width={400}
            height={200}
            className="w-64"
          />
        </div>
        <p className="text-xs text-[#F6F4FF] mt-6 tracking-wider">&copy; 2024 JINISO. ALL RIGHTS RESERVED</p>
      </div>
    </footer>
  );
};

export default Footer;
