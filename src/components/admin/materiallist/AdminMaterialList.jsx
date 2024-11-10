"use client";

import AdminSideBar from "../admindashboard/AdminSideBar";
import { useEffect, useState } from "react";
import Loader from "@/components/loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllMaterials } from "@/store/slices/allDataSlice";
import Link from "next/link";
import DeleteButton from "@/components/swal-fire-model/DeleteButton";
import { toast } from "react-toastify";

const AdminMaterialList = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector(
    (state) => state.tablesData.allmaterials
  );

  // State for search, sorting, and pagination
  const [search, setSearch] = useState("");
  const [sortColumn, setSortColumn] = useState("mat_id");
  const [sortOrder, setSortOrder] = useState("ASC");
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [totalItems, setTotalItems] = useState(0); // Track total items
  const [totalPages, setTotalPages] = useState(1); // Track total pages
  console.log("materialdata:", data);

  // useEffect(() => {
  //     //call if allMaterial is empty
  //     if (data.length === 0) {
  //         dispatch(fetchAllMaterials());
  //     }
  // },[dispatch, data]);

  useEffect(() => {
    dispatch(fetchAllMaterials({ search, sortColumn, sortOrder, page, limit }))
      .then((response) => {
        setTotalItems(response.payload.pagination.totalItems); // Assuming your API sends totalItems
        setTotalPages(
          Math.ceil(response.payload.pagination.totalItems / limit)
        ); // Calculate total pages
      })
      .catch((error) => {
        console.error("Error fetching material:", error);
      });
  }, [search, sortColumn, sortOrder, page, limit]);

  const handleDelete = async (matId) => {
    const token = localStorage.getItem("token");

    if (!token) {
      toast.error("Session Expired, Please Login", { position: "top-right" });
      setLoading(false);
      return router.push("/admin");
    }

    try {
      const res = await fetch(`/api/admin/delete-mat/${matId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (res.ok) {
        const data = await res.json();
        console.log(data.message);
        toast.success(data.message, { position: "top-right" });
        dispatch(fetchAllMategories());
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
                <h6>Material List</h6>
                <div class="row">
                  <div class="col-4">
                    <div className="input-group mb-3">
                      <input
                        type="text"
                        placeholder="Search by material name..."
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
                      <Link href="/admin/add_material">
                        <button
                          className="btn btn primary"
                          style={{ backgroundColor: "#0d6efd" }}
                        >
                          Add Material
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
                <table className="bidding-summary-table">
                  <thead>
                    <tr>
                      <th onClick={() => handleSort("mat_id")}>Material ID</th>
                      <th onClick={() => handleSort("mat_name")}>
                        Material Name
                      </th>
                      <th onClick={() => handleSort("applied_tax")}>Tax</th>
                      <th>isActive</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {!loading &&
                      data?.data?.map((material) => {
                        return (
                          <tr key={material.mat_id}>
                            <td data-label="Material ID">{material.mat_id}</td>
                            <td data-label="Material Name">
                              {material.mat_name}
                            </td>
                            <td data-label="Tax">{material.applied_tax}%</td>
                            <td data-label="isActive">{material.is_active}</td>
                            <td data-label="Action">
                              <Link
                                href={`/admin/edit-material/${material.mat_id}`}
                              >
                                <button className="btn btn-primary">
                                  Edit
                                </button>
                              </Link>
                              &nbsp;
                              <DeleteButton
                                itemId={material.mat_id}
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

export default AdminMaterialList;
