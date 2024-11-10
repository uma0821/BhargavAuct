"use client";

import { useDispatch, useSelector } from "react-redux";
import AdminSideBar from "../admindashboard/AdminSideBar";
import { useEffect, useState } from "react";
import { fetchAllUsers } from "@/store/slices/allDataSlice";
import Shimmer from "@/components/shimmer-ui/Shimmer";
import Loader from "@/components/loader/Loader";
import Link from "next/link";

const AdminUsersList = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector(
    (state) => state.tablesData.allusers
  );

  // State for search, sorting, and pagination
  const [search, setSearch] = useState("");
  const [sortColumn, setSortColumn] = useState("id");
  const [sortOrder, setSortOrder] = useState("ASC");
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [totalItems, setTotalItems] = useState(0); // Track total items
  const [totalPages, setTotalPages] = useState(1); // Track total pages
  console.log("userdata", data);

  useEffect(() => {
    dispatch(fetchAllUsers({ search, sortColumn, sortOrder, page, limit }))
      .then((response) => {
        //console.log("djfd",response.payload.pagination.totalItems);
        // Update total items and pages after fetching data
        setTotalItems(response.payload.pagination.totalItems); // Assuming your API sends totalItems
        setTotalPages(
          Math.ceil(response.payload.pagination.totalItems / limit)
        ); // Calculate total pages
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  }, [search, sortColumn, sortOrder, page, limit]);

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
                <h6>Users List</h6>
                {/* Search Input */}
                <div class="row">
                  <div class="col-4">
                    <div className="input-group mb-3">
                      <input
                        type="text"
                        placeholder="Search by name..."
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
                </div>
                <table className="bidding-summary-table">
                  <thead>
                    <tr>
                      {/* <th>ID</th>
                      <th>Handle Name</th>
                      <th>Name</th>
                      <th>E-Mail</th>
                      <th>Address</th>
                      <th>Bid Limit</th>
                      <th>Status</th>
                      <th>Action</th> */}
                      <th onClick={() => handleSort("id")}>ID</th>
                      <th onClick={() => handleSort("handlename")}>
                        Handle Name
                      </th>
                      <th onClick={() => handleSort("name")}>Name</th>
                      <th onClick={() => handleSort("email")}>E-Mail</th>
                      <th onClick={() => handleSort("address")}>Address</th>
                      <th onClick={() => handleSort("bid_limit")}>Bid Limit</th>
                      <th onClick={() => handleSort("user_status")}>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {!loading &&
                      data?.data?.map((user) => {
                        return (
                          <tr key={user.id}>
                            <td data-label="ID">{user.id}</td>
                            <td data-label="Name">{user.handlename}</td>
                            <td data-label="Name">{user.name}</td>
                            <td data-label="E-Mail">{user.email}</td>
                            {/* <td data-label="Status">
                                                <span>Winning</span>
                                            </td> */}
                            <td data-label="Address">{user.address}</td>
                            <td data-label="Address">{user.bid_limit}</td>
                            <td data-label="status">
                              {user.user_status == 1 ? "Active" : "Deactive"}
                            </td>
                            <td data-label="Action">
                              <Link href={`/admin/edit-user/${user.id}`}>
                                <button className="btn btn-primary">
                                  Edit
                                </button>
                              </Link>
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

export default AdminUsersList;
