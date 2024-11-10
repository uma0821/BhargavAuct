"use client";

import { useDispatch, useSelector } from "react-redux";
import AdminSideBar from "../admindashboard/AdminSideBar";
import { fetchAllAuctions } from "@/store/slices/allDataSlice";
import { useEffect, useState } from "react";
import Loader from "@/components/loader/Loader";
import "./AdminAuctionList.css";
import Link from "next/link";
import DeleteButton from "@/components/swal-fire-model/DeleteButton";
import { toast } from "react-toastify";

const AdminAuctionList = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector(
    (state) => state.tablesData.allauctions
  );

  // State for search, sorting, and pagination
  const [search, setSearch] = useState("");
  const [sortColumn, setSortColumn] = useState("auct_id");
  const [sortOrder, setSortOrder] = useState("ASC");
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [totalItems, setTotalItems] = useState(0); // Track total items
  const [totalPages, setTotalPages] = useState(1); // Track total pages
  console.log("auctionlistdata:", data);

  // useEffect(() => {
  //     //call if allAuctions is empty
  //     if (data.length === 0) {
  //         dispatch(fetchAllAuctions());
  //     }
  // },[dispatch, data]);

  useEffect(() => {
    dispatch(fetchAllAuctions({ search, sortColumn, sortOrder, page, limit }))
      .then((response) => {
        setTotalItems(response.payload.pagination.totalItems); // Assuming your API sends totalItems
        setTotalPages(
          Math.ceil(response.payload.pagination.totalItems / limit)
        ); // Calculate total pages
      })
      .catch((error) => {
        console.error("Error fetching auctions:", error);
      });
  }, [search, sortColumn, sortOrder, page, limit]);

  const handleDelete = async (auctionId) => {
    const token = localStorage.getItem("token");

    if (!token) {
      toast.error("Session Expired, Please Login", { position: "top-right" });
      setLoading(false);
      return router.push("/admin");
    }

    try {
      const res = await fetch(`/api/admin/delete-auction/${auctionId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (res.ok) {
        const data = await res.json();
        console.log(data.message);
        dispatch(fetchAllAuctions());
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
                <h6>Auctions List</h6>
                <div class="row">
                  <div class="col-4">
                    <div className="input-group mb-3">
                      <input
                        type="text"
                        placeholder="Search by auction name..."
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
                  <div class="col-8">
                    <div className="auct-header">
                      <Link href="/admin/add_auction">
                        <button
                          className="btn btn primary"
                          style={{ backgroundColor: "#0d6efd" }}
                        >
                          Add Auction
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
                {/* <Link href='/admin/add_auction'>
                  <button className="btn btn primary" style={{backgroundColor:'#0d6efd'}}>Add Auction</button>
                </Link>
                </div> */}
                <table className="bidding-summary-table">
                  <thead>
                    <tr>
                      <th onClick={() => handleSort("auct_id")}>Auction ID</th>
                      <th onClick={() => handleSort("auct_name")}>Name</th>
                      <th onClick={() => handleSort("auct_code")}>Code</th>
                      <th onClick={() => handleSort("auct_location")}>
                        Location
                      </th>
                      <th onClick={() => handleSort("auct_status")}>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {!loading &&
                      data?.data?.map((auction) => {
                        return (
                          <tr key={auction.auct_id}>
                            <td data-label="Auction ID">{auction.auct_id}</td>
                            <td data-label="Name">{auction.auct_name}</td>
                            <td data-label="Code">{auction.auct_code}</td>
                            {/* <td data-label="Status">
                                    <span>Winning</span>
                                    </td> */}
                            <td data-label="Location">
                              {auction.auct_location}
                            </td>
                            {auction.auct_status === "CLOSED" ? (
                              <td data-label="Status">
                                {auction.auct_status} -{" "}
                                <Link
                                  href={`/admin/auction-pr/${auction.auct_id}`}
                                  target="blank"
                                >
                                  PR
                                </Link>
                              </td>
                            ) : (
                              <td data-label="PR">{auction.auct_status}</td>
                            )}
                            <td data-label="Auction">
                              <Link
                                href={`/admin/edit-auction/${auction.auct_id}`}
                              >
                                <button className="btn btn-primary">
                                  Edit
                                </button>
                              </Link>
                              &nbsp;
                              <DeleteButton
                                itemId={auction.auct_id}
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

export default AdminAuctionList;
