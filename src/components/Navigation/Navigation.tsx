"use client";

import {
  HomeIcon,
  LightBulbIcon,
  FaceSmileIcon,
  ChartBarSquareIcon,
  QuestionMarkCircleIcon,
  ChatBubbleLeftEllipsisIcon,
  InformationCircleIcon,
  StarIcon,
} from "@heroicons/react/24/outline";
import NavItem from "./NavItem";

interface NavigationProps {
  onCloseMobileMenu?: () => void;
}

const Navigation = ({ onCloseMobileMenu }: NavigationProps): JSX.Element => {
  return (
    <ul className="items-center text-base lg:flex space-x-0 lg:space-x-3">
      <li className="shrink-0">
        <NavItem onCloseMobileMenu={onCloseMobileMenu} href="/">
          <HomeIcon className="w-5 h-5 mr-2" />
          Home
        </NavItem>
      </li>
      <li className="shrink-0">
        <NavItem onCloseMobileMenu={onCloseMobileMenu} href="/question-one">
          <LightBulbIcon className="w-5 h-5 mr-2" />
          Question 1
        </NavItem>
      </li>
      <li className="shrink-0">
        <NavItem onCloseMobileMenu={onCloseMobileMenu} href="/question-two">
          <FaceSmileIcon className="w-5 h-5 mr-2" />
          Question 2
        </NavItem>
      </li>
      <li className="shrink-0">
        <NavItem onCloseMobileMenu={onCloseMobileMenu} href="/question-three">
          <ChartBarSquareIcon className="w-5 h-5 mr-2" />
          Question 3
        </NavItem>
      </li>
      <li className="shrink-0">
        <NavItem onCloseMobileMenu={onCloseMobileMenu} href="/question-four">
          <QuestionMarkCircleIcon className="w-5 h-5 mr-2" />
          Question 4
        </NavItem>
      </li>
      <li className="shrink-0">
        <NavItem onCloseMobileMenu={onCloseMobileMenu} href="/question-five">
          <ChatBubbleLeftEllipsisIcon className="w-5 h-5 mr-2" />
          Question 5
        </NavItem>
      </li>
      <li className="shrink-0">
        <NavItem onCloseMobileMenu={onCloseMobileMenu} href="/question-six">
          <InformationCircleIcon className="w-5 h-5 mr-2" />
          Question 6
        </NavItem>
      </li>
      <li className="shrink-0">
        <NavItem onCloseMobileMenu={onCloseMobileMenu} href="/question-seven">
          <StarIcon className="w-5 h-5 mr-2" />
          Question 7
        </NavItem>
      </li>
    </ul>
  );
};

export default Navigation;
