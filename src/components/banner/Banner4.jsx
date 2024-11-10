"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";
import Link from "next/link";
import { useMemo } from "react";
SwiperCore.use([Autoplay, EffectFade, Navigation, Pagination]);

const Banner4 = () => {
  const setttings = useMemo(() => {
    return {
      slidesPerView: "auto",
      speed: 1500,
      spaceBetween: 15,
      effect: "fade",
      fadeEffect: {
        crossFade: true, // Enable cross-fade transition
      },
      autoplay: {
        delay: 2500, // Autoplay duration in milliseconds
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".home4-banner-img-slider-next",
        prevEl: ".home4-banner-img-slider-prev",
      },
      pagination: {
        el: ".paginations1",
        type: "fraction",
      },
    };
  }, []);
  return (
    <>
      <div className="home4-banner-section mb-120">
        <div className="banner-wrapper">
          <div className="container-fluid p-0">
            <div className="row">
              <div className="col-xl-6 col-lg-7">
                <div className="banner-content-and-counter-area">
                  <div className="banner-content">
                    <span className="sub-title">
                      <svg
                        width={14}
                        height={14}
                        viewBox="0 0 14 14"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M6.6304 0.338424C6.67018 -0.112811 7.32982 -0.112807 7.3696 0.338428L7.72654 4.38625C7.75291 4.68505 8.10454 4.83069 8.33443 4.63804L11.4491 2.02821C11.7963 1.73728 12.2627 2.20368 11.9718 2.55089L9.36197 5.66556C9.1693 5.89546 9.31496 6.24709 9.61374 6.27346L13.6615 6.6304C14.1128 6.67018 14.1128 7.32982 13.6615 7.3696L9.61374 7.72654C9.31496 7.75291 9.1693 8.10454 9.36197 8.33443L11.9718 11.4491C12.2627 11.7963 11.7963 12.2627 11.4491 11.9718L8.33443 9.36197C8.10454 9.1693 7.75291 9.31496 7.72654 9.61374L7.3696 13.6615C7.32982 14.1128 6.67018 14.1128 6.6304 13.6615L6.27346 9.61374C6.24709 9.31496 5.89546 9.1693 5.66556 9.36197L2.55089 11.9718C2.20368 12.2627 1.73729 11.7963 2.02822 11.4491L4.63804 8.33443C4.83069 8.10454 4.68504 7.75291 4.38625 7.72654L0.338424 7.3696C-0.112811 7.32982 -0.112807 6.67018 0.338428 6.6304L4.38625 6.27346C4.68505 6.24709 4.83069 5.89546 4.63804 5.66556L2.02821 2.55089C1.73728 2.20368 2.20368 1.73729 2.55089 2.02822L5.66556 4.63804C5.89546 4.83069 6.24709 4.68504 6.27346 4.38625L6.6304 0.338424Z" />
                      </svg>
                      PROBID YOU CAN TRUST
                      <svg
                        width={14}
                        height={14}
                        viewBox="0 0 14 14"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M6.6304 0.338424C6.67018 -0.112811 7.32982 -0.112807 7.3696 0.338428L7.72654 4.38625C7.75291 4.68505 8.10454 4.83069 8.33443 4.63804L11.4491 2.02821C11.7963 1.73728 12.2627 2.20368 11.9718 2.55089L9.36197 5.66556C9.1693 5.89546 9.31496 6.24709 9.61374 6.27346L13.6615 6.6304C14.1128 6.67018 14.1128 7.32982 13.6615 7.3696L9.61374 7.72654C9.31496 7.75291 9.1693 8.10454 9.36197 8.33443L11.9718 11.4491C12.2627 11.7963 11.7963 12.2627 11.4491 11.9718L8.33443 9.36197C8.10454 9.1693 7.75291 9.31496 7.72654 9.61374L7.3696 13.6615C7.32982 14.1128 6.67018 14.1128 6.6304 13.6615L6.27346 9.61374C6.24709 9.31496 5.89546 9.1693 5.66556 9.36197L2.55089 11.9718C2.20368 12.2627 1.73729 11.7963 2.02822 11.4491L4.63804 8.33443C4.83069 8.10454 4.68504 7.75291 4.38625 7.72654L0.338424 7.3696C-0.112811 7.32982 -0.112807 6.67018 0.338428 6.6304L4.38625 6.27346C4.68505 6.24709 4.83069 5.89546 4.63804 5.66556L2.02821 2.55089C1.73728 2.20368 2.20368 1.73729 2.55089 2.02822L5.66556 4.63804C5.89546 4.83069 6.24709 4.68504 6.27346 4.38625L6.6304 0.338424Z" />
                      </svg>
                    </span>
                    <h1>
                      Select <span>Our Product</span> At Our Auction.
                    </h1>
                    <p>
                      Join us as we carve a path to success, driven by passion,
                      powered by innovation, and we're here to turn them into
                      reality.
                    </p>
                    <div className="button-area">
                      <Link
                        className="primary-btn3 btn-hover black-bg"
                        href="/art-auciton/auction-grid"
                      >
                        Start A Bid
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
                      </Link>
                      <Link
                        className="primary-btn3 btn-hover"
                        href="/art-auciton/auction-grid"
                      >
                        View All Auction
                        <span style={{ top: "40.5px", left: "84.2344px" }} />
                      </Link>
                    </div>
                  </div>
                  <div className="counter-area">
                    <ul>
                      <li className="single-counter">
                        <div className="icon">
                          <svg
                            width={35}
                            height={35}
                            viewBox="0 0 35 35"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M16.2128 0.775401L15.2972 2.50882C15.2811 2.53945 15.2581 2.56596 15.2301 2.58631C15.2021 2.60666 15.1698 2.6203 15.1356 2.62618L13.2037 2.96168C12.943 3.00714 12.6995 3.12282 12.4996 3.29628C12.2996 3.46974 12.1507 3.69441 12.0689 3.94615C11.9871 4.19789 11.9754 4.46717 12.0352 4.72504C12.0949 4.98291 12.2238 5.21962 12.408 5.40972L13.774 6.81686C13.8231 6.86724 13.8459 6.93729 13.836 7.00673L13.5577 8.94722C13.5196 9.20946 13.5539 9.47712 13.6569 9.72129C13.7599 9.96546 13.9276 10.1768 14.142 10.3326C14.3563 10.4884 14.6092 10.5827 14.8732 10.6053C15.1373 10.6278 15.4024 10.5778 15.6401 10.4607L17.4 9.5961C17.4312 9.58093 17.4654 9.57305 17.5001 9.57305C17.5348 9.57305 17.5691 9.58093 17.6003 9.5961L19.3601 10.4607C19.5978 10.5774 19.8629 10.627 20.1267 10.6042C20.3906 10.5815 20.6432 10.4872 20.8574 10.3315C21.0716 10.1758 21.2393 9.96463 21.3424 9.72071C21.4455 9.47678 21.4802 9.20935 21.4425 8.94722L21.1642 7.00673C21.1593 6.97244 21.1624 6.93749 21.1731 6.90457C21.1839 6.87165 21.2021 6.84164 21.2262 6.81686L22.5922 5.40972C22.7762 5.21954 22.9049 4.98283 22.9645 4.72502C23.0242 4.46721 23.0125 4.19802 22.9307 3.94636C22.8489 3.69471 22.7001 3.47008 22.5002 3.2966C22.3004 3.12312 22.0571 3.00734 21.7965 2.96168L19.8646 2.62618C19.8305 2.6203 19.7981 2.60666 19.7701 2.58631C19.7421 2.56596 19.7191 2.53945 19.703 2.50882L18.7874 0.775401C18.6636 0.541332 18.4783 0.345448 18.2515 0.208822C18.0247 0.0721964 17.7649 0 17.5001 0C17.2353 0 16.9755 0.0721964 16.7487 0.208822C16.5219 0.345448 16.3366 0.541332 16.2128 0.775401ZM17.2998 1.34931C17.3189 1.31275 17.3477 1.28213 17.383 1.26076C17.4184 1.23939 17.4588 1.2281 17.5001 1.2281C17.5414 1.2281 17.5819 1.23939 17.6172 1.26076C17.6525 1.28213 17.6813 1.31275 17.7004 1.34931L18.6166 3.08273C18.7203 3.27955 18.8678 3.44994 19.0477 3.58076C19.2277 3.71159 19.4352 3.79935 19.6544 3.8373L21.5863 4.1728C21.6272 4.17947 21.6654 4.19725 21.6968 4.22418C21.7282 4.25111 21.7516 4.28616 21.7644 4.3255C21.7772 4.36483 21.7789 4.40693 21.7694 4.44719C21.7599 4.48745 21.7395 4.52432 21.7105 4.55377L20.3445 5.96029C20.1895 6.11994 20.0731 6.31303 20.0044 6.52469C19.9357 6.73636 19.9165 6.96097 19.9482 7.18124L20.2259 9.12173C20.232 9.16264 20.2268 9.20445 20.2109 9.24261C20.1949 9.28077 20.1687 9.31382 20.1353 9.33815C20.1018 9.36248 20.0623 9.37717 20.0211 9.38062C19.9799 9.38406 19.9385 9.37613 19.9015 9.35768L18.1416 8.49312C17.942 8.39516 17.7225 8.34422 17.5001 8.34422C17.2777 8.34422 17.0583 8.39516 16.8586 8.49312L15.0988 9.35768C15.0617 9.37613 15.0204 9.38406 14.9791 9.38062C14.9379 9.37717 14.8984 9.36248 14.865 9.33815C14.8315 9.31382 14.8054 9.28077 14.7894 9.24261C14.7734 9.20445 14.7682 9.16264 14.7743 9.12173L15.0521 7.18124C15.0838 6.96097 15.0645 6.73636 14.9958 6.52469C14.9271 6.31303 14.8108 6.11994 14.6557 5.96029L13.2898 4.55377C13.2614 4.52407 13.2415 4.48721 13.2324 4.44713C13.2232 4.40705 13.2251 4.36524 13.2379 4.32615C13.2506 4.28706 13.2737 4.25216 13.3047 4.22515C13.3357 4.19815 13.3734 4.18006 13.4139 4.1728L15.3458 3.8373C15.565 3.79935 15.7726 3.71159 15.9525 3.58076C16.1324 3.44994 16.2799 3.27955 16.3836 3.08273L17.2998 1.34931ZM32.6523 6.51822L30.7788 7.09644C30.7457 7.10666 30.7108 7.10921 30.6766 7.10388C30.6424 7.09856 30.6099 7.08551 30.5815 7.06572L28.9784 5.93632C28.7618 5.78403 28.5078 5.69366 28.2437 5.67492C27.9797 5.65619 27.7155 5.7098 27.4796 5.82999C27.2437 5.95018 27.045 6.1324 26.9049 6.35707C26.7649 6.58173 26.6887 6.84032 26.6846 7.10504L26.6557 9.06581C26.6552 9.1004 26.6467 9.13441 26.6309 9.16521C26.6152 9.196 26.5925 9.22275 26.5648 9.24339L24.996 10.4195C24.7839 10.5781 24.6191 10.7917 24.5194 11.0371C24.4197 11.2826 24.3889 11.5506 24.4303 11.8122C24.4717 12.0739 24.5838 12.3193 24.7544 12.5219C24.925 12.7246 25.1477 12.8768 25.3985 12.9622L27.2542 13.5951C27.287 13.6063 27.3167 13.6249 27.3412 13.6494C27.3657 13.6739 27.3843 13.7036 27.3955 13.7364L28.029 15.5921C28.1148 15.8424 28.2672 16.0646 28.4698 16.2349C28.6724 16.4051 28.9176 16.517 29.1789 16.5583C29.4403 16.5997 29.708 16.5691 29.9533 16.4698C30.1986 16.3704 30.4122 16.2061 30.5711 15.9946L31.7472 14.4258C31.7679 14.398 31.7947 14.3753 31.8256 14.3595C31.8565 14.3437 31.8907 14.3353 31.9254 14.3349L33.8855 14.306C34.1502 14.3019 34.4088 14.2257 34.6335 14.0856C34.8582 13.9456 35.0404 13.7469 35.1606 13.511C35.2808 13.2751 35.3344 13.0109 35.3157 12.7468C35.2969 12.4827 35.2065 12.2288 35.0543 12.0122L33.9255 10.4097C33.9054 10.3813 33.8922 10.3487 33.8868 10.3144C33.8813 10.2801 33.8839 10.245 33.8941 10.2118L34.4723 8.33889C34.5508 8.08584 34.5586 7.81618 34.495 7.55901C34.4314 7.30183 34.2988 7.06689 34.1115 6.87953C33.9242 6.69217 33.6893 6.5595 33.4322 6.49583C33.175 6.43216 32.9054 6.4399 32.6523 6.51822ZM33.0148 7.69247C33.0543 7.6801 33.0964 7.67879 33.1365 7.68867C33.1767 7.69855 33.2133 7.71925 33.2425 7.74852C33.2718 7.77779 33.2924 7.8145 33.3022 7.85467C33.312 7.89485 33.3106 7.93693 33.2981 7.97636L32.7199 9.84926C32.6541 10.0618 32.6381 10.2867 32.6729 10.5065C32.7077 10.7262 32.7925 10.9351 32.9208 11.1169L34.0496 12.7201C34.0733 12.7538 34.0873 12.7934 34.0902 12.8345C34.0931 12.8757 34.0847 12.9168 34.0659 12.9535C34.0471 12.9903 34.0187 13.0212 33.9837 13.0429C33.9486 13.0647 33.9083 13.0765 33.8671 13.0771L31.9069 13.1059C31.6844 13.1092 31.4656 13.1635 31.2674 13.2646C31.0692 13.3657 30.8967 13.5109 30.7634 13.6891L29.5879 15.2578C29.5632 15.2909 29.5299 15.3166 29.4917 15.3322C29.4534 15.3477 29.4116 15.3525 29.3709 15.3461C29.3301 15.3396 29.2918 15.3222 29.2602 15.2956C29.2286 15.269 29.2049 15.2342 29.1916 15.1951L28.5587 13.3394C28.4868 13.1289 28.3676 12.9376 28.2102 12.7803C28.0529 12.623 27.8617 12.5038 27.6511 12.4319L25.7954 11.799C25.7565 11.7855 25.7219 11.7617 25.6955 11.7301C25.669 11.6985 25.6516 11.6603 25.6452 11.6196C25.6387 11.5789 25.6435 11.5372 25.6589 11.499C25.6743 11.4608 25.6999 11.4275 25.7328 11.4026L27.3021 10.2272C27.4801 10.0937 27.6252 9.92125 27.7261 9.72302C27.8271 9.52479 27.8813 9.30607 27.8846 9.08363L27.9135 7.12348C27.9142 7.08229 27.9261 7.04206 27.9479 7.00711C27.9697 6.97217 28.0006 6.94382 28.0373 6.92512C28.074 6.90642 28.1151 6.89808 28.1562 6.90098C28.1973 6.90388 28.2368 6.91792 28.2705 6.94159L29.8737 8.07037C30.2423 8.32968 30.7106 8.40403 31.1413 8.27069L33.0148 7.69247ZM0.52788 8.33889L1.10609 10.2118C1.11637 10.245 1.11889 10.2801 1.11346 10.3144C1.10803 10.3487 1.09479 10.3813 1.07476 10.4097L-0.0540223 12.0122C-0.206759 12.2286 -0.2975 12.4827 -0.316459 12.7469C-0.335418 13.0112 -0.281875 13.2756 -0.161606 13.5116C-0.0413364 13.7477 0.141096 13.9464 0.366014 14.0864C0.590931 14.2264 0.8498 14.3023 1.1147 14.306L3.07485 14.3349C3.10955 14.3353 3.14368 14.3437 3.17459 14.3595C3.20549 14.3753 3.23234 14.398 3.25305 14.4258L4.42914 15.9946C4.58807 16.2061 4.80165 16.3704 5.04693 16.4698C5.29221 16.5691 5.55992 16.5997 5.82129 16.5583C6.08267 16.517 6.32782 16.4051 6.53042 16.2349C6.73302 16.0646 6.88541 15.8424 6.9712 15.5921L7.60471 13.7364C7.61595 13.7036 7.63452 13.6739 7.65901 13.6494C7.68351 13.6249 7.71327 13.6063 7.74604 13.5951L9.60174 12.9622C9.85251 12.8768 10.0752 12.7246 10.2458 12.5219C10.4165 12.3193 10.5285 12.0739 10.5699 11.8122C10.6114 11.5506 10.5806 11.2826 10.4809 11.0371C10.3812 10.7917 10.2164 10.5781 10.0042 10.4195L8.43547 9.24401C8.40773 9.2232 8.38511 9.19633 8.36935 9.16545C8.35359 9.13456 8.3451 9.10048 8.34453 9.06581L8.31565 7.10504C8.31156 6.84032 8.23538 6.58173 8.0953 6.35707C7.95523 6.1324 7.75656 5.95018 7.52066 5.82999C7.28477 5.7098 7.02057 5.65619 6.75648 5.67492C6.49239 5.69366 6.23841 5.78403 6.02184 5.93632L4.41869 7.0651C4.39043 7.08512 4.35794 7.09836 4.32373 7.1038C4.28952 7.10923 4.25453 7.10671 4.22145 7.09644L2.34794 6.51822C2.09486 6.4399 1.8252 6.43216 1.56804 6.49583C1.31088 6.5595 1.07599 6.69217 0.888693 6.87953C0.701397 7.06689 0.568806 7.30183 0.505221 7.55901C0.441636 7.81618 0.449471 8.08584 0.52788 8.33889ZM1.70213 7.97636C1.69013 7.93697 1.68905 7.89506 1.69901 7.85511C1.70897 7.81516 1.72959 7.77866 1.75868 7.74951C1.78776 7.72037 1.82421 7.69966 1.86414 7.68962C1.90408 7.67957 1.94598 7.68056 1.9854 7.69247L3.85891 8.27069C4.07147 8.33639 4.29625 8.3525 4.51601 8.31777C4.73576 8.28304 4.94462 8.19841 5.12656 8.07037L6.72971 6.94159C6.76342 6.91792 6.80295 6.90388 6.84404 6.90098C6.88513 6.89808 6.92623 6.90642 6.96294 6.92512C6.99964 6.94382 7.03056 6.97217 7.05236 7.00711C7.07417 7.04206 7.08605 7.08229 7.08672 7.12348L7.1156 9.08363C7.1189 9.30607 7.17312 9.52479 7.2741 9.72302C7.37508 9.92125 7.52012 10.0937 7.69811 10.2272L9.26746 11.4026C9.30036 11.4275 9.32589 11.4608 9.34132 11.499C9.35674 11.5372 9.36149 11.5789 9.35506 11.6196C9.34862 11.6603 9.33124 11.6985 9.30477 11.7301C9.2783 11.7617 9.24374 11.7855 9.20479 11.799L7.34909 12.4319C7.13856 12.5038 6.9473 12.623 6.78998 12.7803C6.63266 12.9376 6.51346 13.1289 6.44152 13.3394L5.80862 15.1951C5.79515 15.2341 5.77135 15.2686 5.73976 15.2951C5.70817 15.3216 5.66997 15.339 5.62926 15.3454C5.58855 15.3518 5.54686 15.3471 5.50864 15.3317C5.47043 15.3162 5.43712 15.2907 5.41229 15.2578L4.23681 13.6891C4.10349 13.5109 3.93107 13.3657 3.73283 13.2646C3.53458 13.1635 3.31579 13.1092 3.09329 13.1059L1.13313 13.0771C1.09189 13.0765 1.05159 13.0647 1.01655 13.0429C0.981518 13.0212 0.953085 12.9903 0.934312 12.9535C0.91554 12.9168 0.907139 12.8757 0.910015 12.8345C0.912891 12.7934 0.926935 12.7538 0.950634 12.7201L2.07941 11.1169C2.33933 10.7482 2.41368 10.2806 2.28034 9.84926L1.70213 7.97636ZM17.5001 12.0607C11.1699 12.0607 6.03044 17.2001 6.03044 23.5304C6.03044 29.8613 11.1699 35.0001 17.5001 35.0001C23.8304 35.0001 28.9698 29.8613 28.9698 23.5304C28.9698 17.2001 23.8304 12.0607 17.5001 12.0607ZM17.5001 13.2897C23.152 13.2897 27.7408 17.8785 27.7408 23.5304C27.7408 29.1829 23.152 33.7711 17.5001 33.7711C11.8482 33.7711 7.25938 29.1829 7.25938 23.5304C7.25938 17.8785 11.8482 13.2897 17.5001 13.2897Z"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M21.9164 24.5442C19.6337 24.5442 15.3625 24.5442 13.0804 24.5602C12.7803 24.5604 12.485 24.6346 12.2204 24.7762C11.9559 24.9178 11.7303 25.1223 11.5636 25.3718C11.3969 25.6213 11.2943 25.908 11.2647 26.2066C11.2352 26.5052 11.2797 26.8065 11.3943 27.0838C12.3688 29.4949 14.737 31.2007 17.5003 31.2007C20.2617 31.2007 22.6292 29.4968 23.621 27.0905C23.7365 26.8104 23.7812 26.5061 23.7512 26.2046C23.7211 25.9031 23.6172 25.6137 23.4486 25.3619C23.28 25.1101 23.0519 24.9038 22.7846 24.7612C22.5172 24.6185 22.2194 24.544 21.9164 24.5442ZM21.9164 25.7731C22.0174 25.7731 22.1168 25.7979 22.2059 25.8454C22.295 25.893 22.371 25.9617 22.4272 26.0456C22.4834 26.1295 22.5181 26.226 22.5281 26.3264C22.5382 26.4269 22.5233 26.5283 22.4848 26.6217C21.6768 28.5825 19.7498 29.9718 17.5003 29.9718C16.4325 29.9714 15.3892 29.6521 14.5041 29.0549C13.619 28.4577 12.9324 27.6098 12.5323 26.6198L12.5304 26.6162C12.493 26.5252 12.4785 26.4264 12.4883 26.3285C12.4981 26.2306 12.5319 26.1367 12.5866 26.0549C12.6413 25.9732 12.7153 25.9062 12.8021 25.8598C12.8889 25.8134 12.9857 25.7892 13.0841 25.7891H13.0884C15.3687 25.7731 19.6355 25.7731 21.9164 25.7731ZM12.1021 21.2236C12.1421 20.968 12.3393 20.7916 12.563 20.6343C12.6902 20.5446 12.8426 20.4948 13.0005 20.4395C13.2255 20.362 13.4636 20.3301 13.701 20.3455C13.9025 20.3332 14.101 20.3523 14.2872 20.4039C14.4205 20.4408 14.5514 20.4727 14.6682 20.5335C14.9803 20.6958 15.2525 20.9047 15.2998 21.2236C15.298 21.2654 15.3046 21.3071 15.3193 21.3463C15.334 21.3854 15.3565 21.4212 15.3854 21.4514C15.4143 21.4817 15.4491 21.5057 15.4875 21.5222C15.526 21.5386 15.5674 21.5471 15.6092 21.5471C15.6511 21.5471 15.6925 21.5386 15.7309 21.5222C15.7694 21.5057 15.8041 21.4817 15.833 21.4514C15.8619 21.4212 15.8844 21.3854 15.8991 21.3463C15.9138 21.3071 15.9205 21.2654 15.9186 21.2236C16.0022 20.6564 15.7115 20.1218 15.2464 19.704C14.9656 19.4521 14.6006 19.2776 14.2061 19.1774C14.0403 19.1397 13.871 19.1195 13.701 19.1172C13.4746 19.1213 13.2498 19.1556 13.0325 19.2192C12.7006 19.3243 12.3928 19.4797 12.1513 19.6972C11.6849 20.1175 11.3967 20.6552 11.4834 21.2236C11.4869 21.3033 11.5211 21.3785 11.5787 21.4336C11.6363 21.4887 11.713 21.5195 11.7928 21.5195C11.8725 21.5195 11.9492 21.4887 12.0068 21.4336C12.0644 21.3785 12.0986 21.3033 12.1021 21.2236ZM19.7007 21.2236C19.7412 20.968 19.9378 20.7916 20.1621 20.6343C20.2887 20.5446 20.4417 20.4948 20.599 20.4395C20.824 20.3621 21.0621 20.3302 21.2995 20.3455C21.5011 20.3332 21.6995 20.3523 21.8857 20.4039C22.0197 20.4408 22.1499 20.4727 22.2667 20.5335C22.5794 20.6958 22.851 20.9047 22.8984 21.2236C22.9019 21.3033 22.9361 21.3785 22.9937 21.4336C23.0513 21.4887 23.128 21.5195 23.2077 21.5195C23.2875 21.5195 23.3642 21.4887 23.4218 21.4336C23.4794 21.3785 23.5136 21.3033 23.5171 21.2236C23.6007 20.6564 23.3107 20.1218 22.8449 19.704C22.5641 19.4521 22.1991 19.2776 21.8046 19.1774C21.6388 19.1396 21.4695 19.1194 21.2995 19.1172C21.0731 19.1213 20.8483 19.1556 20.631 19.2192C20.2992 19.3243 19.9913 19.4797 19.7498 19.6972C19.2841 20.1175 18.9953 20.6552 19.0819 21.2236C19.0854 21.3033 19.1196 21.3785 19.1772 21.4336C19.2349 21.4887 19.3115 21.5195 19.3913 21.5195C19.471 21.5195 19.5477 21.4887 19.6053 21.4336C19.663 21.3785 19.6971 21.3033 19.7007 21.2236Z"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M13.688 29.4004C13.6351 29.5326 13.6296 29.679 13.6727 29.8147C13.7157 29.9505 13.8045 30.067 13.924 30.1445C14.9885 30.8358 16.2309 31.2028 17.5002 31.2008C18.8176 31.2008 20.0453 30.8131 21.0764 30.1464C21.1961 30.0689 21.2852 29.9523 21.3283 29.8165C21.3715 29.6806 21.3661 29.5339 21.313 29.4016C20.7667 28.0375 19.2742 27.0298 17.5002 27.0298C15.7268 27.0298 14.2349 28.0369 13.688 29.4004ZM15.0835 29.3961C15.5794 28.7061 16.4826 28.2587 17.5002 28.2587C18.5184 28.2587 19.421 28.7061 19.9175 29.3967C19.1906 29.7648 18.3697 29.9719 17.5002 29.9719C16.6307 29.9719 15.8098 29.7648 15.0835 29.3961Z"
                            />
                          </svg>
                        </div>
                        <div className="content">
                          <div className="content-top-area">
                            <div className="number">
                              <h5 className="counter">3.5</h5>
                              <strong>k</strong>
                            </div>
                            <span>Customer</span>
                          </div>
                          <p>Total Customer</p>
                        </div>
                      </li>
                      <li className="single-counter">
                        <div className="icon">
                          <svg
                            width={35}
                            height={35}
                            viewBox="0 0 35 35"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M25.2935 15.0593L17.4542 24.465L13.0216 20.0323C12.9514 19.9596 12.8674 19.9016 12.7745 19.8617C12.6817 19.8219 12.5818 19.8009 12.4807 19.8C12.3797 19.7991 12.2794 19.8184 12.1859 19.8566C12.0924 19.8949 12.0074 19.9514 11.9359 20.0229C11.8645 20.0943 11.808 20.1793 11.7697 20.2729C11.7314 20.3664 11.7122 20.4666 11.713 20.5677C11.7139 20.6687 11.7349 20.7686 11.7748 20.8615C11.8147 20.9543 11.8727 21.0383 11.9454 21.1085L16.9686 26.1318C17.1113 26.274 17.3045 26.354 17.506 26.354H17.5395C17.6453 26.3492 17.749 26.3224 17.8439 26.2752C17.9388 26.228 18.0228 26.1615 18.0905 26.08L26.4626 16.0335C26.5861 15.8778 26.6438 15.6801 26.6235 15.4824C26.6031 15.2848 26.5063 15.1029 26.3536 14.9757C26.201 14.8485 26.0046 14.7861 25.8066 14.8017C25.6085 14.8173 25.4244 14.9097 25.2935 15.0593Z" />
                            <path d="M34.8462 9.77421C34.845 9.60041 34.7843 9.43228 34.6742 9.29776L27.599 0.628833C27.3854 0.365865 27.1157 0.153949 26.8097 0.00857316C26.5037 -0.136803 26.169 -0.211965 25.8302 -0.211421H9.188C8.85372 -0.212073 8.52341 -0.139024 8.22058 0.00252473C7.91775 0.144073 7.64985 0.350641 7.43595 0.607522L0.176575 9.29168C0.0625614 9.4284 8.01033e-05 9.60076 0 9.77878V32.4428C0 33.0484 0.240561 33.6292 0.668763 34.0574C1.09696 34.4856 1.67773 34.7261 2.2833 34.7261H32.7166C33.0178 34.7261 33.3159 34.6666 33.594 34.5509C33.872 34.4352 34.1244 34.2656 34.3366 34.052C34.5488 33.8383 34.7167 33.5848 34.8305 33.3061C34.9444 33.0273 35.002 32.7287 35 32.4276L34.8462 9.77421ZM26.4193 1.5863L32.4807 9.01768H18.2664V1.30773H25.8302C25.9429 1.30766 26.0542 1.33261 26.1561 1.38078C26.258 1.42896 26.3479 1.49915 26.4193 1.5863ZM8.60956 1.5863C8.68111 1.50086 8.77054 1.43217 8.87154 1.38509C8.97254 1.33801 9.08265 1.31368 9.19409 1.31382H16.7442V9.02377H2.38985L8.60956 1.5863ZM33.2692 32.9862C33.1983 33.0573 33.1141 33.1137 33.0214 33.1521C32.9286 33.1905 32.8292 33.2102 32.7288 33.21H2.2833C2.08144 33.21 1.88786 33.1298 1.74512 32.9871C1.60239 32.8444 1.5222 32.6508 1.5222 32.4489V10.5399H33.3362L33.4777 32.4428C33.4781 32.6441 33.3988 32.8373 33.257 32.9802L33.2692 32.9862Z" />
                          </svg>
                        </div>
                        <div className="content">
                          <div className="content-top-area">
                            <div className="number">
                              <h5 className="counter">700</h5>
                            </div>
                            <span>Auction</span>
                          </div>
                          <p>Total Product</p>
                        </div>
                      </li>
                      <li className="single-counter">
                        <div className="icon">
                          <svg
                            width={31}
                            height={35}
                            viewBox="0 0 31 35"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M21.6912 31.0569H21.3978C20.4301 29.9795 19.0109 29.2523 17.2741 28.949C16.5049 28.8146 14.4754 28.5038 12.1725 28.5038H12.1274C9.89248 28.5078 7.80971 28.8161 7.01804 28.9484C5.27932 29.2389 3.85655 29.9663 2.88428 31.057H2.59184C1.30565 31.057 0.259277 32.1033 0.259277 33.3895V34.4697C0.259277 34.5394 0.272995 34.6083 0.299646 34.6727C0.326298 34.737 0.365362 34.7955 0.414608 34.8447C0.463854 34.894 0.522317 34.933 0.58666 34.9597C0.651003 34.9864 0.719965 35.0001 0.789609 35.0001H23.4937C23.6343 35.0001 23.7692 34.9442 23.8687 34.8447C23.9681 34.7453 24.024 34.6104 24.024 34.4697V33.3895C24.0239 32.1033 22.9775 31.0569 21.6912 31.0569ZM7.19283 29.9945C7.95873 29.8665 9.97294 29.5683 12.1293 29.5644C14.3609 29.5576 16.3449 29.8635 17.0915 29.9938C18.1741 30.1829 19.0841 30.5396 19.8127 31.0569H4.46099C5.19243 30.5324 6.10612 30.176 7.19283 29.9945ZM22.9632 33.9394H1.3198V33.3895C1.3198 32.6882 1.89047 32.1176 2.59177 32.1176H21.6912C22.3927 32.1176 22.9633 32.6882 22.9633 33.3895V33.9394H22.9632ZM29.8968 25.0605C29.8927 25.0564 29.8884 25.0523 29.8841 25.0482L19.6989 15.5204C19.9516 14.7556 19.9143 13.9345 19.5847 13.2003C19.9423 12.5353 20.1411 11.8412 20.1724 11.1309L20.1744 11.0838L20.6823 10.576C21.0037 10.7658 21.3703 10.8658 21.7436 10.8657C22.3048 10.8657 22.8324 10.6471 23.2291 10.2504C23.6259 9.85353 23.8445 9.32593 23.8445 8.7647C23.8445 8.20354 23.6259 7.67594 23.2291 7.27911L16.5655 0.615303C16.1688 0.218477 15.6412 0 15.0799 0C14.5187 0 13.9911 0.218545 13.5943 0.615371C12.9049 1.30478 12.7981 2.3571 13.2692 3.16176L12.7548 3.67616L12.7194 3.67773C11.8761 3.71485 11.0548 3.98535 10.2785 4.48164C9.81503 4.77798 8.61409 5.59063 7.47652 6.73319C6.38216 7.83248 5.55104 9.04422 5.24459 9.51412C4.73928 10.2888 4.46563 11.1137 4.43125 11.9659L4.42981 12.0012L3.91678 12.5141C3.59529 12.3244 3.22876 12.2243 2.85543 12.2245C2.2942 12.2245 1.7666 12.443 1.36984 12.8399C0.972949 13.2367 0.754404 13.7643 0.754404 14.3255C0.754404 14.8866 0.972949 15.4142 1.36978 15.8111L8.03345 22.4747C8.43027 22.8715 8.95787 23.0901 9.5191 23.0901C10.0803 23.0901 10.6079 22.8715 11.0047 22.4747C11.4015 22.0779 11.6201 21.5503 11.6201 20.9892C11.6202 20.6158 11.5202 20.2493 11.3304 19.9278L11.8462 19.412L11.8746 19.411C12.5932 19.3843 13.294 19.1856 13.9642 18.8234C14.398 19.0073 14.8476 19.1004 15.2921 19.1004C15.6258 19.1004 15.9562 19.0474 16.2747 18.9444L25.8027 29.1297C25.8067 29.134 25.8109 29.1383 25.815 29.1424C26.3776 29.7051 27.1167 29.9865 27.8558 29.9865C28.5949 29.9865 29.3341 29.7051 29.8969 29.1424C31.0222 28.0169 31.0222 26.1858 29.8968 25.0605ZM19.8831 9.87526L19.5217 10.2367L13.608 4.32284L13.9693 3.96156L19.8831 9.87526ZM14.3443 1.36534C14.5408 1.16881 14.8021 1.06066 15.0799 1.06066C15.3578 1.06066 15.6191 1.16881 15.8156 1.36534L22.4792 8.02908C22.5761 8.12545 22.6529 8.24008 22.7052 8.36634C22.7575 8.4926 22.7842 8.62797 22.7838 8.76463C22.7838 9.04251 22.6758 9.30378 22.4792 9.50031C22.2827 9.69678 22.0214 9.80492 21.7436 9.80492C21.4658 9.80492 21.2045 9.69678 21.008 9.50024L14.3443 2.83664C13.9387 2.431 13.9387 1.77092 14.3443 1.36534ZM6.13285 10.0935C6.42146 9.65111 7.20329 8.51088 8.22813 7.48152C9.29153 6.41341 10.4158 5.65271 10.8498 5.37523C11.3956 5.02626 11.9631 4.81797 12.5398 4.75467L19.0955 11.3102C19.0321 11.8871 18.8239 12.4546 18.4749 13.0003C18.0426 13.6764 17.2605 14.7189 16.3623 15.6172C15.2897 16.6899 14.1847 17.4418 13.7594 17.7153C13.2117 18.0676 12.6408 18.2757 12.0593 18.3354L5.50743 11.7835C5.5693 11.2034 5.77909 10.6359 6.13285 10.0935ZM4.71597 13.2148L5.07738 12.8535L10.9912 18.7672L10.6297 19.1287L4.71597 13.2148ZM10.2547 21.7248C10.1583 21.8217 10.0437 21.8985 9.91746 21.9508C9.7912 22.0031 9.65583 22.0298 9.51917 22.0294C9.3825 22.0298 9.24711 22.0031 9.12084 21.9508C8.99457 21.8985 8.87993 21.8217 8.78355 21.7248L2.11988 15.0611C2.02296 14.9647 1.94612 14.8501 1.89381 14.7238C1.8415 14.5975 1.81476 14.4621 1.81514 14.3255C1.81477 14.1888 1.84152 14.0534 1.89383 13.9271C1.94614 13.8009 2.02297 13.6862 2.11988 13.5898C2.21627 13.4929 2.33091 13.4161 2.45718 13.3638C2.58344 13.3115 2.71883 13.2848 2.8555 13.2852C3.13331 13.2852 3.39458 13.3934 3.59105 13.5899L10.2548 20.2537C10.4513 20.4501 10.5595 20.7114 10.5595 20.9892C10.5595 21.267 10.4513 21.5283 10.2547 21.7248ZM15.1585 18.0364C15.7092 17.6312 16.4166 17.0629 17.1121 16.3673C17.6949 15.7845 18.2913 15.0834 18.8037 14.3883C18.8292 14.8546 18.6987 15.3299 18.4125 15.7592L18.3984 15.7802C18.1396 16.1685 18.0324 16.3292 17.5535 16.8063C17.0921 17.2657 16.9251 17.3789 16.5592 17.6271L16.5097 17.6606C16.0972 17.9408 15.6322 18.0657 15.1585 18.0364ZM29.1469 28.3923C28.4371 29.1024 27.2832 29.1043 26.5707 28.3983L17.2532 18.4378C17.5911 18.2076 17.8159 18.0419 18.3021 17.5578C18.7944 17.0674 18.9686 16.8338 19.1933 16.4997L29.1527 25.8163C29.8586 26.5286 29.8566 27.6825 29.1469 28.3923Z" />
                          </svg>
                        </div>
                        <div className="content">
                          <div className="content-top-area">
                            <div className="number">
                              <h5 className="counter">5.6</h5>
                              <strong>k</strong>
                            </div>
                            <span>Bidder</span>
                          </div>
                          <p>Number Of Total Bidder</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-5">
                <div className="banner-img-wrap">
                  <Swiper
                    {...setttings}
                    className="swiper home4-banner-img-slider"
                  >
                    <div className="swiper-wrapper">
                      <SwiperSlide className="swiper-slide">
                        <div className="banner-img">
                          <img
                            src="../assets/img/home4/home4-banner-img1.png"
                            alt=""
                          />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide className="swiper-slide">
                        <div className="banner-img">
                          <img
                            src="../assets/img/home4/home4-banner-img2.png"
                            alt=""
                          />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide className="swiper-slide">
                        <div className="banner-img">
                          <img
                            src="../assets/img/home4/home4-banner-img3.png"
                            alt=""
                          />
                        </div>
                      </SwiperSlide>
                    </div>
                  </Swiper>
                  <div className="slider-btn-and-pagination">
                    <div className="slider-btn home4-banner-img-slider-prev">
                      <i className="bi bi-chevron-up" />
                    </div>
                    <div className="paginations1" />
                    <div className="slider-btn home4-banner-img-slider-next">
                      <i className="bi bi-chevron-down" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner4;
