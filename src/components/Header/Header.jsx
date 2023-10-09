import React from "react";
import { ReactComponent as MainIcon } from "../../icons/bulldozer2.svg";
import { ReactComponent as Cart } from "../../icons/shopping-cart.svg";
import Button from "../UI/Button/Button";
import Navbar from "./Navbar/Navbar";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="my-0 flex justify-between bg-gradient-to-b from-gray-500 to-gray-300 top-0 sticky">
      <Button>
        <Link to="/">
          <MainIcon className="h-24 w-24 ml-10 self-center" />
        </Link>
      </Button>
      <Navbar />
      <Button>
        <Link to="shopping-cart">
          <Cart className="h-10 w-10 mr-10 p-1 self-center bg-transparent block rounded-full  hover:bg-gray-500" />
        </Link>
      </Button>
    </div>
  );
};

export default Header;
