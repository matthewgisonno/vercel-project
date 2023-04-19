"use client";

import NavMobile from "@components/Navigation/NavMobile";
import Navigation from "@components/Navigation/Navigation";
import { Bars3Icon } from "@heroicons/react/24/outline";
import classNames from "classnames";
import { useState } from "react";

interface HeaderProps {
  logoClassName: string;
}

const Header = ({ logoClassName }: HeaderProps): JSX.Element => {
  const [isVisible, setIsVisible] = useState(false);

  const handleMenuOpenClose = (): void => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="sticky top-0 w-full z-40">
      <div className="relative z-10 bg-white shadow-md">
        <div className="container m-auto">
          <div className="h-20 py-5 flex items-center m-auto">
            <div className="flex flex-col items-center ml-5 2xl:hidden flex-0">
              <Bars3Icon onClick={handleMenuOpenClose} className="w-10 h-10" />
              <NavMobile
                isVisible={isVisible}
                handleMenuOpenClose={handleMenuOpenClose}
              />
            </div>

            <div className="flex justify-center flex-1 items-center space-x-4 sm:space-x-10 2xl:space-x-14">
              <div
                className={classNames("text-4xl mr-2 lg:ml-5", logoClassName)}
              >
                Matthew Gisonno
              </div>
              <div className="hidden items-center 2xl:flex">
                <Navigation />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
