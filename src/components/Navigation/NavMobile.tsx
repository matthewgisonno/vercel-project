"use client";

import { Transition } from "@headlessui/react";
import { Fragment } from "react";
import Navigation from "./Navigation";
import { XMarkIcon } from "@heroicons/react/24/outline";

interface NavMobileProps {
  isVisible: boolean;
  handleMenuOpenClose: () => void;
}

const NavMobile = ({
  isVisible,
  handleMenuOpenClose,
}: NavMobileProps): JSX.Element => {
  return (
    <Transition show={isVisible} as={Fragment}>
      <div className="relative z-50">
        <Transition.Child
          as={Fragment}
          enter=" duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave=" duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div
            className="fixed inset-0 bg-neutral-900 bg-opacity-50 "
            onClick={handleMenuOpenClose}
          />
        </Transition.Child>

        <Transition.Child
          as={Fragment}
          enter="transition duration-100 transform"
          enterFrom="opacity-0 -translate-x-14"
          enterTo="opacity-100 translate-x-0"
          leave="transition duration-150 transform"
          leaveFrom="opacity-100 translate-x-0"
          leaveTo="opacity-0 -translate-x-14"
        >
          <div className="fixed inset-y-0 left-0 max-w-sm overflow-y-auto z-50">
            <div className="flex min-h-full">
              <div className="bg-white w-full max-w-sm overflow-hidden transition-all">
                <button
                  className="ml-auto w-8 h-8 flex items-center justify-center rounded-full text-neutral-700 hover:bg-neutral-100"
                  onClick={handleMenuOpenClose}
                >
                  <span className="sr-only">Close</span>
                  <XMarkIcon className="w-5 h-5" />
                </button>
                <div className="mx-10">
                  <Navigation onCloseMobileMenu={handleMenuOpenClose} />
                </div>
              </div>
            </div>
          </div>
        </Transition.Child>
      </div>
    </Transition>
  );
};

export default NavMobile;
