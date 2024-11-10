"use client";
import Link from "next/link";
import React, { useReducer, useState } from "react";

const initialState = {
  activeMenu: "",
  activeSubMenu: "",
  isSidebarOpen: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "TOGGLE_MENU":
      return {
        ...state,

        activeMenu: state.activeMenu === action.menu ? "" : action.menu,
        activeSubMenu:
          state.activeMenu === action.menu ? state.activeSubMenu : "",
      };
    case "TOGGLE_SUB_MENU":
      return {
        ...state,
        activeSubMenu:
          state.activeSubMenu === action.subMenu ? "" : action.subMenu,
      };
    case "TOGGLE_SIDEBAR":
      return {
        ...state,
        isSidebarOpen: !state.isSidebarOpen,
      };
    case "setScrollY":
      return { ...state, scrollY: action.payload };
    default:
      return state;
  }
}

const Header4 = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [state, dispatch] = useReducer(reducer, initialState);

  const collapseMenu = (menu) => {
    dispatch({ type: "TOGGLE_MENU", menu });
  };
  const toggleSubMenu = (subMenu) => {
    dispatch({ type: "TOGGLE_SUB_MENU", subMenu });
  };
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <header className="header-area style-3 d-flex flex-nowrap align-items-center justify-content-between">
        <div className="nav-left">
          <div className="company-logo">
            <Link href="/art-auction">
              <img
                alt="image"
                className="img-fluid"
                src="/assets/img/logo-white.svg"
              />
            </Link>
          </div>
          <div className={`main-menu ${isMenuOpen ? "show-menu" : ""}`}>
            <div className="mobile-logo-area d-lg-none d-flex justify-content-center">
              <div className="mobile-logo-wrap">
                <Link href="/art-auction">
                  <img alt="image" src="/assets/img/logo.svg" />
                </Link>
              </div>
            </div>
            <ul className="menu-list">
              <li
                className={`menu-item-has-children ${state.activeMenu === "home" ? "" : ""
                  }`}
              >
                <Link href="/" className="drop-down">
                  Home
                </Link>
                <i
                  className={`dropdown-icon ${state.activeMenu === "home" ? "bi bi-dash" : "bi bi-plus"
                    }`}
                  onClick={() => collapseMenu("home")}
                />
                <ul
                  className={`sub-menu ${state.activeMenu === "home" ? "d-block" : ""
                    }`}
                >
                  <li >
                    <Link href="/">Multipurpose 01</Link>
                  </li>
                  <li>
                    <Link href="/car-auction">Car Auction</Link>
                  </li>
                  <li>
                    <Link href="/antiques-auction">Antiques Auction</Link>
                  </li>
                  <li className="active">
                    <Link href="/art-auction">Art Auction</Link>
                  </li>
                  <li>
                    <Link href="/gadget-and-technology">
                      Gadget &amp; Technology
                    </Link>
                  </li>
                  <li>
                    <Link href="/book-and-comic">Book &amp; Comic</Link>
                  </li>
                  <li>
                    <Link href="/multipurpose2">Multipurpose 02</Link>
                  </li>
                </ul>
              </li>
              <li
                className={`menu-item-has-children ${state.activeMenu === "auction" ? "active" : ""
                  }`}
              >
                <Link href="/art-auction/auction-grid" className="drop-down">
                  Auctions
                </Link>
                <i
                  className={`dropdown-icon ${state.activeMenu === "auction" ? "bi bi-dash" : "bi bi-plus"
                    }`}
                  onClick={() => collapseMenu("auction")}
                />
                <ul
                  className={`sub-menu ${state.activeMenu === "auction" ? "d-block" : ""
                    }`}
                >
                  <li>
                    <Link href="/art-auction/auction-grid">Auctions Grid</Link>
                  </li>
                  <li>
                    <Link href="/art-auction/auction-sidebar">
                      Auctions Sidebar
                    </Link>
                  </li>
                  <li>
                    <Link href="/art-auction/auction-details">
                      Auctions Details Style 01
                    </Link>
                  </li>
                  <li>
                    <Link href="/art-auction/auction-details2">
                      Auctions Details Style 02
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="menu-item-has-children">
                <Link href="/art-auction/blog-grid" className="drop-down">
                  Blog
                </Link>
                <i
                  className={`dropdown-icon ${state.activeMenu === "blog" ? "bi bi-dash" : "bi bi-plus"
                    }`}
                  onClick={() => collapseMenu("blog")}
                />
                <ul
                  className={`sub-menu ${state.activeMenu === "blog" ? "d-block" : ""
                    }`}
                >
                  <li>
                    <Link href="/art-auction/blog-grid">Blog Grid</Link>
                  </li>
                  <li>
                    <Link href="/art-auction/blog-standard">Blog Standard</Link>
                  </li>
                  <li>
                    <Link href="/art-auction/blog-details">Blog Details</Link>
                  </li>
                </ul>
              </li>
              <li className="menu-item-has-children">
                <a href="#" className="drop-down">
                  Pages
                </a>
                <i
                  className={`dropdown-icon ${state.activeMenu === "page" ? "bi bi-dash" : "bi bi-plus"
                    }`}
                  onClick={() => collapseMenu("page")}
                />
                <ul
                  className={`sub-menu ${state.activeMenu === "page" ? "d-block" : ""
                    }`}
                >
                  <li>
                    <Link href="/art-auction/about">About</Link>
                  </li>
                  <li>
                    <Link href="/art-auction/category">Category</Link>
                  </li>
                  <li>
                    <Link href="/art-auction/store-list">Seller</Link>
                    <i
                      className="d-lg-flex d-none bi bi-chevron-right dropdown-icon"
                      onClick={() => toggleSubMenu("seller")}
                    />
                    <i
                      className={`d-lg-none d-flex bi bi-${state.activeSubMenu === "seller" ? "dash" : "plus"
                        } dropdown-icon`}
                      onClick={() => toggleSubMenu("seller")}
                    />
                    <ul
                      className={`sub-menu ${state.activeSubMenu === "seller" ? "d-block" : ""
                        }`}
                    >
                      <li>
                        <Link href="/art-auction/store-list">Seller List</Link>
                      </li>
                      <li>
                        <Link href="/art-auction/store-details">
                          Seller Details
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link href="/art-auction/how-to-sell">How To Sell</Link>
                  </li>
                  <li>
                    <Link href="/art-auction/how-to-buy">How to Bid</Link>
                  </li>
                  <li>
                    <Link href="/art-auction/dashboard">Dashbaord</Link>
                  </li>
                  <li>
                    <Link href="/art-auction/faq">Faqs</Link>
                  </li>
                  <li>
                    <Link href="/art-auction/error">Error</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href="/art-auction/contact" className="drop-down">
                  Contact
                </Link>
              </li>
            </ul>
            <ul className="contact-area d-lg-none d-flex">
              <li>
                <a href="mailto:info@example.com">
                  <svg
                    width={20}
                    height={16}
                    viewBox="0 0 20 16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M18.2422 0.96875H1.75781C0.786602 0.96875 0 1.76023 0 2.72656V13.2734C0 14.2455 0.792383 15.0312 1.75781 15.0312H18.2422C19.2053 15.0312 20 14.2488 20 13.2734V2.72656C20 1.76195 19.2165 0.96875 18.2422 0.96875ZM17.996 2.14062L11.243 8.85809C10.9109 9.19012 10.4695 9.37293 10 9.37293C9.53047 9.37293 9.08906 9.19008 8.75594 8.85699L2.00398 2.14062H17.996ZM1.17188 13.0349V2.96582L6.23586 8.00312L1.17188 13.0349ZM2.00473 13.8594L7.06672 8.82957L7.9284 9.68672C8.48176 10.2401 9.21746 10.5448 10 10.5448C10.7825 10.5448 11.5182 10.2401 12.0705 9.68781L12.9333 8.82957L17.9953 13.8594H2.00473ZM18.8281 13.0349L13.7641 8.00312L18.8281 2.96582V13.0349Z" />
                  </svg>
                  info@example.com
                </a>
              </li>
              <li>
                <a href="#">
                  <svg
                    width={20}
                    height={20}
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M18.5956 8.7197C18.5244 6.5458 17.6262 4.48105 16.0844 2.94689C14.4584 1.32064 12.2975 0.425323 9.99999 0.425323C5.35968 0.425323 1.56812 4.11876 1.40468 8.7197C1.04688 8.87819 0.742722 9.13705 0.529067 9.46491C0.315412 9.79277 0.201428 10.1756 0.200928 10.5669V12.8363C0.201507 13.3722 0.414645 13.8859 0.793578 14.2649C1.17251 14.6438 1.68629 14.8569 2.22218 14.8575C2.5689 14.8571 2.90131 14.7192 3.14648 14.474C3.39166 14.2288 3.52958 13.8964 3.52999 13.5497V9.85314C3.52999 9.17595 3.01062 8.62376 2.3503 8.55814C2.59405 4.5497 5.93093 1.36282 9.99999 1.36282C12.0475 1.36282 13.9728 2.16095 15.4219 3.61001C16.7525 4.94064 17.5312 6.67501 17.6484 8.55845C16.9887 8.6247 16.4703 9.17657 16.4703 9.85314V13.5494C16.4703 14.2322 16.9978 14.7878 17.6659 14.8456V15.7797C17.6653 16.2855 17.4642 16.7704 17.1065 17.128C16.7488 17.4856 16.2639 17.6867 15.7581 17.6872H14.3453C14.2501 17.4095 14.0702 17.1686 13.8311 16.9983C13.5919 16.8281 13.3054 16.737 13.0119 16.7378H11.5556C11.3466 16.7378 11.1459 16.7822 10.9622 16.8678C10.7161 16.9815 10.5077 17.1632 10.3616 17.3914C10.2154 17.6196 10.1375 17.8849 10.1372 18.1559C10.1372 18.5353 10.285 18.8916 10.5528 19.1581C10.6841 19.2905 10.8403 19.3954 11.0125 19.4669C11.1846 19.5383 11.3692 19.5749 11.5556 19.5744H13.0119C13.6156 19.5744 14.1478 19.1841 14.3462 18.6247H15.7581C17.3272 18.6247 18.6034 17.3484 18.6034 15.7797V14.6788C18.9591 14.5194 19.2612 14.2606 19.4733 13.9337C19.6854 13.6067 19.7985 13.2254 19.7991 12.8356V10.5663C19.7991 9.74314 19.3034 9.03439 18.5956 8.7197ZM2.59218 9.85314V13.5494C2.59218 13.7534 2.42624 13.9197 2.22187 13.9197C1.93454 13.9194 1.65907 13.8051 1.4559 13.6019C1.25273 13.3987 1.13845 13.1233 1.13812 12.8359V10.5666C1.13845 10.2792 1.25273 10.0038 1.4559 9.80061C1.65907 9.59744 1.93454 9.48315 2.22187 9.48282C2.42624 9.48282 2.59218 9.64907 2.59218 9.85314ZM13.4822 18.2566C13.4589 18.3642 13.3995 18.4606 13.3139 18.5299C13.2284 18.5992 13.1217 18.6372 13.0116 18.6375H11.5553C11.4272 18.6375 11.3069 18.5875 11.215 18.4956C11.1703 18.4512 11.1348 18.3984 11.1107 18.3402C11.0865 18.282 11.0742 18.2196 11.0744 18.1566C11.0747 18.0292 11.1255 17.907 11.2156 17.817C11.3057 17.7269 11.4279 17.6762 11.5553 17.6759H13.0116C13.1397 17.6759 13.26 17.7256 13.3516 17.8175C13.4422 17.9078 13.4922 18.0284 13.4922 18.1566C13.4925 18.1909 13.4887 18.2253 13.4822 18.2566ZM18.8616 12.8359C18.8612 13.1233 18.7469 13.3987 18.5438 13.6019C18.3406 13.8051 18.0651 13.9194 17.7778 13.9197C17.6796 13.9196 17.5855 13.8806 17.516 13.8111C17.4466 13.7417 17.4076 13.6476 17.4075 13.5494V9.85314C17.4075 9.64907 17.5734 9.48282 17.7778 9.48282C18.0651 9.48315 18.3406 9.59744 18.5438 9.80061C18.7469 10.0038 18.8612 10.2792 18.8616 10.5666V12.8359Z" />
                    <path d="M13.0353 12.9975C13.5619 12.9969 14.0668 12.7875 14.4391 12.4151C14.8115 12.0427 15.0209 11.5379 15.0215 11.0113V6.96406C15.0215 6.43469 14.8146 5.93594 14.439 5.56031C14.0634 5.18469 13.565 4.97781 13.0353 4.97781H6.96464C6.43804 4.97839 5.93316 5.18784 5.56079 5.56021C5.18842 5.93258 4.97897 6.43746 4.97839 6.96406V11.0113C4.97897 11.5379 5.18842 12.0427 5.56079 12.4151C5.93316 12.7875 6.43804 12.9969 6.96464 12.9975H7.00183V14.0463C7.00121 14.1743 7.02592 14.3012 7.07453 14.4197C7.12313 14.5382 7.19468 14.6459 7.28506 14.7366C7.37544 14.8273 7.48287 14.8993 7.60116 14.9484C7.71945 14.9974 7.84627 15.0226 7.97433 15.0225C8.10231 15.0228 8.22903 14.9972 8.34693 14.9475C8.46483 14.8977 8.5715 14.8247 8.66058 14.7328L10.4053 12.9975H13.0353ZM9.88183 12.1963L7.99371 14.0741C7.98527 14.0828 7.97902 14.0894 7.96121 14.0816C7.93964 14.0728 7.93964 14.0588 7.93964 14.0463V12.5288C7.93964 12.4044 7.89026 12.2852 7.80235 12.1973C7.71444 12.1094 7.59521 12.06 7.47089 12.06H6.96496C6.68691 12.0597 6.42035 11.9491 6.22374 11.7525C6.02714 11.5559 5.91654 11.2893 5.91621 11.0113V6.96406C5.91654 6.68602 6.02714 6.41946 6.22374 6.22285C6.42035 6.02624 6.68691 5.91564 6.96496 5.91531H13.0356C13.315 5.91531 13.5778 6.02469 13.7765 6.22313C13.9753 6.42188 14.0843 6.685 14.0843 6.96406V11.0113C14.084 11.2893 13.9734 11.5559 13.7768 11.7525C13.5802 11.9491 13.3136 12.0597 13.0356 12.06H10.2125C10.0884 12.06 9.96964 12.1091 9.88183 12.1963Z" />
                    <path d="M7.72281 8.37094C7.34156 8.37094 7.03125 8.68157 7.03125 9.0625C7.03125 9.44344 7.34187 9.75407 7.72281 9.75407C8.10437 9.75407 8.415 9.44344 8.415 9.0625C8.415 8.68157 8.10469 8.37094 7.72281 8.37094ZM9.99969 8.37094C9.61844 8.37094 9.30812 8.68157 9.30812 9.0625C9.30812 9.44344 9.61875 9.75407 9.99969 9.75407C10.3816 9.75407 10.6919 9.44344 10.6919 9.0625C10.6919 8.68157 10.3816 8.37094 9.99969 8.37094ZM12.2766 8.37094C11.8953 8.37094 11.585 8.68157 11.585 9.0625C11.585 9.44344 11.8956 9.75407 12.2766 9.75407C12.6581 9.75407 12.9688 9.44344 12.9688 9.0625C12.9688 8.68157 12.6581 8.37094 12.2766 8.37094Z" />
                  </svg>
                  Customer support
                </a>
              </li>
            </ul>
            <form className="d-lg-none d-flex">
              <div className="form-inner">
                <input type="text" placeholder="Search your product..." />
                <button className="search-btn">
                  <i className="bi bi-search" />
                </button>
              </div>
            </form>
            <div className="btn-area d-lg-none d-flex">
              <a href="#" className="login-btn btn-hover">
                <svg
                  width={15}
                  height={19}
                  viewBox="0 0 15 19"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M11.8751 4.17663C11.875 5.00255 11.6183 5.8099 11.1375 6.49658C10.6567 7.18326 9.97335 7.71843 9.17389 8.03442C8.37443 8.35041 7.49475 8.43303 6.6461 8.27184C5.79744 8.11064 5.01792 7.71286 4.40611 7.12881C3.79429 6.54475 3.37766 5.80064 3.20889 4.99058C3.04012 4.18052 3.1268 3.34088 3.45796 2.57783C3.78912 1.81479 4.34989 1.16261 5.06937 0.703757C5.78884 0.244909 6.6347 7.28125e-09 7.5 0C8.07459 3.64089e-05 8.64354 0.108097 9.17438 0.318012C9.70521 0.527927 10.1875 0.835585 10.5938 1.22342C11.0001 1.61126 11.3223 2.07167 11.5422 2.57839C11.762 3.0851 11.8752 3.62818 11.8751 4.17663ZM7.5 9.58844C6.26105 9.58705 5.0354 9.83216 3.90124 10.3082C2.76708 10.7842 1.74932 11.4806 0.912902 12.353C-0.563582 13.8885 -0.20194 16.3311 1.6571 17.4243C3.41487 18.4546 5.43728 19 7.5 19C9.56272 19 11.5851 18.4546 13.3429 17.4243C15.2019 16.3311 15.5636 13.8885 14.0871 12.353C13.2507 11.4806 12.2329 10.7842 11.0988 10.3082C9.9646 9.83216 8.73895 9.58705 7.5 9.58844Z" />
                </svg>
                My Account
                <span style={{ top: '40.5px', left: '84.2344px' }} />
              </a>
            </div>
          </div>
        </div>
        <div className="nav-right d-flex jsutify-content-end align-items-center">
          <form className="d-xl-flex d-none">
            <div className="form-inner">
              <input type="text" placeholder="Search your product..." />
              <button className="search-btn">
                <i className="bi bi-search" />
              </button>
            </div>
          </form>
          <div className="search-bar d-xl-none d-lg-block d-none">
            <div className="search-btn">
              <i className="bi bi-search" />
            </div>
            <div className="search-input">
              <div className="search-close" />
              <form>
                <div className="search-group">
                  <div className="form-inner2">
                    <input type="text" placeholder="Search your product..." />
                    <button type="submit">
                      <svg
                        width={16}
                        height={16}
                        viewBox="0 0 16 16"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M7.67458 2.95934C5.06925 2.95934 2.95925 5.06868 2.95925 7.66868C2.95925 10.2687 5.06925 12.3773 7.67458 12.3773C8.97459 12.3773 10.1499 11.8533 11.0033 11.004C11.4434 10.5674 11.7926 10.0477 12.0307 9.47524C12.2687 8.90273 12.3908 8.28869 12.3899 7.66868C12.3899 5.06868 10.2799 2.95934 7.67458 2.95934ZM1.33325 7.66868C1.33325 4.16868 4.17325 1.33334 7.67458 1.33334C11.1759 1.33334 14.0159 4.16868 14.0159 7.66868C14.0178 9.07185 13.5516 10.4356 12.6913 11.544L14.4279 13.2787C14.5084 13.353 14.573 13.4427 14.618 13.5426C14.6629 13.6424 14.6872 13.7503 14.6894 13.8598C14.6916 13.9693 14.6717 14.0781 14.6309 14.1797C14.59 14.2813 14.5291 14.3736 14.4517 14.4511C14.3743 14.5286 14.2821 14.5896 14.1805 14.6306C14.079 14.6716 13.9702 14.6916 13.8607 14.6895C13.7512 14.6874 13.6433 14.6632 13.5434 14.6184C13.4435 14.5736 13.3536 14.5091 13.2793 14.4287L11.5393 12.6913C10.4316 13.544 9.07244 14.0054 7.67458 14.0033C4.17325 14.0033 1.33325 11.168 1.33325 7.66868Z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <a href="#" className="login-btn btn-hover d-lg-flex d-none">
            <svg
              width={15}
              height={19}
              viewBox="0 0 15 19"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M11.8751 4.17663C11.875 5.00255 11.6183 5.8099 11.1375 6.49658C10.6567 7.18326 9.97335 7.71843 9.17389 8.03442C8.37443 8.35041 7.49475 8.43303 6.6461 8.27184C5.79744 8.11064 5.01792 7.71286 4.40611 7.12881C3.79429 6.54475 3.37766 5.80064 3.20889 4.99058C3.04012 4.18052 3.1268 3.34088 3.45796 2.57783C3.78912 1.81479 4.34989 1.16261 5.06937 0.703757C5.78884 0.244909 6.6347 7.28125e-09 7.5 0C8.07459 3.64089e-05 8.64354 0.108097 9.17438 0.318012C9.70521 0.527927 10.1875 0.835585 10.5938 1.22342C11.0001 1.61126 11.3223 2.07167 11.5422 2.57839C11.762 3.0851 11.8752 3.62818 11.8751 4.17663ZM7.5 9.58844C6.26105 9.58705 5.0354 9.83216 3.90124 10.3082C2.76708 10.7842 1.74932 11.4806 0.912902 12.353C-0.563582 13.8885 -0.20194 16.3311 1.6571 17.4243C3.41487 18.4546 5.43728 19 7.5 19C9.56272 19 11.5851 18.4546 13.3429 17.4243C15.2019 16.3311 15.5636 13.8885 14.0871 12.353C13.2507 11.4806 12.2329 10.7842 11.0988 10.3082C9.9646 9.83216 8.73895 9.58705 7.5 9.58844Z" />
            </svg>
            My Account
            <span style={{ top: '40.5px', left: '84.2344px' }} />
          </a>
          <div
            className={`sidebar-button mobile-menu-btn ${isMenuOpen ? "active" : ""
              } `}
            onClick={toggleMenu}
          >
            <span />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header4;
