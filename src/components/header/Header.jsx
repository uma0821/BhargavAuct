"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useReducer, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Loader from "../loader/Loader";
// const initialState = {
//   activeMenu: "",
//   activeSubMenu: "",
//   isSidebarOpen: false,
// };

const initialState = {
  activeMenu: "",
  activeSubMenu: "",
  isSidebarOpen: false,
  token: null,
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
    case "SET_TOKEN":
      return {
        ...state,
        token: action.payload,
      };
    default:
      return state;
  }
}

const Header = ({adminLogin}) => {
  const router = useRouter();

  const [isMenuOpen, setMenuOpen] = useState(false);
  const [state, dispatch] = useReducer(reducer, initialState);
  const pathName = usePathname();
  const [loading, setLoading] = useState(false);
  const collapseMenu = (menu) => {
    dispatch({ type: "TOGGLE_MENU", menu });
  };
  const toggleSubMenu = (subMenu) => {
    dispatch({ type: "TOGGLE_SUB_MENU", subMenu });
  };
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  const handleLanguageClick = (index) => {
    setMenuOpen(false); // Close the menu when an item is clicked
  };
  
  useEffect(() => {

    const fetchUserProfile = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        return;
      }

      setLoading(true);
      try {
        const response = await fetch("/api/profile", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        if (response.status === 401) {
          // Token is expired or invalid
          console.log("Token expired");
          localStorage.removeItem("token"); // Remove the expired token
          localStorage.removeItem("handlename"); // Remove the expired handlename
        }


        if(response.status === 200) {
          dispatch({ type: "SET_TOKEN", payload: token });
        }

      } catch (error) {
        console.error("Error fetching profile:", error);
      } finally {
        setLoading(false);
      }
    };

    if(!adminLogin) {
      fetchUserProfile();
    }

    // const storedToken = localStorage.getItem("token");
    
    // if (storedToken) {
    //   dispatch({ type: "SET_TOKEN", payload: storedToken });
    // } 
  }, [dispatch]);

  return (
    <>
    {loading && <Loader />}
    <div className="header-topbar-area">
      <div className="topbar-area">
        <div className="container">
          <div className="topbar-wrap">
            <div className="topbar-left">
              <ul className="contact-area">
                <li>
                  <a href="mailto:info@bhargavaauctions.com">
                    <svg
                      width={20}
                      height={16}
                      viewBox="0 0 20 16"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M18.2422 0.96875H1.75781C0.786602 0.96875 0 1.76023 0 2.72656V13.2734C0 14.2455 0.792383 15.0312 1.75781 15.0312H18.2422C19.2053 15.0312 20 14.2488 20 13.2734V2.72656C20 1.76195 19.2165 0.96875 18.2422 0.96875ZM17.996 2.14062L11.243 8.85809C10.9109 9.19012 10.4695 9.37293 10 9.37293C9.53047 9.37293 9.08906 9.19008 8.75594 8.85699L2.00398 2.14062H17.996ZM1.17188 13.0349V2.96582L6.23586 8.00312L1.17188 13.0349ZM2.00473 13.8594L7.06672 8.82957L7.9284 9.68672C8.48176 10.2401 9.21746 10.5448 10 10.5448C10.7825 10.5448 11.5182 10.2401 12.0705 9.68781L12.9333 8.82957L17.9953 13.8594H2.00473ZM18.8281 13.0349L13.7641 8.00312L18.8281 2.96582V13.0349Z" />
                    </svg>
                    info@bhargavaauctions.com
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
            </div>
            <div className="topbar-right">
              <ul>
                <li>
                  <Link href="/how-to-buy">HOW TO BID</Link>
                </li>
                <li>
                  <Link href="/how-to-sell">SELL YOUR ITEM</Link>
                </li>
              </ul>
              <div className="language-area">
                <div className="language-btn">
                  <svg
                    width={18}
                    height={18}
                    viewBox="0 0 18 18"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M16.0586 2.97675H9.09784L8.89361 1.34033C8.79596 0.551157 8.23314 0 7.5249 0H1.54451C0.788176 0 0.172852 0.615324 0.172852 1.37166V13.2157C0.172852 13.9721 0.788176 14.5874 1.54451 14.5874H6.17805V16.2317C6.17805 17.2067 6.97177 18 7.94736 18H16.0586C17.0336 18 17.8269 17.2067 17.8269 16.2317V4.74606C17.8269 3.77043 17.0336 2.97675 16.0586 2.97675ZM0.683089 13.2157V1.37163C0.683089 0.896624 1.06951 0.510202 1.54451 0.510202H7.5249C8.04148 0.510202 8.33404 0.972998 8.38727 1.40322L9.969 14.0771H1.54451C1.06951 14.0771 0.683089 13.6907 0.683089 13.2157ZM6.68829 16.2317V14.5873H9.62156L7.01557 17.0769C6.81232 16.8534 6.68829 16.5568 6.68829 16.2317ZM17.3166 16.2317C17.3166 16.9254 16.7523 17.4898 16.0586 17.4898H7.94736C7.77115 17.4899 7.59691 17.4528 7.43603 17.3809L10.4341 14.5167L10.434 14.5165C10.4392 14.5116 10.4444 14.5066 10.4492 14.5011C10.4731 14.474 10.491 14.4421 10.5017 14.4075C10.5124 14.373 10.5156 14.3365 10.5111 14.3007L9.16154 3.48695H16.0586C16.7523 3.48695 17.3166 4.05177 17.3166 4.74606V16.2317ZM16.0761 8.71128C16.0761 8.77894 16.0492 8.84383 16.0014 8.89167C15.9536 8.93951 15.8887 8.96639 15.821 8.96639H14.9616C14.9553 9.12067 14.9426 9.27463 14.9235 9.42787C14.7953 10.4171 14.4029 11.3485 13.8174 12.0605C14.2853 12.5042 14.8142 12.7468 15.3252 12.7468C15.3929 12.7468 15.4578 12.7736 15.5056 12.8215C15.5535 12.8693 15.5803 12.9342 15.5803 13.0019C15.5803 13.0695 15.5535 13.1344 15.5056 13.1823C15.4578 13.2301 15.3929 13.257 15.3252 13.257C14.6686 13.257 14.021 12.9508 13.4725 12.4333C12.9099 12.9674 12.2625 13.257 11.6151 13.257C11.5475 13.257 11.4826 13.2301 11.4348 13.1823C11.3869 13.1344 11.36 13.0695 11.36 13.0019C11.36 12.9342 11.3869 12.8693 11.4348 12.8215C11.4826 12.7736 11.5475 12.7468 11.6151 12.7468C12.1309 12.7468 12.6564 12.5048 13.1239 12.0597C12.6432 11.4769 12.2725 10.7183 12.0917 9.86742C12.0847 9.83465 12.0843 9.80082 12.0904 9.76788C12.0965 9.73493 12.1091 9.70351 12.1273 9.67542C12.1456 9.64732 12.1692 9.62309 12.1968 9.60412C12.2244 9.58514 12.2555 9.5718 12.2883 9.56484C12.321 9.55787 12.3549 9.55742 12.3878 9.56353C12.4208 9.56963 12.4522 9.58217 12.4803 9.60042C12.5084 9.61868 12.5326 9.64228 12.5516 9.6699C12.5705 9.69752 12.5839 9.72861 12.5908 9.76138C12.7438 10.4813 13.0523 11.1512 13.4699 11.6793C13.9697 11.048 14.3049 10.2312 14.4174 9.3633C14.4341 9.23052 14.4448 9.09782 14.4509 8.96642H11.1772C11.1096 8.96642 11.0447 8.93955 10.9969 8.8917C10.949 8.84386 10.9221 8.77898 10.9221 8.71132C10.9221 8.64366 10.949 8.57878 10.9969 8.53094C11.0447 8.4831 11.1096 8.45622 11.1772 8.45622H13.244V7.97491C13.244 7.90726 13.2709 7.84237 13.3187 7.79453C13.3666 7.74669 13.4315 7.71981 13.4991 7.71981C13.5668 7.71981 13.6317 7.74669 13.6795 7.79453C13.7273 7.84237 13.7542 7.90726 13.7542 7.97491V8.45622H15.821C15.8545 8.45621 15.8877 8.4628 15.9186 8.47562C15.9496 8.48843 15.9777 8.50722 16.0014 8.5309C16.0251 8.55459 16.0439 8.58271 16.0567 8.61366C16.0695 8.64461 16.0761 8.67778 16.0761 8.71128ZM6.70873 8.34669L7.43271 9.91417C7.46108 9.97559 7.5127 10.0232 7.57619 10.0466C7.63969 10.07 7.70987 10.0672 7.77129 10.0388C7.83271 10.0104 7.88035 9.9588 7.90372 9.89531C7.92709 9.83181 7.92428 9.76163 7.89591 9.70021L5.57398 4.67318C5.55357 4.62894 5.52091 4.59146 5.47986 4.5652C5.43882 4.53894 5.39111 4.52498 5.34239 4.52498C5.29366 4.52498 5.24595 4.53894 5.20491 4.5652C5.16386 4.59146 5.1312 4.62894 5.11079 4.67318L2.7889 9.70021C2.76113 9.76154 2.75873 9.83137 2.78223 9.89447C2.80573 9.95757 2.85322 10.0088 2.91434 10.0371C2.97547 10.0653 3.04528 10.0682 3.10855 10.0452C3.17183 10.0222 3.22344 9.97508 3.25213 9.91417L3.97615 8.34669H6.70873ZM5.34242 5.38856L6.47305 7.83645H4.21176L5.34242 5.38856Z" />
                  </svg>
                  <span onClick={toggleMenu}>Language</span>
                </div>
                <ul className={`language-list ${isMenuOpen ? "active" : ""}`}>
                  {[
                    "English",
                    "Deutsch",
                    "Svenska",
                    "اردو",
                    "عربي",
                    "Nederlands",
                  ].map((language, index) => (
                    <li key={index} onClick={() => handleLanguageClick(index)}>
                      <a href="#">{language}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <header className="header-area style-1 d-flex flex-nowrap align-items-center justify-content-between">
        <div className="nav-left">
          <div className="company-logo">
            <Link href="/">
              <img
                alt="image"
                className="img-fluid"
                // src="/assets/img/logo.svg"
                src="/assets/img/bh-auction-logo.jpeg"
                height="74px"
                width="90px"
              />
            </Link>
          </div>
          <div className={`main-menu ${isMenuOpen ? "show-menu" : ""}`}>
            <div className="mobile-logo-area d-lg-none d-flex justify-content-center">
              <div className="mobile-logo-wrap">
                <Link href="/">
                  {/* <img alt="image" src="/assets/img/logo.svg" /> */}
                  <img
                    alt="image"
                    src="/assets/img/bh-auction-logo.jpeg"
                    height="74px"
                    width="90px"
                  />
                </Link>
              </div>
            </div>
            <ul className="menu-list">
              <li>
                <Link href="/" className="drop-down">
                  Home
                </Link>
                {/* <i
                  className={`dropdown-icon ${state.activeMenu === "home" ? "bi bi-dash" : "bi bi-plus"
                    }`}
                  onClick={() => collapseMenu("home")}
                />
                <ul
                  className={`sub-menu ${state.activeMenu === "home" ? "d-block" : ""
                    }`}
                >
                  <li className="active">
                    <Link href="/">Multipurpose 01</Link>
                  </li>
                  <li>
                    <Link href="/car-auction">Car Auction</Link>
                  </li>
                  <li>
                    <Link href="/antiques-auction">Antiques Auction</Link>
                  </li>
                  <li>
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
                </ul> */}
              </li>
              <li
                className={`menu-item-has-children ${
                  pathName === "/auction-grid" &&
                  "/auction-sidebar" &&
                  "/auction-details" &&
                  "/auction-details2"
                    ? "active"
                    : ""
                }`}
              >
                <a href="#" className="drop-down">
                  Auctions
                </a>
                <i
                  className={`dropdown-icon ${
                    state.activeMenu === "auction" ? "bi bi-dash" : "bi bi-plus"
                  }`}
                  onClick={() => collapseMenu("auction")}
                />
                <ul
                  className={`sub-menu ${
                    state.activeMenu === "auction" ? "d-block" : ""
                  }`}
                >
                  {/* <li className={pathName==="/auction-grid"?"active":""}>
                    <Link href="/auction-grid">Auctions Grid</Link>
                  </li>
                  <li className={pathName==="/auction-sidebar"?"active":""}>
                    <Link href="/auction-sidebar">Auctions Sidebar</Link>
                  </li>
                  <li className={pathName==="/auction-details"?"active":""}>
                    <Link href="/auction-details">
                      Auctions Details Style 01
                    </Link>
                  </li>
                  <li className={pathName==="/auction-details2"?"active":""}>
                    <Link href="/auction-details2">
                      Auctions Details Style 02
                    </Link>
                  </li> */}
                  <li
                    className={pathName === "/current-auction" ? "active" : ""}
                  >
                    <Link href="/current-auction">Current Auctions</Link>
                  </li>
                  <li className={pathName === "/past-auction" ? "active" : ""}>
                    <Link href="/past-auction">Past Auctions</Link>
                  </li>
                </ul>
              </li>
              {/* <li className={`menu-item-has-children ${pathName === "/blog-grid"&& "/blog-standard"&&"/blog-details"? "active" : ""
                    }`}>
                <Link href="/blog-grid" className="drop-down">
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
                  <li className={pathName==="/blog-grid"?"active":""}>
                    <Link href="/blog-grid">Blog Grid</Link>
                  </li>
                  <li className={pathName==="/blog-standard"?"active":""}>
                    <Link href="/blog-standard">Blog Standard</Link>
                  </li>
                  <li className={pathName==="/blog-details"?"active":""}>
                    <Link href="/blog-details">Blog Details</Link>
                  </li>
                </ul>
              </li> */}
              <li>
                <Link href="/" className="drop-down">
                  E-Shop
                </Link>
              </li>
              {/* <li className="menu-item-has-children">
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
                  <li className={pathName==="/about"?"active":""}>
                    <Link href="/about">About</Link>
                  </li>
                  <li className={pathName==="/category"?"active":""}>
                    <Link href="/category">Category</Link>
                  </li>
                  <li className={pathName==="/seller"?"active":""}>
                    <Link href="store-list">Seller</Link>
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
                      <li className={pathName==="/store-list"?"active":""}>
                        <Link href="store-list">Seller List</Link>
                      </li>
                      <li className={pathName==="/store-details"?"active":""}>
                        <Link href="store-details">Seller Details</Link>
                      </li>
                    </ul>
                  </li>
                  <li className={pathName==="/how-to-sell"?"active":""}>
                    <Link href="/how-to-sell">How To Sell</Link>
                  </li>
                  <li className={pathName==="/how-to-buy"?"active":""}>
                    <Link href="/how-to-buy">How to Bid</Link>
                  </li>
                  <li className={pathName==="/dashboard"?"active":""}>
                    <Link href="/dashboard">Dashbaord</Link>
                  </li>
                  <li className={pathName==="/faq"?"active":""}>
                    <Link href="/faq">Faqs</Link>
                  </li>
                  <li>
                    <Link href="/error">Error</Link>
                  </li>
                </ul>
              </li> */}
              <li className="menu-item-has-children">
                <a href="#" className="drop-down">
                  About
                </a>
                <i
                  className={`dropdown-icon ${
                    state.activeMenu === "about" ? "bi bi-dash" : "bi bi-plus"
                  }`}
                  onClick={() => collapseMenu("about")}
                />
                <ul
                  className={`sub-menu ${
                    state.activeMenu === "about" ? "d-block" : ""
                  }`}
                >
                  <li className={pathName === "/auction" ? "active" : ""}>
                    <a href="#" className="drop-down">
                      Auctions
                    </a>
                    <i
                      className={`d-lg-flex d-none bi bi-chevron-right dropdown-icon`}
                      onClick={() => collapseMenu("auction")}
                    />
                    <ul
                      className={`sub-menu ${
                        state.activeMenu === "auction" ? "d-block" : ""
                      }`}
                    >
                      <li
                        className={
                          pathName === "/current-auction" ? "active" : ""
                        }
                      >
                        <Link href="/current-auction">Current Auctions</Link>
                      </li>
                      <li
                        className={pathName === "/past-auction" ? "active" : ""}
                      >
                        <Link href="/past-auction">Past Auctions</Link>
                      </li>
                    </ul>
                  </li>

                  <li className={pathName === "/seller" ? "active" : ""}>
                    <Link href="store-list">Seller</Link>
                    <i
                      className="d-lg-flex d-none bi bi-chevron-right dropdown-icon"
                      onClick={() => toggleSubMenu("seller")}
                    />
                    <i
                      className={`d-lg-none d-flex bi bi-${
                        state.activeSubMenu === "seller" ? "dash" : "plus"
                      } dropdown-icon`}
                      onClick={() => toggleSubMenu("seller")}
                    />
                    <ul
                      className={`sub-menu ${
                        state.activeSubMenu === "seller" ? "d-block" : ""
                      }`}
                    >
                      <li
                        className={pathName === "/store-list" ? "active" : ""}
                      >
                        <Link href="store-list">Seller List</Link>
                      </li>
                      <li
                        className={
                          pathName === "/store-details" ? "active" : ""
                        }
                      >
                        <Link href="store-details">Seller Details</Link>
                      </li>
                    </ul>
                  </li>
                  <li className={pathName === "/buyer" ? "active" : ""}>
                    <Link href="/buyer">Buyer</Link>
                  </li>
                  <li className={pathName === "/how-to-buy" ? "active" : ""}>
                    <Link href="/how-to-buy">How to Bid</Link>
                  </li>
                </ul>
              </li>
              <li className={pathName === "/contact" ? "active" : ""}>
                <Link href="/contact" className="drop-down">
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
              {/* <a href="#" className="login-btn btn-hover">
                <svg
                  width={15}
                  height={19}
                  viewBox="0 0 15 19"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M11.8751 4.17663C11.875 5.00255 11.6183 5.8099 11.1375 6.49658C10.6567 7.18326 9.97335 7.71843 9.17389 8.03442C8.37443 8.35041 7.49475 8.43303 6.6461 8.27184C5.79744 8.11064 5.01792 7.71286 4.40611 7.12881C3.79429 6.54475 3.37766 5.80064 3.20889 4.99058C3.04012 4.18052 3.1268 3.34088 3.45796 2.57783C3.78912 1.81479 4.34989 1.16261 5.06937 0.703757C5.78884 0.244909 6.6347 7.28125e-09 7.5 0C8.07459 3.64089e-05 8.64354 0.108097 9.17438 0.318012C9.70521 0.527927 10.1875 0.835585 10.5938 1.22342C11.0001 1.61126 11.3223 2.07167 11.5422 2.57839C11.762 3.0851 11.8752 3.62818 11.8751 4.17663ZM7.5 9.58844C6.26105 9.58705 5.0354 9.83216 3.90124 10.3082C2.76708 10.7842 1.74932 11.4806 0.912902 12.353C-0.563582 13.8885 -0.20194 16.3311 1.6571 17.4243C3.41487 18.4546 5.43728 19 7.5 19C9.56272 19 11.5851 18.4546 13.3429 17.4243C15.2019 16.3311 15.5636 13.8885 14.0871 12.353C13.2507 11.4806 12.2329 10.7842 11.0988 10.3082C9.9646 9.83216 8.73895 9.58705 7.5 9.58844Z" />
                </svg>
                My Account
                <span style={{ top: "40.5px", left: "84.2344px" }} />
              </a> */}
              {
                    !adminLogin &&
                        <Link href={state.token ? '/dashboard' : '/login'} className="login-btn btn-hover">
                          <svg
                            width={15}
                            height={19}
                            viewBox="0 0 15 19"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M11.8751 4.17663C11.875 5.00255 11.6183 5.8099 11.1375 6.49658C10.6567 7.18326 9.97335 7.71843 9.17389 8.03442C8.37443 8.35041 7.49475 8.43303 6.6461 8.27184C5.79744 8.11064 5.01792 7.71286 4.40611 7.12881C3.79429 6.54475 3.37766 5.80064 3.20889 4.99058C3.04012 4.18052 3.1268 3.34088 3.45796 2.57783C3.78912 1.81479 4.34989 1.16261 5.06937 0.703757C5.78884 0.244909 6.6347 7.28125e-09 7.5 0C8.07459 3.64089e-05 8.64354 0.108097 9.17438 0.318012C9.70521 0.527927 10.1875 0.835585 10.5938 1.22342C11.0001 1.61126 11.3223 2.07167 11.5422 2.57839C11.762 3.0851 11.8752 3.62818 11.8751 4.17663ZM7.5 9.58844C6.26105 9.58705 5.0354 9.83216 3.90124 10.3082C2.76708 10.7842 1.74932 11.4806 0.912902 12.353C-0.563582 13.8885 -0.20194 16.3311 1.6571 17.4243C3.41487 18.4546 5.43728 19 7.5 19C9.56272 19 11.5851 18.4546 13.3429 17.4243C15.2019 16.3311 15.5636 13.8885 14.0871 12.353C13.2507 11.4806 12.2329 10.7842 11.0988 10.3082C9.9646 9.83216 8.73895 9.58705 7.5 9.58844Z" />
                          </svg>
                          {state.token ? 'My Account' : 'Login'}
                        </Link>
              }

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
          {/* <a href="/login" className="login-btn btn-hover d-lg-flex d-none">
            <svg
              width={15}
              height={19}
              viewBox="0 0 15 19"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M11.8751 4.17663C11.875 5.00255 11.6183 5.8099 11.1375 6.49658C10.6567 7.18326 9.97335 7.71843 9.17389 8.03442C8.37443 8.35041 7.49475 8.43303 6.6461 8.27184C5.79744 8.11064 5.01792 7.71286 4.40611 7.12881C3.79429 6.54475 3.37766 5.80064 3.20889 4.99058C3.04012 4.18052 3.1268 3.34088 3.45796 2.57783C3.78912 1.81479 4.34989 1.16261 5.06937 0.703757C5.78884 0.244909 6.6347 7.28125e-09 7.5 0C8.07459 3.64089e-05 8.64354 0.108097 9.17438 0.318012C9.70521 0.527927 10.1875 0.835585 10.5938 1.22342C11.0001 1.61126 11.3223 2.07167 11.5422 2.57839C11.762 3.0851 11.8752 3.62818 11.8751 4.17663ZM7.5 9.58844C6.26105 9.58705 5.0354 9.83216 3.90124 10.3082C2.76708 10.7842 1.74932 11.4806 0.912902 12.353C-0.563582 13.8885 -0.20194 16.3311 1.6571 17.4243C3.41487 18.4546 5.43728 19 7.5 19C9.56272 19 11.5851 18.4546 13.3429 17.4243C15.2019 16.3311 15.5636 13.8885 14.0871 12.353C13.2507 11.4806 12.2329 10.7842 11.0988 10.3082C9.9646 9.83216 8.73895 9.58705 7.5 9.58844Z" />
            </svg>
            Login
            <span style={{ top: "40.5px", left: "84.2344px" }} />
          </a> */}
  
  {
        !adminLogin &&
            <Link href={state.token ? '/dashboard' : '/login'} className="login-btn btn-hover d-lg-flex d-none">
              <svg
                width={15}
                height={19}
                viewBox="0 0 15 19"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M11.8751 4.17663C11.875 5.00255 11.6183 5.8099 11.1375 6.49658C10.6567 7.18326 9.97335 7.71843 9.17389 8.03442C8.37443 8.35041 7.49475 8.43303 6.6461 8.27184C5.79744 8.11064 5.01792 7.71286 4.40611 7.12881C3.79429 6.54475 3.37766 5.80064 3.20889 4.99058C3.04012 4.18052 3.1268 3.34088 3.45796 2.57783C3.78912 1.81479 4.34989 1.16261 5.06937 0.703757C5.78884 0.244909 6.6347 7.28125e-09 7.5 0C8.07459 3.64089e-05 8.64354 0.108097 9.17438 0.318012C9.70521 0.527927 10.1875 0.835585 10.5938 1.22342C11.0001 1.61126 11.3223 2.07167 11.5422 2.57839C11.762 3.0851 11.8752 3.62818 11.8751 4.17663ZM7.5 9.58844C6.26105 9.58705 5.0354 9.83216 3.90124 10.3082C2.76708 10.7842 1.74932 11.4806 0.912902 12.353C-0.563582 13.8885 -0.20194 16.3311 1.6571 17.4243C3.41487 18.4546 5.43728 19 7.5 19C9.56272 19 11.5851 18.4546 13.3429 17.4243C15.2019 16.3311 15.5636 13.8885 14.0871 12.353C13.2507 11.4806 12.2329 10.7842 11.0988 10.3082C9.9646 9.83216 8.73895 9.58705 7.5 9.58844Z" />
              </svg>
              {state.token ? 'My Account' : 'Login'}
            </Link>
  }

          <div
            className={`sidebar-button mobile-menu-btn ${
              isMenuOpen ? "active" : ""
            } `}
            onClick={toggleMenu}
          >
            <span />
          </div>
        </div>
      </header>
    </div>
    </>
  );
};

export default Header;
