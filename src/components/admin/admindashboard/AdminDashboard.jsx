'use client'
import { useEffect } from "react";
import Link from "next/link";
import AdminSideBar from "./AdminSideBar";
import { useDispatch, useSelector } from "react-redux";
import { fetchTotalUsers, fetchTotalLots, fetchTotalBids,fetchTotalAuctions } from "@/store/slices/allDataSlice";

const AdminDashboard = () => {
  const dispatch = useDispatch();

  const totalUsers = useSelector((state) => state.tablesData.totalUsers);
  const totalLots = useSelector((state) => state.tablesData.totalLots);
  const totalBids = useSelector((state) => state.tablesData.totalBids);
  const totalauction = useSelector((state) => state.tablesData.totalAuctions);


  useEffect(() => {
    if (totalUsers === null) {
      dispatch(fetchTotalUsers());
    }
    if (totalLots === null) {
      dispatch(fetchTotalLots());
    }
    if (totalBids === null) {
      dispatch(fetchTotalBids());
    }
    if (totalauction === null) {
      dispatch(fetchTotalAuctions());
    }
  }, [dispatch, totalUsers, totalLots, totalBids,totalauction]);
    
  return (
    <>

      <div className="dashboard-section pt-110 mb-110">
        <div className="container">
          <div className="dashboard-wrapper">
            <AdminSideBar />
            <div className="dashboard-content-wrap">
              <div className="profile-info-wrap">
                {/* <div className="profile-img">
                  <img
                    src="/assets/img/inner-pages/dashboard-profile-img.png"
                    alt=""
                  />
                </div> */}
                <div className="profile-content">
                  <h4>Hi, Admin</h4>
                </div>
              </div>
              <div className="row g-lg-3 gy-4">
              
              <div className="col-lg-4">
                  <div className="single-counter-card" style={{ backgroundColor: '#526e54'}}>
                  <Link href="/admin/auctions" target="blank"><span>Total Auctions</span></Link>
                    <h2>{totalauction ? totalauction : '-'}</h2>
                  </div>
                </div>
                                  
              
               
                <div className="col-lg-4">
                  <div className="single-counter-card">
                  <Link href="/admin/lots" target="blank"><span>Total Lots</span> </Link>
                    <h2>{totalLots ? totalLots : '-'}</h2>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="single-counter-card two">
                    <span>Total Bids</span>
                    <h2>{totalBids ? totalBids : '-'}</h2>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="single-counter-card three">
                  <Link href="/admin/users" target="blank"> <span>Total Users</span> </Link>
                    <h2>{totalUsers ? totalUsers : '-'}</h2>
                  </div>
                </div>
              </div>
              {/* <div className="bidding-summary-wrap">
                <h6>Bidding Summary</h6>
                <table className="bidding-summary-table">
                  <thead>
                    <tr>
                      <th>Auction ID</th>
                      <th>Product name</th>
                      <th>Amount</th>
                      <th>Status</th>
                      <th>Auction Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td data-label="Auction ID">12584885455</td>
                      <td data-label="Product name">Porcelain</td>
                      <td data-label="Amount">$1800</td>
                      <td data-label="Status">
                        <span>Winning</span>
                      </td>
                      <td data-label="Auction Date">June 25, 2024</td>
                    </tr>

                  </tbody>
                </table>
              </div> */}

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
