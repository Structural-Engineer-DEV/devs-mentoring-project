import React from "react";
import Navbar from "./Navbar/Navbar";
import { ReactComponent as MainIcon } from "../../icons/bulldozer2.svg";
import { ReactComponent as Cart } from "../../icons/shopping-cart.svg";
import Button from "../UI/Button/Button";

const Header = () => {
  return (
    <div className="my-0 flex justify-between bg-gradient-to-b from-gray-500 to-gray-300 top-0 sticky">
      <Button content={<MainIcon className="h-24 w-24 ml-10 self-center" />} />

      <Navbar />
      <Button
        content={
          <Cart className="h-10 w-10 mr-10 p-1 self-center bg-transparent block rounded-full  hover:bg-gray-500" />
        }
      />
    </div>
  );
};

export default Header;
