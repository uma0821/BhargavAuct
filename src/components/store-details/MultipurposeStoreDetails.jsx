"use client";
import SelectComponent from "@/components/common/SelectComponent";
import SingleSearchBox from "@/components/common/SingleSearchBox";
import { useCountdownTimer } from "@/customHooks/useCountdownTimer";
import Link from "next/link";
import React, { useState } from "react";
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
const MultipurposeStoreDetails = () => {
    const [activeColumn, setActiveColumn] = useState(4);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [value, setValue] = useState([20, 37]);
    const handleColumnClick = (columnNumber) => {
        setActiveColumn(columnNumber);
    };
    function valuetext(value) {
        return `${value}`;
    }
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const { days, hours, minutes, seconds } = useCountdownTimer(
        "2024-10-23 12:00:00"
    );
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    const condition = ["New", "Used", "Refurbished"];
    const countries = ["Spain", "France", "Brazil", "Bangladesh"];
    const period = [
        "Today  (110)",
        "Yesterday (115)",
        "Last 7 Days (515)",
        "Last 30 Days (945)",
    ];
    const sales = ["Online", "In-Store", "Phone Order", "Email Order"];
    const priceShortig = ["Price Low to Hight", "Price Hight to Low"]
    return (
        <>
            <div className={`filter-sidebar ${isMenuOpen ? "slide" : ""}`}>
                <div className="auction-sidebar">
                    <form>
                        <div className="single-widget mb-30">
                            <div className="search-box">
                                <input type="text" placeholder="Search" />
                                <button type="submit">
                                    <i className="bx bx-search" />
                                </button>
                            </div>
                        </div>
                        <div className="single-widget mb-30">
                            <SingleSearchBox
                                placeholder="Online"
                                options={sales}
                                label="Sales"
                                style="two"
                            />
                        </div>
                        <div className="single-widget mb-30">
                            <h5 className="widget-title">Category</h5>
                            <div className="checkbox-container">
                                <ul>
                                    <li>
                                        <label className="containerss">
                                            <input type="checkbox" />
                                            <span className="checkmark" />
                                            <span>Automotive</span>
                                        </label>
                                    </li>
                                    <li>
                                        <label className="containerss">
                                            <input type="checkbox" />
                                            <span className="checkmark" />
                                            <span>Antiques</span>
                                        </label>
                                    </li>
                                    <li>
                                        <label className="containerss">
                                            <input type="checkbox" />
                                            <span className="checkmark" />
                                            <span>Digital Art</span>
                                        </label>
                                    </li>
                                    <li>
                                        <label className="containerss">
                                            <input type="checkbox" />
                                            <span className="checkmark" />
                                            <span>Books &amp; Comic</span>
                                        </label>
                                    </li>
                                    <li>
                                        <label className="containerss">
                                            <input type="checkbox" />
                                            <span className="checkmark" />
                                            <span>Old Coin</span>
                                        </label>
                                    </li>
                                    <li>
                                        <label className="containerss">
                                            <input type="checkbox" />
                                            <span className="checkmark" />
                                            <span>Gadget and Technology</span>
                                        </label>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="single-widget mb-30">
                            <SingleSearchBox
                                placeholder="Country"
                                options={countries}
                                label="Country"
                                style="two"
                            />
                        </div>
                        <div className="single-widget mb-30">
                            <SingleSearchBox
                                placeholder="Today  (110)"
                                options={period}
                                label="Period"
                                style="two"
                            />
                        </div>
                        <div className="single-widget mb-30">
                            <SingleSearchBox
                                placeholder="New"
                                options={condition}
                                label="Condition"
                                style="two"
                            />
                        </div>
                        <div className="single-widget mb-30">
                            <h5 className="widget-title">Price</h5>
                            <Box sx={{ xs: '100%', sm: '50%', md: '33.33%', lg: '25%', xl: '20%', }}>
                                <Slider
                                    getAriaLabel={() => 'Temperature range'}
                                    value={value}
                                    sx={{
                                        color: '#222222', // Change the color here
                                    }}
                                    onChange={handleChange}
                                    valueLabelDisplay="auto"
                                    getAriaValueText={valuetext}
                                />
                                <div className="range-wrap">
                                    <div className="slider-labels">
                                        <div className="caption">
                                            <span id="slider-range-value1" >${value[0]}</span>
                                        </div>
                                        <div className="caption">
                                            <span id="slider-range-value2" >${value[1]}</span>
                                        </div>
                                    </div>
                                </div>
                            </Box>
                        </div>
                        <div className="single-widget mb-30">
                            <h5 className="widget-title">Type Of Sales</h5>
                            <div className="checkbox-container">
                                <ul>
                                    <li>
                                        <label className="containerss">
                                            <input type="checkbox" />
                                            <span className="checkmark" />
                                            <span>Upcoming</span>
                                        </label>
                                    </li>
                                    <li>
                                        <label className="containerss">
                                            <input type="checkbox" />
                                            <span className="checkmark" />
                                            <span>Latest</span>
                                        </label>
                                    </li>
                                    <li>
                                        <label className="containerss">
                                            <input type="checkbox" />
                                            <span className="checkmark" />
                                            <span>Highest Bidding</span>
                                        </label>
                                    </li>
                                    <li>
                                        <label className="containerss">
                                            <input type="checkbox" />
                                            <span className="checkmark" />
                                            <span>Live Auction</span>
                                        </label>
                                    </li>
                                    <li>
                                        <label className="containerss">
                                            <input type="checkbox" />
                                            <span className="checkmark" />
                                            <span>Popular</span>
                                        </label>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </form>
                    <div className="single-widget">
                        <h5 className="widget-title">Highest Bidding</h5>
                        <div className="highest-bidding-widget mb-20">
                            <div className="highest-bidding-img">
                                <Link href="/auction-details">
                                    <img
                                        src="/assets/img/inner-pages/highest-bidding-img1.jpg"
                                        alt=""
                                    />
                                </Link>
                            </div>
                            <div className="highest-bidding-content">
                                <h6>
                                    <Link href="/auction-details">
                                        Poutsicle Hydratingani Stain offering.
                                    </Link>
                                </h6>
                                <div className="price-area">
                                    <span>Current Bid at:</span>
                                    <strong>$4,648</strong>
                                </div>
                            </div>
                        </div>
                        <div className="highest-bidding-widget mb-20">
                            <div className="highest-bidding-img">
                                <Link href="/auction-details">
                                    <img
                                        src="/assets/img/inner-pages/highest-bidding-img2.jpg"
                                        alt=""
                                    />
                                </Link>
                            </div>
                            <div className="highest-bidding-content">
                                <h6>
                                    <Link href="/auction-details">
                                        Heritage Had Curating Watch.
                                    </Link>
                                </h6>
                                <div className="price-area">
                                    <span>Current Bid at:</span>
                                    <strong>$2,458</strong>
                                </div>
                            </div>
                        </div>
                        <div className="highest-bidding-widget">
                            <div className="highest-bidding-img">
                                <Link href="/auction-details">
                                    <img
                                        src="/assets/img/inner-pages/highest-bidding-img3.jpg"
                                        alt=""
                                    />
                                </Link>
                            </div>
                            <div className="highest-bidding-content">
                                <h6>
                                    <Link href="/auction-details">
                                        Art decorat bronze sculpture.
                                    </Link>
                                </h6>
                                <div className="price-area">
                                    <span>Current Bid at:</span>
                                    <strong>$2,878</strong>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="store-details-section pt-110 mb-110">
                <div className="container">
                    <div className="store-details-profile-area mb-70">
                        <div className="store-details-profile-cover-photo">
                            <img
                                src="/assets/img/inner-pages/store-details-profile-cover-img1.jpg"
                                alt=""
                            />
                        </div>
                        <div className="profile-info-wrap">
                            <div className="row g-3 align-items-center">
                                <div className="col-lg-4 order-lg-1 order-2">
                                    <div className="single-contact">
                                        <div className="icon">
                                            <svg
                                                width={17}
                                                height={25}
                                                viewBox="0 0 17 25"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M8.20809 22.8735C8.2415 22.9185 8.28482 22.9551 8.33468 22.9807C8.38454 23.0062 8.43962 23.0199 8.49563 23.0207H8.50041C8.55559 23.0207 8.61004 23.0081 8.65964 22.984C8.70924 22.9598 8.75269 22.9247 8.7867 22.8812C9.08775 22.4972 16.1571 13.4112 16.1571 7.65666C16.1571 5.62599 15.3504 3.67849 13.9145 2.24258C12.4786 0.806681 10.5311 0 8.50041 0C6.46974 0 4.52224 0.806681 3.08633 2.24258C1.65043 3.67849 0.84375 5.62599 0.84375 7.65666C0.84375 9.86049 2.08725 13.0966 4.54016 17.2745C6.35229 20.3611 8.18979 22.8488 8.20809 22.8735ZM8.50041 0.727681C10.3375 0.729717 12.0988 1.46041 13.3978 2.75945C14.6968 4.05849 15.4274 5.81978 15.4294 7.65687C15.4294 12.5155 9.86242 20.2393 8.50789 22.0462C7.16979 20.1694 1.57143 12.062 1.57143 7.65687C1.57341 5.81978 2.30406 4.05849 3.60306 2.75945C4.90206 1.46041 6.66332 0.729717 8.50041 0.727681Z" />
                                                <path d="M12.9022 7.65701C12.9023 6.78648 12.6442 5.93549 12.1606 5.21165C11.677 4.48781 10.9896 3.92364 10.1853 3.59047C9.38105 3.25731 8.49607 3.17011 7.64226 3.33992C6.78845 3.50973 6.00417 3.92891 5.3886 4.54445C4.77303 5.15999 4.35381 5.94425 4.18396 6.79805C4.01412 7.65185 4.10127 8.53684 4.4344 9.34111C4.76752 10.1454 5.33167 10.8328 6.05548 11.3164C6.7793 11.8001 7.63028 12.0582 8.50081 12.0582C9.66772 12.057 10.7865 11.5929 11.6116 10.7678C12.4368 9.94265 12.9009 8.82392 12.9022 7.65701ZM8.50081 11.3306C7.7742 11.3306 7.06391 11.1151 6.45976 10.7114C5.85561 10.3077 5.38474 9.73394 5.10669 9.06264C4.82863 8.39134 4.75589 7.65266 4.89766 6.94001C5.03943 6.22737 5.38934 5.57277 5.90315 5.059C6.41695 4.54522 7.07157 4.19535 7.78422 4.05362C8.49687 3.91189 9.23555 3.98467 9.90684 4.26276C10.5781 4.54085 11.1519 5.01176 11.5555 5.61593C11.9592 6.2201 12.1746 6.9304 12.1746 7.65701C12.1734 8.63098 11.786 9.56472 11.0973 10.2534C10.4085 10.9421 9.47477 11.3295 8.50081 11.3306ZM12.2107 20.5403C12.1161 20.531 12.0216 20.559 11.9474 20.6184C11.8733 20.6779 11.8252 20.7639 11.8137 20.8583C11.8021 20.9526 11.8279 21.0478 11.8856 21.1234C11.9432 21.1989 12.0281 21.249 12.1222 21.2628C15.2547 21.6472 16.2683 22.3724 16.2683 22.6632C16.2683 23.2094 13.5268 24.2725 8.50081 24.2725C3.47482 24.2725 0.733332 23.2086 0.733332 22.6632C0.733332 22.3514 1.72734 21.7133 4.39523 21.3274C4.48885 21.3115 4.57254 21.2596 4.62845 21.1829C4.68436 21.1061 4.70806 21.0105 4.6945 20.9165C4.68093 20.8226 4.63118 20.7376 4.55585 20.6798C4.48052 20.6219 4.38558 20.5958 4.29128 20.607C2.33693 20.89 0.00585938 21.4761 0.00585938 22.6632C0.00585938 24.3779 5.08611 25.0001 8.50102 25.0001C11.9159 25.0001 16.9962 24.3779 16.9962 22.6632C16.996 21.3272 13.9979 20.7598 12.2107 20.5403Z" />
                                            </svg>
                                        </div>
                                        <div className="content">
                                            <h6>
                                                <a href="https://maps.app.goo.gl/kqJUoD2Fa4GJ2aPWA">
                                                    {" "}
                                                    <strong>Address :</strong> House 168/170, Road 02,
                                                    Avenue 01, Mirpur DOHS, Dhaka, Bangladesh
                                                </a>
                                            </h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 d-flex justify-content-lg-center order-lg-2 order-1">
                                    <div className="profile-area">
                                        <div className="profile-img">
                                            <img
                                                src="/assets/img/inner-pages/store-details-profile-img1.png"
                                                alt=""
                                            />
                                        </div>
                                        <div className="profile-content">
                                            <h3>Alexander Owen</h3>
                                            <span>45,533 Item</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 d-flex justify-content-lg-end order-lg-3 order-3">
                                    <div className="single-contact">
                                        <div className="icon">
                                            <svg
                                                width={25}
                                                height={25}
                                                viewBox="0 0 25 25"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <g>
                                                    <path d="M5.71157 4.61285C5.8087 4.61285 5.90184 4.57427 5.97052 4.50559C6.0392 4.43691 6.07778 4.34376 6.07778 4.24664C6.07778 4.14951 6.0392 4.05637 5.97052 3.98769C5.90184 3.91901 5.8087 3.88043 5.71157 3.88043C5.61445 3.88043 5.5213 3.91901 5.45262 3.98769C5.38394 4.05637 5.34536 4.14951 5.34536 4.24664C5.34536 4.34376 5.38394 4.43691 5.45262 4.50559C5.5213 4.57427 5.61445 4.61285 5.71157 4.61285ZM2.78188 4.61285C2.87901 4.61285 2.97216 4.57427 3.04084 4.50559C3.10951 4.43691 3.1481 4.34376 3.1481 4.24664C3.1481 4.14951 3.10951 4.05637 3.04084 3.98769C2.97216 3.91901 2.87901 3.88043 2.78188 3.88043C2.68476 3.88043 2.59161 3.91901 2.52293 3.98769C2.45426 4.05637 2.41567 4.14951 2.41567 4.24664C2.41567 4.34376 2.45426 4.43691 2.52293 4.50559C2.59161 4.57427 2.68476 4.61285 2.78188 4.61285ZM4.24673 4.61285C4.34385 4.61285 4.437 4.57427 4.50568 4.50559C4.57436 4.43691 4.61294 4.34376 4.61294 4.24664C4.61294 4.14951 4.57436 4.05637 4.50568 3.98769C4.437 3.91901 4.34385 3.88043 4.24673 3.88043C4.1496 3.88043 4.05646 3.91901 3.98778 3.98769C3.9191 4.05637 3.88052 4.14951 3.88052 4.24664C3.88052 4.34376 3.9191 4.43691 3.98778 4.50559C4.05646 4.57427 4.1496 4.61285 4.24673 4.61285ZM4.16641 8.49239L4.17314 8.49244L7.48413 8.49327H7.48433C7.71309 8.49327 7.90728 8.34508 7.96768 8.12447C8.02812 7.90377 7.93638 7.67725 7.7395 7.5608L7.23594 7.26285C7.6377 6.86488 7.95588 6.39065 8.1718 5.868C8.38773 5.34535 8.49704 4.78483 8.49331 4.21934C8.47881 1.92598 6.60176 0.0334555 4.30908 0.000447716C1.93335 -0.0336831 0 1.88805 0 4.24674C0 6.5086 1.86367 8.44342 4.16641 8.49239ZM1.77979 1.74381C2.45508 1.07818 3.34766 0.719539 4.29858 0.732772C6.1957 0.760067 7.74888 2.32618 7.76089 4.22393C7.76421 4.72966 7.6583 5.23015 7.4504 5.69118C7.24249 6.15221 6.93749 6.56292 6.55625 6.89522C6.49254 6.95094 6.44292 7.02094 6.41144 7.09951C6.37996 7.17808 6.36753 7.26298 6.37515 7.34727C6.38299 7.43147 6.41066 7.51261 6.45587 7.58407C6.50109 7.65552 6.56257 7.71527 6.6353 7.75841L6.63897 7.76055L4.17676 7.75997C2.27334 7.72344 0.732422 6.15538 0.732422 4.24674C0.732422 3.29845 1.10439 2.40958 1.77979 1.74381ZM24.6338 24.2676H24.2676V18.814C24.2676 17.3852 23.4233 16.0877 22.1125 15.5067L20.1826 14.6795C20.6522 14.5313 21.0765 14.267 21.4217 13.9005C21.9425 13.3475 22.2412 12.5972 22.2412 11.8419C22.2412 11.1478 21.9987 10.4927 21.5399 9.94727C20.9654 9.26437 20.6503 8.40073 20.6499 7.50836V5.75347C20.6499 4.21646 20.0513 2.77174 18.9645 1.68546C17.8777 0.598543 16.4328 8.2632e-06 14.896 8.2632e-06C11.7235 8.2632e-06 9.14258 2.58097 9.14258 5.75343V7.45118C9.14277 8.37345 8.78032 9.25377 8.19136 9.96339C7.4501 10.8565 7.29609 12.0639 7.7895 13.1146C8.15571 13.8944 8.81626 14.4547 9.60703 14.6919L7.69053 15.5253C6.34595 16.0911 5.4771 17.3993 5.4771 18.858V23.169C5.4771 23.3712 5.64102 23.5352 5.84331 23.5352C6.04561 23.5352 6.20952 23.3712 6.20952 23.169V18.858C6.20952 17.6948 6.90234 16.6516 7.97861 16.1987L10.3809 15.1541V17.3584H9.2772C9.12317 17.3585 8.97087 17.3909 8.83017 17.4536C8.68947 17.5163 8.56349 17.6078 8.4604 17.7223C8.35747 17.8368 8.27974 17.9718 8.23225 18.1183C8.18476 18.2648 8.16857 18.4196 8.18472 18.5728L8.78838 24.2676H0.366211C0.163916 24.2676 0 24.4316 0 24.6338C0 24.836 0.163916 25 0.366211 25H24.6338C24.8361 25 25 24.836 25 24.6338C25 24.4316 24.8361 24.2676 24.6338 24.2676ZM20.9795 10.4189C21.3258 10.8305 21.5088 11.3225 21.5088 11.8418C21.5088 12.4125 21.2827 12.9797 20.8885 13.3983C20.4711 13.8414 19.8978 14.0855 19.274 14.0855H18.7967L18.1698 13.8168C17.9033 13.7026 17.6711 13.5211 17.496 13.29C17.3209 13.059 17.2089 12.7863 17.171 12.4989C18.301 11.8905 19.0709 10.6964 19.0709 9.32569V6.57261C19.1777 6.57998 19.2848 6.58373 19.3919 6.58385C19.568 6.58385 19.7435 6.57384 19.9175 6.55411V7.50831C19.918 8.57324 20.294 9.60389 20.9795 10.4189ZM14.985 16.2002C13.6774 16.2234 12.3734 16.0574 11.1133 15.7075V14.8356L11.2192 14.7895L11.2217 14.7884L11.875 14.5044C12.2288 14.3506 12.5404 14.1141 12.7835 13.8146C13.0267 13.5152 13.1942 13.1617 13.272 12.7839C13.5982 12.879 13.9362 12.9273 14.2759 12.9273H15.4692C15.8103 12.9272 16.1495 12.8786 16.4768 12.7828C16.5572 13.159 16.7267 13.5104 16.9711 13.8074C17.2155 14.1045 17.5276 14.3385 17.8812 14.4899L18.5785 14.7888L18.5798 14.7893L18.6314 14.8114V15.6355C17.4473 15.9886 16.2205 16.1785 14.985 16.2002ZM18.6313 16.398V17.3585H11.1133V16.4659C12.3807 16.7985 13.6877 16.9555 14.9978 16.9325C16.2269 16.911 17.4481 16.7313 18.6313 16.398ZM19.9175 5.81563C18.9087 5.95191 17.7717 5.6817 16.9883 5.07471C16.9114 5.01602 16.8145 4.99009 16.7186 5.00259C16.6228 5.01509 16.5357 5.065 16.4765 5.14143C16.4173 5.21787 16.3907 5.31462 16.4025 5.41058C16.4144 5.50654 16.4637 5.59393 16.5397 5.65367C17.0519 6.05045 17.6696 6.32994 18.3384 6.47086V8.46456C18.1625 8.86563 17.9666 9.19918 17.5249 9.56353C17.3396 9.71628 17.1355 9.84462 16.9175 9.94542C16.7395 9.5981 16.378 9.35972 15.9617 9.35972H15.1035C14.5116 9.35972 14.03 9.84132 14.03 10.4332C14.03 11.0251 14.5116 11.5067 15.1035 11.5067H15.9617C16.4599 11.5067 16.8798 11.1656 17.0003 10.7047C17.4902 10.5181 18.289 9.85216 18.2892 9.85191C18.0412 11.1833 16.8715 12.1947 15.4693 12.1947H14.2759C12.6938 12.1947 11.4067 10.9076 11.4067 9.32554V6.49478C12.6505 6.29981 13.8256 5.87891 14.9032 5.24151C16.544 4.27096 17.5965 3.00269 18.2317 2.00069C19.3185 2.96861 19.9367 4.35626 19.9175 5.81563ZM16.3027 10.4342C16.3021 10.6219 16.1494 10.7744 15.9617 10.7744H15.1035C14.9154 10.7744 14.7624 10.6213 14.7624 10.4333C14.7624 10.2453 14.9154 10.0922 15.1035 10.0922H15.9617C16.1494 10.0922 16.3021 10.2446 16.3027 10.4322V10.4342ZM9.875 5.75343C9.875 2.98482 12.1274 0.73243 14.896 0.73243C15.8889 0.73243 16.8377 1.01905 17.6485 1.55264C17.064 2.48961 16.0802 3.69449 14.5303 4.61129C13.4671 5.24019 12.3008 5.64171 11.0638 5.8047H9.87495V5.75343H9.875ZM8.45239 12.8032C8.08105 12.0123 8.19697 11.1034 8.75449 10.4317C9.45405 9.58887 9.87578 8.54747 9.875 7.45118V6.53712H10.6743V9.32569C10.6743 10.6972 11.4452 11.8919 12.5761 12.4999C12.5411 12.7894 12.4311 13.0646 12.2569 13.2984C12.0826 13.5322 11.8503 13.7164 11.583 13.8326L11.0015 14.0855H10.4707C9.59717 14.0855 8.82383 13.5941 8.45239 12.8032ZM21.2008 18.4957L20.5889 24.2676H9.5249L8.91304 18.4957C8.90734 18.4446 8.91259 18.3929 8.92844 18.344C8.94428 18.2951 8.97036 18.2502 9.00493 18.2122C9.0391 18.1738 9.08105 18.1431 9.128 18.1222C9.17494 18.1013 9.22581 18.0906 9.2772 18.0909H20.8366C20.9418 18.0909 21.0385 18.1339 21.1089 18.2122C21.1435 18.2502 21.1695 18.2951 21.1854 18.344C21.2012 18.3929 21.2065 18.4446 21.2008 18.4957ZM23.5352 24.2676H21.3254L21.9291 18.5729C21.9452 18.4197 21.929 18.2649 21.8816 18.1184C21.8341 17.9718 21.7563 17.8369 21.6534 17.7223C21.5503 17.6079 21.4244 17.5163 21.2836 17.4537C21.1429 17.391 20.9907 17.3586 20.8366 17.3585H19.3638V15.1254L21.8199 16.1781C22.8619 16.64 23.5352 17.6746 23.5352 18.814V24.2676ZM15.0569 19.7876C14.2895 19.7876 13.6653 20.4119 13.6653 21.1792C13.6653 21.9465 14.2895 22.5708 15.0569 22.5708C15.8242 22.5708 16.4485 21.9465 16.4485 21.1792C16.4485 20.4119 15.8242 19.7876 15.0569 19.7876ZM15.0569 21.8384C14.6934 21.8384 14.3977 21.5427 14.3977 21.1792C14.3977 20.8157 14.6934 20.52 15.0569 20.52C15.4204 20.52 15.7161 20.8157 15.7161 21.1792C15.7161 21.5427 15.4204 21.8384 15.0569 21.8384Z" />
                                                </g>
                                            </svg>
                                        </div>
                                        <div className="content">
                                            <h6>
                                                <a href="mailto:info@gmail.com">
                                                    <strong>Email :</strong> info@gmail.com
                                                </a>
                                            </h6>
                                            <h6>
                                                <a href="tel:01796713831">
                                                    <strong>Phone :</strong> +88 0179 6713 831
                                                </a>
                                            </h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="auction-grid-title-section mb-40">
                        <h6>Showing 1–12 of 101 results</h6>
                        <div className="filter-selector">
                            <div className="filter">
                                <div className="filter-icon" onClick={toggleMenu}>
                                    <svg
                                        width={18}
                                        height={18}
                                        viewBox="0 0 18 18"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <g clipPath="url(#clip0_456_25)">
                                            <path d="M0.5625 3.17317H9.12674C9.38486 4.34806 10.4341 5.2301 11.6853 5.2301C12.9366 5.2301 13.9858 4.3481 14.2439 3.17317H17.4375C17.7481 3.17317 18 2.92131 18 2.61067C18 2.30003 17.7481 2.04817 17.4375 2.04817H14.2437C13.9851 0.873885 12.9344 -0.00871277 11.6853 -0.00871277C10.4356 -0.00871277 9.38545 0.873744 9.12695 2.04817H0.5625C0.251859 2.04817 0 2.30003 0 2.61067C0 2.92131 0.251859 3.17317 0.5625 3.17317ZM10.191 2.61215L10.191 2.6061C10.1935 1.78461 10.8638 1.11632 11.6853 1.11632C12.5057 1.11632 13.1761 1.78369 13.1796 2.6048L13.1797 2.61306C13.1784 3.43597 12.5086 4.10513 11.6853 4.10513C10.8625 4.10513 10.1928 3.43663 10.191 2.61422L10.191 2.61215ZM17.4375 14.8268H14.2437C13.985 13.6525 12.9344 12.7699 11.6853 12.7699C10.4356 12.7699 9.38545 13.6524 9.12695 14.8268H0.5625C0.251859 14.8268 0 15.0786 0 15.3893C0 15.7 0.251859 15.9518 0.5625 15.9518H9.12674C9.38486 17.1267 10.4341 18.0087 11.6853 18.0087C12.9366 18.0087 13.9858 17.1267 14.2439 15.9518H17.4375C17.7481 15.9518 18 15.7 18 15.3893C18 15.0786 17.7481 14.8268 17.4375 14.8268ZM11.6853 16.8837C10.8625 16.8837 10.1928 16.2152 10.191 15.3928L10.191 15.3908L10.191 15.3847C10.1935 14.5632 10.8638 13.8949 11.6853 13.8949C12.5057 13.8949 13.1761 14.5623 13.1796 15.3834L13.1797 15.3916C13.1785 16.2146 12.5086 16.8837 11.6853 16.8837ZM17.4375 8.43751H8.87326C8.61514 7.26262 7.56594 6.38062 6.31466 6.38062C5.06338 6.38062 4.01418 7.26262 3.75606 8.43751H0.5625C0.251859 8.43751 0 8.68936 0 9.00001C0 9.31068 0.251859 9.56251 0.5625 9.56251H3.75634C4.01498 10.7368 5.06559 11.6194 6.31466 11.6194C7.56439 11.6194 8.61455 10.7369 8.87305 9.56251H17.4375C17.7481 9.56251 18 9.31068 18 9.00001C18 8.68936 17.7481 8.43751 17.4375 8.43751ZM7.80901 8.99853L7.80898 9.00458C7.80652 9.82607 7.13619 10.4944 6.31466 10.4944C5.49429 10.4944 4.82393 9.82699 4.82038 9.00591L4.82027 8.99769C4.8215 8.17468 5.49141 7.50562 6.31466 7.50562C7.13753 7.50562 7.80718 8.17408 7.80905 8.99653L7.80901 8.99853Z" />
                                        </g>
                                    </svg>
                                </div>
                                <span>Filters</span>
                            </div>
                            <div className="selector">
                                <SelectComponent
                                    options={priceShortig}
                                    placeholder="Sort by price"
                                />
                            </div>
                            <ul className="grid-view">
                                <li
                                    className={`column-2 ${activeColumn === 2 ? "active" : ""}`}
                                    onClick={() => handleColumnClick(2)}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={12}
                                        height={20}
                                        viewBox="0 0 12 20"
                                    >
                                        <g>
                                            <rect width="4.88136" height="5.10638" rx="2.44068" />
                                            <rect
                                                y="7.44678"
                                                width="4.88136"
                                                height="5.10638"
                                                rx="2.44068"
                                            />
                                            <rect
                                                y="14.8937"
                                                width="4.88136"
                                                height="5.10638"
                                                rx="2.44068"
                                            />
                                            <rect
                                                x="7.11865"
                                                width="4.88136"
                                                height="5.10638"
                                                rx="2.44068"
                                            />
                                            <rect
                                                x="7.11865"
                                                y="7.44678"
                                                width="4.88136"
                                                height="5.10638"
                                                rx="2.44068"
                                            />
                                            <rect
                                                x="7.11865"
                                                y="14.8937"
                                                width="4.88136"
                                                height="5.10638"
                                                rx="2.44068"
                                            />
                                        </g>
                                    </svg>
                                </li>
                                <li
                                    className={`column-3 ${activeColumn === 3 ? "active" : ""}`}
                                    onClick={() => handleColumnClick(3)}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={20}
                                        height={20}
                                        viewBox="0 0 20 20"
                                    >
                                        <g clipPath="url(#clip0_1610_1442)">
                                            <rect width="5.10638" height="5.10638" rx="2.55319" />
                                            <rect
                                                y="7.44678"
                                                width="5.10638"
                                                height="5.10638"
                                                rx="2.55319"
                                            />
                                            <rect
                                                y="14.8937"
                                                width="5.10638"
                                                height="5.10638"
                                                rx="2.55319"
                                            />
                                            <rect
                                                x="7.44678"
                                                width="5.10638"
                                                height="5.10638"
                                                rx="2.55319"
                                            />
                                            <rect
                                                x="7.44678"
                                                y="7.44678"
                                                width="5.10638"
                                                height="5.10638"
                                                rx="2.55319"
                                            />
                                            <rect
                                                x="7.44678"
                                                y="14.8937"
                                                width="5.10638"
                                                height="5.10638"
                                                rx="2.55319"
                                            />
                                            <rect
                                                x="14.8936"
                                                width="5.10638"
                                                height="5.10638"
                                                rx="2.55319"
                                            />
                                            <rect
                                                x="14.8936"
                                                y="7.44678"
                                                width="5.10638"
                                                height="5.10638"
                                                rx="2.55319"
                                            />
                                            <rect
                                                x="14.8936"
                                                y="14.8937"
                                                width="5.10638"
                                                height="5.10638"
                                                rx="2.55319"
                                            />
                                        </g>
                                    </svg>
                                </li>
                                <li
                                    className={`column-4 ${activeColumn === 4 ? "active" : ""}`}
                                    onClick={() => handleColumnClick(4)}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={20}
                                        height={20}
                                        viewBox="0 0 20 20"
                                    >
                                        <g clipPath="url(#clip0_1610_1453)">
                                            <rect width="3.64741" height="3.64741" rx="1.8237" />
                                            <rect
                                                y="8.17627"
                                                width="3.64741"
                                                height="3.64741"
                                                rx="1.8237"
                                            />
                                            <rect
                                                y={16}
                                                width="3.64741"
                                                height="3.64741"
                                                rx="1.8237"
                                            />
                                            <rect
                                                x="5.31909"
                                                width="3.64741"
                                                height="3.64741"
                                                rx="1.8237"
                                            />
                                            <rect
                                                x="5.31909"
                                                y="8.17627"
                                                width="3.64741"
                                                height="3.64741"
                                                rx="1.8237"
                                            />
                                            <rect
                                                x="5.31909"
                                                y={16}
                                                width="3.64741"
                                                height="3.64741"
                                                rx="1.8237"
                                            />
                                            <rect
                                                x="10.6382"
                                                width="3.64741"
                                                height="3.64741"
                                                rx="1.8237"
                                            />
                                            <rect
                                                x="16.3525"
                                                width="3.64741"
                                                height="3.64741"
                                                rx="1.8237"
                                            />
                                            <rect
                                                x="10.6384"
                                                y="8.17627"
                                                width="3.64741"
                                                height="3.64741"
                                                rx="1.8237"
                                            />
                                            <rect
                                                x="16.3525"
                                                y="8.17627"
                                                width="3.64741"
                                                height="3.64741"
                                                rx="1.8237"
                                            />
                                            <rect
                                                x="10.6382"
                                                y={16}
                                                width="3.64741"
                                                height="3.64741"
                                                rx="1.8237"
                                            />
                                            <rect
                                                x="16.3525"
                                                y={16}
                                                width="3.64741"
                                                height="3.64741"
                                                rx="1.8237"
                                            />
                                        </g>
                                    </svg>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div
                        className={`list-grid-product-wrap column-${activeColumn === 2
                            ? "2"
                            : activeColumn === 3
                                ? "3"
                                : activeColumn === 4
                                    ? "4"
                                    : "4"
                            }-wrapper`}
                    >
                        <div className="row g-4 mb-60">
                            <div
                                className="col-xl-3 col-md-4 item wow animate fadeInDown"
                                data-wow-delay="200ms"
                                data-wow-duration="1500ms"
                            >
                                <div className="auction-card">
                                    <div className="auction-card-img-wrap">
                                        <Link href="/auction-details" className="card-img">
                                            <img src="/assets/img/home1/auction-img1.jpg" alt="" />
                                        </Link>
                                        <div className="batch">
                                            <span className="live">
                                                <svg
                                                    width={11}
                                                    height={11}
                                                    viewBox="0 0 11 11"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path d="M10.6777 11H4.83398C4.65599 11 4.51172 10.8557 4.51172 10.6777V10.334C4.51172 9.97798 4.80025 9.68944 5.15625 9.68944V9.30414C5.15625 8.79397 5.57133 8.37889 6.0815 8.37889H9.43022C9.94039 8.37889 10.3555 8.79397 10.3555 9.30414V9.68944C10.7115 9.68944 11 9.97798 11 10.334V10.6777C11 10.8556 10.8556 11 10.6777 11ZM6.96665 7.09722C6.75245 7.38146 6.34829 7.43829 6.06405 7.22402C5.77973 7.00985 5.72299 6.60568 5.93716 6.32134L7.8766 3.74766C8.09087 3.46333 8.49494 3.40659 8.7792 3.62077C9.06353 3.83503 9.12035 4.23911 8.90609 4.52346L6.96665 7.09722ZM2.334 3.60618C2.11973 3.89042 1.71563 3.94725 1.43131 3.73298C1.14707 3.51881 1.09025 3.11473 1.30451 2.83038L3.24397 0.256726C3.45815 -0.027598 3.86231 -0.0844241 4.14657 0.12984C4.43081 0.344103 4.48763 0.748181 4.27337 1.03253L2.334 3.60618ZM3.74767 5.4785C3.27134 5.11956 2.91373 4.67385 2.69008 4.20454L4.94678 1.20984C5.45955 1.29552 5.98651 1.51631 6.46293 1.87534C6.93928 2.23428 7.29689 2.67999 7.52054 3.14921L5.26382 6.14409C4.75108 6.05841 4.22411 5.83751 3.74767 5.4785ZM2.87749 5.56242C3.02753 5.71533 3.18557 5.86196 3.35979 5.99329C3.53409 6.12456 3.71864 6.23606 3.90689 6.33822L3.48668 6.89589L2.45719 6.12018L2.87749 5.56242ZM2.06929 6.63488L3.09878 7.41059L1.15932 9.98436C0.945055 10.2687 0.540977 10.3254 0.256717 10.1112C-0.027607 9.89698 -0.0843477 9.4929 0.12983 9.20856L2.06929 6.63488Z" />
                                                </svg>
                                                Live
                                            </span>
                                        </div>
                                        <ul className="view-and-favorite-area">
                                            <li>
                                                <a href="#">
                                                    <svg
                                                        width={16}
                                                        height={15}
                                                        viewBox="0 0 16 15"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path d="M8.00013 3.32629L7.32792 2.63535C5.75006 1.01348 2.85685 1.57317 1.81244 3.61222C1.32211 4.57128 1.21149 5.95597 2.10683 7.72315C2.96935 9.42471 4.76378 11.4628 8.00013 13.6828C11.2365 11.4628 13.03 9.42471 13.8934 7.72315C14.7888 5.95503 14.6791 4.57128 14.1878 3.61222C13.1434 1.57317 10.2502 1.01254 8.67234 2.63441L8.00013 3.32629ZM8.00013 14.8125C-6.375 5.31378 3.57406 -2.09995 7.83512 1.8216C7.89138 1.87317 7.94669 1.9266 8.00013 1.98192C8.05303 1.92665 8.10807 1.87349 8.16513 1.82254C12.4253 -2.10182 22.3753 5.31284 8.00013 14.8125Z" />
                                                    </svg>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <svg
                                                        width={17}
                                                        height={11}
                                                        viewBox="0 0 17 11"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            clipRule="evenodd"
                                                            d="M15.4028 5.44118C14.0143 7.8425 11.3811 9.33421 8.53217 9.33421C5.68139 9.33421 3.04821 7.8425 1.65968 5.44118C1.55274 5.25472 1.55274 5.05762 1.65968 4.87132C3.04821 2.47003 5.68139 0.978484 8.53217 0.978484C11.3811 0.978484 14.0143 2.47003 15.4028 4.87132C15.5116 5.05762 15.5116 5.25472 15.4028 5.44118ZM16.2898 4.39522C14.7224 1.68403 11.7499 0 8.53217 0C5.31258 0 2.3401 1.68403 0.772715 4.39522C0.492428 4.87896 0.492428 5.43355 0.772715 5.91693C2.3401 8.62812 5.31258 10.3125 8.53217 10.3125C11.7499 10.3125 14.7224 8.62812 16.2898 5.91693C16.5701 5.43358 16.5701 4.87896 16.2898 4.39522ZM8.53217 7.1634C9.68098 7.1634 10.6159 6.26305 10.6159 5.15617C10.6159 4.04929 9.68098 3.14894 8.53217 3.14894C7.38152 3.14894 6.44663 4.04929 6.44663 5.15617C6.44663 6.26305 7.38156 7.1634 8.53217 7.1634ZM8.53217 2.17045C6.82095 2.17045 5.43061 3.50998 5.43061 5.1562C5.43061 6.80278 6.82098 8.14176 8.53217 8.14176C10.2416 8.14176 11.6319 6.80275 11.6319 5.1562C11.6319 3.50998 10.2416 2.17045 8.53217 2.17045Z"
                                                        />
                                                    </svg>
                                                </a>
                                            </li>
                                        </ul>
                                        <div className="countdown-timer">
                                            <ul data-countdown="2024-10-23 12:00:00">
                                                <li className="times" data-days={0}>
                                                    {days}
                                                    <span>Days</span>
                                                </li>
                                                <li className="colon">:</li>
                                                <li className="times" data-hours={0}>
                                                    {hours}
                                                    <span>Hour</span>
                                                </li>
                                                <li className="colon">:</li>
                                                <li className="times" data-minutes={0}>
                                                    {minutes}
                                                    <span>Min</span>
                                                </li>
                                                <li className="colon">:</li>
                                                <li className="times" data-seconds={0}>
                                                    {seconds}
                                                    <span>Sec</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="auction-card-content">
                                        <h6>
                                            <Link href="/auction-details">
                                                Zenith auto elevating driving your experience
                                            </Link>
                                        </h6>
                                        <div className="price-and-code-area">
                                            <div className="price">
                                                <span>Current Bid at:</span>
                                                <strong>$2,898</strong>
                                            </div>
                                            <div className="code">
                                                <span>Lot # 25896742</span>
                                            </div>
                                        </div>
                                        <div className="author-and-btn-area">
                                            <Link href="/store-details" className="author-area">
                                                <div className="author-img">
                                                    <img
                                                        src="/assets/img/home1/auction-card-author-img1.png"
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="author-content">
                                                    <h6>Maverick Dylan</h6>
                                                </div>
                                            </Link>
                                            <Link href="/auction-details" className="bid-btn">
                                                Bid Now
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="col-xl-3 col-md-4 item wow animate fadeInDown"
                                data-wow-delay="400ms"
                                data-wow-duration="1500ms"
                            >
                                <div className="auction-card">
                                    <div className="auction-card-img-wrap">
                                        <Link href="/auction-details" className="card-img">
                                            <img src="/assets/img/home1/auction-img2.jpg" alt="" />
                                        </Link>
                                        <div className="batch">
                                            <span className="live">
                                                <svg
                                                    width={11}
                                                    height={11}
                                                    viewBox="0 0 11 11"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path d="M10.6777 11H4.83398C4.65599 11 4.51172 10.8557 4.51172 10.6777V10.334C4.51172 9.97798 4.80025 9.68944 5.15625 9.68944V9.30414C5.15625 8.79397 5.57133 8.37889 6.0815 8.37889H9.43022C9.94039 8.37889 10.3555 8.79397 10.3555 9.30414V9.68944C10.7115 9.68944 11 9.97798 11 10.334V10.6777C11 10.8556 10.8556 11 10.6777 11ZM6.96665 7.09722C6.75245 7.38146 6.34829 7.43829 6.06405 7.22402C5.77973 7.00985 5.72299 6.60568 5.93716 6.32134L7.8766 3.74766C8.09087 3.46333 8.49494 3.40659 8.7792 3.62077C9.06353 3.83503 9.12035 4.23911 8.90609 4.52346L6.96665 7.09722ZM2.334 3.60618C2.11973 3.89042 1.71563 3.94725 1.43131 3.73298C1.14707 3.51881 1.09025 3.11473 1.30451 2.83038L3.24397 0.256726C3.45815 -0.027598 3.86231 -0.0844241 4.14657 0.12984C4.43081 0.344103 4.48763 0.748181 4.27337 1.03253L2.334 3.60618ZM3.74767 5.4785C3.27134 5.11956 2.91373 4.67385 2.69008 4.20454L4.94678 1.20984C5.45955 1.29552 5.98651 1.51631 6.46293 1.87534C6.93928 2.23428 7.29689 2.67999 7.52054 3.14921L5.26382 6.14409C4.75108 6.05841 4.22411 5.83751 3.74767 5.4785ZM2.87749 5.56242C3.02753 5.71533 3.18557 5.86196 3.35979 5.99329C3.53409 6.12456 3.71864 6.23606 3.90689 6.33822L3.48668 6.89589L2.45719 6.12018L2.87749 5.56242ZM2.06929 6.63488L3.09878 7.41059L1.15932 9.98436C0.945055 10.2687 0.540977 10.3254 0.256717 10.1112C-0.027607 9.89698 -0.0843477 9.4929 0.12983 9.20856L2.06929 6.63488Z" />
                                                </svg>
                                                Live
                                            </span>
                                        </div>
                                        <ul className="view-and-favorite-area">
                                            <li>
                                                <a href="#">
                                                    <svg
                                                        width={16}
                                                        height={15}
                                                        viewBox="0 0 16 15"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path d="M8.00013 3.32629L7.32792 2.63535C5.75006 1.01348 2.85685 1.57317 1.81244 3.61222C1.32211 4.57128 1.21149 5.95597 2.10683 7.72315C2.96935 9.42471 4.76378 11.4628 8.00013 13.6828C11.2365 11.4628 13.03 9.42471 13.8934 7.72315C14.7888 5.95503 14.6791 4.57128 14.1878 3.61222C13.1434 1.57317 10.2502 1.01254 8.67234 2.63441L8.00013 3.32629ZM8.00013 14.8125C-6.375 5.31378 3.57406 -2.09995 7.83512 1.8216C7.89138 1.87317 7.94669 1.9266 8.00013 1.98192C8.05303 1.92665 8.10807 1.87349 8.16513 1.82254C12.4253 -2.10182 22.3753 5.31284 8.00013 14.8125Z" />
                                                    </svg>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <svg
                                                        width={17}
                                                        height={11}
                                                        viewBox="0 0 17 11"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            clipRule="evenodd"
                                                            d="M15.4028 5.44118C14.0143 7.8425 11.3811 9.33421 8.53217 9.33421C5.68139 9.33421 3.04821 7.8425 1.65968 5.44118C1.55274 5.25472 1.55274 5.05762 1.65968 4.87132C3.04821 2.47003 5.68139 0.978484 8.53217 0.978484C11.3811 0.978484 14.0143 2.47003 15.4028 4.87132C15.5116 5.05762 15.5116 5.25472 15.4028 5.44118ZM16.2898 4.39522C14.7224 1.68403 11.7499 0 8.53217 0C5.31258 0 2.3401 1.68403 0.772715 4.39522C0.492428 4.87896 0.492428 5.43355 0.772715 5.91693C2.3401 8.62812 5.31258 10.3125 8.53217 10.3125C11.7499 10.3125 14.7224 8.62812 16.2898 5.91693C16.5701 5.43358 16.5701 4.87896 16.2898 4.39522ZM8.53217 7.1634C9.68098 7.1634 10.6159 6.26305 10.6159 5.15617C10.6159 4.04929 9.68098 3.14894 8.53217 3.14894C7.38152 3.14894 6.44663 4.04929 6.44663 5.15617C6.44663 6.26305 7.38156 7.1634 8.53217 7.1634ZM8.53217 2.17045C6.82095 2.17045 5.43061 3.50998 5.43061 5.1562C5.43061 6.80278 6.82098 8.14176 8.53217 8.14176C10.2416 8.14176 11.6319 6.80275 11.6319 5.1562C11.6319 3.50998 10.2416 2.17045 8.53217 2.17045Z"
                                                        />
                                                    </svg>
                                                </a>
                                            </li>
                                        </ul>
                                        <div className="countdown-timer">
                                            <ul data-countdown="2024-08-02 12:00:00">
                                                <li className="times" data-days={0}>
                                                    {days}
                                                    <span>Days</span>
                                                </li>
                                                <li className="colon">:</li>
                                                <li className="times" data-hours={0}>
                                                    {hours}
                                                    <span>Hour</span>
                                                </li>
                                                <li className="colon">:</li>
                                                <li className="times" data-minutes={0}>
                                                    {minutes}
                                                    <span>Min</span>
                                                </li>
                                                <li className="colon">:</li>
                                                <li className="times" data-seconds={0}>
                                                    {seconds}
                                                    <span>Sec</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="auction-card-content">
                                        <h6>
                                            <Link href="/auction-details">
                                                Heritage had curating watch time treasures.
                                            </Link>
                                        </h6>
                                        <div className="price-and-code-area">
                                            <div className="price">
                                                <span>Current Bid at:</span>
                                                <strong>$3,780</strong>
                                            </div>
                                            <div className="code">
                                                <span>Lot # 25896752</span>
                                            </div>
                                        </div>
                                        <div className="author-and-btn-area">
                                            <Link href="/store-details" className="author-area">
                                                <div className="author-img">
                                                    <img
                                                        src="/assets/img/home1/auction-card-author-img2.png"
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="author-content">
                                                    <h6>Wyatt Matthew</h6>
                                                </div>
                                            </Link>
                                            <Link href="/auction-details" className="bid-btn">
                                                Bid Now
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="col-xl-3 col-md-4 item wow animate fadeInDown"
                                data-wow-delay="600ms"
                                data-wow-duration="1500ms"
                            >
                                <div className="auction-card">
                                    <div className="auction-card-img-wrap">
                                        <Link href="/auction-details" className="card-img">
                                            <img src="/assets/img/home1/auction-img3.jpg" alt="" />
                                        </Link>
                                        <div className="batch">
                                            <span className="live">
                                                <svg
                                                    width={11}
                                                    height={11}
                                                    viewBox="0 0 11 11"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path d="M10.6777 11H4.83398C4.65599 11 4.51172 10.8557 4.51172 10.6777V10.334C4.51172 9.97798 4.80025 9.68944 5.15625 9.68944V9.30414C5.15625 8.79397 5.57133 8.37889 6.0815 8.37889H9.43022C9.94039 8.37889 10.3555 8.79397 10.3555 9.30414V9.68944C10.7115 9.68944 11 9.97798 11 10.334V10.6777C11 10.8556 10.8556 11 10.6777 11ZM6.96665 7.09722C6.75245 7.38146 6.34829 7.43829 6.06405 7.22402C5.77973 7.00985 5.72299 6.60568 5.93716 6.32134L7.8766 3.74766C8.09087 3.46333 8.49494 3.40659 8.7792 3.62077C9.06353 3.83503 9.12035 4.23911 8.90609 4.52346L6.96665 7.09722ZM2.334 3.60618C2.11973 3.89042 1.71563 3.94725 1.43131 3.73298C1.14707 3.51881 1.09025 3.11473 1.30451 2.83038L3.24397 0.256726C3.45815 -0.027598 3.86231 -0.0844241 4.14657 0.12984C4.43081 0.344103 4.48763 0.748181 4.27337 1.03253L2.334 3.60618ZM3.74767 5.4785C3.27134 5.11956 2.91373 4.67385 2.69008 4.20454L4.94678 1.20984C5.45955 1.29552 5.98651 1.51631 6.46293 1.87534C6.93928 2.23428 7.29689 2.67999 7.52054 3.14921L5.26382 6.14409C4.75108 6.05841 4.22411 5.83751 3.74767 5.4785ZM2.87749 5.56242C3.02753 5.71533 3.18557 5.86196 3.35979 5.99329C3.53409 6.12456 3.71864 6.23606 3.90689 6.33822L3.48668 6.89589L2.45719 6.12018L2.87749 5.56242ZM2.06929 6.63488L3.09878 7.41059L1.15932 9.98436C0.945055 10.2687 0.540977 10.3254 0.256717 10.1112C-0.027607 9.89698 -0.0843477 9.4929 0.12983 9.20856L2.06929 6.63488Z" />
                                                </svg>
                                                Live
                                            </span>
                                        </div>
                                        <ul className="view-and-favorite-area">
                                            <li>
                                                <a href="#">
                                                    <svg
                                                        width={16}
                                                        height={15}
                                                        viewBox="0 0 16 15"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path d="M8.00013 3.32629L7.32792 2.63535C5.75006 1.01348 2.85685 1.57317 1.81244 3.61222C1.32211 4.57128 1.21149 5.95597 2.10683 7.72315C2.96935 9.42471 4.76378 11.4628 8.00013 13.6828C11.2365 11.4628 13.03 9.42471 13.8934 7.72315C14.7888 5.95503 14.6791 4.57128 14.1878 3.61222C13.1434 1.57317 10.2502 1.01254 8.67234 2.63441L8.00013 3.32629ZM8.00013 14.8125C-6.375 5.31378 3.57406 -2.09995 7.83512 1.8216C7.89138 1.87317 7.94669 1.9266 8.00013 1.98192C8.05303 1.92665 8.10807 1.87349 8.16513 1.82254C12.4253 -2.10182 22.3753 5.31284 8.00013 14.8125Z" />
                                                    </svg>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <svg
                                                        width={17}
                                                        height={11}
                                                        viewBox="0 0 17 11"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            clipRule="evenodd"
                                                            d="M15.4028 5.44118C14.0143 7.8425 11.3811 9.33421 8.53217 9.33421C5.68139 9.33421 3.04821 7.8425 1.65968 5.44118C1.55274 5.25472 1.55274 5.05762 1.65968 4.87132C3.04821 2.47003 5.68139 0.978484 8.53217 0.978484C11.3811 0.978484 14.0143 2.47003 15.4028 4.87132C15.5116 5.05762 15.5116 5.25472 15.4028 5.44118ZM16.2898 4.39522C14.7224 1.68403 11.7499 0 8.53217 0C5.31258 0 2.3401 1.68403 0.772715 4.39522C0.492428 4.87896 0.492428 5.43355 0.772715 5.91693C2.3401 8.62812 5.31258 10.3125 8.53217 10.3125C11.7499 10.3125 14.7224 8.62812 16.2898 5.91693C16.5701 5.43358 16.5701 4.87896 16.2898 4.39522ZM8.53217 7.1634C9.68098 7.1634 10.6159 6.26305 10.6159 5.15617C10.6159 4.04929 9.68098 3.14894 8.53217 3.14894C7.38152 3.14894 6.44663 4.04929 6.44663 5.15617C6.44663 6.26305 7.38156 7.1634 8.53217 7.1634ZM8.53217 2.17045C6.82095 2.17045 5.43061 3.50998 5.43061 5.1562C5.43061 6.80278 6.82098 8.14176 8.53217 8.14176C10.2416 8.14176 11.6319 6.80275 11.6319 5.1562C11.6319 3.50998 10.2416 2.17045 8.53217 2.17045Z"
                                                        />
                                                    </svg>
                                                </a>
                                            </li>
                                        </ul>
                                        <div className="countdown-timer">
                                            <ul data-countdown="2024-09-25 12:00:00">
                                                <li className="times" data-days={0}>
                                                    {days}
                                                    <span>Days</span>
                                                </li>
                                                <li className="colon">:</li>
                                                <li className="times" data-hours={0}>
                                                    {hours}
                                                    <span>Hour</span>
                                                </li>
                                                <li className="colon">:</li>
                                                <li className="times" data-minutes={0}>
                                                    {minutes}
                                                    <span>Min</span>
                                                </li>
                                                <li className="colon">:</li>
                                                <li className="times" data-seconds={0}>
                                                    {seconds}
                                                    <span>Sec</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="auction-card-content">
                                        <h6>
                                            <Link href="/auction-details">
                                                Canvas code redefining art in the digital realm.
                                            </Link>
                                        </h6>
                                        <div className="price-and-code-area">
                                            <div className="price">
                                                <span>Current Bid at:</span>
                                                <strong>$4,564</strong>
                                            </div>
                                            <div className="code">
                                                <span>Lot # 25896755</span>
                                            </div>
                                        </div>
                                        <div className="author-and-btn-area">
                                            <Link href="/store-details" className="author-area">
                                                <div className="author-img">
                                                    <img
                                                        src="/assets/img/home1/auction-card-author-img3.png"
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="author-content">
                                                    <h6>Julian Gabriel</h6>
                                                </div>
                                            </Link>
                                            <Link href="/auction-details" className="bid-btn">
                                                Bid Now
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="col-xl-3 col-md-4 item wow animate fadeInDown"
                                data-wow-delay="800ms"
                                data-wow-duration="1500ms"
                            >
                                <div className="auction-card">
                                    <div className="auction-card-img-wrap">
                                        <Link href="/auction-details" className="card-img">
                                            <img src="/assets/img/home1/auction-img4.jpg" alt="" />
                                        </Link>
                                        <div className="batch">
                                            <span className="live">
                                                <svg
                                                    width={11}
                                                    height={11}
                                                    viewBox="0 0 11 11"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path d="M10.6777 11H4.83398C4.65599 11 4.51172 10.8557 4.51172 10.6777V10.334C4.51172 9.97798 4.80025 9.68944 5.15625 9.68944V9.30414C5.15625 8.79397 5.57133 8.37889 6.0815 8.37889H9.43022C9.94039 8.37889 10.3555 8.79397 10.3555 9.30414V9.68944C10.7115 9.68944 11 9.97798 11 10.334V10.6777C11 10.8556 10.8556 11 10.6777 11ZM6.96665 7.09722C6.75245 7.38146 6.34829 7.43829 6.06405 7.22402C5.77973 7.00985 5.72299 6.60568 5.93716 6.32134L7.8766 3.74766C8.09087 3.46333 8.49494 3.40659 8.7792 3.62077C9.06353 3.83503 9.12035 4.23911 8.90609 4.52346L6.96665 7.09722ZM2.334 3.60618C2.11973 3.89042 1.71563 3.94725 1.43131 3.73298C1.14707 3.51881 1.09025 3.11473 1.30451 2.83038L3.24397 0.256726C3.45815 -0.027598 3.86231 -0.0844241 4.14657 0.12984C4.43081 0.344103 4.48763 0.748181 4.27337 1.03253L2.334 3.60618ZM3.74767 5.4785C3.27134 5.11956 2.91373 4.67385 2.69008 4.20454L4.94678 1.20984C5.45955 1.29552 5.98651 1.51631 6.46293 1.87534C6.93928 2.23428 7.29689 2.67999 7.52054 3.14921L5.26382 6.14409C4.75108 6.05841 4.22411 5.83751 3.74767 5.4785ZM2.87749 5.56242C3.02753 5.71533 3.18557 5.86196 3.35979 5.99329C3.53409 6.12456 3.71864 6.23606 3.90689 6.33822L3.48668 6.89589L2.45719 6.12018L2.87749 5.56242ZM2.06929 6.63488L3.09878 7.41059L1.15932 9.98436C0.945055 10.2687 0.540977 10.3254 0.256717 10.1112C-0.027607 9.89698 -0.0843477 9.4929 0.12983 9.20856L2.06929 6.63488Z" />
                                                </svg>
                                                Live
                                            </span>
                                        </div>
                                        <ul className="view-and-favorite-area">
                                            <li>
                                                <a href="#">
                                                    <svg
                                                        width={16}
                                                        height={15}
                                                        viewBox="0 0 16 15"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path d="M8.00013 3.32629L7.32792 2.63535C5.75006 1.01348 2.85685 1.57317 1.81244 3.61222C1.32211 4.57128 1.21149 5.95597 2.10683 7.72315C2.96935 9.42471 4.76378 11.4628 8.00013 13.6828C11.2365 11.4628 13.03 9.42471 13.8934 7.72315C14.7888 5.95503 14.6791 4.57128 14.1878 3.61222C13.1434 1.57317 10.2502 1.01254 8.67234 2.63441L8.00013 3.32629ZM8.00013 14.8125C-6.375 5.31378 3.57406 -2.09995 7.83512 1.8216C7.89138 1.87317 7.94669 1.9266 8.00013 1.98192C8.05303 1.92665 8.10807 1.87349 8.16513 1.82254C12.4253 -2.10182 22.3753 5.31284 8.00013 14.8125Z" />
                                                    </svg>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <svg
                                                        width={17}
                                                        height={11}
                                                        viewBox="0 0 17 11"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            clipRule="evenodd"
                                                            d="M15.4028 5.44118C14.0143 7.8425 11.3811 9.33421 8.53217 9.33421C5.68139 9.33421 3.04821 7.8425 1.65968 5.44118C1.55274 5.25472 1.55274 5.05762 1.65968 4.87132C3.04821 2.47003 5.68139 0.978484 8.53217 0.978484C11.3811 0.978484 14.0143 2.47003 15.4028 4.87132C15.5116 5.05762 15.5116 5.25472 15.4028 5.44118ZM16.2898 4.39522C14.7224 1.68403 11.7499 0 8.53217 0C5.31258 0 2.3401 1.68403 0.772715 4.39522C0.492428 4.87896 0.492428 5.43355 0.772715 5.91693C2.3401 8.62812 5.31258 10.3125 8.53217 10.3125C11.7499 10.3125 14.7224 8.62812 16.2898 5.91693C16.5701 5.43358 16.5701 4.87896 16.2898 4.39522ZM8.53217 7.1634C9.68098 7.1634 10.6159 6.26305 10.6159 5.15617C10.6159 4.04929 9.68098 3.14894 8.53217 3.14894C7.38152 3.14894 6.44663 4.04929 6.44663 5.15617C6.44663 6.26305 7.38156 7.1634 8.53217 7.1634ZM8.53217 2.17045C6.82095 2.17045 5.43061 3.50998 5.43061 5.1562C5.43061 6.80278 6.82098 8.14176 8.53217 8.14176C10.2416 8.14176 11.6319 6.80275 11.6319 5.1562C11.6319 3.50998 10.2416 2.17045 8.53217 2.17045Z"
                                                        />
                                                    </svg>
                                                </a>
                                            </li>
                                        </ul>
                                        <div className="countdown-timer">
                                            <ul data-countdown="2024-09-12 12:00:00">
                                                <li className="times" data-days={0}>
                                                    {days}
                                                    <span>Days</span>
                                                </li>
                                                <li className="colon">:</li>
                                                <li className="times" data-hours={0}>
                                                    {hours}
                                                    <span>Hour</span>
                                                </li>
                                                <li className="colon">:</li>
                                                <li className="times" data-minutes={0}>
                                                    {minutes}
                                                    <span>Min</span>
                                                </li>
                                                <li className="colon">:</li>
                                                <li className="times" data-seconds={0}>
                                                    {seconds}
                                                    <span>Sec</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="auction-card-content">
                                        <h6>
                                            <Link href="/auction-details">
                                                Nomism on nexus connecting collectors to coins.
                                            </Link>
                                        </h6>
                                        <div className="price-and-code-area">
                                            <div className="price">
                                                <span>Current Bid at:</span>
                                                <strong>$5,635</strong>
                                            </div>
                                            <div className="code">
                                                <span>Lot # 25896652</span>
                                            </div>
                                        </div>
                                        <div className="author-and-btn-area">
                                            <Link href="/store-details" className="author-area">
                                                <div className="author-img">
                                                    <img
                                                        src="/assets/img/home1/auction-card-author-img4.png"
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="author-content">
                                                    <h6>Jacob Logan</h6>
                                                </div>
                                            </Link>
                                            <Link href="/auction-details" className="bid-btn">
                                                Bid Now
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="col-xl-3 col-md-4 item wow animate fadeInDown"
                                data-wow-delay="800ms"
                                data-wow-duration="1500ms"
                            >
                                <div className="auction-card">
                                    <div className="auction-card-img-wrap">
                                        <Link href="/auction-details" className="card-img">
                                            <img src="/assets/img/home1/auction-img5.jpg" alt="" />
                                        </Link>
                                        <div className="batch">
                                            <span className="live">
                                                <svg
                                                    width={11}
                                                    height={11}
                                                    viewBox="0 0 11 11"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path d="M10.6777 11H4.83398C4.65599 11 4.51172 10.8557 4.51172 10.6777V10.334C4.51172 9.97798 4.80025 9.68944 5.15625 9.68944V9.30414C5.15625 8.79397 5.57133 8.37889 6.0815 8.37889H9.43022C9.94039 8.37889 10.3555 8.79397 10.3555 9.30414V9.68944C10.7115 9.68944 11 9.97798 11 10.334V10.6777C11 10.8556 10.8556 11 10.6777 11ZM6.96665 7.09722C6.75245 7.38146 6.34829 7.43829 6.06405 7.22402C5.77973 7.00985 5.72299 6.60568 5.93716 6.32134L7.8766 3.74766C8.09087 3.46333 8.49494 3.40659 8.7792 3.62077C9.06353 3.83503 9.12035 4.23911 8.90609 4.52346L6.96665 7.09722ZM2.334 3.60618C2.11973 3.89042 1.71563 3.94725 1.43131 3.73298C1.14707 3.51881 1.09025 3.11473 1.30451 2.83038L3.24397 0.256726C3.45815 -0.027598 3.86231 -0.0844241 4.14657 0.12984C4.43081 0.344103 4.48763 0.748181 4.27337 1.03253L2.334 3.60618ZM3.74767 5.4785C3.27134 5.11956 2.91373 4.67385 2.69008 4.20454L4.94678 1.20984C5.45955 1.29552 5.98651 1.51631 6.46293 1.87534C6.93928 2.23428 7.29689 2.67999 7.52054 3.14921L5.26382 6.14409C4.75108 6.05841 4.22411 5.83751 3.74767 5.4785ZM2.87749 5.56242C3.02753 5.71533 3.18557 5.86196 3.35979 5.99329C3.53409 6.12456 3.71864 6.23606 3.90689 6.33822L3.48668 6.89589L2.45719 6.12018L2.87749 5.56242ZM2.06929 6.63488L3.09878 7.41059L1.15932 9.98436C0.945055 10.2687 0.540977 10.3254 0.256717 10.1112C-0.027607 9.89698 -0.0843477 9.4929 0.12983 9.20856L2.06929 6.63488Z" />
                                                </svg>
                                                Live
                                            </span>
                                        </div>
                                        <ul className="view-and-favorite-area">
                                            <li>
                                                <a href="#">
                                                    <svg
                                                        width={16}
                                                        height={15}
                                                        viewBox="0 0 16 15"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path d="M8.00013 3.32629L7.32792 2.63535C5.75006 1.01348 2.85685 1.57317 1.81244 3.61222C1.32211 4.57128 1.21149 5.95597 2.10683 7.72315C2.96935 9.42471 4.76378 11.4628 8.00013 13.6828C11.2365 11.4628 13.03 9.42471 13.8934 7.72315C14.7888 5.95503 14.6791 4.57128 14.1878 3.61222C13.1434 1.57317 10.2502 1.01254 8.67234 2.63441L8.00013 3.32629ZM8.00013 14.8125C-6.375 5.31378 3.57406 -2.09995 7.83512 1.8216C7.89138 1.87317 7.94669 1.9266 8.00013 1.98192C8.05303 1.92665 8.10807 1.87349 8.16513 1.82254C12.4253 -2.10182 22.3753 5.31284 8.00013 14.8125Z" />
                                                    </svg>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <svg
                                                        width={17}
                                                        height={11}
                                                        viewBox="0 0 17 11"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            clipRule="evenodd"
                                                            d="M15.4028 5.44118C14.0143 7.8425 11.3811 9.33421 8.53217 9.33421C5.68139 9.33421 3.04821 7.8425 1.65968 5.44118C1.55274 5.25472 1.55274 5.05762 1.65968 4.87132C3.04821 2.47003 5.68139 0.978484 8.53217 0.978484C11.3811 0.978484 14.0143 2.47003 15.4028 4.87132C15.5116 5.05762 15.5116 5.25472 15.4028 5.44118ZM16.2898 4.39522C14.7224 1.68403 11.7499 0 8.53217 0C5.31258 0 2.3401 1.68403 0.772715 4.39522C0.492428 4.87896 0.492428 5.43355 0.772715 5.91693C2.3401 8.62812 5.31258 10.3125 8.53217 10.3125C11.7499 10.3125 14.7224 8.62812 16.2898 5.91693C16.5701 5.43358 16.5701 4.87896 16.2898 4.39522ZM8.53217 7.1634C9.68098 7.1634 10.6159 6.26305 10.6159 5.15617C10.6159 4.04929 9.68098 3.14894 8.53217 3.14894C7.38152 3.14894 6.44663 4.04929 6.44663 5.15617C6.44663 6.26305 7.38156 7.1634 8.53217 7.1634ZM8.53217 2.17045C6.82095 2.17045 5.43061 3.50998 5.43061 5.1562C5.43061 6.80278 6.82098 8.14176 8.53217 8.14176C10.2416 8.14176 11.6319 6.80275 11.6319 5.1562C11.6319 3.50998 10.2416 2.17045 8.53217 2.17045Z"
                                                        />
                                                    </svg>
                                                </a>
                                            </li>
                                        </ul>
                                        <div className="countdown-timer">
                                            <ul data-countdown="2024-10-05 12:00:00">
                                                <li className="times" data-days={0}>
                                                    {days}
                                                    <span>Days</span>
                                                </li>
                                                <li className="colon">:</li>
                                                <li className="times" data-hours={0}>
                                                    {hours}
                                                    <span>Hour</span>
                                                </li>
                                                <li className="colon">:</li>
                                                <li className="times" data-minutes={0}>
                                                    {minutes}
                                                    <span>Min</span>
                                                </li>
                                                <li className="colon">:</li>
                                                <li className="times" data-seconds={0}>
                                                    {seconds}
                                                    <span>Sec</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="auction-card-content">
                                        <h6>
                                            <Link href="/auction-details">
                                                Vintage valor embracing then elegance of eras past.
                                            </Link>
                                        </h6>
                                        <div className="price-and-code-area">
                                            <div className="price">
                                                <span>Current Bid at:</span>
                                                <strong>$2,898</strong>
                                            </div>
                                            <div className="code">
                                                <span>Lot # 25896652</span>
                                            </div>
                                        </div>
                                        <div className="author-and-btn-area">
                                            <Link href="/store-details" className="author-area">
                                                <div className="author-img">
                                                    <img
                                                        src="/assets/img/home1/auction-card-author-img5.png"
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="author-content">
                                                    <h6>Aiden Joseph</h6>
                                                </div>
                                            </Link>
                                            <Link href="/auction-details" className="bid-btn">
                                                Bid Now
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="col-xl-3 col-md-4 item wow animate fadeInDown"
                                data-wow-delay="600ms"
                                data-wow-duration="1500ms"
                            >
                                <div className="auction-card">
                                    <div className="auction-card-img-wrap">
                                        <Link href="/auction-details" className="card-img">
                                            <img src="/assets/img/home1/auction-img6.jpg" alt="" />
                                        </Link>
                                        <div className="batch">
                                            <span className="live">
                                                <svg
                                                    width={11}
                                                    height={11}
                                                    viewBox="0 0 11 11"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path d="M10.6777 11H4.83398C4.65599 11 4.51172 10.8557 4.51172 10.6777V10.334C4.51172 9.97798 4.80025 9.68944 5.15625 9.68944V9.30414C5.15625 8.79397 5.57133 8.37889 6.0815 8.37889H9.43022C9.94039 8.37889 10.3555 8.79397 10.3555 9.30414V9.68944C10.7115 9.68944 11 9.97798 11 10.334V10.6777C11 10.8556 10.8556 11 10.6777 11ZM6.96665 7.09722C6.75245 7.38146 6.34829 7.43829 6.06405 7.22402C5.77973 7.00985 5.72299 6.60568 5.93716 6.32134L7.8766 3.74766C8.09087 3.46333 8.49494 3.40659 8.7792 3.62077C9.06353 3.83503 9.12035 4.23911 8.90609 4.52346L6.96665 7.09722ZM2.334 3.60618C2.11973 3.89042 1.71563 3.94725 1.43131 3.73298C1.14707 3.51881 1.09025 3.11473 1.30451 2.83038L3.24397 0.256726C3.45815 -0.027598 3.86231 -0.0844241 4.14657 0.12984C4.43081 0.344103 4.48763 0.748181 4.27337 1.03253L2.334 3.60618ZM3.74767 5.4785C3.27134 5.11956 2.91373 4.67385 2.69008 4.20454L4.94678 1.20984C5.45955 1.29552 5.98651 1.51631 6.46293 1.87534C6.93928 2.23428 7.29689 2.67999 7.52054 3.14921L5.26382 6.14409C4.75108 6.05841 4.22411 5.83751 3.74767 5.4785ZM2.87749 5.56242C3.02753 5.71533 3.18557 5.86196 3.35979 5.99329C3.53409 6.12456 3.71864 6.23606 3.90689 6.33822L3.48668 6.89589L2.45719 6.12018L2.87749 5.56242ZM2.06929 6.63488L3.09878 7.41059L1.15932 9.98436C0.945055 10.2687 0.540977 10.3254 0.256717 10.1112C-0.027607 9.89698 -0.0843477 9.4929 0.12983 9.20856L2.06929 6.63488Z" />
                                                </svg>
                                                Live
                                            </span>
                                        </div>
                                        <ul className="view-and-favorite-area">
                                            <li>
                                                <a href="#">
                                                    <svg
                                                        width={16}
                                                        height={15}
                                                        viewBox="0 0 16 15"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path d="M8.00013 3.32629L7.32792 2.63535C5.75006 1.01348 2.85685 1.57317 1.81244 3.61222C1.32211 4.57128 1.21149 5.95597 2.10683 7.72315C2.96935 9.42471 4.76378 11.4628 8.00013 13.6828C11.2365 11.4628 13.03 9.42471 13.8934 7.72315C14.7888 5.95503 14.6791 4.57128 14.1878 3.61222C13.1434 1.57317 10.2502 1.01254 8.67234 2.63441L8.00013 3.32629ZM8.00013 14.8125C-6.375 5.31378 3.57406 -2.09995 7.83512 1.8216C7.89138 1.87317 7.94669 1.9266 8.00013 1.98192C8.05303 1.92665 8.10807 1.87349 8.16513 1.82254C12.4253 -2.10182 22.3753 5.31284 8.00013 14.8125Z" />
                                                    </svg>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <svg
                                                        width={17}
                                                        height={11}
                                                        viewBox="0 0 17 11"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            clipRule="evenodd"
                                                            d="M15.4028 5.44118C14.0143 7.8425 11.3811 9.33421 8.53217 9.33421C5.68139 9.33421 3.04821 7.8425 1.65968 5.44118C1.55274 5.25472 1.55274 5.05762 1.65968 4.87132C3.04821 2.47003 5.68139 0.978484 8.53217 0.978484C11.3811 0.978484 14.0143 2.47003 15.4028 4.87132C15.5116 5.05762 15.5116 5.25472 15.4028 5.44118ZM16.2898 4.39522C14.7224 1.68403 11.7499 0 8.53217 0C5.31258 0 2.3401 1.68403 0.772715 4.39522C0.492428 4.87896 0.492428 5.43355 0.772715 5.91693C2.3401 8.62812 5.31258 10.3125 8.53217 10.3125C11.7499 10.3125 14.7224 8.62812 16.2898 5.91693C16.5701 5.43358 16.5701 4.87896 16.2898 4.39522ZM8.53217 7.1634C9.68098 7.1634 10.6159 6.26305 10.6159 5.15617C10.6159 4.04929 9.68098 3.14894 8.53217 3.14894C7.38152 3.14894 6.44663 4.04929 6.44663 5.15617C6.44663 6.26305 7.38156 7.1634 8.53217 7.1634ZM8.53217 2.17045C6.82095 2.17045 5.43061 3.50998 5.43061 5.1562C5.43061 6.80278 6.82098 8.14176 8.53217 8.14176C10.2416 8.14176 11.6319 6.80275 11.6319 5.1562C11.6319 3.50998 10.2416 2.17045 8.53217 2.17045Z"
                                                        />
                                                    </svg>
                                                </a>
                                            </li>
                                        </ul>
                                        <div className="countdown-timer">
                                            <ul data-countdown="2024-08-05 12:00:00">
                                                <li className="times" data-days={0}>
                                                    {days}
                                                    <span>Days</span>
                                                </li>
                                                <li className="colon">:</li>
                                                <li className="times" data-hours={0}>
                                                    {hours}
                                                    <span>Hour</span>
                                                </li>
                                                <li className="colon">:</li>
                                                <li className="times" data-minutes={0}>
                                                    {minutes}
                                                    <span>Min</span>
                                                </li>
                                                <li className="colon">:</li>
                                                <li className="times" data-seconds={0}>
                                                    {seconds}
                                                    <span>Sec</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="auction-card-content">
                                        <h6>
                                            <Link href="/auction-details">
                                                Canvas &amp; culture brush withn elegance auction.
                                            </Link>
                                        </h6>
                                        <div className="price-and-code-area">
                                            <div className="price">
                                                <span>Current Bid at:</span>
                                                <strong>$9,458</strong>
                                            </div>
                                            <div className="code">
                                                <span>Lot # 25896652</span>
                                            </div>
                                        </div>
                                        <div className="author-and-btn-area">
                                            <Link href="/store-details" className="author-area">
                                                <div className="author-img">
                                                    <img
                                                        src="/assets/img/home1/auction-card-author-img6.png"
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="author-content">
                                                    <h6>John Hudson</h6>
                                                </div>
                                            </Link>
                                            <Link href="/auction-details" className="bid-btn">
                                                Bid Now
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="col-xl-3 col-md-4 item wow animate fadeInDown"
                                data-wow-delay="400ms"
                                data-wow-duration="1500ms"
                            >
                                <div className="auction-card">
                                    <div className="auction-card-img-wrap">
                                        <Link href="/auction-details" className="card-img">
                                            <img src="/assets/img/home1/auction-img7.jpg" alt="" />
                                        </Link>
                                        <div className="batch">
                                            <span className="live">
                                                <svg
                                                    width={11}
                                                    height={11}
                                                    viewBox="0 0 11 11"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path d="M10.6777 11H4.83398C4.65599 11 4.51172 10.8557 4.51172 10.6777V10.334C4.51172 9.97798 4.80025 9.68944 5.15625 9.68944V9.30414C5.15625 8.79397 5.57133 8.37889 6.0815 8.37889H9.43022C9.94039 8.37889 10.3555 8.79397 10.3555 9.30414V9.68944C10.7115 9.68944 11 9.97798 11 10.334V10.6777C11 10.8556 10.8556 11 10.6777 11ZM6.96665 7.09722C6.75245 7.38146 6.34829 7.43829 6.06405 7.22402C5.77973 7.00985 5.72299 6.60568 5.93716 6.32134L7.8766 3.74766C8.09087 3.46333 8.49494 3.40659 8.7792 3.62077C9.06353 3.83503 9.12035 4.23911 8.90609 4.52346L6.96665 7.09722ZM2.334 3.60618C2.11973 3.89042 1.71563 3.94725 1.43131 3.73298C1.14707 3.51881 1.09025 3.11473 1.30451 2.83038L3.24397 0.256726C3.45815 -0.027598 3.86231 -0.0844241 4.14657 0.12984C4.43081 0.344103 4.48763 0.748181 4.27337 1.03253L2.334 3.60618ZM3.74767 5.4785C3.27134 5.11956 2.91373 4.67385 2.69008 4.20454L4.94678 1.20984C5.45955 1.29552 5.98651 1.51631 6.46293 1.87534C6.93928 2.23428 7.29689 2.67999 7.52054 3.14921L5.26382 6.14409C4.75108 6.05841 4.22411 5.83751 3.74767 5.4785ZM2.87749 5.56242C3.02753 5.71533 3.18557 5.86196 3.35979 5.99329C3.53409 6.12456 3.71864 6.23606 3.90689 6.33822L3.48668 6.89589L2.45719 6.12018L2.87749 5.56242ZM2.06929 6.63488L3.09878 7.41059L1.15932 9.98436C0.945055 10.2687 0.540977 10.3254 0.256717 10.1112C-0.027607 9.89698 -0.0843477 9.4929 0.12983 9.20856L2.06929 6.63488Z" />
                                                </svg>
                                                Live
                                            </span>
                                        </div>
                                        <ul className="view-and-favorite-area">
                                            <li>
                                                <a href="#">
                                                    <svg
                                                        width={16}
                                                        height={15}
                                                        viewBox="0 0 16 15"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path d="M8.00013 3.32629L7.32792 2.63535C5.75006 1.01348 2.85685 1.57317 1.81244 3.61222C1.32211 4.57128 1.21149 5.95597 2.10683 7.72315C2.96935 9.42471 4.76378 11.4628 8.00013 13.6828C11.2365 11.4628 13.03 9.42471 13.8934 7.72315C14.7888 5.95503 14.6791 4.57128 14.1878 3.61222C13.1434 1.57317 10.2502 1.01254 8.67234 2.63441L8.00013 3.32629ZM8.00013 14.8125C-6.375 5.31378 3.57406 -2.09995 7.83512 1.8216C7.89138 1.87317 7.94669 1.9266 8.00013 1.98192C8.05303 1.92665 8.10807 1.87349 8.16513 1.82254C12.4253 -2.10182 22.3753 5.31284 8.00013 14.8125Z" />
                                                    </svg>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <svg
                                                        width={17}
                                                        height={11}
                                                        viewBox="0 0 17 11"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            clipRule="evenodd"
                                                            d="M15.4028 5.44118C14.0143 7.8425 11.3811 9.33421 8.53217 9.33421C5.68139 9.33421 3.04821 7.8425 1.65968 5.44118C1.55274 5.25472 1.55274 5.05762 1.65968 4.87132C3.04821 2.47003 5.68139 0.978484 8.53217 0.978484C11.3811 0.978484 14.0143 2.47003 15.4028 4.87132C15.5116 5.05762 15.5116 5.25472 15.4028 5.44118ZM16.2898 4.39522C14.7224 1.68403 11.7499 0 8.53217 0C5.31258 0 2.3401 1.68403 0.772715 4.39522C0.492428 4.87896 0.492428 5.43355 0.772715 5.91693C2.3401 8.62812 5.31258 10.3125 8.53217 10.3125C11.7499 10.3125 14.7224 8.62812 16.2898 5.91693C16.5701 5.43358 16.5701 4.87896 16.2898 4.39522ZM8.53217 7.1634C9.68098 7.1634 10.6159 6.26305 10.6159 5.15617C10.6159 4.04929 9.68098 3.14894 8.53217 3.14894C7.38152 3.14894 6.44663 4.04929 6.44663 5.15617C6.44663 6.26305 7.38156 7.1634 8.53217 7.1634ZM8.53217 2.17045C6.82095 2.17045 5.43061 3.50998 5.43061 5.1562C5.43061 6.80278 6.82098 8.14176 8.53217 8.14176C10.2416 8.14176 11.6319 6.80275 11.6319 5.1562C11.6319 3.50998 10.2416 2.17045 8.53217 2.17045Z"
                                                        />
                                                    </svg>
                                                </a>
                                            </li>
                                        </ul>
                                        <div className="countdown-timer">
                                            <ul data-countdown="2024-08-25 12:00:00">
                                                <li className="times" data-days={0}>
                                                    {days}
                                                    <span>Days</span>
                                                </li>
                                                <li className="colon">:</li>
                                                <li className="times" data-hours={0}>
                                                    {hours}
                                                    <span>Hour</span>
                                                </li>
                                                <li className="colon">:</li>
                                                <li className="times" data-minutes={0}>
                                                    {minutes}
                                                    <span>Min</span>
                                                </li>
                                                <li className="colon">:</li>
                                                <li className="times" data-seconds={0}>
                                                    {seconds}
                                                    <span>Sec</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="auction-card-content">
                                        <h6>
                                            <Link href="/auction-details">
                                                Nostalgian hookup memories reside in every piece.
                                            </Link>
                                        </h6>
                                        <div className="price-and-code-area">
                                            <div className="price">
                                                <span>Current Bid at:</span>
                                                <strong>$8,687</strong>
                                            </div>
                                            <div className="code">
                                                <span>Lot # 25896625</span>
                                            </div>
                                        </div>
                                        <div className="author-and-btn-area">
                                            <Link href="/store-details" className="author-area">
                                                <div className="author-img">
                                                    <img
                                                        src="/assets/img/home1/auction-card-author-img7.png"
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="author-content">
                                                    <h6>Leo Jackson</h6>
                                                </div>
                                            </Link>
                                            <Link href="/auction-details" className="bid-btn">
                                                Bid Now
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="col-xl-3 col-md-4 item wow animate fadeInDown"
                                data-wow-delay="200ms"
                                data-wow-duration="1500ms"
                            >
                                <div className="auction-card">
                                    <div className="auction-card-img-wrap">
                                        <Link href="/auction-details" className="card-img">
                                            <img src="/assets/img/home1/auction-img10.jpg" alt="" />
                                        </Link>
                                        <div className="batch">
                                            <span className="live">
                                                <svg
                                                    width={11}
                                                    height={11}
                                                    viewBox="0 0 11 11"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path d="M10.6777 11H4.83398C4.65599 11 4.51172 10.8557 4.51172 10.6777V10.334C4.51172 9.97798 4.80025 9.68944 5.15625 9.68944V9.30414C5.15625 8.79397 5.57133 8.37889 6.0815 8.37889H9.43022C9.94039 8.37889 10.3555 8.79397 10.3555 9.30414V9.68944C10.7115 9.68944 11 9.97798 11 10.334V10.6777C11 10.8556 10.8556 11 10.6777 11ZM6.96665 7.09722C6.75245 7.38146 6.34829 7.43829 6.06405 7.22402C5.77973 7.00985 5.72299 6.60568 5.93716 6.32134L7.8766 3.74766C8.09087 3.46333 8.49494 3.40659 8.7792 3.62077C9.06353 3.83503 9.12035 4.23911 8.90609 4.52346L6.96665 7.09722ZM2.334 3.60618C2.11973 3.89042 1.71563 3.94725 1.43131 3.73298C1.14707 3.51881 1.09025 3.11473 1.30451 2.83038L3.24397 0.256726C3.45815 -0.027598 3.86231 -0.0844241 4.14657 0.12984C4.43081 0.344103 4.48763 0.748181 4.27337 1.03253L2.334 3.60618ZM3.74767 5.4785C3.27134 5.11956 2.91373 4.67385 2.69008 4.20454L4.94678 1.20984C5.45955 1.29552 5.98651 1.51631 6.46293 1.87534C6.93928 2.23428 7.29689 2.67999 7.52054 3.14921L5.26382 6.14409C4.75108 6.05841 4.22411 5.83751 3.74767 5.4785ZM2.87749 5.56242C3.02753 5.71533 3.18557 5.86196 3.35979 5.99329C3.53409 6.12456 3.71864 6.23606 3.90689 6.33822L3.48668 6.89589L2.45719 6.12018L2.87749 5.56242ZM2.06929 6.63488L3.09878 7.41059L1.15932 9.98436C0.945055 10.2687 0.540977 10.3254 0.256717 10.1112C-0.027607 9.89698 -0.0843477 9.4929 0.12983 9.20856L2.06929 6.63488Z" />
                                                </svg>
                                                Live
                                            </span>
                                        </div>
                                        <ul className="view-and-favorite-area">
                                            <li>
                                                <a href="#">
                                                    <svg
                                                        width={16}
                                                        height={15}
                                                        viewBox="0 0 16 15"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path d="M8.00013 3.32629L7.32792 2.63535C5.75006 1.01348 2.85685 1.57317 1.81244 3.61222C1.32211 4.57128 1.21149 5.95597 2.10683 7.72315C2.96935 9.42471 4.76378 11.4628 8.00013 13.6828C11.2365 11.4628 13.03 9.42471 13.8934 7.72315C14.7888 5.95503 14.6791 4.57128 14.1878 3.61222C13.1434 1.57317 10.2502 1.01254 8.67234 2.63441L8.00013 3.32629ZM8.00013 14.8125C-6.375 5.31378 3.57406 -2.09995 7.83512 1.8216C7.89138 1.87317 7.94669 1.9266 8.00013 1.98192C8.05303 1.92665 8.10807 1.87349 8.16513 1.82254C12.4253 -2.10182 22.3753 5.31284 8.00013 14.8125Z" />
                                                    </svg>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <svg
                                                        width={17}
                                                        height={11}
                                                        viewBox="0 0 17 11"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            clipRule="evenodd"
                                                            d="M15.4028 5.44118C14.0143 7.8425 11.3811 9.33421 8.53217 9.33421C5.68139 9.33421 3.04821 7.8425 1.65968 5.44118C1.55274 5.25472 1.55274 5.05762 1.65968 4.87132C3.04821 2.47003 5.68139 0.978484 8.53217 0.978484C11.3811 0.978484 14.0143 2.47003 15.4028 4.87132C15.5116 5.05762 15.5116 5.25472 15.4028 5.44118ZM16.2898 4.39522C14.7224 1.68403 11.7499 0 8.53217 0C5.31258 0 2.3401 1.68403 0.772715 4.39522C0.492428 4.87896 0.492428 5.43355 0.772715 5.91693C2.3401 8.62812 5.31258 10.3125 8.53217 10.3125C11.7499 10.3125 14.7224 8.62812 16.2898 5.91693C16.5701 5.43358 16.5701 4.87896 16.2898 4.39522ZM8.53217 7.1634C9.68098 7.1634 10.6159 6.26305 10.6159 5.15617C10.6159 4.04929 9.68098 3.14894 8.53217 3.14894C7.38152 3.14894 6.44663 4.04929 6.44663 5.15617C6.44663 6.26305 7.38156 7.1634 8.53217 7.1634ZM8.53217 2.17045C6.82095 2.17045 5.43061 3.50998 5.43061 5.1562C5.43061 6.80278 6.82098 8.14176 8.53217 8.14176C10.2416 8.14176 11.6319 6.80275 11.6319 5.1562C11.6319 3.50998 10.2416 2.17045 8.53217 2.17045Z"
                                                        />
                                                    </svg>
                                                </a>
                                            </li>
                                        </ul>
                                        <div className="countdown-timer">
                                            <ul data-countdown="2024-07-15 12:00:00">
                                                <li className="times" data-days={0}>
                                                    {days}
                                                    <span>Days</span>
                                                </li>
                                                <li className="colon">:</li>
                                                <li className="times" data-hours={0}>
                                                    {hours}
                                                    <span>Hour</span>
                                                </li>
                                                <li className="colon">:</li>
                                                <li className="times" data-minutes={0}>
                                                    {minutes}
                                                    <span>Min</span>
                                                </li>
                                                <li className="colon">:</li>
                                                <li className="times" data-seconds={0}>
                                                    {seconds}
                                                    <span>Sec</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="auction-card-content">
                                        <h6>
                                            <Link href="/auction-details">
                                                Coin crest cresting the peak of numismatic.
                                            </Link>
                                        </h6>
                                        <div className="price-and-code-area">
                                            <div className="price">
                                                <span>Current Bid at:</span>
                                                <strong>$5,578</strong>
                                            </div>
                                            <div className="code">
                                                <span>Lot # 25896742</span>
                                            </div>
                                        </div>
                                        <div className="author-and-btn-area">
                                            <div className="author-area">
                                                <div className="author-img">
                                                    <img
                                                        src="/assets/img/home1/auction-card-author-img10.png"
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="author-content">
                                                    <h6>Milan Alexander</h6>
                                                </div>
                                            </div>
                                            <Link href="/auction-details" className="bid-btn">
                                                Bid Now
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="col-xl-3 col-md-4 item wow animate fadeInDown"
                                data-wow-delay="200ms"
                                data-wow-duration="1500ms"
                            >
                                <div className="auction-card">
                                    <div className="auction-card-img-wrap">
                                        <Link href="/auction-details" className="card-img">
                                            <img src="/assets/img/home1/auction-img11.jpg" alt="" />
                                        </Link>
                                        <div className="batch">
                                            <span className="upcoming">
                                                <svg
                                                    width={9}
                                                    height={9}
                                                    viewBox="0 0 9 9"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path d="M0.731707 3.29268H0V7.46341C0 8.30488 0.695122 9 1.53659 9H7.46341C8.30488 9 9 8.30488 9 7.46341V3.29268H8.26829H0.731707ZM5.67073 4.84756C5.79878 4.70122 6.05488 4.71951 6.18293 4.84756C6.58537 5.21341 6.96951 5.57927 7.37195 5.96342C7.51829 6.10976 7.5 6.34756 7.37195 6.47561C7.0061 6.87805 6.64024 7.2622 6.2561 7.66463C6.10976 7.81098 5.87195 7.79268 5.7439 7.66463C5.59756 7.53659 5.61585 7.28049 5.7439 7.15244C6.01829 6.84146 6.31098 6.54878 6.58537 6.23781C6.27439 5.94512 5.96341 5.65244 5.65244 5.37805C5.5061 5.21342 5.52439 4.97561 5.67073 4.84756ZM4.20732 4.84756C4.33537 4.70122 4.59146 4.71951 4.71951 4.84756C5.12195 5.21341 5.5061 5.57927 5.90854 5.96342C6.05488 6.10976 6.03658 6.34756 5.90854 6.47561C5.54268 6.87805 5.17683 7.2622 4.79268 7.66463C4.64634 7.81098 4.40854 7.79268 4.28049 7.66463C4.13415 7.53659 4.15244 7.28049 4.28049 7.15244C4.55488 6.84146 4.84756 6.54878 5.12195 6.23781C4.81098 5.94512 4.5 5.65244 4.18902 5.37805C4.04268 5.21342 4.06098 4.97561 4.20732 4.84756ZM8.26829 2.56098H9V1.53659C9 0.713415 8.34146 0.0365854 7.51829 0V0.841463C7.51829 1.04268 7.35366 1.20732 7.15244 1.20732C6.95122 1.20732 6.78658 1.02439 6.78658 0.841463V0H2.26829V0.804878C2.26829 1.0061 2.10366 1.17073 1.90244 1.17073C1.70122 1.17073 1.53659 0.987805 1.53659 0.804878V0C0.695122 0 0 0.695122 0 1.53659V2.56098H0.731707H8.26829Z" />
                                                </svg>
                                                UPCOMING
                                            </span>
                                        </div>
                                        <ul className="view-and-favorite-area">
                                            <li>
                                                <a href="#">
                                                    <svg
                                                        width={16}
                                                        height={15}
                                                        viewBox="0 0 16 15"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path d="M8.00013 3.32629L7.32792 2.63535C5.75006 1.01348 2.85685 1.57317 1.81244 3.61222C1.32211 4.57128 1.21149 5.95597 2.10683 7.72315C2.96935 9.42471 4.76378 11.4628 8.00013 13.6828C11.2365 11.4628 13.03 9.42471 13.8934 7.72315C14.7888 5.95503 14.6791 4.57128 14.1878 3.61222C13.1434 1.57317 10.2502 1.01254 8.67234 2.63441L8.00013 3.32629ZM8.00013 14.8125C-6.375 5.31378 3.57406 -2.09995 7.83512 1.8216C7.89138 1.87317 7.94669 1.9266 8.00013 1.98192C8.05303 1.92665 8.10807 1.87349 8.16513 1.82254C12.4253 -2.10182 22.3753 5.31284 8.00013 14.8125Z" />
                                                    </svg>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <svg
                                                        width={17}
                                                        height={11}
                                                        viewBox="0 0 17 11"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            clipRule="evenodd"
                                                            d="M15.4028 5.44118C14.0143 7.8425 11.3811 9.33421 8.53217 9.33421C5.68139 9.33421 3.04821 7.8425 1.65968 5.44118C1.55274 5.25472 1.55274 5.05762 1.65968 4.87132C3.04821 2.47003 5.68139 0.978484 8.53217 0.978484C11.3811 0.978484 14.0143 2.47003 15.4028 4.87132C15.5116 5.05762 15.5116 5.25472 15.4028 5.44118ZM16.2898 4.39522C14.7224 1.68403 11.7499 0 8.53217 0C5.31258 0 2.3401 1.68403 0.772715 4.39522C0.492428 4.87896 0.492428 5.43355 0.772715 5.91693C2.3401 8.62812 5.31258 10.3125 8.53217 10.3125C11.7499 10.3125 14.7224 8.62812 16.2898 5.91693C16.5701 5.43358 16.5701 4.87896 16.2898 4.39522ZM8.53217 7.1634C9.68098 7.1634 10.6159 6.26305 10.6159 5.15617C10.6159 4.04929 9.68098 3.14894 8.53217 3.14894C7.38152 3.14894 6.44663 4.04929 6.44663 5.15617C6.44663 6.26305 7.38156 7.1634 8.53217 7.1634ZM8.53217 2.17045C6.82095 2.17045 5.43061 3.50998 5.43061 5.1562C5.43061 6.80278 6.82098 8.14176 8.53217 8.14176C10.2416 8.14176 11.6319 6.80275 11.6319 5.1562C11.6319 3.50998 10.2416 2.17045 8.53217 2.17045Z"
                                                        />
                                                    </svg>
                                                </a>
                                            </li>
                                        </ul>
                                        <div className="countdown-timer">
                                            <ul data-countdown="2024-07-10 12:00:00">
                                                <li className="times" data-days={0}>
                                                    {days}
                                                    <span>Days</span>
                                                </li>
                                                <li className="colon">:</li>
                                                <li className="times" data-hours={0}>
                                                    {hours}
                                                    <span>Hour</span>
                                                </li>
                                                <li className="colon">:</li>
                                                <li className="times" data-minutes={0}>
                                                    {minutes}
                                                    <span>Min</span>
                                                </li>
                                                <li className="colon">:</li>
                                                <li className="times" data-seconds={0}>
                                                    {seconds}
                                                    <span>Sec</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="auction-card-content">
                                        <h6>
                                            <Link href="/auction-details">
                                                Pixela prodigy inspiring pixels time creators one.
                                            </Link>
                                        </h6>
                                        <div className="price-and-code-area">
                                            <div className="price">
                                                <span>Current Bid at:</span>
                                                <strong>$4,678</strong>
                                            </div>
                                            <div className="code">
                                                <span>Lot # 25896732</span>
                                            </div>
                                        </div>
                                        <div className="author-and-btn-area">
                                            <Link href="/store-details" className="author-area">
                                                <div className="author-img">
                                                    <img
                                                        src="/assets/img/home1/auction-card-author-img11.png"
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="author-content">
                                                    <h6>Daniel Jack</h6>
                                                </div>
                                            </Link>
                                            <Link href="/auction-details2" className="bid-btn">
                                                Notify Me
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="col-xl-3 col-md-4 item wow animate fadeInDown"
                                data-wow-delay="400ms"
                                data-wow-duration="1500ms"
                            >
                                <div className="auction-card">
                                    <div className="auction-card-img-wrap">
                                        <Link href="/auction-details" className="card-img">
                                            <img src="/assets/img/home1/auction-img12.jpg" alt="" />
                                        </Link>
                                        <div className="batch">
                                            <span className="live">
                                                <svg
                                                    width={11}
                                                    height={11}
                                                    viewBox="0 0 11 11"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path d="M10.6777 11H4.83398C4.65599 11 4.51172 10.8557 4.51172 10.6777V10.334C4.51172 9.97798 4.80025 9.68944 5.15625 9.68944V9.30414C5.15625 8.79397 5.57133 8.37889 6.0815 8.37889H9.43022C9.94039 8.37889 10.3555 8.79397 10.3555 9.30414V9.68944C10.7115 9.68944 11 9.97798 11 10.334V10.6777C11 10.8556 10.8556 11 10.6777 11ZM6.96665 7.09722C6.75245 7.38146 6.34829 7.43829 6.06405 7.22402C5.77973 7.00985 5.72299 6.60568 5.93716 6.32134L7.8766 3.74766C8.09087 3.46333 8.49494 3.40659 8.7792 3.62077C9.06353 3.83503 9.12035 4.23911 8.90609 4.52346L6.96665 7.09722ZM2.334 3.60618C2.11973 3.89042 1.71563 3.94725 1.43131 3.73298C1.14707 3.51881 1.09025 3.11473 1.30451 2.83038L3.24397 0.256726C3.45815 -0.027598 3.86231 -0.0844241 4.14657 0.12984C4.43081 0.344103 4.48763 0.748181 4.27337 1.03253L2.334 3.60618ZM3.74767 5.4785C3.27134 5.11956 2.91373 4.67385 2.69008 4.20454L4.94678 1.20984C5.45955 1.29552 5.98651 1.51631 6.46293 1.87534C6.93928 2.23428 7.29689 2.67999 7.52054 3.14921L5.26382 6.14409C4.75108 6.05841 4.22411 5.83751 3.74767 5.4785ZM2.87749 5.56242C3.02753 5.71533 3.18557 5.86196 3.35979 5.99329C3.53409 6.12456 3.71864 6.23606 3.90689 6.33822L3.48668 6.89589L2.45719 6.12018L2.87749 5.56242ZM2.06929 6.63488L3.09878 7.41059L1.15932 9.98436C0.945055 10.2687 0.540977 10.3254 0.256717 10.1112C-0.027607 9.89698 -0.0843477 9.4929 0.12983 9.20856L2.06929 6.63488Z" />
                                                </svg>
                                                Live
                                            </span>
                                        </div>
                                        <ul className="view-and-favorite-area">
                                            <li>
                                                <a href="#">
                                                    <svg
                                                        width={16}
                                                        height={15}
                                                        viewBox="0 0 16 15"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path d="M8.00013 3.32629L7.32792 2.63535C5.75006 1.01348 2.85685 1.57317 1.81244 3.61222C1.32211 4.57128 1.21149 5.95597 2.10683 7.72315C2.96935 9.42471 4.76378 11.4628 8.00013 13.6828C11.2365 11.4628 13.03 9.42471 13.8934 7.72315C14.7888 5.95503 14.6791 4.57128 14.1878 3.61222C13.1434 1.57317 10.2502 1.01254 8.67234 2.63441L8.00013 3.32629ZM8.00013 14.8125C-6.375 5.31378 3.57406 -2.09995 7.83512 1.8216C7.89138 1.87317 7.94669 1.9266 8.00013 1.98192C8.05303 1.92665 8.10807 1.87349 8.16513 1.82254C12.4253 -2.10182 22.3753 5.31284 8.00013 14.8125Z" />
                                                    </svg>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <svg
                                                        width={17}
                                                        height={11}
                                                        viewBox="0 0 17 11"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            clipRule="evenodd"
                                                            d="M15.4028 5.44118C14.0143 7.8425 11.3811 9.33421 8.53217 9.33421C5.68139 9.33421 3.04821 7.8425 1.65968 5.44118C1.55274 5.25472 1.55274 5.05762 1.65968 4.87132C3.04821 2.47003 5.68139 0.978484 8.53217 0.978484C11.3811 0.978484 14.0143 2.47003 15.4028 4.87132C15.5116 5.05762 15.5116 5.25472 15.4028 5.44118ZM16.2898 4.39522C14.7224 1.68403 11.7499 0 8.53217 0C5.31258 0 2.3401 1.68403 0.772715 4.39522C0.492428 4.87896 0.492428 5.43355 0.772715 5.91693C2.3401 8.62812 5.31258 10.3125 8.53217 10.3125C11.7499 10.3125 14.7224 8.62812 16.2898 5.91693C16.5701 5.43358 16.5701 4.87896 16.2898 4.39522ZM8.53217 7.1634C9.68098 7.1634 10.6159 6.26305 10.6159 5.15617C10.6159 4.04929 9.68098 3.14894 8.53217 3.14894C7.38152 3.14894 6.44663 4.04929 6.44663 5.15617C6.44663 6.26305 7.38156 7.1634 8.53217 7.1634ZM8.53217 2.17045C6.82095 2.17045 5.43061 3.50998 5.43061 5.1562C5.43061 6.80278 6.82098 8.14176 8.53217 8.14176C10.2416 8.14176 11.6319 6.80275 11.6319 5.1562C11.6319 3.50998 10.2416 2.17045 8.53217 2.17045Z"
                                                        />
                                                    </svg>
                                                </a>
                                            </li>
                                        </ul>
                                        <div className="countdown-timer">
                                            <ul data-countdown="2024-07-10 12:00:00">
                                                <li className="times" data-days={0}>
                                                    {days}
                                                    <span>Days</span>
                                                </li>
                                                <li className="colon">:</li>
                                                <li className="times" data-hours={0}>
                                                    {hours}
                                                    <span>Hour</span>
                                                </li>
                                                <li className="colon">:</li>
                                                <li className="times" data-minutes={0}>
                                                    {minutes}
                                                    <span>Min</span>
                                                </li>
                                                <li className="colon">:</li>
                                                <li className="times" data-seconds={0}>
                                                    {seconds}
                                                    <span>Sec</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="auction-card-content">
                                        <h6>
                                            <Link href="/auction-details">
                                                Gizmo galaxy your universent of cutting edge tech.
                                            </Link>
                                        </h6>
                                        <div className="price-and-code-area">
                                            <div className="price">
                                                <span>Current Bid at:</span>
                                                <strong>$3,198</strong>
                                            </div>
                                            <div className="code">
                                                <span>Lot # 25896752</span>
                                            </div>
                                        </div>
                                        <div className="author-and-btn-area">
                                            <Link href="/store-details" className="author-area">
                                                <div className="author-img">
                                                    <img
                                                        src="/assets/img/home1/auction-card-author-img12.png"
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="author-content">
                                                    <h6>Levi Sebastian</h6>
                                                </div>
                                            </Link>
                                            <Link href="/auction-details" className="bid-btn">
                                                Bid Now
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="col-xl-3 col-md-4 item wow animate fadeInDown"
                                data-wow-delay="600ms"
                                data-wow-duration="1500ms"
                            >
                                <div className="auction-card">
                                    <div className="auction-card-img-wrap">
                                        <Link href="/auction-details" className="card-img">
                                            <img src="/assets/img/home1/auction-img8.jpg" alt="" />
                                        </Link>
                                        <div className="batch">
                                            <span className="live">
                                                <svg
                                                    width={11}
                                                    height={11}
                                                    viewBox="0 0 11 11"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path d="M10.6777 11H4.83398C4.65599 11 4.51172 10.8557 4.51172 10.6777V10.334C4.51172 9.97798 4.80025 9.68944 5.15625 9.68944V9.30414C5.15625 8.79397 5.57133 8.37889 6.0815 8.37889H9.43022C9.94039 8.37889 10.3555 8.79397 10.3555 9.30414V9.68944C10.7115 9.68944 11 9.97798 11 10.334V10.6777C11 10.8556 10.8556 11 10.6777 11ZM6.96665 7.09722C6.75245 7.38146 6.34829 7.43829 6.06405 7.22402C5.77973 7.00985 5.72299 6.60568 5.93716 6.32134L7.8766 3.74766C8.09087 3.46333 8.49494 3.40659 8.7792 3.62077C9.06353 3.83503 9.12035 4.23911 8.90609 4.52346L6.96665 7.09722ZM2.334 3.60618C2.11973 3.89042 1.71563 3.94725 1.43131 3.73298C1.14707 3.51881 1.09025 3.11473 1.30451 2.83038L3.24397 0.256726C3.45815 -0.027598 3.86231 -0.0844241 4.14657 0.12984C4.43081 0.344103 4.48763 0.748181 4.27337 1.03253L2.334 3.60618ZM3.74767 5.4785C3.27134 5.11956 2.91373 4.67385 2.69008 4.20454L4.94678 1.20984C5.45955 1.29552 5.98651 1.51631 6.46293 1.87534C6.93928 2.23428 7.29689 2.67999 7.52054 3.14921L5.26382 6.14409C4.75108 6.05841 4.22411 5.83751 3.74767 5.4785ZM2.87749 5.56242C3.02753 5.71533 3.18557 5.86196 3.35979 5.99329C3.53409 6.12456 3.71864 6.23606 3.90689 6.33822L3.48668 6.89589L2.45719 6.12018L2.87749 5.56242ZM2.06929 6.63488L3.09878 7.41059L1.15932 9.98436C0.945055 10.2687 0.540977 10.3254 0.256717 10.1112C-0.027607 9.89698 -0.0843477 9.4929 0.12983 9.20856L2.06929 6.63488Z" />
                                                </svg>
                                                Live
                                            </span>
                                        </div>
                                        <ul className="view-and-favorite-area">
                                            <li>
                                                <a href="#">
                                                    <svg
                                                        width={16}
                                                        height={15}
                                                        viewBox="0 0 16 15"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path d="M8.00013 3.32629L7.32792 2.63535C5.75006 1.01348 2.85685 1.57317 1.81244 3.61222C1.32211 4.57128 1.21149 5.95597 2.10683 7.72315C2.96935 9.42471 4.76378 11.4628 8.00013 13.6828C11.2365 11.4628 13.03 9.42471 13.8934 7.72315C14.7888 5.95503 14.6791 4.57128 14.1878 3.61222C13.1434 1.57317 10.2502 1.01254 8.67234 2.63441L8.00013 3.32629ZM8.00013 14.8125C-6.375 5.31378 3.57406 -2.09995 7.83512 1.8216C7.89138 1.87317 7.94669 1.9266 8.00013 1.98192C8.05303 1.92665 8.10807 1.87349 8.16513 1.82254C12.4253 -2.10182 22.3753 5.31284 8.00013 14.8125Z" />
                                                    </svg>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <svg
                                                        width={17}
                                                        height={11}
                                                        viewBox="0 0 17 11"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            clipRule="evenodd"
                                                            d="M15.4028 5.44118C14.0143 7.8425 11.3811 9.33421 8.53217 9.33421C5.68139 9.33421 3.04821 7.8425 1.65968 5.44118C1.55274 5.25472 1.55274 5.05762 1.65968 4.87132C3.04821 2.47003 5.68139 0.978484 8.53217 0.978484C11.3811 0.978484 14.0143 2.47003 15.4028 4.87132C15.5116 5.05762 15.5116 5.25472 15.4028 5.44118ZM16.2898 4.39522C14.7224 1.68403 11.7499 0 8.53217 0C5.31258 0 2.3401 1.68403 0.772715 4.39522C0.492428 4.87896 0.492428 5.43355 0.772715 5.91693C2.3401 8.62812 5.31258 10.3125 8.53217 10.3125C11.7499 10.3125 14.7224 8.62812 16.2898 5.91693C16.5701 5.43358 16.5701 4.87896 16.2898 4.39522ZM8.53217 7.1634C9.68098 7.1634 10.6159 6.26305 10.6159 5.15617C10.6159 4.04929 9.68098 3.14894 8.53217 3.14894C7.38152 3.14894 6.44663 4.04929 6.44663 5.15617C6.44663 6.26305 7.38156 7.1634 8.53217 7.1634ZM8.53217 2.17045C6.82095 2.17045 5.43061 3.50998 5.43061 5.1562C5.43061 6.80278 6.82098 8.14176 8.53217 8.14176C10.2416 8.14176 11.6319 6.80275 11.6319 5.1562C11.6319 3.50998 10.2416 2.17045 8.53217 2.17045Z"
                                                        />
                                                    </svg>
                                                </a>
                                            </li>
                                        </ul>
                                        <div className="countdown-timer">
                                            <ul data-countdown="2024-07-25 12:00:00">
                                                <li className="times" data-days={0}>
                                                    {days}
                                                    <span>Days</span>
                                                </li>
                                                <li className="colon">:</li>
                                                <li className="times" data-hours={0}>
                                                    {hours}
                                                    <span>Hour</span>
                                                </li>
                                                <li className="colon">:</li>
                                                <li className="times" data-minutes={0}>
                                                    {minutes}
                                                    <span>Min</span>
                                                </li>
                                                <li className="colon">:</li>
                                                <li className="times" data-seconds={0}>
                                                    {seconds}
                                                    <span>Sec</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="auction-card-content">
                                        <h6>
                                            <Link href="/auction-details">
                                                Titan motors built to conquer every milen.
                                            </Link>
                                        </h6>
                                        <div className="price-and-code-area">
                                            <div className="price">
                                                <span>Current Bid at:</span>
                                                <strong>$6,367</strong>
                                            </div>
                                            <div className="code">
                                                <span>Lot # 25896725</span>
                                            </div>
                                        </div>
                                        <div className="author-and-btn-area">
                                            <Link href="/store-details" className="author-area">
                                                <div className="author-img">
                                                    <img
                                                        src="/assets/img/home1/auction-card-author-img8.png"
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="author-content">
                                                    <h6>Samuel Ethan</h6>
                                                </div>
                                            </Link>
                                            <Link href="/auction-details" className="bid-btn">
                                                Bid Now
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="col-xl-3 col-md-4 item wow animate fadeInDown"
                                data-wow-delay="800ms"
                                data-wow-duration="1500ms"
                            >
                                <div className="auction-card">
                                    <div className="auction-card-img-wrap">
                                        <Link href="/auction-details" className="card-img">
                                            <img src="/assets/img/home1/auction-img9.jpg" alt="" />
                                        </Link>
                                        <div className="batch">
                                            <span className="upcoming">
                                                <svg
                                                    width={9}
                                                    height={9}
                                                    viewBox="0 0 9 9"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path d="M0.731707 3.29268H0V7.46341C0 8.30488 0.695122 9 1.53659 9H7.46341C8.30488 9 9 8.30488 9 7.46341V3.29268H8.26829H0.731707ZM5.67073 4.84756C5.79878 4.70122 6.05488 4.71951 6.18293 4.84756C6.58537 5.21341 6.96951 5.57927 7.37195 5.96342C7.51829 6.10976 7.5 6.34756 7.37195 6.47561C7.0061 6.87805 6.64024 7.2622 6.2561 7.66463C6.10976 7.81098 5.87195 7.79268 5.7439 7.66463C5.59756 7.53659 5.61585 7.28049 5.7439 7.15244C6.01829 6.84146 6.31098 6.54878 6.58537 6.23781C6.27439 5.94512 5.96341 5.65244 5.65244 5.37805C5.5061 5.21342 5.52439 4.97561 5.67073 4.84756ZM4.20732 4.84756C4.33537 4.70122 4.59146 4.71951 4.71951 4.84756C5.12195 5.21341 5.5061 5.57927 5.90854 5.96342C6.05488 6.10976 6.03658 6.34756 5.90854 6.47561C5.54268 6.87805 5.17683 7.2622 4.79268 7.66463C4.64634 7.81098 4.40854 7.79268 4.28049 7.66463C4.13415 7.53659 4.15244 7.28049 4.28049 7.15244C4.55488 6.84146 4.84756 6.54878 5.12195 6.23781C4.81098 5.94512 4.5 5.65244 4.18902 5.37805C4.04268 5.21342 4.06098 4.97561 4.20732 4.84756ZM8.26829 2.56098H9V1.53659C9 0.713415 8.34146 0.0365854 7.51829 0V0.841463C7.51829 1.04268 7.35366 1.20732 7.15244 1.20732C6.95122 1.20732 6.78658 1.02439 6.78658 0.841463V0H2.26829V0.804878C2.26829 1.0061 2.10366 1.17073 1.90244 1.17073C1.70122 1.17073 1.53659 0.987805 1.53659 0.804878V0C0.695122 0 0 0.695122 0 1.53659V2.56098H0.731707H8.26829Z" />
                                                </svg>
                                                UPCOMING
                                            </span>
                                        </div>
                                        <ul className="view-and-favorite-area">
                                            <li>
                                                <a href="#">
                                                    <svg
                                                        width={16}
                                                        height={15}
                                                        viewBox="0 0 16 15"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path d="M8.00013 3.32629L7.32792 2.63535C5.75006 1.01348 2.85685 1.57317 1.81244 3.61222C1.32211 4.57128 1.21149 5.95597 2.10683 7.72315C2.96935 9.42471 4.76378 11.4628 8.00013 13.6828C11.2365 11.4628 13.03 9.42471 13.8934 7.72315C14.7888 5.95503 14.6791 4.57128 14.1878 3.61222C13.1434 1.57317 10.2502 1.01254 8.67234 2.63441L8.00013 3.32629ZM8.00013 14.8125C-6.375 5.31378 3.57406 -2.09995 7.83512 1.8216C7.89138 1.87317 7.94669 1.9266 8.00013 1.98192C8.05303 1.92665 8.10807 1.87349 8.16513 1.82254C12.4253 -2.10182 22.3753 5.31284 8.00013 14.8125Z" />
                                                    </svg>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <svg
                                                        width={17}
                                                        height={11}
                                                        viewBox="0 0 17 11"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            clipRule="evenodd"
                                                            d="M15.4028 5.44118C14.0143 7.8425 11.3811 9.33421 8.53217 9.33421C5.68139 9.33421 3.04821 7.8425 1.65968 5.44118C1.55274 5.25472 1.55274 5.05762 1.65968 4.87132C3.04821 2.47003 5.68139 0.978484 8.53217 0.978484C11.3811 0.978484 14.0143 2.47003 15.4028 4.87132C15.5116 5.05762 15.5116 5.25472 15.4028 5.44118ZM16.2898 4.39522C14.7224 1.68403 11.7499 0 8.53217 0C5.31258 0 2.3401 1.68403 0.772715 4.39522C0.492428 4.87896 0.492428 5.43355 0.772715 5.91693C2.3401 8.62812 5.31258 10.3125 8.53217 10.3125C11.7499 10.3125 14.7224 8.62812 16.2898 5.91693C16.5701 5.43358 16.5701 4.87896 16.2898 4.39522ZM8.53217 7.1634C9.68098 7.1634 10.6159 6.26305 10.6159 5.15617C10.6159 4.04929 9.68098 3.14894 8.53217 3.14894C7.38152 3.14894 6.44663 4.04929 6.44663 5.15617C6.44663 6.26305 7.38156 7.1634 8.53217 7.1634ZM8.53217 2.17045C6.82095 2.17045 5.43061 3.50998 5.43061 5.1562C5.43061 6.80278 6.82098 8.14176 8.53217 8.14176C10.2416 8.14176 11.6319 6.80275 11.6319 5.1562C11.6319 3.50998 10.2416 2.17045 8.53217 2.17045Z"
                                                        />
                                                    </svg>
                                                </a>
                                            </li>
                                        </ul>
                                        <div className="countdown-timer">
                                            <ul data-countdown="2024-07-20 12:00:00">
                                                <li className="times" data-days={0}>
                                                    {days}
                                                    <span>Days</span>
                                                </li>
                                                <li className="colon">:</li>
                                                <li className="times" data-hours={0}>
                                                    {hours}
                                                    <span>Hour</span>
                                                </li>
                                                <li className="colon">:</li>
                                                <li className="times" data-minutes={0}>
                                                    {minutes}
                                                    <span>Min</span>
                                                </li>
                                                <li className="colon">:</li>
                                                <li className="times" data-seconds={0}>
                                                    {seconds}
                                                    <span>Sec</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="auction-card-content">
                                        <h6>
                                            <Link href="/auction-details">
                                                Electro edge redefining times possibilities gadget.
                                            </Link>
                                        </h6>
                                        <div className="price-and-code-area">
                                            <div className="price">
                                                <span>Current Bid at:</span>
                                                <strong>$7,920</strong>
                                            </div>
                                            <div className="code">
                                                <span>Lot # 25896735</span>
                                            </div>
                                        </div>
                                        <div className="author-and-btn-area">
                                            <Link href="/store-details" className="author-area">
                                                <div className="author-img">
                                                    <img
                                                        src="/assets/img/home1/auction-card-author-img9.png"
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="author-content">
                                                    <h6>Owen Asher</h6>
                                                </div>
                                            </Link>
                                            <Link href="/auction-details2" className="bid-btn">
                                                Notify Me
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div
                            className="col-lg-12 d-flex justify-content-center wow animate fadeInUp"
                            data-wow-delay="400ms"
                            data-wow-duration="1500ms"
                        >
                            <a className="primary-btn btn-hover" href="#">
                                Load More
                                <svg
                                    width={11}
                                    height={11}
                                    viewBox="0 0 11 11"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M10.0266 9.33856L0.689022 0.000487831L-3.01181e-08 0.68951L9.33807 10.0271L2.88172 10.0271L2.88172 11.001L11.0005 11.001L11.0005 2.88221L10.0266 2.88221L10.0266 9.33856Z"
                                    />
                                </svg>
                                <span style={{ top: "40.5px", left: "84.2344px" }} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MultipurposeStoreDetails
