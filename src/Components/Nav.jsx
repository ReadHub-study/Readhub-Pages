import React, { useState } from "react";
import readhubLogo from "/readhub_logo.svg";
import { Sling as Hamburger } from "hamburger-react";
const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="shadow-[5px_5px_10px_0px_#007dfc26] fixed w-full lg:rounded-full lg:w-8/10  lg:top-10 lg:self-center lg:shadow-[-2px_-2px_4px_0px_#fafbff,2px_2px_4px_0px_#007dfc26]">
      <nav className="lg:h-20 lg:flex">
        <div className="bg-bg flex w-full lg:rounded-full justify-between items-center shadow-[inset_-3px_-3px_6px_0px_#fafbff,inset_3px_0px_6px_0px_#007dfc26] lg:shadow-[inset_-2px_-2px_4px_0px_#fafbff,inset_2px_2px_4px_0px_#007dfc26]">
          <div className="flex p-3 lg:items-center lg:ml-5">
            <div className="w-10 h-10 lg:w-20 lg:h-15 lg:rounded-[12px] overflow-hidden">
              <img src={readhubLogo} alt="Logo" className="lg:mt-[-10px]" />
            </div>
            <p className="text-[26px] font-semibold lg:font-bold pl-1">
              ReadHub
            </p>
          </div>

          <div className="max-lg:hidden">
            <button className="rounded-[100px] hover:shadow-[-3px_-3px_6px_0px_#fafbff,3px_3px_6px_0px_#007dfc26] h-[50px] hover:cursor-pointer flex items-center justify-center w-100 mr-5 hover:text-[#2d80f9] transition-all duration-300 text-[18px]">
              Join Our Waitlist
            </button>
          </div>
          <div className="lg:hidden">
            <Hamburger
              size={25}
              toggle={() => {
                setIsOpen(!isOpen);
              }}
              toggled={isOpen}
            />
          </div>
        </div>
      </nav>
      {isOpen && (
        <div className="w-full min-h-20 bg-bg p-3">
          <div>
            <button
              onClick={() => {
                setIsOpen(!isOpen);
              }}
              className="rounded-[100px] shadow-[-3px_-3px_6px_0px_#fafbff,3px_3px_6px_0px_#007dfc26] w-full h-[50px] hover:cursor-pointer"
            >
              Join Our Waitlist
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Nav;
