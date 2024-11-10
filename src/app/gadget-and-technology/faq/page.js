import Breadcrumb5 from "@/components/common/Breadcrumb5";
import InnerpageFooter5 from "@/components/footer/InnerpageFooter5";
import InnerPageHeader5 from "@/components/header/InnerPageHeader5";
import React from "react";

const FaqPage = () => {
  return (
    <>
      <InnerPageHeader5 />
      <Breadcrumb5 currentPage="FAQ" pagetitle="FAQ" />
      <div className="faq-section pt-110 mb-110">
        <div className="container">
          <div
            className="row mb-60 wow animate fadeInDown"
            data-wow-delay="200ms"
            data-wow-duration="1500ms"
          >
            <div className="col-lg-12">
              <div className="section-title text-center">
                <h2>
                  Frequently Asked <span>Questions</span>
                </h2>
                <p>
                  Feel free adapt this based on the specific managed services,
                  features
                </p>
              </div>
            </div>
          </div>
          <div className="row gy-5">
            <div
              className="col-lg-3 wow animate fadeInLeft"
              data-wow-delay="200ms"
              data-wow-duration="1500ms"
            >
              <div className="faq-contact-wrap two">
                <div className="faq-nav-btn-area">
                  <div
                    className="nav flex-column nav-pills"
                    id="v-pills-tab"
                    role="tablist"
                    aria-orientation="vertical"
                  >
                    <button
                      className="nav-link active"
                      id="general-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#general"
                      type="button"
                      role="tab"
                      aria-controls="general"
                      aria-selected="true"
                    >
                      General
                    </button>
                    <button
                      className="nav-link"
                      id="payment-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#payment"
                      type="button"
                      role="tab"
                      aria-controls="payment"
                      aria-selected="false"
                    >
                      Payment
                    </button>
                    <button
                      className="nav-link"
                      id="bidding-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#bidding"
                      type="button"
                      role="tab"
                      aria-controls="bidding"
                      aria-selected="false"
                    >
                      Bidding
                    </button>
                  </div>
                </div>
                <div className="contact-address-area">
                  <h4>Ask the help community write now!</h4>
                  <div className="contact-area">
                    <div className="icon">
                      <svg
                        width={34}
                        height={34}
                        viewBox="0 0 34 34"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M17.6994 19.2613C16.4293 19.2553 15.1676 19.0562 13.9574 18.6709C13.0075 18.3531 12.159 17.789 11.4984 17.0361C10.8378 16.2833 10.3888 15.3686 10.1972 14.3855C9.77058 12.3309 10.5486 10.1585 12.33 8.42462C12.5214 8.23833 12.7203 8.05989 12.9261 7.88972C13.8247 7.13734 14.893 6.61496 16.0386 6.36767C17.1842 6.12038 18.3728 6.15562 19.5018 6.47033C20.5845 6.81606 21.5337 7.48839 22.2191 8.39506C22.9045 9.30172 23.2925 10.3983 23.3299 11.5343C23.413 12.8742 22.9762 14.1946 22.1105 15.2207C21.783 15.6332 21.3482 15.9474 20.8538 16.1289C20.3594 16.3105 19.8246 16.3522 19.308 16.2497C19.0948 16.2055 18.8928 16.1187 18.7139 15.9945C18.5351 15.8704 18.3831 15.7115 18.2671 15.5273C18.163 15.3483 18.0961 15.1502 18.0704 14.9447C18.0447 14.7393 18.0607 14.5308 18.1175 14.3317C18.6133 12.4584 19.117 9.6117 19.1221 9.58336C19.1351 9.51007 19.1624 9.44004 19.2024 9.37728C19.2424 9.31452 19.2944 9.26026 19.3553 9.21759C19.4163 9.17492 19.4851 9.14467 19.5578 9.12859C19.6304 9.1125 19.7056 9.11088 19.7789 9.12383C19.8522 9.13678 19.9222 9.16404 19.9849 9.20405C20.0477 9.24406 20.102 9.29604 20.1446 9.35702C20.1873 9.418 20.2176 9.48679 20.2336 9.55946C20.2497 9.63213 20.2513 9.70725 20.2384 9.78055C20.2174 9.89897 19.7211 12.7026 19.2134 14.6212C19.1955 14.6739 19.1885 14.7296 19.1929 14.7851C19.1973 14.8405 19.2129 14.8944 19.2389 14.9436C19.3173 15.052 19.4355 15.1247 19.5675 15.1459C19.8839 15.1987 20.2086 15.1641 20.5067 15.0458C20.8048 14.9274 21.0649 14.7299 21.2589 14.4745C21.9312 13.6702 22.268 12.638 22.1995 11.592C22.1724 10.6878 21.8662 9.814 21.3229 9.09066C20.7795 8.36733 20.0256 7.82986 19.1646 7.55202C18.2161 7.29111 17.2184 7.2649 16.2575 7.47566C15.2966 7.68642 14.4014 8.12782 13.6491 8.76176C13.4672 8.91305 13.2899 9.07114 13.1199 9.23659C12.2394 10.0933 10.8324 11.8714 11.3067 14.1549C11.4633 14.9389 11.822 15.6683 12.3472 16.271C12.8725 16.8737 13.5461 17.3287 14.3013 17.5909C16.9588 18.4386 20.7778 18.5411 22.7893 16.0395C22.8846 15.9261 23.0205 15.8546 23.1679 15.8402C23.3152 15.8258 23.4624 15.8696 23.5779 15.9623C23.6933 16.055 23.7679 16.1893 23.7856 16.3363C23.8033 16.4833 23.7628 16.6314 23.6727 16.7489C22.1848 18.5995 19.9205 19.2613 17.6994 19.2613Z" />
                        <path d="M15.7607 16.3237C15.1617 16.3342 14.5774 16.1379 14.1062 15.7679C13.0188 14.8975 12.9888 13.3852 13.2937 12.3557C13.3968 12.0128 13.5345 11.6814 13.7056 11.3669C14.1307 10.5091 14.8105 9.80355 15.652 9.34688C16.1623 9.08214 16.7443 8.98857 17.3119 9.08C17.8795 9.17142 18.4027 9.44298 18.8041 9.85457C19.213 10.3027 19.521 10.8332 19.7073 11.4105C19.7541 11.5512 19.7439 11.7047 19.6789 11.8379C19.6139 11.9712 19.4992 12.0737 19.3595 12.1234C19.2198 12.1731 19.0662 12.166 18.9316 12.1037C18.7971 12.0414 18.6923 11.9288 18.6398 11.7902C18.5054 11.3638 18.2822 10.9708 17.9847 10.6371C17.7509 10.3979 17.4453 10.2417 17.1145 10.1923C16.7837 10.1429 16.4458 10.203 16.1523 10.3634C15.5212 10.7193 15.0141 11.2597 14.6989 11.912C14.5665 12.1565 14.4596 12.414 14.3799 12.6803C14.1595 13.4249 14.2082 14.3972 14.8156 14.8834C15.4797 15.4171 16.6005 15.1916 17.2311 14.6476C17.7009 14.2245 18.1045 13.7332 18.4284 13.1903C18.4677 13.127 18.519 13.0721 18.5795 13.0287C18.6399 12.9853 18.7084 12.9542 18.7808 12.9373C18.8533 12.9203 18.9284 12.9178 19.0019 12.9298C19.0753 12.9419 19.1457 12.9683 19.2089 13.0076C19.2722 13.0468 19.3271 13.0981 19.3705 13.1586C19.4139 13.2191 19.445 13.2875 19.462 13.36C19.4789 13.4324 19.4815 13.5076 19.4694 13.581C19.4573 13.6545 19.4309 13.7248 19.3917 13.7881C19.0076 14.4277 18.5295 15.0059 17.9734 15.5033C17.3539 16.026 16.5713 16.3162 15.7607 16.3237Z" />
                        <path d="M32.2975 34.0001H1.69975C1.24905 33.9997 0.816947 33.8204 0.498256 33.5017C0.179566 33.183 0.000328062 32.7509 -0.00012196 32.3002V11.3351C-0.000189309 11.2274 0.0304473 11.1219 0.0881973 11.031C0.145947 10.9401 0.228418 10.8675 0.325944 10.8217C0.423469 10.776 0.532009 10.759 0.638843 10.7728C0.745676 10.7865 0.846377 10.8305 0.929142 10.8994L14.8318 22.454C15.4417 22.9579 16.2081 23.2336 16.9992 23.2336C17.7903 23.2336 18.5567 22.9579 19.1665 22.454L33.0681 10.8988C33.1509 10.8299 33.2516 10.7859 33.3585 10.7722C33.4654 10.7585 33.574 10.7755 33.6715 10.8213C33.7691 10.8671 33.8515 10.9398 33.9092 11.0308C33.967 11.1218 33.9975 11.2274 33.9973 11.3351V32.3002C33.9969 32.7509 33.8176 33.183 33.499 33.5017C33.1803 33.8204 32.7482 33.9997 32.2975 34.0001ZM1.13313 12.5426V32.3002C1.13313 32.613 1.38697 32.8669 1.69975 32.8669H32.2975C32.4477 32.8669 32.5919 32.8072 32.6981 32.7009C32.8044 32.5946 32.8641 32.4505 32.8641 32.3002V12.5426L19.8895 23.3255C19.0762 23.9976 18.0542 24.3654 16.9991 24.3656C15.944 24.3658 14.9218 23.9984 14.1083 23.3266L1.13313 12.5426Z" />
                        <path d="M0.56773 11.9016C0.447396 11.9019 0.330112 11.8638 0.232869 11.7929C0.135625 11.722 0.0634718 11.622 0.0268611 11.5074C-0.0097496 11.3928 -0.00891633 11.2695 0.0292402 11.1554C0.0673967 11.0412 0.140895 10.9422 0.239088 10.8727L5.33871 7.25759C5.46133 7.17066 5.61347 7.13599 5.76166 7.16123C5.90984 7.18647 6.04193 7.26954 6.12887 7.39217C6.2158 7.51479 6.25046 7.66693 6.22523 7.81512C6.19999 7.9633 6.11692 8.09539 5.99429 8.18232L0.894672 11.7974C0.799189 11.8653 0.684902 11.9017 0.56773 11.9016ZM33.4308 11.9016C33.3136 11.9017 33.1994 11.8653 33.1039 11.7974L28.0042 8.18232C27.8829 8.09496 27.801 7.96317 27.7764 7.81569C27.7518 7.66821 27.7865 7.51699 27.873 7.39498C27.9594 7.27297 28.0905 7.19006 28.2378 7.16433C28.3851 7.13859 28.5366 7.17212 28.6593 7.25759L33.7589 10.8727C33.857 10.9422 33.9305 11.0411 33.9686 11.1551C34.0068 11.2691 34.0078 11.3923 33.9713 11.5069C33.9348 11.6214 33.8629 11.7214 33.7658 11.7924C33.6687 11.8634 33.551 11.9016 33.4308 11.9016ZM22.2349 3.9689C22.1175 3.96901 22.0031 3.93257 21.9074 3.86465L19.1989 1.94379C18.5897 1.42886 17.819 1.14413 17.0214 1.13927C16.2237 1.1344 15.4497 1.4097 14.8342 1.91716L12.0917 3.86465C11.9691 3.95158 11.817 3.98624 11.6688 3.96101C11.5206 3.93577 11.3885 3.8527 11.3016 3.73007C11.2146 3.60745 11.18 3.45531 11.2052 3.30712C11.2305 3.15894 11.3135 3.02685 11.4362 2.93991L14.1446 1.01906C14.956 0.355581 15.9731 -0.00470972 17.0212 4.64938e-05C18.0694 0.00480271 19.0831 0.374309 19.8885 1.04512L22.563 2.93991C22.6611 3.00947 22.7346 3.10849 22.7728 3.22261C22.811 3.33674 22.8118 3.46004 22.7752 3.57467C22.7386 3.6893 22.6664 3.7893 22.5692 3.86018C22.4719 3.93106 22.3546 3.96914 22.2343 3.9689H22.2349ZM0.935469 33.694C0.818793 33.6942 0.704892 33.6585 0.609322 33.5915C0.513751 33.5246 0.441173 33.4298 0.401499 33.3201C0.361825 33.2103 0.35699 33.091 0.387655 32.9785C0.41832 32.8659 0.482989 32.7655 0.572829 32.6911L13.5032 21.9479C13.5605 21.9003 13.6265 21.8645 13.6976 21.8425C13.7687 21.8205 13.8434 21.8127 13.9176 21.8196C13.9917 21.8264 14.0637 21.8478 14.1295 21.8825C14.1954 21.9172 14.2537 21.9646 14.3013 22.0218C14.3488 22.0791 14.3846 22.1452 14.4067 22.2163C14.4287 22.2874 14.4365 22.3621 14.4296 22.4362C14.4227 22.5103 14.4013 22.5823 14.3666 22.6482C14.3319 22.714 14.2846 22.7724 14.2273 22.8199L1.29698 33.5631C1.19548 33.6477 1.06757 33.694 0.935469 33.694ZM33.0625 33.694C32.9304 33.6941 32.8024 33.6478 32.701 33.5631L19.7706 22.8199C19.7119 22.7729 19.6631 22.7146 19.6272 22.6485C19.5912 22.5824 19.5688 22.5097 19.5612 22.4349C19.5536 22.36 19.561 22.2843 19.583 22.2124C19.6049 22.1404 19.641 22.0735 19.6891 22.0156C19.7372 21.9577 19.7964 21.91 19.8631 21.8752C19.9299 21.8405 20.0029 21.8193 20.0779 21.8131C20.1529 21.8068 20.2284 21.8156 20.2999 21.8388C20.3715 21.8621 20.4378 21.8993 20.4948 21.9485L33.4251 32.6917C33.515 32.7661 33.5797 32.8665 33.6103 32.979C33.641 33.0916 33.6362 33.2109 33.5965 33.3206C33.5568 33.4304 33.4842 33.5252 33.3887 33.5921C33.2931 33.659 33.1792 33.6942 33.0625 33.694Z" />
                        <path d="M28.329 16.1397C28.1787 16.1397 28.0346 16.08 27.9284 15.9737C27.8221 15.8674 27.7624 15.7233 27.7624 15.573V3.9731C27.7607 3.98443 27.738 3.96857 27.7001 3.96857H6.29299C6.2806 3.96782 6.26818 3.96959 6.2565 3.97378C6.24481 3.97797 6.23409 3.98448 6.22499 3.99293L6.23066 15.573C6.23066 15.7233 6.17096 15.8674 6.0647 15.9737C5.95844 16.08 5.81431 16.1397 5.66404 16.1397C5.51376 16.1397 5.36964 16.08 5.26337 15.9737C5.15711 15.8674 5.09741 15.7233 5.09741 15.573V3.96857C5.10631 3.65996 5.23711 3.36744 5.46118 3.15505C5.68526 2.94266 5.98435 2.8277 6.29299 2.83532H27.7001C28.0087 2.8277 28.3078 2.94266 28.5319 3.15505C28.7559 3.36744 28.8867 3.65996 28.8956 3.96857V15.573C28.8956 15.7233 28.8359 15.8674 28.7297 15.9737C28.6234 16.08 28.4793 16.1397 28.329 16.1397Z" />
                      </svg>
                    </div>
                    <div className="content">
                      <span>To Send Mail</span>
                      <h5>
                        <a href="mailto:info@gmail.com">info@gmail.com</a>
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-9 wow animate fadeInRight"
              data-wow-delay="200ms"
              data-wow-duration="1500ms"
            >
              <div className="tab-content" id="v-pills-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="general"
                  role="tabpanel"
                  aria-labelledby="general-tab"
                  tabIndex={0}
                >
                  <div className="faq-wrappper">
                    <div className="faq-content">
                      <div className="accordion" id="accordionGeneral">
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="faqheadingOne">
                            <button
                              className="accordion-button"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#faqcollapseOne"
                              aria-expanded="true"
                              aria-controls="faqcollapseOne"
                            >
                              What is an auction?
                            </button>
                          </h2>
                          <div
                            id="faqcollapseOne"
                            className="accordion-collapse collapse show"
                            aria-labelledby="faqheadingOne"
                            data-bs-parent="#accordionGeneral"
                          >
                            <div className="accordion-body">
                              An auction is a public sale where goods or
                              services are sold to the highest bidder. Bidders
                              compete to offer the highest price, and the item
                              is awarded to the bidder with the highest bid when
                              the auction ends.
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="faqheadingTwo">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#faqcollapseTwo"
                              aria-expanded="false"
                              aria-controls="faqcollapseTwo"
                            >
                              How do auctions work?
                            </button>
                          </h2>
                          <div
                            id="faqcollapseTwo"
                            className="accordion-collapse collapse"
                            aria-labelledby="faqheadingTwo"
                            data-bs-parent="#accordionGeneral"
                          >
                            <div className="accordion-body">
                              Auctions allow items to be sold to the highest
                              bidder. Participants bid on the item until the
                              highest bid is reached within a set timeframe. The
                              highest bidder wins and pays the bid amount.
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="faqheadingThree">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#faqcollapseThree"
                              aria-expanded="false"
                              aria-controls="faqcollapseThree"
                            >
                              What types of auctions are there?
                            </button>
                          </h2>
                          <div
                            id="faqcollapseThree"
                            className="accordion-collapse collapse"
                            aria-labelledby="faqheadingThree"
                            data-bs-parent="#accordionGeneral"
                          >
                            <div className="accordion-body">
                              Types of auctions include English (ascending bid),
                              Dutch (descending bid), sealed-bid (highest bid
                              wins), and Vickrey (sealed-bid, second-highest bid
                              wins). Additionally, there are reverse (lowest bid
                              wins) and silent (secret bids) auctions, catering
                              to various selling dynamics and bidder
                              preferences.
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="faqheadingFour">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#faqcollapseFour"
                              aria-expanded="false"
                              aria-controls="faqcollapseFour"
                            >
                              Who can participate in auctions?
                            </button>
                          </h2>
                          <div
                            id="faqcollapseFour"
                            className="accordion-collapse collapse"
                            aria-labelledby="faqheadingFour"
                            data-bs-parent="#accordionGeneral"
                          >
                            <div className="accordion-body">
                              Anyone meeting auction requirements, typically 18
                              years or older, can participate. Registration may
                              be necessary, depending on the auction platform.
                              Ensure compliance with specific auction rules and
                              regulations.
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="faqheadingFive">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#faqcollapseFive"
                              aria-expanded="false"
                              aria-controls="faqcollapseFive"
                            >
                              What happens if I win an auction?
                            </button>
                          </h2>
                          <div
                            id="faqcollapseFive"
                            className="accordion-collapse collapse"
                            aria-labelledby="faqheadingFive"
                            data-bs-parent="#accordionGeneral"
                          >
                            <div className="accordion-body">
                              If you win an auction, you're obligated to
                              purchase the item at the winning bid price. Follow
                              payment instructions provided by the auction
                              platform. Non-compliance may lead to penalties or
                              account suspension.
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="faqheadingSix">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#faqcollapseSix"
                              aria-expanded="false"
                              aria-controls="faqcollapseSix"
                            >
                              Can I sell items at auctions?
                            </button>
                          </h2>
                          <div
                            id="faqcollapseSix"
                            className="accordion-collapse collapse"
                            aria-labelledby="faqheadingSix"
                            data-bs-parent="#accordionGeneral"
                          >
                            <div className="accordion-body">
                              Yes, you can sell items at auctions. Register with
                              the auction house or platform, provide item
                              details, and agree to the terms, including fees
                              and commissions. This process can help you reach a
                              wide audience and achieve competitive prices.
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="faqheadingSeven">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#faqcollapseSeven"
                              aria-expanded="false"
                              aria-controls="faqcollapseSeven"
                            >
                              Are there risks associate with buying at auctions?
                            </button>
                          </h2>
                          <div
                            id="faqcollapseSeven"
                            className="accordion-collapse collapse"
                            aria-labelledby="faqheadingSeven"
                            data-bs-parent="#accordionGeneral"
                          >
                            <div className="accordion-body">
                              No, buying at auctions can be advantageous. You
                              can find unique items, often at lower prices than
                              retail. Auctions also offer a transparent buying
                              process and the excitement of competitive bidding.
                              With proper research and budgeting, auctions can
                              be a rewarding way to purchase valuable and rare
                              items.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="payment"
                  role="tabpanel"
                  aria-labelledby="payment-tab"
                  tabIndex={0}
                >
                  <div className="faq-wrappper">
                    <div className="faq-content">
                      <div className="accordion" id="accordionPayment">
                        <div className="accordion-item">
                          <h2
                            className="accordion-header"
                            id="faqheadingPaymentOne"
                          >
                            <button
                              className="accordion-button"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#faqcollapsePaymentOne"
                              aria-expanded="true"
                              aria-controls="faqcollapsePaymentOne"
                            >
                              What is an auction?
                            </button>
                          </h2>
                          <div
                            id="faqcollapsePaymentOne"
                            className="accordion-collapse collapse show"
                            aria-labelledby="faqheadingPaymentOne"
                            data-bs-parent="#accordionPayment"
                          >
                            <div className="accordion-body">
                              An auction is a public sale where goods or
                              services are sold to the highest bidder. Bidders
                              compete to offer the highest price, and the item
                              is awarded to the bidder with the highest bid when
                              the auction ends.
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2
                            className="accordion-header"
                            id="faqheadingPaymentTwo"
                          >
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#faqcollapsePaymentTwo"
                              aria-expanded="false"
                              aria-controls="faqcollapsePaymentTwo"
                            >
                              How do auctions work?
                            </button>
                          </h2>
                          <div
                            id="faqcollapsePaymentTwo"
                            className="accordion-collapse collapse"
                            aria-labelledby="faqheadingPaymentTwo"
                            data-bs-parent="#accordionPayment"
                          >
                            <div className="accordion-body">
                              Auctions allow items to be sold to the highest
                              bidder. Participants bid on the item until the
                              highest bid is reached within a set timeframe. The
                              highest bidder wins and pays the bid amount.
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2
                            className="accordion-header"
                            id="faqheadingPaymentThree"
                          >
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#faqcollapsePaymentThree"
                              aria-expanded="false"
                              aria-controls="faqcollapsePaymentThree"
                            >
                              What types of auctions are there?
                            </button>
                          </h2>
                          <div
                            id="faqcollapsePaymentThree"
                            className="accordion-collapse collapse"
                            aria-labelledby="faqheadingPaymentThree"
                            data-bs-parent="#accordionPayment"
                          >
                            <div className="accordion-body">
                              Types of auctions include English (ascending bid),
                              Dutch (descending bid), sealed-bid (highest bid
                              wins), and Vickrey (sealed-bid, second-highest bid
                              wins). Additionally, there are reverse (lowest bid
                              wins) and silent (secret bids) auctions, catering
                              to various selling dynamics and bidder
                              preferences.
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2
                            className="accordion-header"
                            id="faqheadingPaymentFour"
                          >
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#faqcollapsePaymentFour"
                              aria-expanded="false"
                              aria-controls="faqcollapsePaymentFour"
                            >
                              Who can participate in auctions?
                            </button>
                          </h2>
                          <div
                            id="faqcollapsePaymentFour"
                            className="accordion-collapse collapse"
                            aria-labelledby="faqheadingPaymentFour"
                            data-bs-parent="#accordionPayment"
                          >
                            <div className="accordion-body">
                              Anyone meeting auction requirements, typically 18
                              years or older, can participate. Registration may
                              be necessary, depending on the auction platform.
                              Ensure compliance with specific auction rules and
                              regulations.
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2
                            className="accordion-header"
                            id="faqheadingPaymentFive"
                          >
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#faqcollapsePaymentFive"
                              aria-expanded="false"
                              aria-controls="faqcollapsePaymentFive"
                            >
                              What happens if I win an auction?
                            </button>
                          </h2>
                          <div
                            id="faqcollapsePaymentFive"
                            className="accordion-collapse collapse"
                            aria-labelledby="faqheadingPaymentFive"
                            data-bs-parent="#accordionPayment"
                          >
                            <div className="accordion-body">
                              If you win an auction, you're obligated to
                              purchase the item at the winning bid price. Follow
                              payment instructions provided by the auction
                              platform. Non-compliance may lead to penalties or
                              account suspension.
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2
                            className="accordion-header"
                            id="faqheadingPaymentSix"
                          >
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#faqcollapsePaymentSix"
                              aria-expanded="false"
                              aria-controls="faqcollapsePaymentSix"
                            >
                              Can I sell items at auctions?
                            </button>
                          </h2>
                          <div
                            id="faqcollapsePaymentSix"
                            className="accordion-collapse collapse"
                            aria-labelledby="faqheadingPaymentSix"
                            data-bs-parent="#accordionPayment"
                          >
                            <div className="accordion-body">
                              Yes, you can sell items at auctions. Register with
                              the auction house or platform, provide item
                              details, and agree to the terms, including fees
                              and commissions. This process can help you reach a
                              wide audience and achieve competitive prices.
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2
                            className="accordion-header"
                            id="faqheadingPaymentSeven"
                          >
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#faqcollapsePaymentSeven"
                              aria-expanded="false"
                              aria-controls="faqcollapsePaymentSeven"
                            >
                              Are there risks associate with buying at auctions?
                            </button>
                          </h2>
                          <div
                            id="faqcollapsePaymentSeven"
                            className="accordion-collapse collapse"
                            aria-labelledby="faqheadingPaymentSeven"
                            data-bs-parent="#accordionPayment"
                          >
                            <div className="accordion-body">
                              No, buying at auctions can be advantageous. You
                              can find unique items, often at lower prices than
                              retail. Auctions also offer a transparent buying
                              process and the excitement of competitive bidding.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="bidding"
                  role="tabpanel"
                  aria-labelledby="bidding-tab"
                  tabIndex={0}
                >
                  <div className="faq-wrappper">
                    <div className="faq-content">
                      <div className="accordion" id="accordionBidding">
                        <div className="accordion-item">
                          <h2
                            className="accordion-header"
                            id="faqheadingBiddingOne"
                          >
                            <button
                              className="accordion-button"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#faqcollapseBiddingOne"
                              aria-expanded="true"
                              aria-controls="faqcollapseBiddingOne"
                            >
                              What is an auction?
                            </button>
                          </h2>
                          <div
                            id="faqcollapseBiddingOne"
                            className="accordion-collapse collapse show"
                            aria-labelledby="faqheadingBiddingOne"
                            data-bs-parent="#accordionBidding"
                          >
                            <div className="accordion-body">
                              An auction is a public sale where goods or
                              services are sold to the highest bidder. Bidders
                              compete to offer the highest price, and the item
                              is awarded to the bidder with the highest bid when
                              the auction ends.
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2
                            className="accordion-header"
                            id="faqheadingBiddingTwo"
                          >
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#faqcollapseBiddingTwo"
                              aria-expanded="false"
                              aria-controls="faqcollapseBiddingTwo"
                            >
                              How do auctions work?
                            </button>
                          </h2>
                          <div
                            id="faqcollapseBiddingTwo"
                            className="accordion-collapse collapse"
                            aria-labelledby="faqheadingBiddingTwo"
                            data-bs-parent="#accordionBidding"
                          >
                            <div className="accordion-body">
                              Auctions allow items to be sold to the highest
                              bidder. Participants bid on the item until the
                              highest bid is reached within a set timeframe. The
                              highest bidder wins and pays the bid amount.
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2
                            className="accordion-header"
                            id="faqheadingBiddingThree"
                          >
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#faqcollapseBiddingThree"
                              aria-expanded="false"
                              aria-controls="faqcollapseBiddingThree"
                            >
                              What types of auctions are there?
                            </button>
                          </h2>
                          <div
                            id="faqcollapseBiddingThree"
                            className="accordion-collapse collapse"
                            aria-labelledby="faqheadingBiddingThree"
                            data-bs-parent="#accordionBidding"
                          >
                            <div className="accordion-body">
                              Types of auctions include English (ascending bid),
                              Dutch (descending bid), sealed-bid (highest bid
                              wins), and Vickrey (sealed-bid, second-highest bid
                              wins). Additionally, there are reverse (lowest bid
                              wins) and silent (secret bids) auctions, catering
                              to various selling dynamics and bidder
                              preferences.
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2
                            className="accordion-header"
                            id="faqheadingBiddingFour"
                          >
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#faqcollapseBiddingFour"
                              aria-expanded="false"
                              aria-controls="faqcollapseBiddingFour"
                            >
                              Who can participate in auctions?
                            </button>
                          </h2>
                          <div
                            id="faqcollapseBiddingFour"
                            className="accordion-collapse collapse"
                            aria-labelledby="faqheadingBiddingFour"
                            data-bs-parent="#accordionBidding"
                          >
                            <div className="accordion-body">
                              Anyone meeting auction requirements, typically 18
                              years or older, can participate. Registration may
                              be necessary, depending on the auction platform.
                              Ensure compliance with specific auction rules and
                              regulations.
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2
                            className="accordion-header"
                            id="faqheadingBiddingFive"
                          >
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#faqcollapseBiddingFive"
                              aria-expanded="false"
                              aria-controls="faqcollapseBiddingFive"
                            >
                              What happens if I win an auction?
                            </button>
                          </h2>
                          <div
                            id="faqcollapseBiddingFive"
                            className="accordion-collapse collapse"
                            aria-labelledby="faqheadingBiddingFive"
                            data-bs-parent="#accordionBidding"
                          >
                            <div className="accordion-body">
                              If you win an auction, you're obligated to
                              purchase the item at the winning bid price. Follow
                              payment instructions provided by the auction
                              platform. Non-compliance may lead to penalties or
                              account suspension.
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2
                            className="accordion-header"
                            id="faqheadingBiddingSix"
                          >
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#faqcollapseBiddingSix"
                              aria-expanded="false"
                              aria-controls="faqcollapseBiddingSix"
                            >
                              Can I sell items at auctions?
                            </button>
                          </h2>
                          <div
                            id="faqcollapseBiddingSix"
                            className="accordion-collapse collapse"
                            aria-labelledby="faqheadingBiddingSix"
                            data-bs-parent="#accordionBidding"
                          >
                            <div className="accordion-body">
                              Yes, you can sell items at auctions. Register with
                              the auction house or platform, provide item
                              details, and agree to the terms, including fees
                              and commissions. This process can help you reach a
                              wide audience and achieve competitive prices.
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2
                            className="accordion-header"
                            id="faqheadingBiddingSeven"
                          >
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#faqcollapseBiddingSeven"
                              aria-expanded="false"
                              aria-controls="faqcollapseBiddingSeven"
                            >
                              Are there risks associate with buying at auctions?
                            </button>
                          </h2>
                          <div
                            id="faqcollapseBiddingSeven"
                            className="accordion-collapse collapse"
                            aria-labelledby="faqheadingBiddingSeven"
                            data-bs-parent="#accordionBidding"
                          >
                            <div className="accordion-body">
                              No, buying at auctions can be advantageous. You
                              can find unique items, often at lower prices than
                              retail. Auctions also offer a transparent buying
                              process and the excitement of competitive bidding.
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
        </div>
      </div>
      <InnerpageFooter5 />
    </>
  );
};

export default FaqPage;
