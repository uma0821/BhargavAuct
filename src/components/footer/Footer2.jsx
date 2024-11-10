import Link from 'next/link'
import React from 'react'
export const metadata = {
  icons: {
    icon: "/assets/img/fav-icon.svg",
  },
}
const Footer2 = () => {
  return (
    <>
      <footer className="style-2">
        <div className="home2-footer-top-area">
          <div className="container">
            <div className="footer-top-wrapper">
              <div className="footer-top-content">
                <h2 className="wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">Now Here? <span>Start your Auction</span> Bid Now.</h2>
                <div className="button-grp wow animate fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                  <Link className="primary-btn btn-hover black-bg two" href="/art-auction/how-to-buy">
                    How To Bid
                    <svg width={11} height={11} viewBox="0 0 11 11" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M10.0266 9.33856L0.689022 0.000487831L-3.01181e-08 0.68951L9.33807 10.0271L2.88172 10.0271L2.88172 11.001L11.0005 11.001L11.0005 2.88221L10.0266 2.88221L10.0266 9.33856Z" />
                    </svg>
                    <span style={{ top: '19.3125px', left: '-14.7969px' }} />
                  </Link>
                  <Link className="primary-btn btn-hover two" href="/art-auction/how-to-sell">
                    How To Sell
                    <svg width={11} height={11} viewBox="0 0 11 11" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M10.0266 9.33856L0.689022 0.000487831L-3.01181e-08 0.68951L9.33807 10.0271L2.88172 10.0271L2.88172 11.001L11.0005 11.001L11.0005 2.88221L10.0266 2.88221L10.0266 9.33856Z" />
                    </svg>
                    <span style={{ top: '19.3125px', left: '-14.7969px' }} />
                  </Link>
                  <svg className="arrow" width={324} height={172} viewBox="0 0 324 172" xmlns="http://www.w3.org/2000/svg">
                    <path d="M322.798 50.631C324.138 48.0082 323.099 44.7953 320.476 43.4549C317.853 42.1145 314.64 43.1542 313.3 45.777C311.959 48.3999 312.999 51.6128 315.622 52.9532C318.245 54.2936 321.458 53.2539 322.798 50.631ZM152.919 91.9357L152.524 92.8545L152.531 92.8574L152.538 92.8602L152.919 91.9357ZM151.813 1.90097L151.673 0.910864L151.665 0.912063L151.813 1.90097ZM145.482 153.985L145.957 154.865L145.988 154.848L146.017 154.829L145.482 153.985ZM1.63829 142.467C1.08605 142.474 0.644074 142.927 0.651094 143.48L0.765661 152.479C0.772695 153.031 1.22607 153.473 1.77831 153.466C2.33055 153.459 2.77253 153.006 2.76549 152.454L2.66366 144.454L10.663 144.352C11.2153 144.345 11.6572 143.892 11.6502 143.34C11.6432 142.787 11.1898 142.345 10.6376 142.353L1.63829 142.467ZM317.426 47.4213C316.062 48.5064 314.608 49.6285 313.069 50.7803L314.267 52.3815C315.821 51.2186 317.291 50.0845 318.671 48.9867L317.426 47.4213ZM304.018 57.2112C301.101 59.1842 297.994 61.1976 294.721 63.2206L295.773 64.9219C299.069 62.8845 302.199 60.8562 305.138 58.8678L304.018 57.2112ZM285.18 68.8622C282.035 70.6399 278.777 72.4025 275.423 74.1289L276.338 75.9072C279.717 74.1685 282.997 72.3934 286.164 70.6033L285.18 68.8622ZM265.464 79.0016C262.148 80.5406 258.759 82.0293 255.312 83.4504L256.074 85.2995C259.549 83.8668 262.964 82.3664 266.306 80.8158L265.464 79.0016ZM244.973 87.4331C241.507 88.6735 237.998 89.8328 234.457 90.8949L235.032 92.8105C238.608 91.7379 242.15 90.5676 245.647 89.3161L244.973 87.4331ZM223.771 93.7686C220.173 94.6217 216.557 95.3608 212.934 95.9699L213.266 97.9422C216.935 97.3254 220.595 96.5773 224.232 95.7146L223.771 93.7686ZM201.979 97.3975C198.295 97.7335 194.617 97.9181 190.957 97.9345L190.966 99.9345C194.687 99.9178 198.422 99.7301 202.161 99.3892L201.979 97.3975ZM179.947 97.4527C176.281 97.1069 172.648 96.5699 169.061 95.8243L168.654 97.7824C172.317 98.5439 176.024 99.0915 179.759 99.4438L179.947 97.4527ZM158.449 92.9427C156.718 92.3556 155.001 91.7125 153.3 91.0112L152.538 92.8602C154.279 93.578 156.036 94.2361 157.807 94.8367L158.449 92.9427ZM153.314 91.0168C151.713 90.3294 150.17 89.6065 148.685 88.8509L147.778 90.6337C149.303 91.4091 150.885 92.1503 152.524 92.8545L153.314 91.0168ZM139.943 83.5952C137.05 81.5482 134.454 79.3563 132.143 77.0534L130.731 78.47C133.124 80.854 135.806 83.1177 138.787 85.2277L139.943 83.5952ZM125.654 69.2637C123.688 66.3803 122.083 63.3959 120.826 60.361L118.979 61.1262C120.288 64.2891 121.958 67.3946 124.002 70.3907L125.654 69.2637ZM117.993 50.6599C117.399 47.2768 117.204 43.8954 117.387 40.5817L115.39 40.4712C115.198 43.9383 115.403 47.4727 116.023 51.0056L117.993 50.6599ZM119.133 30.648C120.116 27.4089 121.49 24.3173 123.232 21.4475L121.523 20.4094C119.691 23.4254 118.25 26.6711 117.219 30.0673L119.133 30.648ZM129.524 13.5976C131.906 11.3154 134.616 9.30894 137.637 7.64609L136.672 5.89404C133.498 7.64137 130.647 9.75163 128.141 12.1535L129.524 13.5976ZM146.992 3.91659C148.59 3.49167 150.247 3.14735 151.962 2.8899L151.665 0.912063C149.878 1.18031 148.148 1.53952 146.478 1.98375L146.992 3.91659ZM151.954 2.89106C153.693 2.64428 155.537 2.60947 157.46 2.78003L157.637 0.787864C155.579 0.605323 153.58 0.640251 151.673 0.910898L151.954 2.89106ZM168.289 5.59664C171.588 6.97044 174.936 8.80803 178.215 11.0652L179.349 9.41773C175.965 7.08874 172.496 5.18208 169.058 3.75031L168.289 5.59664ZM186.962 18.2841C189.61 20.8713 192.124 23.7388 194.429 26.855L196.037 25.6656C193.668 22.4624 191.084 19.5144 188.36 16.8534L186.962 18.2841ZM200.433 36.5067C202.14 39.8261 203.603 43.3337 204.763 47.0042L206.67 46.4016C205.475 42.6193 203.968 39.0074 202.211 35.5919L200.433 36.5067ZM207.222 58.0786C207.701 61.7411 207.872 65.5234 207.687 69.4059L209.685 69.501C209.875 65.498 209.699 61.5971 209.205 57.8193L207.222 58.0786ZM206.174 80.6486C205.383 84.2184 204.281 87.8538 202.835 91.5414L204.697 92.2715C206.18 88.4892 207.312 84.7544 208.126 81.0812L206.174 80.6486ZM197.968 101.798C196.186 104.992 194.135 108.216 191.794 111.46L193.416 112.63C195.8 109.326 197.893 106.037 199.715 102.773L197.968 101.798ZM184.687 120.34C182.272 123.084 179.64 125.837 176.779 128.595L178.168 130.035C181.065 127.241 183.735 124.449 186.189 121.662L184.687 120.34ZM168.251 136.25C165.427 138.618 162.427 140.985 159.243 143.35L160.436 144.955C163.65 142.569 166.681 140.177 169.536 137.782L168.251 136.25ZM149.857 149.949C148.259 151.014 146.623 152.078 144.947 153.14L146.017 154.829C147.706 153.759 149.356 152.687 150.966 151.613L149.857 149.949ZM145.007 153.105C143.607 153.86 141.986 154.667 140.165 155.502L140.998 157.32C142.854 156.47 144.514 155.644 145.957 154.865L145.007 153.105ZM130.11 159.59C126.925 160.744 123.451 161.885 119.739 162.961L120.297 164.882C124.051 163.793 127.566 162.639 130.791 161.47L130.11 159.59ZM109.2 165.668C105.757 166.44 102.179 167.134 98.4951 167.72L98.809 169.695C102.536 169.102 106.156 168.4 109.638 167.619L109.2 165.668ZM87.6893 169.073C84.1257 169.398 80.4974 169.605 76.8279 169.671L76.8639 171.67C80.5847 171.603 84.2616 171.394 87.8705 171.065L87.6893 169.073ZM65.9585 169.437C62.3673 169.212 58.7598 168.836 55.157 168.285L54.855 170.263C58.5201 170.822 62.1868 171.205 65.8338 171.433L65.9585 169.437ZM44.5216 166.129C41.0424 165.239 37.5875 164.166 34.1758 162.889L33.4748 164.762C36.957 166.066 40.4808 167.16 44.0263 168.066L44.5216 166.129ZM24.2649 158.518C21.095 156.893 17.9816 155.064 14.9414 153.012L13.8227 154.67C16.9308 156.767 20.1133 158.638 23.3526 160.298L24.2649 158.518ZM6.34334 146.423C4.99183 145.252 3.65982 144.029 2.34906 142.751L0.952971 144.183C2.29181 145.488 3.65271 146.738 5.03386 147.935L6.34334 146.423Z" />
                  </svg>
                </div>
              </div>
              <div className="footer-top-img">
                <img src="/assets/img/home2/footer-top-img.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="footer-wrapper">
          <div className="container">
            <div className="footer-menu-wrap">
              <div className="row g-lg-4 gy-5">
                <div className="col-lg-2 col-sm-6">
                  <div className="footer-widget">
                    <div className="widget-title">
                      <h4>Category</h4>
                    </div>
                    <div className="menu-container">
                      <ul className="widget-list">
                        <li><Link href="/car-auction/auction-grid">Mercedes</Link></li>
                        <li><Link href="/car-auction/auction-grid">Toyota Camry</Link></li>
                        <li><Link href="/car-auction/auction-grid">BMW</Link></li>
                        <li><Link href="/car-auction/auction-grid">Tesla</Link></li>
                        <li><Link href="/car-auction/auction-grid">Hyundai</Link></li>
                        <li><Link href="/car-auction/auction-grid">Nissan Rogue</Link></li>
                        <li><Link href="/car-auction/auction-grid">Rolls Royce</Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2 col-sm-6">
                  <div className="footer-widget">
                    <div className="widget-title">
                      <h4>Company</h4>
                    </div>
                    <div className="menu-container">
                      <ul className="widget-list">
                        <li><Link href="/car-auction/how-to-buy">How to bid with us</Link></li>
                        <li><Link href="/car-auction/how-to-sell">How to sell with us</Link></li>
                        <li><Link href="/car-auction/about">About us</Link></li>
                        <li><Link href="/car-auction/faq">F.A.Q</Link></li>
                        <li><a href="#">Our Brand</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6 d-flex align-items-center justify-content-lg-center justify-content-start">
                  <div className="footer-logo-area">
                    <div className="footer-logo">
                      <img src="/assets/img/footer-logo-white.svg" alt="" />
                    </div>
                    <div className="social-area">
                      <h5>Social Just You Connected Us!</h5>
                      <p>All of update in social</p>
                      <ul className="social-list">
                        <li>
                          <a href="https://www.linkedin.com/">
                            <i className="bi bi-linkedin" />
                            <span>LinkedIn</span>
                          </a>
                        </li>
                        <li>
                          <a href="https://www.facebook.com/">
                            <i className="bi bi-facebook" />
                            <span>Facebook</span>
                          </a>
                        </li>
                        <li>
                          <a href="https://twitter.com/">
                            <i className="bi bi-twitter-x" />
                            <span>Twitter</span>
                          </a>
                        </li>
                        <li>
                          <a href="https://www.instagram.com/">
                            <i className="bi bi-instagram" />
                            <span>Instagram</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6 d-flex justify-content-sm-end justify-content-start">
                  <div className="newletter-and-payment-wrap">
                    <div className="newletter-area">
                      <h4>Join Our Newsletter &amp; More information.</h4>
                      <form>
                        <div className="form-inner">
                          <input type="email" placeholder="Email Address" />
                          <button type="submit"><i className="bi bi-arrow-right" /></button>
                        </div>
                      </form>
                    </div>
                    <div className="payment-area">
                      <h6>Secured Payment Gateways</h6>
                      <ul className="payment-options">
                        <li><img src="/assets/img/home1/icon/visa.svg" alt="" /></li>
                        <li><img src="/assets/img/home1/icon/master-card.svg" alt="" /></li>
                        <li><img src="/assets/img/home1/icon/american-express.svg" alt="" /></li>
                        <li><img src="/assets/img/home1/icon/maestro.svg" alt="" /></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-bottom">
              <div className="copyright-area">
                <p>©Copyright 2024 <Link href="/">Probid</Link> | Design By <a href="https://www.egenslab.com/">Egens Lab</a></p>
              </div>
              <div className="footer-bottom-right">
                <ul>
                  <li><Link href="/car-auction/support-center">Support Center</Link></li>
                  <li><Link href="/car-auction/terms-condition">Terms &amp; Conditions</Link></li>
                  <li><Link href="/car-auction/privacy-policy">Privacy Policy</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>

    </>
  )
}

export default Footer2
