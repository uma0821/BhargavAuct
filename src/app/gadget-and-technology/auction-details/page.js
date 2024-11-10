"use client";
import auctionCardData from "../../../data/auction-card.json";
import React, { useEffect, useMemo, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";

import { useCountdownTimer } from "@/customHooks/useCountdownTimer";
import AuctionCard from "@/components/auction/auction-card";

import InnerPageHeader5 from "@/components/header/InnerPageHeader5";
import Breadcrumb5 from "@/components/common/Breadcrumb5";

import Link from "next/link";
import Footer5 from "@/components/footer/Footer5";
import HandleQuantity from "@/components/common/HandleQuantity";
SwiperCore.use([Autoplay, EffectFade, Navigation, Pagination]);

const AuctionDetailsPage = () => {
  const { days, hours, minutes, seconds } = useCountdownTimer(
    "2024-08-23 11:42:00"
  );
  const settings = useMemo(() => {
    return {
      slidesPerView: "auto",
      speed: 1500,
      spaceBetween: 15,
      grabCursor: true,
      autoplay: {
        delay: 2500, // Autoplay duration in milliseconds
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".category-slider-next",
        prevEl: ".category-slider-prev",
      },

      breakpoints: {
        280: {
          slidesPerView: 2,
        },
        350: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        576: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
        768: {
          slidesPerView: 4,
        },
        992: {
          slidesPerView: 5,
          spaceBetween: 15,
        },
        1200: {
          slidesPerView: 5,
        },
        1400: {
          slidesPerView: 5,
        },
      },
    };
  }, []);
  const settingsForUpcomingAuction = useMemo(() => {
    return {
      slidesPerView: "auto",
      speed: 1500,
      spaceBetween: 25,
      autoplay: {
        delay: 2500, // Autoplay duration in milliseconds
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".auction-slider-next",
        prevEl: ".auction-slider-prev",
      },

      breakpoints: {
        280: {
          slidesPerView: 1,
        },
        386: {
          slidesPerView: 1,
        },
        576: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 3,
        },
        1200: {
          slidesPerView: 4,
        },
        1400: {
          slidesPerView: 4,
        },
      },
    };
  }, []);
  return (
    <>
      <InnerPageHeader5 />
      <Breadcrumb5 pagetitle="Auction Details" currentPage="Auction Details" />
      <div className="auction-details-section pt-110 mb-110">
        <div className="container-fluid">
          <div className="row gy-5">
            <div className="col-xl-7">
              <div className="auction-details-img">
                <div className="tab-content" id="v-pills-tabContent">
                  <div
                    className="tab-pane fade show active"
                    id="v-pills-img1"
                    role="tabpanel"
                  >
                    <div className="auction-details-tab-img">
                      <img
                        src="/assets/img/inner-pages/auction-details-img1.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="v-pills-img2"
                    role="tabpanel"
                  >
                    <div className="auction-details-tab-img">
                      <img
                        src="/assets/img/inner-pages/auction-details-img2.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="v-pills-img3"
                    role="tabpanel"
                    aria-labelledby="v-pills-img3-tab"
                  >
                    <div className="auction-details-tab-img">
                      <img
                        src="/assets/img/inner-pages/auction-details-img3.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="v-pills-img4"
                    role="tabpanel"
                    aria-labelledby="v-pills-img4-tab"
                  >
                    <div className="auction-details-tab-img">
                      <img
                        src="/assets/img/inner-pages/auction-details-img4.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="v-pills-img5"
                    role="tabpanel"
                    aria-labelledby="v-pills-img5-tab"
                  >
                    <div className="auction-details-tab-img">
                      <img
                        src="/assets/img/inner-pages/auction-details-img5.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="nav nav-pills"
                  id="v-pills-tab"
                  role="tablist"
                  aria-orientation="vertical"
                >
                  <Swiper
                    {...settings}
                    className="swiper auction-details-nav-slider"
                  >
                    <div className="swiper-wrapper">
                      <SwiperSlide className="swiper-slide">
                        <div className="nav-item" role="presentation">
                          <button
                            className="nav-link active"
                            id="v-pills-img1-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#v-pills-img1"
                            type="button"
                            role="tab"
                            aria-controls="v-pills-img1"
                            aria-selected="true"
                          >
                            <img
                              src="/assets/img/inner-pages/auction-details-img1.jpg"
                              alt=""
                            />
                          </button>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide className="swiper-slide">
                        <div className="nav-item" role="presentation">
                          <button
                            className="nav-link"
                            id="v-pills-img2-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#v-pills-img2"
                            type="button"
                            role="tab"
                            aria-controls="v-pills-img2"
                            aria-selected="false"
                          >
                            <img
                              src="/assets/img/inner-pages/auction-details-img2.jpg"
                              alt=""
                            />
                          </button>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide className="swiper-slide">
                        <div className="nav-item" role="presentation">
                          <button
                            className="nav-link"
                            id="v-pills-img3-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#v-pills-img3"
                            type="button"
                            role="tab"
                            aria-controls="v-pills-img3"
                            aria-selected="false"
                          >
                            <img
                              src="/assets/img/inner-pages/auction-details-img3.jpg"
                              alt=""
                            />
                          </button>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide className="swiper-slide">
                        <div className="nav-item" role="presentation">
                          <button
                            className="nav-link"
                            id="v-pills-img4-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#v-pills-img4"
                            type="button"
                            role="tab"
                            aria-controls="v-pills-img4"
                            aria-selected="false"
                          >
                            <img
                              src="/assets/img/inner-pages/auction-details-img4.jpg"
                              alt=""
                            />
                          </button>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide className="swiper-slide">
                        <div className="nav-item" role="presentation">
                          <button
                            className="nav-link"
                            id="v-pills-img5-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#v-pills-img5"
                            type="button"
                            role="tab"
                            aria-controls="v-pills-img5"
                            aria-selected="false"
                          >
                            <img
                              src="/assets/img/inner-pages/auction-details-img5.jpg"
                              alt=""
                            />
                          </button>
                        </div>
                      </SwiperSlide>
                    </div>
                  </Swiper>
                </div>
              </div>
            </div>
            <div className="col-xl-5">
              <div className="auction-details-content">
                <div className="batch">
                  <span>Lot: # 25896742</span>
                </div>
                <h1>
                  Zenith Auto Elevating Driving Your Automotive Experience
                </h1>
                <p>
                  Aptent tacit sociosq litor torquen per conubia nostra, per
                  incep placerat felis non aliquam.Mauris nec justo vitae ante
                  auctor.
                </p>
                <div className="price-area">
                  <span>Current Bid at:</span>
                  <strong>$2,898</strong>
                </div>
                <div className="coundown-area">
                  <h6>Auction Will Be End:</h6>
                  <div className="countdown-timer">
                    <ul data-countdown="2024-08-24 12:00:00">
                      <li data-days={0}>
                        {days} <span>Days</span> <span>Days</span>
                      </li>
                      <li className="clone">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={4}
                          height={13}
                          viewBox="0 0 4 13"
                        >
                          <path d="M0 11.0633C0 11.5798 0.186992 12.0317 0.560976 12.419C0.95122 12.8063 1.43089 13 2 13C2.58537 13 3.06504 12.8063 3.43903 12.419C3.81301 12.0317 4 11.5798 4 11.0633C4 10.5146 3.81301 10.0546 3.43903 9.68343C3.06504 9.29609 2.58537 9.10242 2 9.10242C1.43089 9.10242 0.95122 9.29609 0.560976 9.68343C0.186992 10.0546 0 10.5146 0 11.0633ZM0 1.96089C0 2.49348 0.186992 2.95345 0.560976 3.34078C0.95122 3.72812 1.43089 3.92179 2 3.92179C2.58537 3.92179 3.06504 3.72812 3.43903 3.34078C3.81301 2.95345 4 2.49348 4 1.96089C4 1.42831 3.81301 0.968343 3.43903 0.581006C3.06504 0.193669 2.58537 0 2 0C1.43089 0 0.95122 0.193669 0.560976 0.581006C0.186992 0.968343 0 1.42831 0 1.96089Z" />
                        </svg>
                      </li>
                      <li data-hours={0}>
                        {hours} <span>Hours</span> <span>Hours</span>
                      </li>
                      <li className="clone">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={4}
                          height={13}
                          viewBox="0 0 4 13"
                        >
                          <path d="M0 11.0633C0 11.5798 0.186992 12.0317 0.560976 12.419C0.95122 12.8063 1.43089 13 2 13C2.58537 13 3.06504 12.8063 3.43903 12.419C3.81301 12.0317 4 11.5798 4 11.0633C4 10.5146 3.81301 10.0546 3.43903 9.68343C3.06504 9.29609 2.58537 9.10242 2 9.10242C1.43089 9.10242 0.95122 9.29609 0.560976 9.68343C0.186992 10.0546 0 10.5146 0 11.0633ZM0 1.96089C0 2.49348 0.186992 2.95345 0.560976 3.34078C0.95122 3.72812 1.43089 3.92179 2 3.92179C2.58537 3.92179 3.06504 3.72812 3.43903 3.34078C3.81301 2.95345 4 2.49348 4 1.96089C4 1.42831 3.81301 0.968343 3.43903 0.581006C3.06504 0.193669 2.58537 0 2 0C1.43089 0 0.95122 0.193669 0.560976 0.581006C0.186992 0.968343 0 1.42831 0 1.96089Z" />
                        </svg>
                      </li>
                      <li data-minutes={0}>
                        {minutes} <span>Mint</span> <span>Minutes</span>
                      </li>
                      <li className="clone">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={4}
                          height={13}
                          viewBox="0 0 4 13"
                        >
                          <path d="M0 11.0633C0 11.5798 0.186992 12.0317 0.560976 12.419C0.95122 12.8063 1.43089 13 2 13C2.58537 13 3.06504 12.8063 3.43903 12.419C3.81301 12.0317 4 11.5798 4 11.0633C4 10.5146 3.81301 10.0546 3.43903 9.68343C3.06504 9.29609 2.58537 9.10242 2 9.10242C1.43089 9.10242 0.95122 9.29609 0.560976 9.68343C0.186992 10.0546 0 10.5146 0 11.0633ZM0 1.96089C0 2.49348 0.186992 2.95345 0.560976 3.34078C0.95122 3.72812 1.43089 3.92179 2 3.92179C2.58537 3.92179 3.06504 3.72812 3.43903 3.34078C3.81301 2.95345 4 2.49348 4 1.96089C4 1.42831 3.81301 0.968343 3.43903 0.581006C3.06504 0.193669 2.58537 0 2 0C1.43089 0 0.95122 0.193669 0.560976 0.581006C0.186992 0.968343 0 1.42831 0 1.96089Z" />
                        </svg>
                      </li>
                      <li data-seconds={0}>
                        {seconds} <span>Sec</span> <span>Seconds</span>
                      </li>
                    </ul>
                  </div>
                  <span>
                    <strong>Ending On:</strong> August 22, 2024 11:42 am
                  </span>
                </div>
                <div className="quantity-area">
                  <h6>Your Max Bid:</h6>
                  <div className="quantity-counter-and-btn-area">
                  <HandleQuantity/>
                  
                    <Link
                      className="primary-btn btn-hover"
                      href="/gadget-and-technology/auction-grid"
                    >
                      Place Bid
                     <span style={{top: '40.5px', left: '84.2344px'}} />
                    </Link>
                  </div>
                </div>
                <div className="payment-method">
                  <h6>Guaranted Safe Checkout</h6>
                  <ul className="payment-card-list">
                    <li>
                      <img
                        src="/assets/img/inner-pages/payment-img1.svg"
                        alt=""
                      />
                    </li>
                    <li>
                      <img
                        src="/assets/img/inner-pages/payment-img2.svg"
                        alt=""
                      />
                    </li>
                    <li>
                      <img
                        src="/assets/img/inner-pages/payment-img3.svg"
                        alt=""
                      />
                    </li>
                    <li>
                      <img
                        src="/assets/img/inner-pages/payment-img4.svg"
                        alt=""
                      />
                    </li>
                    <li>
                      <img
                        src="/assets/img/inner-pages/payment-img5.svg"
                        alt=""
                      />
                    </li>
                    <li>
                      <img
                        src="/assets/img/inner-pages/payment-img6.svg"
                        alt=""
                      />
                    </li>
                    <li>
                      <img
                        src="/assets/img/inner-pages/payment-img7.svg"
                        alt=""
                      />
                    </li>
                  </ul>
                </div>
                <ul className="question-and-wishlist-area">
                  <li>
                    <Link href="/gadget-and-technology/contact">
                      <span>
                        <svg
                          width={11}
                          height={11}
                          viewBox="0 0 11 11"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g>
                            <path d="M5.5 0C2.46015 0 0 2.45988 0 5.5C0 8.5398 2.45988 11 5.5 11C8.53985 11 11 8.54012 11 5.5C11 2.46015 8.54012 0 5.5 0ZM5.5 10.2326C2.89046 10.2326 0.767443 8.10956 0.767443 5.5C0.767443 2.89044 2.89046 0.767443 5.5 0.767443C8.10956 0.767443 10.2326 2.89044 10.2326 5.5C10.2326 8.10956 8.10956 10.2326 5.5 10.2326Z" />
                            <path d="M5.337 6.95948C5.03293 6.95948 4.78679 7.21287 4.78679 7.51692C4.78679 7.81377 5.02569 8.07439 5.337 8.07439C5.64831 8.07439 5.89443 7.81377 5.89443 7.51692C5.89443 7.21287 5.64105 6.95948 5.337 6.95948ZM5.4311 2.73877C4.45373 2.73877 4.00488 3.31797 4.00488 3.7089C4.00488 3.99124 4.24379 4.12157 4.43925 4.12157C4.83021 4.12157 4.67094 3.56409 5.40938 3.56409C5.77135 3.56409 6.06096 3.72338 6.06096 4.05641C6.06096 4.44734 5.65553 4.67176 5.41662 4.87447C5.20665 5.05543 4.93157 5.35228 4.93157 5.9749C4.93157 6.35135 5.03293 6.45995 5.32974 6.45995C5.68447 6.45995 5.75687 6.30069 5.75687 6.1631C5.75687 5.78665 5.76411 5.56947 6.1623 5.25816C6.35777 5.10613 6.97312 4.61382 6.97312 3.9333C6.97312 3.25278 6.35777 2.73877 5.4311 2.73877Z" />
                          </g>
                        </svg>
                      </span>
                      Ask a question
                    </Link>
                  </li>
                  <li>
                    <a href="#">
                      <span>
                        <svg
                          width={11}
                          height={11}
                          viewBox="0 0 18 18"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_168_378)">
                            <path d="M16.528 2.20919C16.0674 1.71411 15.5099 1.31906 14.8902 1.04859C14.2704 0.778112 13.6017 0.637996 12.9255 0.636946C12.2487 0.637725 11.5794 0.777639 10.959 1.048C10.3386 1.31835 9.78042 1.71338 9.31911 2.20854L9.00132 2.54436L8.68352 2.20854C6.83326 0.217151 3.71893 0.102789 1.72758 1.95306C1.63932 2.03507 1.5541 2.12029 1.47209 2.20854C-0.490696 4.32565 -0.490696 7.59753 1.47209 9.71463L8.5343 17.1622C8.77862 17.4201 9.18579 17.4312 9.44373 17.1868C9.45217 17.1788 9.46039 17.1706 9.46838 17.1622L16.528 9.71463C18.4907 7.59776 18.4907 4.32606 16.528 2.20919ZM15.5971 8.82879H15.5965L9.00132 15.7849L2.40553 8.82879C0.90608 7.21113 0.90608 4.7114 2.40553 3.09374C3.76722 1.61789 6.06755 1.52535 7.5434 2.88703C7.61505 2.95314 7.68401 3.0221 7.75012 3.09374L8.5343 3.92104C8.79272 4.17781 9.20995 4.17781 9.46838 3.92104L10.2526 3.09438C11.6142 1.61853 13.9146 1.52599 15.3904 2.88767C15.4621 2.95378 15.531 3.02274 15.5971 3.09438C17.1096 4.71461 17.1207 7.2189 15.5971 8.82879Z" />
                          </g>
                        </svg>
                      </span>
                      Add to wishlist
                    </a>
                  </li>
                </ul>
              </div>
              <div className="auction-details-description-area">
                <div className="auction-details-description-nav mb-50">
                  <nav>
                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                      <button
                        className="nav-link active"
                        id="nav-description-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-description"
                        type="button"
                        role="tab"
                        aria-controls="nav-description"
                        aria-selected="true"
                      >
                        Description
                      </button>
                      <button
                        className="nav-link"
                        id="nav-add-info-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-add-info"
                        type="button"
                        role="tab"
                        aria-controls="nav-add-info"
                        aria-selected="false"
                      >
                        Additional Information
                      </button>
                      <button
                        className="nav-link"
                        id="nav-reviews-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-reviews"
                        type="button"
                        role="tab"
                        aria-controls="nav-reviews"
                        aria-selected="false"
                      >
                        Reviews (15)
                      </button>
                    </div>
                  </nav>
                </div>
                <div className="auction-details-description-tab">
                  <div className="tab-content" id="nav-tabContent">
                    <div
                      className="tab-pane fade show active"
                      id="nav-description"
                      role="tabpanel"
                      aria-labelledby="nav-description-tab"
                    >
                      <div className="description-content">
                        <h3>They’re kinda our Best thing!</h3>
                        <p>
                          Urna Aenean onewaryzo eleifend vitae tellus a
                          facilisis. Nunc posuere at augue eget port. Inei odion
                          goat tellus, dignissim fermentumara purus nec,
                          consequat dapibus metus. Vav urna worlda mauris, goat
                          te faucibus at egestas quis, fermentum egetonav neque.
                          Dphare lectus nec risusonl pellentesque, opi vitae
                          aliquet nisi dapibus. Sed volutpat mi velit.
                        </p>
                        <p>
                          Urna Aenean onewaryzo eleifend vitae tellus a
                          facilisis. Nunc posuere at augue eget port. Inei odion
                          goat tellus, dignissim fermentumara purus nec,
                        </p>
                        <ul>
                          <li>
                            <svg
                              width={13}
                              height={11}
                              viewBox="0 0 13 11"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M12.2986 0.0327999C9.89985 0.832756 6.86143 2.97809 4.03623 6.6688L2.36599 4.778C2.09946 4.4871 1.63748 4.4871 1.38872 4.778L0.162693 6.17792C-0.0682981 6.45063 -0.0505298 6.86879 0.19823 7.12332L3.96516 10.814C4.28499 11.1231 4.78251 11.0322 4.99574 10.6504C7.00358 6.92333 9.17134 4.15985 12.7961 0.996384C13.2581 0.596406 12.8672 -0.167189 12.2986 0.0327999Z" />
                            </svg>
                            Paraben-Free
                          </li>
                          <li>
                            <svg
                              width={13}
                              height={11}
                              viewBox="0 0 13 11"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M12.2986 0.0327999C9.89985 0.832756 6.86143 2.97809 4.03623 6.6688L2.36599 4.778C2.09946 4.4871 1.63748 4.4871 1.38872 4.778L0.162693 6.17792C-0.0682981 6.45063 -0.0505298 6.86879 0.19823 7.12332L3.96516 10.814C4.28499 11.1231 4.78251 11.0322 4.99574 10.6504C7.00358 6.92333 9.17134 4.15985 12.7961 0.996384C13.2581 0.596406 12.8672 -0.167189 12.2986 0.0327999Z" />
                            </svg>
                            Sulfate-Free
                          </li>
                          <li>
                            <svg
                              width={13}
                              height={11}
                              viewBox="0 0 13 11"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M12.2986 0.0327999C9.89985 0.832756 6.86143 2.97809 4.03623 6.6688L2.36599 4.778C2.09946 4.4871 1.63748 4.4871 1.38872 4.778L0.162693 6.17792C-0.0682981 6.45063 -0.0505298 6.86879 0.19823 7.12332L3.96516 10.814C4.28499 11.1231 4.78251 11.0322 4.99574 10.6504C7.00358 6.92333 9.17134 4.15985 12.7961 0.996384C13.2581 0.596406 12.8672 -0.167189 12.2986 0.0327999Z" />
                            </svg>
                            Clean at Sephora
                          </li>
                          <li>
                            <svg
                              width={13}
                              height={11}
                              viewBox="0 0 13 11"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M12.2986 0.0327999C9.89985 0.832756 6.86143 2.97809 4.03623 6.6688L2.36599 4.778C2.09946 4.4871 1.63748 4.4871 1.38872 4.778L0.162693 6.17792C-0.0682981 6.45063 -0.0505298 6.86879 0.19823 7.12332L3.96516 10.814C4.28499 11.1231 4.78251 11.0322 4.99574 10.6504C7.00358 6.92333 9.17134 4.15985 12.7961 0.996384C13.2581 0.596406 12.8672 -0.167189 12.2986 0.0327999Z" />
                            </svg>
                            Clean at Sephora
                          </li>
                          <li>
                            <svg
                              width={13}
                              height={11}
                              viewBox="0 0 13 11"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M12.2986 0.0327999C9.89985 0.832756 6.86143 2.97809 4.03623 6.6688L2.36599 4.778C2.09946 4.4871 1.63748 4.4871 1.38872 4.778L0.162693 6.17792C-0.0682981 6.45063 -0.0505298 6.86879 0.19823 7.12332L3.96516 10.814C4.28499 11.1231 4.78251 11.0322 4.99574 10.6504C7.00358 6.92333 9.17134 4.15985 12.7961 0.996384C13.2581 0.596406 12.8672 -0.167189 12.2986 0.0327999Z" />
                            </svg>
                            Fragrance Free
                          </li>
                          <li>
                            <svg
                              width={13}
                              height={11}
                              viewBox="0 0 13 11"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M12.2986 0.0327999C9.89985 0.832756 6.86143 2.97809 4.03623 6.6688L2.36599 4.778C2.09946 4.4871 1.63748 4.4871 1.38872 4.778L0.162693 6.17792C-0.0682981 6.45063 -0.0505298 6.86879 0.19823 7.12332L3.96516 10.814C4.28499 11.1231 4.78251 11.0322 4.99574 10.6504C7.00358 6.92333 9.17134 4.15985 12.7961 0.996384C13.2581 0.596406 12.8672 -0.167189 12.2986 0.0327999Z" />
                            </svg>
                            Cruelty-Free
                          </li>
                          <li>
                            <svg
                              width={13}
                              height={11}
                              viewBox="0 0 13 11"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M12.2986 0.0327999C9.89985 0.832756 6.86143 2.97809 4.03623 6.6688L2.36599 4.778C2.09946 4.4871 1.63748 4.4871 1.38872 4.778L0.162693 6.17792C-0.0682981 6.45063 -0.0505298 6.86879 0.19823 7.12332L3.96516 10.814C4.28499 11.1231 4.78251 11.0322 4.99574 10.6504C7.00358 6.92333 9.17134 4.15985 12.7961 0.996384C13.2581 0.596406 12.8672 -0.167189 12.2986 0.0327999Z" />
                            </svg>
                            Antioxidants
                          </li>
                          <li>
                            <svg
                              width={13}
                              height={11}
                              viewBox="0 0 13 11"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M12.2986 0.0327999C9.89985 0.832756 6.86143 2.97809 4.03623 6.6688L2.36599 4.778C2.09946 4.4871 1.63748 4.4871 1.38872 4.778L0.162693 6.17792C-0.0682981 6.45063 -0.0505298 6.86879 0.19823 7.12332L3.96516 10.814C4.28499 11.1231 4.78251 11.0322 4.99574 10.6504C7.00358 6.92333 9.17134 4.15985 12.7961 0.996384C13.2581 0.596406 12.8672 -0.167189 12.2986 0.0327999Z" />
                            </svg>
                            Antioxidants
                          </li>
                        </ul>
                        <p>
                          Urna Aenean onewaryzo eleifend vitae tellus a
                          facilisis. Nunc posuere at augue eget port. Inei odion
                          goat tellus, dignissim fermentumara purus nec,
                          consequat dapibus metus. Vav urna worlda mauris, goat
                          te faucibus at egestas quis, fermentum egetonav neque.
                          Dphare lectus nec risusonl pellentesque, opi vitae
                          aliquet nisi dapibus. Sed volutpat mi velit.
                        </p>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="nav-add-info"
                      role="tabpanel"
                      aria-labelledby="nav-add-info-tab"
                    >
                      <div className="addithonal-information">
                        <table className="table total-table2">
                          <tbody>
                            <tr>
                              <td>
                                <span>SKU</span>
                              </td>
                              <td>123ABC</td>
                            </tr>
                            <tr>
                              <td>
                                <span>Category</span>
                              </td>
                              <td>Car</td>
                            </tr>
                            <tr>
                              <td>
                                <span>Tags</span>
                              </td>
                              <td>Car, Digital Art, Book</td>
                            </tr>
                            <tr>
                              <td>
                                <span>Weight</span>
                              </td>
                              <td>20 gm</td>
                            </tr>
                            <tr>
                              <td>
                                <span>Dimensions</span>
                              </td>
                              <td>2 × 4 × 5 cm</td>
                            </tr>
                            <tr>
                              <td>
                                <span>Brand</span>
                              </td>
                              <td>BMW </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="nav-reviews"
                      role="tabpanel"
                      aria-labelledby="nav-reviews-tab"
                    >
                      <div className="reviews-area">
                        <div className="number-of-review">
                          <h4>Review (03) :</h4>
                        </div>
                        <div className="review-list-area mb-40">
                          <ul className="comment">
                            <li>
                              <div className="single-comment-area">
                                <div className="author-img">
                                  <img
                                    src="/assets/img/inner-pages/comment-author-01.jpg"
                                    alt=""
                                  />
                                </div>
                                <div className="comment-content">
                                  <div className="author-and-review">
                                    <div className="author-name-deg">
                                      <h6>Mr. Bowmik Haldar,</h6>
                                      <span>12 January, 2024</span>
                                    </div>
                                    <ul className="review d-flex flex-row align-items-center">
                                      <li>
                                        <i className="bi bi-star-fill" />
                                      </li>
                                      <li>
                                        <i className="bi bi-star-fill" />
                                      </li>
                                      <li>
                                        <i className="bi bi-star-fill" />
                                      </li>
                                      <li>
                                        <i className="bi bi-star-fill" />
                                      </li>
                                      <li>
                                        <i className="bi bi-star-fill" />
                                      </li>
                                    </ul>
                                  </div>
                                  <p>
                                    However, here are some well-regarded car
                                    dealerships known for their customer
                                    service, inventory, and overall reputation.
                                    It's always a good idea to research and read
                                    reviews specific...
                                  </p>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="single-comment-area">
                                <div className="author-img">
                                  <img
                                    src="/assets/img/inner-pages/comment-author-02.jpg"
                                    alt=""
                                  />
                                </div>
                                <div className="comment-content">
                                  <div className="author-and-review">
                                    <div className="author-name-deg">
                                      <h6>Srileka Panday,</h6>
                                      <span>05 March, 2024</span>
                                    </div>
                                    <ul className="review d-flex flex-row align-items-center">
                                      <li>
                                        <i className="bi bi-star-fill" />
                                      </li>
                                      <li>
                                        <i className="bi bi-star-fill" />
                                      </li>
                                      <li>
                                        <i className="bi bi-star-fill" />
                                      </li>
                                      <li>
                                        <i className="bi bi-star-fill" />
                                      </li>
                                      <li>
                                        <i className="bi bi-star" />
                                      </li>
                                    </ul>
                                  </div>
                                  <p>
                                    However, here are some well-regarded car
                                    dealerships known for their customer
                                    service, inventory, and overall reputation.
                                    It's always a good idea to research and read
                                    reviews specific...
                                  </p>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="single-comment-area">
                                <div className="author-img">
                                  <img
                                    src="/assets/img/inner-pages/comment-author-03.jpg"
                                    alt=""
                                  />
                                </div>
                                <div className="comment-content">
                                  <div className="author-and-review">
                                    <div className="author-name-deg">
                                      <h6>Mr. Bowmik Haldar,</h6>
                                      <span>10 March, 2024</span>
                                    </div>
                                    <ul className="review d-flex flex-row align-items-center">
                                      <li>
                                        <i className="bi bi-star-fill" />
                                      </li>
                                      <li>
                                        <i className="bi bi-star-fill" />
                                      </li>
                                      <li>
                                        <i className="bi bi-star-fill" />
                                      </li>
                                      <li>
                                        <i className="bi bi-star-fill" />
                                      </li>
                                      <li>
                                        <i className="bi bi-star-half" />
                                      </li>
                                    </ul>
                                  </div>
                                  <p>
                                    However, here are some well-regarded car
                                    dealerships known for their customer
                                    service, inventory, and overall reputation.
                                    It's always a good idea to research and read
                                    reviews specific...
                                  </p>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div className="review-form">
                          <div className="number-of-review">
                            <h4>Write A Review</h4>
                          </div>
                          <form>
                            <div className="row">
                              <div className="col-lg-12">
                                <div className="form-inner2 mb-40">
                                  <div className="review-rate-area">
                                    <p>Your Rating</p>
                                    <div className="rate">
                                      <input
                                        type="radio"
                                        id="star5"
                                        name="rate"
                                        defaultValue={5}
                                      />
                                      <label htmlFor="star5" title="text">
                                        5 stars
                                      </label>
                                      <input
                                        type="radio"
                                        id="star4"
                                        name="rate"
                                        defaultValue={4}
                                      />
                                      <label htmlFor="star4" title="text">
                                        4 stars
                                      </label>
                                      <input
                                        type="radio"
                                        id="star3"
                                        name="rate"
                                        defaultValue={3}
                                      />
                                      <label htmlFor="star3" title="text">
                                        3 stars
                                      </label>
                                      <input
                                        type="radio"
                                        id="star2"
                                        name="rate"
                                        defaultValue={2}
                                      />
                                      <label htmlFor="star2" title="text">
                                        2 stars
                                      </label>
                                      <input
                                        type="radio"
                                        id="star1"
                                        name="rate"
                                        defaultValue={1}
                                      />
                                      <label htmlFor="star1" title="text">
                                        1 star
                                      </label>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-12">
                                <div className="form-inner mb-20">
                                  <input
                                    type="text"
                                    placeholder="Name*"
                                    required
                                  />
                                </div>
                              </div>
                              <div className="col-lg-12">
                                <div className="form-inner mb-20">
                                  <input
                                    type="email"
                                    placeholder="Email*"
                                    required
                                  />
                                </div>
                              </div>
                              <div className="col-lg-12">
                                <div className="form-inner mb-30">
                                  <textarea
                                    placeholder="Message..."
                                    defaultValue={""}
                                  />
                                </div>
                              </div>
                              <div className="col-lg-12">
                                <div className="form-inner two">
                                  <button
                                    className="primary-btn btn-hover"
                                    type="submit"
                                  >
                                    Submit
                                   <span style={{top: '40.5px', left: '84.2344px'}} />
                                  </button>
                                </div>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="related-aution-section mb-110">
        <div className="container">
          <div
            className="row mb-60 wow animate fadeInDown"
            data-wow-delay="200ms"
            data-wow-duration="1500ms"
          >
            <div className="col-lg-12 d-flex align-items-center justify-content-between flex-wrap gap-3">
              <div className="section-title">
                <h2>
                  Related <span>Auction</span>
                </h2>
              </div>
              <div className="slider-btn-grp">
                <div className="slider-btn auction-slider-prev">
                  <svg
                    width={9}
                    height={15}
                    viewBox="0 0 9 15"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0 7.50009L9 0L3.27273 7.50009L9 15L0 7.50009Z" />
                  </svg>
                </div>
                <div className="slider-btn auction-slider-next">
                  <svg
                    width={9}
                    height={15}
                    viewBox="0 0 9 15"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9 7.50009L0 0L5.72727 7.50009L0 15L9 7.50009Z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div
            className="auction-slider-area wow animate fadeInUp"
            data-wow-delay="200ms"
            data-wow-duration="1500ms"
          >
            <div className="row">
              <div className="col-lg-12">
                <Swiper
                  {...settingsForUpcomingAuction}
                  className="swiper auction-slider"
                >
                  <div className="swiper-wrapper">
                    
                          <SwiperSlide className="swiper-slide" >
                          <div className="auction-card style-5">
      <div className="auction-card-img-wrap">
        <Link href="/gadget-and-technology/auction-details" className="card-img">
          <img src="../assets/img/home5/auction-img1.jpg" alt="" />
        </Link>
        <div className="batch">
          <span className="live">
            <svg width={11} height={11} viewBox="0 0 11 11" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.6777 11H4.83398C4.65599 11 4.51172 10.8557 4.51172 10.6777V10.334C4.51172 9.97798 4.80025 9.68944 5.15625 9.68944V9.30414C5.15625 8.79397 5.57133 8.37889 6.0815 8.37889H9.43022C9.94039 8.37889 10.3555 8.79397 10.3555 9.30414V9.68944C10.7115 9.68944 11 9.97798 11 10.334V10.6777C11 10.8556 10.8556 11 10.6777 11ZM6.96665 7.09722C6.75245 7.38146 6.34829 7.43829 6.06405 7.22402C5.77973 7.00985 5.72299 6.60568 5.93716 6.32134L7.8766 3.74766C8.09087 3.46333 8.49494 3.40659 8.7792 3.62077C9.06353 3.83503 9.12035 4.23911 8.90609 4.52346L6.96665 7.09722ZM2.334 3.60618C2.11973 3.89042 1.71563 3.94725 1.43131 3.73298C1.14707 3.51881 1.09025 3.11473 1.30451 2.83038L3.24397 0.256726C3.45815 -0.027598 3.86231 -0.0844241 4.14657 0.12984C4.43081 0.344103 4.48763 0.748181 4.27337 1.03253L2.334 3.60618ZM3.74767 5.4785C3.27134 5.11956 2.91373 4.67385 2.69008 4.20454L4.94678 1.20984C5.45955 1.29552 5.98651 1.51631 6.46293 1.87534C6.93928 2.23428 7.29689 2.67999 7.52054 3.14921L5.26382 6.14409C4.75108 6.05841 4.22411 5.83751 3.74767 5.4785ZM2.87749 5.56242C3.02753 5.71533 3.18557 5.86196 3.35979 5.99329C3.53409 6.12456 3.71864 6.23606 3.90689 6.33822L3.48668 6.89589L2.45719 6.12018L2.87749 5.56242ZM2.06929 6.63488L3.09878 7.41059L1.15932 9.98436C0.945055 10.2687 0.540977 10.3254 0.256717 10.1112C-0.027607 9.89698 -0.0843477 9.4929 0.12983 9.20856L2.06929 6.63488Z" />
            </svg>
            Live
          </span>
        </div>
        <ul className="view-and-favorite-area">
          <li>
            <a href="#">
              <svg width={16} height={15} viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.00013 3.32629L7.32792 2.63535C5.75006 1.01348 2.85685 1.57317 1.81244 3.61222C1.32211 4.57128 1.21149 5.95597 2.10683 7.72315C2.96935 9.42471 4.76378 11.4628 8.00013 13.6828C11.2365 11.4628 13.03 9.42471 13.8934 7.72315C14.7888 5.95503 14.6791 4.57128 14.1878 3.61222C13.1434 1.57317 10.2502 1.01254 8.67234 2.63441L8.00013 3.32629ZM8.00013 14.8125C-6.375 5.31378 3.57406 -2.09995 7.83512 1.8216C7.89138 1.87317 7.94669 1.9266 8.00013 1.98192C8.05303 1.92665 8.10807 1.87349 8.16513 1.82254C12.4253 -2.10182 22.3753 5.31284 8.00013 14.8125Z" />
              </svg>
            </a>
          </li>
          <li>
            <a href="#">
              <svg width={17} height={11} viewBox="0 0 17 11" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M15.4028 5.44118C14.0143 7.8425 11.3811 9.33421 8.53217 9.33421C5.68139 9.33421 3.04821 7.8425 1.65968 5.44118C1.55274 5.25472 1.55274 5.05762 1.65968 4.87132C3.04821 2.47003 5.68139 0.978484 8.53217 0.978484C11.3811 0.978484 14.0143 2.47003 15.4028 4.87132C15.5116 5.05762 15.5116 5.25472 15.4028 5.44118ZM16.2898 4.39522C14.7224 1.68403 11.7499 0 8.53217 0C5.31258 0 2.3401 1.68403 0.772715 4.39522C0.492428 4.87896 0.492428 5.43355 0.772715 5.91693C2.3401 8.62812 5.31258 10.3125 8.53217 10.3125C11.7499 10.3125 14.7224 8.62812 16.2898 5.91693C16.5701 5.43358 16.5701 4.87896 16.2898 4.39522ZM8.53217 7.1634C9.68098 7.1634 10.6159 6.26305 10.6159 5.15617C10.6159 4.04929 9.68098 3.14894 8.53217 3.14894C7.38152 3.14894 6.44663 4.04929 6.44663 5.15617C6.44663 6.26305 7.38156 7.1634 8.53217 7.1634ZM8.53217 2.17045C6.82095 2.17045 5.43061 3.50998 5.43061 5.1562C5.43061 6.80278 6.82098 8.14176 8.53217 8.14176C10.2416 8.14176 11.6319 6.80275 11.6319 5.1562C11.6319 3.50998 10.2416 2.17045 8.53217 2.17045Z" />
              </svg>
            </a>
          </li>
        </ul>
        <div className="countdown-timer">
          <ul data-countdown="2024-10-23 12:00:00">
            <li className="times" data-days={0}>{days}<span>Days</span></li>
            <li className="colon">
              :
            </li>
            <li className="times" data-hours={0}>{hours}<span>Hours</span></li>
            <li className="colon">
              :
            </li>
            <li className="times" data-minutes={0}>{minutes}<span>Min</span></li>
            <li className="colon">
              :
            </li>
            <li className="times" data-seconds={0}>{seconds}<span>Sec</span></li>
          </ul>
        </div>
      </div>
      <div className="auction-card-content">
        <h6><Link href="/gadget-and-technology/auction-details">Masterpiece Marketplace Art Auction Extra.</Link></h6>
        <div className="price-and-code-area">
          <div className="price">
            <span>Current Bid at:</span>
            <strong>$2,898</strong>
          </div>
          <Link href="/gadget-and-technology/auction-details" className="bid-btn">
            Bid Now
          </Link>
        </div>
      </div>
    </div>
                          </SwiperSlide>
                          <SwiperSlide className="swiper-slide" >
                          <div className="auction-card style-5">
      <div className="auction-card-img-wrap">
        <Link href="/gadget-and-technology/auction-details" className="card-img">
          <img src="../assets/img/home5/auction-img2.jpg" alt="" />
        </Link>
        <div className="batch">
          <span className="upcoming">
            <svg width={9} height={9} viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.731707 3.29268H0V7.46341C0 8.30488 0.695122 9 1.53659 9H7.46341C8.30488 9 9 8.30488 9 7.46341V3.29268H8.26829H0.731707ZM5.67073 4.84756C5.79878 4.70122 6.05488 4.71951 6.18293 4.84756C6.58537 5.21341 6.96951 5.57927 7.37195 5.96342C7.51829 6.10976 7.5 6.34756 7.37195 6.47561C7.0061 6.87805 6.64024 7.2622 6.2561 7.66463C6.10976 7.81098 5.87195 7.79268 5.7439 7.66463C5.59756 7.53659 5.61585 7.28049 5.7439 7.15244C6.01829 6.84146 6.31098 6.54878 6.58537 6.23781C6.27439 5.94512 5.96341 5.65244 5.65244 5.37805C5.5061 5.21342 5.52439 4.97561 5.67073 4.84756ZM4.20732 4.84756C4.33537 4.70122 4.59146 4.71951 4.71951 4.84756C5.12195 5.21341 5.5061 5.57927 5.90854 5.96342C6.05488 6.10976 6.03658 6.34756 5.90854 6.47561C5.54268 6.87805 5.17683 7.2622 4.79268 7.66463C4.64634 7.81098 4.40854 7.79268 4.28049 7.66463C4.13415 7.53659 4.15244 7.28049 4.28049 7.15244C4.55488 6.84146 4.84756 6.54878 5.12195 6.23781C4.81098 5.94512 4.5 5.65244 4.18902 5.37805C4.04268 5.21342 4.06098 4.97561 4.20732 4.84756ZM8.26829 2.56098H9V1.53659C9 0.713415 8.34146 0.0365854 7.51829 0V0.841463C7.51829 1.04268 7.35366 1.20732 7.15244 1.20732C6.95122 1.20732 6.78658 1.02439 6.78658 0.841463V0H2.26829V0.804878C2.26829 1.0061 2.10366 1.17073 1.90244 1.17073C1.70122 1.17073 1.53659 0.987805 1.53659 0.804878V0C0.695122 0 0 0.695122 0 1.53659V2.56098H0.731707H8.26829Z" />
            </svg>
            UPCOMING
          </span>
        </div>
        <ul className="view-and-favorite-area">
          <li>
            <a href="#">
              <svg width={16} height={15} viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.00013 3.32629L7.32792 2.63535C5.75006 1.01348 2.85685 1.57317 1.81244 3.61222C1.32211 4.57128 1.21149 5.95597 2.10683 7.72315C2.96935 9.42471 4.76378 11.4628 8.00013 13.6828C11.2365 11.4628 13.03 9.42471 13.8934 7.72315C14.7888 5.95503 14.6791 4.57128 14.1878 3.61222C13.1434 1.57317 10.2502 1.01254 8.67234 2.63441L8.00013 3.32629ZM8.00013 14.8125C-6.375 5.31378 3.57406 -2.09995 7.83512 1.8216C7.89138 1.87317 7.94669 1.9266 8.00013 1.98192C8.05303 1.92665 8.10807 1.87349 8.16513 1.82254C12.4253 -2.10182 22.3753 5.31284 8.00013 14.8125Z" />
              </svg>
            </a>
          </li>
          <li>
            <a href="#">
              <svg width={17} height={11} viewBox="0 0 17 11" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M15.4028 5.44118C14.0143 7.8425 11.3811 9.33421 8.53217 9.33421C5.68139 9.33421 3.04821 7.8425 1.65968 5.44118C1.55274 5.25472 1.55274 5.05762 1.65968 4.87132C3.04821 2.47003 5.68139 0.978484 8.53217 0.978484C11.3811 0.978484 14.0143 2.47003 15.4028 4.87132C15.5116 5.05762 15.5116 5.25472 15.4028 5.44118ZM16.2898 4.39522C14.7224 1.68403 11.7499 0 8.53217 0C5.31258 0 2.3401 1.68403 0.772715 4.39522C0.492428 4.87896 0.492428 5.43355 0.772715 5.91693C2.3401 8.62812 5.31258 10.3125 8.53217 10.3125C11.7499 10.3125 14.7224 8.62812 16.2898 5.91693C16.5701 5.43358 16.5701 4.87896 16.2898 4.39522ZM8.53217 7.1634C9.68098 7.1634 10.6159 6.26305 10.6159 5.15617C10.6159 4.04929 9.68098 3.14894 8.53217 3.14894C7.38152 3.14894 6.44663 4.04929 6.44663 5.15617C6.44663 6.26305 7.38156 7.1634 8.53217 7.1634ZM8.53217 2.17045C6.82095 2.17045 5.43061 3.50998 5.43061 5.1562C5.43061 6.80278 6.82098 8.14176 8.53217 8.14176C10.2416 8.14176 11.6319 6.80275 11.6319 5.1562C11.6319 3.50998 10.2416 2.17045 8.53217 2.17045Z" />
              </svg>
            </a>
          </li>
        </ul>
        <div className="countdown-timer">
          <ul data-countdown="2024-09-10 12:00:00">
            <li className="times" data-days={0}>{days}<span>Days</span></li>
            <li className="colon">
              :
            </li>
            <li className="times" data-hours={0}>{hours}<span>Hours</span></li>
            <li className="colon">
              :
            </li>
            <li className="times" data-minutes={0}>{minutes}<span>Min</span></li>
            <li className="colon">
              :
            </li>
            <li className="times" data-seconds={0}>{seconds}<span>Sec</span></li>
          </ul>
        </div>
      </div>
      <div className="auction-card-content">
        <h6><Link href="/gadget-and-technology/auction-details">Samsung Galaxy Z folding ne android phone.</Link></h6>
        <div className="price-and-code-area">
          <div className="price">
            <span>Current Bid at:</span>
            <strong>$4,648</strong>
          </div>
          <Link href="/gadget-and-technology/auction-details2" className="bid-btn">
            Notify Me
          </Link>
        </div>
      </div>
    </div>
                          </SwiperSlide>
                          <SwiperSlide className="swiper-slide" >
                          <div className="auction-card style-5">
      <div className="auction-card-img-wrap">
        <Link href="/gadget-and-technology/auction-details" className="card-img">
          <img src="../assets/img/home5/auction-img3.jpg" alt="" />
        </Link>
        <div className="batch">
          <span className="live">
            <svg width={11} height={11} viewBox="0 0 11 11" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.6777 11H4.83398C4.65599 11 4.51172 10.8557 4.51172 10.6777V10.334C4.51172 9.97798 4.80025 9.68944 5.15625 9.68944V9.30414C5.15625 8.79397 5.57133 8.37889 6.0815 8.37889H9.43022C9.94039 8.37889 10.3555 8.79397 10.3555 9.30414V9.68944C10.7115 9.68944 11 9.97798 11 10.334V10.6777C11 10.8556 10.8556 11 10.6777 11ZM6.96665 7.09722C6.75245 7.38146 6.34829 7.43829 6.06405 7.22402C5.77973 7.00985 5.72299 6.60568 5.93716 6.32134L7.8766 3.74766C8.09087 3.46333 8.49494 3.40659 8.7792 3.62077C9.06353 3.83503 9.12035 4.23911 8.90609 4.52346L6.96665 7.09722ZM2.334 3.60618C2.11973 3.89042 1.71563 3.94725 1.43131 3.73298C1.14707 3.51881 1.09025 3.11473 1.30451 2.83038L3.24397 0.256726C3.45815 -0.027598 3.86231 -0.0844241 4.14657 0.12984C4.43081 0.344103 4.48763 0.748181 4.27337 1.03253L2.334 3.60618ZM3.74767 5.4785C3.27134 5.11956 2.91373 4.67385 2.69008 4.20454L4.94678 1.20984C5.45955 1.29552 5.98651 1.51631 6.46293 1.87534C6.93928 2.23428 7.29689 2.67999 7.52054 3.14921L5.26382 6.14409C4.75108 6.05841 4.22411 5.83751 3.74767 5.4785ZM2.87749 5.56242C3.02753 5.71533 3.18557 5.86196 3.35979 5.99329C3.53409 6.12456 3.71864 6.23606 3.90689 6.33822L3.48668 6.89589L2.45719 6.12018L2.87749 5.56242ZM2.06929 6.63488L3.09878 7.41059L1.15932 9.98436C0.945055 10.2687 0.540977 10.3254 0.256717 10.1112C-0.027607 9.89698 -0.0843477 9.4929 0.12983 9.20856L2.06929 6.63488Z" />
            </svg>
            Live
          </span>
        </div>
        <ul className="view-and-favorite-area">
          <li>
            <a href="#">
              <svg width={16} height={15} viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.00013 3.32629L7.32792 2.63535C5.75006 1.01348 2.85685 1.57317 1.81244 3.61222C1.32211 4.57128 1.21149 5.95597 2.10683 7.72315C2.96935 9.42471 4.76378 11.4628 8.00013 13.6828C11.2365 11.4628 13.03 9.42471 13.8934 7.72315C14.7888 5.95503 14.6791 4.57128 14.1878 3.61222C13.1434 1.57317 10.2502 1.01254 8.67234 2.63441L8.00013 3.32629ZM8.00013 14.8125C-6.375 5.31378 3.57406 -2.09995 7.83512 1.8216C7.89138 1.87317 7.94669 1.9266 8.00013 1.98192C8.05303 1.92665 8.10807 1.87349 8.16513 1.82254C12.4253 -2.10182 22.3753 5.31284 8.00013 14.8125Z" />
              </svg>
            </a>
          </li>
          <li>
            <a href="#">
              <svg width={17} height={11} viewBox="0 0 17 11" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M15.4028 5.44118C14.0143 7.8425 11.3811 9.33421 8.53217 9.33421C5.68139 9.33421 3.04821 7.8425 1.65968 5.44118C1.55274 5.25472 1.55274 5.05762 1.65968 4.87132C3.04821 2.47003 5.68139 0.978484 8.53217 0.978484C11.3811 0.978484 14.0143 2.47003 15.4028 4.87132C15.5116 5.05762 15.5116 5.25472 15.4028 5.44118ZM16.2898 4.39522C14.7224 1.68403 11.7499 0 8.53217 0C5.31258 0 2.3401 1.68403 0.772715 4.39522C0.492428 4.87896 0.492428 5.43355 0.772715 5.91693C2.3401 8.62812 5.31258 10.3125 8.53217 10.3125C11.7499 10.3125 14.7224 8.62812 16.2898 5.91693C16.5701 5.43358 16.5701 4.87896 16.2898 4.39522ZM8.53217 7.1634C9.68098 7.1634 10.6159 6.26305 10.6159 5.15617C10.6159 4.04929 9.68098 3.14894 8.53217 3.14894C7.38152 3.14894 6.44663 4.04929 6.44663 5.15617C6.44663 6.26305 7.38156 7.1634 8.53217 7.1634ZM8.53217 2.17045C6.82095 2.17045 5.43061 3.50998 5.43061 5.1562C5.43061 6.80278 6.82098 8.14176 8.53217 8.14176C10.2416 8.14176 11.6319 6.80275 11.6319 5.1562C11.6319 3.50998 10.2416 2.17045 8.53217 2.17045Z" />
              </svg>
            </a>
          </li>
        </ul>
        <div className="countdown-timer">
          <ul data-countdown="2024-10-10 12:00:00">
            <li className="times" data-days={0}>{days}<span>Days</span></li>
            <li className="colon">
              :
            </li>
            <li className="times" data-hours={0}>{hours}<span>Hours</span></li>
            <li className="colon">
              :
            </li>
            <li className="times" data-minutes={0}>{minutes}<span>Min</span></li>
            <li className="colon">
              :
            </li>
            <li className="times" data-seconds={0}>{seconds}<span>Sec</span></li>
          </ul>
        </div>
      </div>
      <div className="auction-card-content">
        <h6><Link href="/gadget-and-technology/auction-details">Giga Grip Nikon Camera With Zoom Lance Mount.</Link></h6>
        <div className="price-and-code-area">
          <div className="price">
            <span>Current Bid at:</span>
            <strong>$8,974</strong>
          </div>
          <Link href="/gadget-and-technology/auction-details" className="bid-btn">
            Bid Now
          </Link>
        </div>
      </div>
    </div>
                          </SwiperSlide>
                          <SwiperSlide className="swiper-slide" >
                          <div className="auction-card style-5">
      <div className="auction-card-img-wrap">
        <Link href="/gadget-and-technology/auction-details" className="card-img">
          <img src="../assets/img/home5/auction-img4.jpg" alt="" />
        </Link>
        <div className="batch">
          <span className="live">
            <svg width={11} height={11} viewBox="0 0 11 11" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.6777 11H4.83398C4.65599 11 4.51172 10.8557 4.51172 10.6777V10.334C4.51172 9.97798 4.80025 9.68944 5.15625 9.68944V9.30414C5.15625 8.79397 5.57133 8.37889 6.0815 8.37889H9.43022C9.94039 8.37889 10.3555 8.79397 10.3555 9.30414V9.68944C10.7115 9.68944 11 9.97798 11 10.334V10.6777C11 10.8556 10.8556 11 10.6777 11ZM6.96665 7.09722C6.75245 7.38146 6.34829 7.43829 6.06405 7.22402C5.77973 7.00985 5.72299 6.60568 5.93716 6.32134L7.8766 3.74766C8.09087 3.46333 8.49494 3.40659 8.7792 3.62077C9.06353 3.83503 9.12035 4.23911 8.90609 4.52346L6.96665 7.09722ZM2.334 3.60618C2.11973 3.89042 1.71563 3.94725 1.43131 3.73298C1.14707 3.51881 1.09025 3.11473 1.30451 2.83038L3.24397 0.256726C3.45815 -0.027598 3.86231 -0.0844241 4.14657 0.12984C4.43081 0.344103 4.48763 0.748181 4.27337 1.03253L2.334 3.60618ZM3.74767 5.4785C3.27134 5.11956 2.91373 4.67385 2.69008 4.20454L4.94678 1.20984C5.45955 1.29552 5.98651 1.51631 6.46293 1.87534C6.93928 2.23428 7.29689 2.67999 7.52054 3.14921L5.26382 6.14409C4.75108 6.05841 4.22411 5.83751 3.74767 5.4785ZM2.87749 5.56242C3.02753 5.71533 3.18557 5.86196 3.35979 5.99329C3.53409 6.12456 3.71864 6.23606 3.90689 6.33822L3.48668 6.89589L2.45719 6.12018L2.87749 5.56242ZM2.06929 6.63488L3.09878 7.41059L1.15932 9.98436C0.945055 10.2687 0.540977 10.3254 0.256717 10.1112C-0.027607 9.89698 -0.0843477 9.4929 0.12983 9.20856L2.06929 6.63488Z" />
            </svg>
            Live
          </span>
        </div>
        <ul className="view-and-favorite-area">
          <li>
            <a href="#">
              <svg width={16} height={15} viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.00013 3.32629L7.32792 2.63535C5.75006 1.01348 2.85685 1.57317 1.81244 3.61222C1.32211 4.57128 1.21149 5.95597 2.10683 7.72315C2.96935 9.42471 4.76378 11.4628 8.00013 13.6828C11.2365 11.4628 13.03 9.42471 13.8934 7.72315C14.7888 5.95503 14.6791 4.57128 14.1878 3.61222C13.1434 1.57317 10.2502 1.01254 8.67234 2.63441L8.00013 3.32629ZM8.00013 14.8125C-6.375 5.31378 3.57406 -2.09995 7.83512 1.8216C7.89138 1.87317 7.94669 1.9266 8.00013 1.98192C8.05303 1.92665 8.10807 1.87349 8.16513 1.82254C12.4253 -2.10182 22.3753 5.31284 8.00013 14.8125Z" />
              </svg>
            </a>
          </li>
          <li>
            <a href="#">
              <svg width={17} height={11} viewBox="0 0 17 11" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M15.4028 5.44118C14.0143 7.8425 11.3811 9.33421 8.53217 9.33421C5.68139 9.33421 3.04821 7.8425 1.65968 5.44118C1.55274 5.25472 1.55274 5.05762 1.65968 4.87132C3.04821 2.47003 5.68139 0.978484 8.53217 0.978484C11.3811 0.978484 14.0143 2.47003 15.4028 4.87132C15.5116 5.05762 15.5116 5.25472 15.4028 5.44118ZM16.2898 4.39522C14.7224 1.68403 11.7499 0 8.53217 0C5.31258 0 2.3401 1.68403 0.772715 4.39522C0.492428 4.87896 0.492428 5.43355 0.772715 5.91693C2.3401 8.62812 5.31258 10.3125 8.53217 10.3125C11.7499 10.3125 14.7224 8.62812 16.2898 5.91693C16.5701 5.43358 16.5701 4.87896 16.2898 4.39522ZM8.53217 7.1634C9.68098 7.1634 10.6159 6.26305 10.6159 5.15617C10.6159 4.04929 9.68098 3.14894 8.53217 3.14894C7.38152 3.14894 6.44663 4.04929 6.44663 5.15617C6.44663 6.26305 7.38156 7.1634 8.53217 7.1634ZM8.53217 2.17045C6.82095 2.17045 5.43061 3.50998 5.43061 5.1562C5.43061 6.80278 6.82098 8.14176 8.53217 8.14176C10.2416 8.14176 11.6319 6.80275 11.6319 5.1562C11.6319 3.50998 10.2416 2.17045 8.53217 2.17045Z" />
              </svg>
            </a>
          </li>
        </ul>
        <div className="countdown-timer">
          <ul data-countdown="2024-11-12 12:00:00">
            <li className="times" data-days={0}>{days}<span>Days</span></li>
            <li className="colon">
              :
            </li>
            <li className="times" data-hours={0}>{hours}<span>Hours</span></li>
            <li className="colon">
              :
            </li>
            <li className="times" data-minutes={0}>{minutes}<span>Min</span></li>
            <li className="colon">
              :
            </li>
            <li className="times" data-seconds={0}>{seconds}<span>Sec</span></li>
          </ul>
        </div>
      </div>
      <div className="auction-card-content">
        <h6><Link href="/gadget-and-technology/auction-details">Power Up Portable Headphon With Charger.</Link></h6>
        <div className="price-and-code-area">
          <div className="price">
            <span>Current Bid at:</span>
            <strong>$5,237</strong>
          </div>
          <Link href="/gadget-and-technology/auction-details" className="bid-btn">
            Bid Now
          </Link>
        </div>
      </div>
    </div>
                          </SwiperSlide>
                          <SwiperSlide className="swiper-slide" >
                          <div className="auction-card style-5">
      <div className="auction-card-img-wrap">
        <Link href="/gadget-and-technology/auction-details" className="card-img">
          <img src="../assets/img/home5/auction-img13.jpg" alt="" />
        </Link>
        <div className="batch">
          <span className="live">
            <svg width={11} height={11} viewBox="0 0 11 11" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.6777 11H4.83398C4.65599 11 4.51172 10.8557 4.51172 10.6777V10.334C4.51172 9.97798 4.80025 9.68944 5.15625 9.68944V9.30414C5.15625 8.79397 5.57133 8.37889 6.0815 8.37889H9.43022C9.94039 8.37889 10.3555 8.79397 10.3555 9.30414V9.68944C10.7115 9.68944 11 9.97798 11 10.334V10.6777C11 10.8556 10.8556 11 10.6777 11ZM6.96665 7.09722C6.75245 7.38146 6.34829 7.43829 6.06405 7.22402C5.77973 7.00985 5.72299 6.60568 5.93716 6.32134L7.8766 3.74766C8.09087 3.46333 8.49494 3.40659 8.7792 3.62077C9.06353 3.83503 9.12035 4.23911 8.90609 4.52346L6.96665 7.09722ZM2.334 3.60618C2.11973 3.89042 1.71563 3.94725 1.43131 3.73298C1.14707 3.51881 1.09025 3.11473 1.30451 2.83038L3.24397 0.256726C3.45815 -0.027598 3.86231 -0.0844241 4.14657 0.12984C4.43081 0.344103 4.48763 0.748181 4.27337 1.03253L2.334 3.60618ZM3.74767 5.4785C3.27134 5.11956 2.91373 4.67385 2.69008 4.20454L4.94678 1.20984C5.45955 1.29552 5.98651 1.51631 6.46293 1.87534C6.93928 2.23428 7.29689 2.67999 7.52054 3.14921L5.26382 6.14409C4.75108 6.05841 4.22411 5.83751 3.74767 5.4785ZM2.87749 5.56242C3.02753 5.71533 3.18557 5.86196 3.35979 5.99329C3.53409 6.12456 3.71864 6.23606 3.90689 6.33822L3.48668 6.89589L2.45719 6.12018L2.87749 5.56242ZM2.06929 6.63488L3.09878 7.41059L1.15932 9.98436C0.945055 10.2687 0.540977 10.3254 0.256717 10.1112C-0.027607 9.89698 -0.0843477 9.4929 0.12983 9.20856L2.06929 6.63488Z" />
            </svg>
            Live
          </span>
        </div>
        <ul className="view-and-favorite-area">
          <li>
            <a href="#">
              <svg width={16} height={15} viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.00013 3.32629L7.32792 2.63535C5.75006 1.01348 2.85685 1.57317 1.81244 3.61222C1.32211 4.57128 1.21149 5.95597 2.10683 7.72315C2.96935 9.42471 4.76378 11.4628 8.00013 13.6828C11.2365 11.4628 13.03 9.42471 13.8934 7.72315C14.7888 5.95503 14.6791 4.57128 14.1878 3.61222C13.1434 1.57317 10.2502 1.01254 8.67234 2.63441L8.00013 3.32629ZM8.00013 14.8125C-6.375 5.31378 3.57406 -2.09995 7.83512 1.8216C7.89138 1.87317 7.94669 1.9266 8.00013 1.98192C8.05303 1.92665 8.10807 1.87349 8.16513 1.82254C12.4253 -2.10182 22.3753 5.31284 8.00013 14.8125Z" />
              </svg>
            </a>
          </li>
          <li>
            <a href="#">
              <svg width={17} height={11} viewBox="0 0 17 11" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M15.4028 5.44118C14.0143 7.8425 11.3811 9.33421 8.53217 9.33421C5.68139 9.33421 3.04821 7.8425 1.65968 5.44118C1.55274 5.25472 1.55274 5.05762 1.65968 4.87132C3.04821 2.47003 5.68139 0.978484 8.53217 0.978484C11.3811 0.978484 14.0143 2.47003 15.4028 4.87132C15.5116 5.05762 15.5116 5.25472 15.4028 5.44118ZM16.2898 4.39522C14.7224 1.68403 11.7499 0 8.53217 0C5.31258 0 2.3401 1.68403 0.772715 4.39522C0.492428 4.87896 0.492428 5.43355 0.772715 5.91693C2.3401 8.62812 5.31258 10.3125 8.53217 10.3125C11.7499 10.3125 14.7224 8.62812 16.2898 5.91693C16.5701 5.43358 16.5701 4.87896 16.2898 4.39522ZM8.53217 7.1634C9.68098 7.1634 10.6159 6.26305 10.6159 5.15617C10.6159 4.04929 9.68098 3.14894 8.53217 3.14894C7.38152 3.14894 6.44663 4.04929 6.44663 5.15617C6.44663 6.26305 7.38156 7.1634 8.53217 7.1634ZM8.53217 2.17045C6.82095 2.17045 5.43061 3.50998 5.43061 5.1562C5.43061 6.80278 6.82098 8.14176 8.53217 8.14176C10.2416 8.14176 11.6319 6.80275 11.6319 5.1562C11.6319 3.50998 10.2416 2.17045 8.53217 2.17045Z" />
              </svg>
            </a>
          </li>
        </ul>
        <div className="countdown-timer">
          <ul data-countdown="2024-10-02 12:00:00">
            <li className="times" data-days={0}>{days}<span>Days</span></li>
            <li className="colon">
              :
            </li>
            <li className="times" data-hours={0}>{hours}<span>Hours</span></li>
            <li className="colon">
              :
            </li>
            <li className="times" data-minutes={0}>{minutes}<span>Min</span></li>
            <li className="colon">
              :
            </li>
            <li className="times" data-seconds={0}>{seconds}<span>Sec</span></li>
          </ul>
        </div>
      </div>
      <div className="auction-card-content">
        <h6><Link href="/gadget-and-technology/auction-details">Smart Stream Bluetooth Sma Gaming Control.</Link></h6>
        <div className="price-and-code-area">
          <div className="price">
            <span>Current Bid at:</span>
            <strong>$8,974</strong>
          </div>
          <Link href="/gadget-and-technology/auction-details" className="bid-btn">
            Bid Now
          </Link>
        </div>
      </div>
    </div>
                          </SwiperSlide>
                          <SwiperSlide className="swiper-slide" >
                          <div className="auction-card style-5">
      <div className="auction-card-img-wrap">
        <Link href="/gadget-and-technology/auction-details" className="card-img">
          <img src="../assets/img/home5/auction-img14.jpg" alt="" />
        </Link>
        <div className="batch">
          <span className="live">
            <svg width={11} height={11} viewBox="0 0 11 11" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.6777 11H4.83398C4.65599 11 4.51172 10.8557 4.51172 10.6777V10.334C4.51172 9.97798 4.80025 9.68944 5.15625 9.68944V9.30414C5.15625 8.79397 5.57133 8.37889 6.0815 8.37889H9.43022C9.94039 8.37889 10.3555 8.79397 10.3555 9.30414V9.68944C10.7115 9.68944 11 9.97798 11 10.334V10.6777C11 10.8556 10.8556 11 10.6777 11ZM6.96665 7.09722C6.75245 7.38146 6.34829 7.43829 6.06405 7.22402C5.77973 7.00985 5.72299 6.60568 5.93716 6.32134L7.8766 3.74766C8.09087 3.46333 8.49494 3.40659 8.7792 3.62077C9.06353 3.83503 9.12035 4.23911 8.90609 4.52346L6.96665 7.09722ZM2.334 3.60618C2.11973 3.89042 1.71563 3.94725 1.43131 3.73298C1.14707 3.51881 1.09025 3.11473 1.30451 2.83038L3.24397 0.256726C3.45815 -0.027598 3.86231 -0.0844241 4.14657 0.12984C4.43081 0.344103 4.48763 0.748181 4.27337 1.03253L2.334 3.60618ZM3.74767 5.4785C3.27134 5.11956 2.91373 4.67385 2.69008 4.20454L4.94678 1.20984C5.45955 1.29552 5.98651 1.51631 6.46293 1.87534C6.93928 2.23428 7.29689 2.67999 7.52054 3.14921L5.26382 6.14409C4.75108 6.05841 4.22411 5.83751 3.74767 5.4785ZM2.87749 5.56242C3.02753 5.71533 3.18557 5.86196 3.35979 5.99329C3.53409 6.12456 3.71864 6.23606 3.90689 6.33822L3.48668 6.89589L2.45719 6.12018L2.87749 5.56242ZM2.06929 6.63488L3.09878 7.41059L1.15932 9.98436C0.945055 10.2687 0.540977 10.3254 0.256717 10.1112C-0.027607 9.89698 -0.0843477 9.4929 0.12983 9.20856L2.06929 6.63488Z" />
            </svg>
            Live
          </span>
        </div>
        <ul className="view-and-favorite-area">
          <li>
            <a href="#">
              <svg width={16} height={15} viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.00013 3.32629L7.32792 2.63535C5.75006 1.01348 2.85685 1.57317 1.81244 3.61222C1.32211 4.57128 1.21149 5.95597 2.10683 7.72315C2.96935 9.42471 4.76378 11.4628 8.00013 13.6828C11.2365 11.4628 13.03 9.42471 13.8934 7.72315C14.7888 5.95503 14.6791 4.57128 14.1878 3.61222C13.1434 1.57317 10.2502 1.01254 8.67234 2.63441L8.00013 3.32629ZM8.00013 14.8125C-6.375 5.31378 3.57406 -2.09995 7.83512 1.8216C7.89138 1.87317 7.94669 1.9266 8.00013 1.98192C8.05303 1.92665 8.10807 1.87349 8.16513 1.82254C12.4253 -2.10182 22.3753 5.31284 8.00013 14.8125Z" />
              </svg>
            </a>
          </li>
          <li>
            <a href="#">
              <svg width={17} height={11} viewBox="0 0 17 11" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M15.4028 5.44118C14.0143 7.8425 11.3811 9.33421 8.53217 9.33421C5.68139 9.33421 3.04821 7.8425 1.65968 5.44118C1.55274 5.25472 1.55274 5.05762 1.65968 4.87132C3.04821 2.47003 5.68139 0.978484 8.53217 0.978484C11.3811 0.978484 14.0143 2.47003 15.4028 4.87132C15.5116 5.05762 15.5116 5.25472 15.4028 5.44118ZM16.2898 4.39522C14.7224 1.68403 11.7499 0 8.53217 0C5.31258 0 2.3401 1.68403 0.772715 4.39522C0.492428 4.87896 0.492428 5.43355 0.772715 5.91693C2.3401 8.62812 5.31258 10.3125 8.53217 10.3125C11.7499 10.3125 14.7224 8.62812 16.2898 5.91693C16.5701 5.43358 16.5701 4.87896 16.2898 4.39522ZM8.53217 7.1634C9.68098 7.1634 10.6159 6.26305 10.6159 5.15617C10.6159 4.04929 9.68098 3.14894 8.53217 3.14894C7.38152 3.14894 6.44663 4.04929 6.44663 5.15617C6.44663 6.26305 7.38156 7.1634 8.53217 7.1634ZM8.53217 2.17045C6.82095 2.17045 5.43061 3.50998 5.43061 5.1562C5.43061 6.80278 6.82098 8.14176 8.53217 8.14176C10.2416 8.14176 11.6319 6.80275 11.6319 5.1562C11.6319 3.50998 10.2416 2.17045 8.53217 2.17045Z" />
              </svg>
            </a>
          </li>
        </ul>
        <div className="countdown-timer">
          <ul data-countdown="2024-08-02 12:00:00">
            <li className="times" data-days={0}>{days}<span>Days</span></li>
            <li className="colon">
              :
            </li>
            <li className="times" data-hours={0}>{hours}<span>Hours</span></li>
            <li className="colon">
              :
            </li>
            <li className="times" data-minutes={0}>{minutes}<span>Min</span></li>
            <li className="colon">
              :
            </li>
            <li className="times" data-seconds={0}>{seconds}<span>Sec</span></li>
          </ul>
        </div>
      </div>
      <div className="auction-card-content">
        <h6><Link href="/gadget-and-technology/auction-details">Nebula Noise Free-Canceling Headphones.</Link></h6>
        <div className="price-and-code-area">
          <div className="price">
            <span>Current Bid at:</span>
            <strong>$5,237</strong>
          </div>
          <Link href="/gadget-and-technology/auction-details" className="bid-btn">
            Bid Now
          </Link>
        </div>
      </div>
    </div>
                          </SwiperSlide>
                  </div>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer5 />
    </>
  );
};

export default AuctionDetailsPage;
