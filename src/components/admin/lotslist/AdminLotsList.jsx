"use client";

import AdminSideBar from "../admindashboard/AdminSideBar";
import { useEffect, useState } from "react";
import Loader from "@/components/loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllLots, fetchTotalAuctions } from "@/store/slices/allDataSlice";
import Link from "next/link";
import "./AdminLotsList.css";
import DeleteButton from "@/components/swal-fire-model/DeleteButton";
import { toast } from "react-toastify";

const AdminLotsList = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector(
    (state) => state.tablesData.alllots
  );

  const {
    data: auctionsData
  } = useSelector((state) => state.tablesData.allauctions);
  //console.log("allauction", auctionsData);

  // State for search, sorting, and pagination
  const [search, setSearch] = useState("");
  const [searchAuction, setSearchAuction] = useState("");
  const [sortColumn, setSortColumn] = useState("lot_id");
  const [sortOrder, setSortOrder] = useState("ASC");
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [totalItems, setTotalItems] = useState(0); // Track total items
  const [totalPages, setTotalPages] = useState(1); // Track total pages
  //console.log("lotdata:", data);

  // useEffect(() => {
  //     //call if allLots is empty
  //     if (data.length === 0) {
  //         dispatch(fetchAllLots());
  //     }
  // },[dispatch, data]);

  useEffect(() => {
      dispatch(fetchTotalAuctions());
  
    dispatch(fetchAllLots({ search, sortColumn, sortOrder, page, limit,searchAuction }))
      .then((response) => {
        setTotalItems(response.payload.pagination.totalItems); // Assuming your API sends totalItems
        setTotalPages(
          Math.ceil(response.payload.pagination.totalItems / limit)
        ); // Calculate total pages
      })
      .catch((error) => {
        console.error("Error fetching lots:", error);
      });
  }, [search, sortColumn, sortOrder, page, limit,searchAuction]);

  const handleDelete = async (lotId) => {
    const token = localStorage.getItem("token");

    if (!token) {
      toast.error("Session Expired, Please Login", { position: "top-right" });
      setLoading(false);
      return router.push("/admin");
    }

    try {
      const res = await fetch(`/api/admin/delete-lot/${lotId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (res.ok) {
        const data = await res.json();
        console.log(data.message);
        toast.success(data.message, { position: "top-right" });
        dispatch(fetchAllLots());
      } else {
        const errorData = await res.json();
        console.error("Error:", errorData.message);
        toast.error(errorData.message, { position: "top-right" });
      }
    } catch (error) {
      console.error("Request failed:", error);
      toast.error("Something Went Wrong", { position: "top-right" });
    }
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
    setPage(1); // Reset to the first page on a new search
  };

  const handleSort = (column) => {
    setSortColumn(column);
    setSortOrder(sortOrder === "ASC" ? "DESC" : "ASC");
  };

  const handlePageChange = (newPage) => {
    if (newPage < 1 || newPage > totalPages) return; // Prevent invalid page changes
    setPage(newPage);
  };

  const handleChange = (e) => {
    setPage(1); // Reset to the first page on a new search
    setSearchAuction(e.target.value);
  };

  return (
    <>
      {loading && <Loader />}
      <div className="dashboard-section pt-110 mb-110">
        <div className="container">
          <div className="dashboard-wrapper">
            <AdminSideBar />
            <div className="dashboard-content-wrap">
              <div className="bidding-summary-wrap">
                {/* <div className="auct-header"> */}
                <h6>Lots List</h6>
                <div class="row">
                  <div class="col-4">
                    <div className="input-group mb-3">
                      <input
                        type="text"
                        placeholder="Search by lot name..."
                        value={search}
                        onChange={handleSearch}
                        className="form-control"
                      />
                      <button className="btn btn-primary" type="button">
                        <i className="bi bi-search"></i>{" "}
                        {/* Bootstrap Icons Search */}
                      </button>
                    </div>
                  </div>
                  <div class="col-4">
                    <div className="form-group">
                      <select
                        id="auctionlist"
                        value={searchAuction}
                        onChange={handleChange}
                      >
                        <option value="">Select Auction</option>
                        {auctionsData &&
                        Array.isArray(auctionsData.data) &&
                        auctionsData.data.length > 0 ? (
                          auctionsData.data.map((auction) => (
                            <option
                              key={auction.auct_id}
                              value={auction.auct_code}
                            >
                              {auction.auct_code}
                            </option>
                          ))
                        ) : (
                          <option disabled>No auctions available</option>
                        )}
                      </select>
                    </div>
                  </div>
                  <div class="col-4">
                    <div className="auct-header">
                      <Link href="/admin/add_lots">
                        <button
                          className="btn btn primary"
                          style={{ backgroundColor: "#0d6efd" }}
                        >
                          Add Lot
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
                {/* <Link href='/admin/add_lots'>
                  <button className="btn btn primary" style={{backgroundColor:'#0d6efd'}}>Add Lot</button>
                </Link>
                </div> */}
                <table className="bidding-summary-table">
                  <thead>
                    <tr>
                      <th onClick={() => handleSort("lot_id")}>Lot ID</th>
                      <th>Lot Name</th>
                      <th>Lot Image</th>
                      <th>Auction Code</th>
                      <th onClick={() => handleSort("lot_code")}>Lot Code</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {!loading &&
                      data?.data?.map((lot) => {
                        return (
                          <tr key={lot.lot_id}>
                            <td data-label="Lot ID">{lot.lot_id}</td>
                            <td data-label="Lot Name">{lot.lot_name}</td>
                            <td data-label="Lot Image">
                              <img width="40px" src={`/${lot.lot_img_1}`} />
                            </td>
                            <td data-label="Action Code">{lot.auct_code}</td>
                            <td data-label="Lot Code">{lot.lot_code}</td>
                            <td data-label="Action">
                              <Link href={`/admin/edit-lot/${lot.lot_id}`}>
                                <button className="btn btn-primary">
                                  Edit
                                </button>
                              </Link>
                              &nbsp;
                              <DeleteButton
                                itemId={lot.lot_id}
                                onDelete={handleDelete}
                              />
                            </td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              </div>
              <div className="row pt-40">
                <div className="col-lg-12">
                  <div className="custom-pagination-area">
                    <ul>
                      {/* Pagination buttons */}
                      <li>
                        <button
                          className="custom-page-item"
                          onClick={() => handlePageChange(1)}
                          disabled={page === 1}
                        >
                          &lt;&lt;
                        </button>
                      </li>
                      <li>
                        <button
                          className="custom-page-item"
                          onClick={() => handlePageChange(page - 1)}
                          disabled={page === 1}
                        >
                          &lt; Previous
                        </button>
                      </li>

                      <li>
                        <button className="custom-page-item">{page}</button>
                      </li>

                      <li>
                        <button
                          className="custom-page-item"
                          onClick={() => handlePageChange(page + 1)}
                          disabled={page === totalPages}
                        >
                          Next &gt;
                        </button>
                      </li>
                      <li>
                        <button
                          className="custom-page-item"
                          onClick={() => handlePageChange(totalPages)}
                          disabled={page === totalPages}
                        >
                          &gt;&gt;
                        </button>
                      </li>
                    </ul>
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

export default AdminLotsList;
