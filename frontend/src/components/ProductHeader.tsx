import React from "react";
import { CgProfile } from "react-icons/cg";
import { IoMdHeart } from "react-icons/io";
import { IoBagAdd } from "react-icons/io5";
import { Link } from "react-router-dom";

// sample
//  < div className="products_page min-h-[50vh] bg-background">
//       <ProductHeader />
//     </div>

/**
 * This is used in products page, product page, cart page, checkout page
 * 
 * @returns ProductHeader which is a navbar for all the product related page
 */
const ProductHeader = () => {
  return ( 
    <div className="navbar bg-background  ps-5 shadow-md shadow-slate-400">
      <div className="navbar-start">
        {/* dropdown menu */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            {/* dropdown icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-background rounded-box z-[1] mt-3 w-52 p-2 shadow [&>li>a]:text-lg"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li className="ndf sm:hidden">
          <details>
            <summary  className="text-lg">User Options</summary>
            <ul className="p-2 [&>li>a]:text-lg">
              <li>
                <Link to="/wishlist">
                  <IoMdHeart />
                </Link>
              </li>
              <li>
                <Link to="/cart">
                  <IoBagAdd />{" "}
                </Link>
              </li>
              <li>
                <Link to="/profile">
                  <CgProfile />
                </Link>
              </li>
            </ul>
          </details></li>
            {/* <li>
          <a>Parent</a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li> */}
            {/* <li><a>Item 3</a></li> */}
          </ul>
        </div>
        <img src="img/logo_.png" alt="logo" />
        <a className="btn btn-ghost text-xl">budCom</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 [&>li>a]:text-lg">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>         

          {/* <li>
        <details>
          <summary>Parent</summary>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </details>
      </li> */}
          {/* <li><a>Item 3</a></li> */}
        </ul>
      </div>
      <div className="hidden sm:flex sm:gap-6 navbar-end lg:pe-20 lg:gap-8 [&>a>*]:text-2xl">
        <Link to="/wishlist">
          <IoMdHeart />
        </Link>
        <Link to="/cart">
          <IoBagAdd />{" "}
        </Link>
        <Link to="/profile">
          <CgProfile />
        </Link>
      </div>
    </div>
  );
};

export default ProductHeader;
