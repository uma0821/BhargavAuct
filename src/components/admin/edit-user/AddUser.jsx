"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import Loader from "@/components/loader/Loader";
import "./AddUser.css";
import AdminSideBar from "../admindashboard/AdminSideBar";
import { useDispatch, useSelector } from "react-redux";
import { fetUserDetails } from "@/store/slices/userSlices";
import { fetchAllUsers } from "@/store/slices/allDataSlice";

const AddUser = ({ userId }) => {
  //console.log("userid" , userId);
  const router = useRouter();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    mobile: "",
    address: "",
    bid_limit:100000,
    state: "",
    pincode: "",
    profilePic: null,
    handlename: "",
    user_status: "",
  });
  const { singleUserDetail: userDetail } = useSelector((state) => state.user); // user detail

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false); // Loader state

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(fetUserDetails(userId));
    };

    if (userId) {
      setLoading(true);
      if (!userDetail) {
        fetchData();
      } else {
        setFormData({
          name: userDetail?.name,
          email: userDetail?.email,
          mobile: userDetail?.mobile,
          address: userDetail?.address,
          bid_limit: userDetail?.bid_limit,
          state: userDetail?.state,
          pincode: userDetail?.pincode,
          profilePic: null,
          handlename: userDetail?.handlename,
          user_status: userDetail?.user_status,
        });
        setLoading(false);
      }
    }
  }, [userId, userDetail]);

  const validate = () => {
    let formErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      formErrors.name = "*Name is required";
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      formErrors.email = "*Email is required";
    } else if (!emailPattern.test(formData.email)) {
      formErrors.email = "*Invalid email format";
    }

    // Password validation
    // const passwordPattern =
    //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+[\]{};':"\\|,.<>/?]).{6,}$/;
    // if (!formData.password) {
    //   formErrors.password = "*Password is required";
    // } else if (!passwordPattern.test(formData.password)) {
    //   formErrors.password =
    //     "*Password must be at least 6 characters, include an uppercase letter, a lowercase letter, a number, and a special character.";
    // }

    // Mobile validation
    const mobilePattern = /^[0-9]{10}$/;
    if (!formData.mobile) {
      formErrors.mobile = "*Mobile number is required";
    } else if (!mobilePattern.test(formData.mobile)) {
      formErrors.mobile = "*Mobile number should be 10 digits";
    }

    // Address validation
    if (!formData.address.trim()) {
      formErrors.address = "*Address is required";
    }

    // Bid limit validation
    if (!formData.bid_limit) {
      formErrors.bid_limit = "*Bid limit is required";
    }

    // State validation
    if (!formData.state.trim()) {
      formErrors.state = "*State is required";
    }

    // Pincode validation
    const pincodePattern = /^[0-9]{6}$/;
    if (!formData.pincode) {
      formErrors.pincode = "*Pincode is required";
    } else if (!pincodePattern.test(formData.pincode)) {
      formErrors.pincode = "*Pincode should be 6 digits";
    }

    // Profile pic validation
    let imageReg = /(\.jpg|\.jpeg|\.bmp|\.gif|\.png)$/i;
    if (!formData.profilePic) {
      formErrors.profilePic = "*Profile picture is required";
    } else if (!imageReg.exec(formData.profilePic.name)) {
      formErrors.profilePic = "*Only Images allowed";
    }

    if (!formData.handlename.trim()) {
      formErrors.handlename = "*Handle Name is required";
    }

    console.log("=====formErrors====>", formErrors);
    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  // running on onchange of input fields
  const handleChange = (e) => {
    let { name, value, files } = e.target;

    setFormData((prevState) => ({
      ...prevState,
      [name]: files ? files[0] : value,
    }));
    Object.keys(errors).forEach((inputName) => {
      if (inputName === name && value !== "") {
        delete errors[inputName];
      }
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      setLoading(true);

      const token = localStorage.getItem("token");

      if (!token) {
        toast.error("Session Expired, Please Login", { position: "top-right" });
        setLoading(false);
        return router.push("/admin");
      }

      try {
        const formDataToSend = new FormData();
        Object.keys(formData).forEach((key) => {
          formDataToSend.append(key, formData[key]);
        });

        const response = await fetch("/api/admin/edit-user", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: formDataToSend,
        });

        if (response.status === 401) {
          // Token is expired or invalid
          console.log("Token expired");
          localStorage.removeItem("token"); // Remove the expired token
          return router.push("/admin");
        }

        const data = await response.json();
        if (response.ok) {
          setFormData({
            name: "",
            email: "",
            // password: "",
            mobile: "",
            address: "",
            bid_limit:100000,
            state: "",
            pincode: "",
            profilePic: null,
            handlename: "",
            user_status: "",
          });
          setErrors({});
          toast.success("user updated Successsfully", {
            position: "top-right",
          });
          dispatch(fetchAllUsers());
          router.push("/admin/dashboard");
        } else {
          toast.error(data.error, { position: "top-right" });
        }
      } catch (error) {
        console.error("Error during User add:", error);
        toast.error("User Add failed", { position: "top-right" });
      } finally {
        setLoading(false); // stop loader
      }
    } else {
      console.log("Form validation failed");
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    if (validate()) {
      setLoading(true);

      const token = localStorage.getItem("token");

      if (!token) {
        toast.error("Session Expired, Please Login", { position: "top-right" });
        setLoading(false);
        return router.push("/admin");
      }

      try {
        const formDataToSend = new FormData();
        Object.keys(formData).forEach((key) => {
          formDataToSend.append(key, formData[key]);
        });

        const response = await fetch(`/api/admin/update-user/${userId}`, {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: formDataToSend,
        });

        if (response.status === 401) {
          // Token is expired or invalid
          console.log("Token expired");
          localStorage.removeItem("token"); // Remove the expired token
          return router.push("/admin");
        }

        const data = await response.json();

        if (response.ok) {
          setFormData({
            name: "",
            email: "",
            // password: "",
            mobile: "",
            address: "",
            bid_limit:100000,
            state: "",
            pincode: "",
            profilePic: null,
            handlename: "",
            user_status: "",
          });
          setErrors({});
          toast.success("User updated Successsfully", {
            position: "top-right",
          });
          router.push("/admin/users");
        } else {
          toast.error(data.error, { position: "top-right" });
        }
      } catch (error) {
        console.error("Error during User update:", error);
        toast.error("User Update failed", { position: "top-right" });
      } finally {
        setLoading(false); // stop loader
      }
    } else {
      console.log("form validation failed");
    }
  };

  const handleSelect = (e) => {
    console.log("=====e=====val==>", e.target.value);
  };

  return (
    <>
      <div className="dashboard-section pt-110 mb-110">
        <div className="container">
          <div className="dashboard-wrapper">
            <AdminSideBar />
            <div className="dashboard-content-wrap">
              <div className="bidding-summary-wrap auct_form_wrap">
                <div className="form-container">
                  <h2>User Form</h2>
                  <form
                    onSubmit={userId ? handleUpdate : handleSubmit}
                    encType="multipart/form-data"
                  >
                    <div className="form-group">
                      <label htmlFor="name">Name:</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                      />
                      {errors.name && <p className="error">{errors.name}</p>}
                    </div>

                    <div className="form-group">
                      <label htmlFor="email">Email:</label>
                      <input
                        type="text"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                      {errors.email && <p className="error">{errors.email}</p>}
                    </div>

                    {/* <div className="form-group">
                      <label htmlFor="password">Password:</label>
                      <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                      />
                      {errors.password && (
                        <p className="error">{errors.password}</p>
                      )}
                    </div> */}

                    <div className="form-group">
                      <label htmlFor="mobile">Mobile:</label>
                      <input
                        type="tel"
                        id="mobile"
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleChange}
                      />
                      {errors.mobile && (
                        <p className="error">{errors.mobile}</p>
                      )}
                    </div>

                    <div className="form-group">
                      <label htmlFor="address">Address:</label>
                      <input
                        type="text"
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                      />
                      {errors.address && (
                        <p className="error">{errors.address}</p>
                      )}
                    </div>
                    <div className="form-group">
                      <label htmlFor="address">Limit:</label>
                      <input
                        type="number"
                        id="limitId"
                        name="bid_limit"
                        min="100000"
                        max=""
                        value={formData.bid_limit}
                        onChange={handleChange}
                      />
                      {errors.bid_limit && (
                        <p className="error">{errors.bid_limit}</p>
                      )}
                    </div>

                    <div className="form-group row">
                      <div className="col">
                        <label htmlFor="state">State:</label>
                        <input
                          type="text"
                          id="state"
                          name="state"
                          value={formData.state}
                          onChange={handleChange}
                        />
                        {errors.state && (
                          <p className="error">{errors.state}</p>
                        )}
                      </div>

                      <div className="col">
                        <label htmlFor="pincode">Pincode:</label>
                        <input
                          type="text"
                          id="pincode"
                          name="pincode"
                          value={formData.pincode}
                          onChange={handleChange}
                        />
                        {errors.pincode && (
                          <p className="error">{errors.pincode}</p>
                        )}
                      </div>
                    </div>

                    <div className="form-group">
                      <label htmlFor="profilePic">Profile Pic:</label>
                      <input
                        type="file"
                        id="profilePic"
                        name="profilePic"
                        onChange={handleChange}
                      />
                      {errors.profilePic && (
                        <p className="error">{errors.profilePic}</p>
                      )}
                    </div>

                    <div className="form-group">
                      <label htmlFor="handlename">Handle Name:</label>
                      <input
                        type="text"
                        id="handlename"
                        name="handlename"
                        value={formData.handlename}
                        onChange={handleChange}
                      />
                      {errors.handlename && (
                        <p className="error">{errors.handlename}</p>
                      )}
                    </div>

                    <div className="form-group">
                      <label htmlFor="user_status">User Status</label>
                      <select
                        onClick={handleSelect}
                        value={formData.user_status}
                        name="user_status"
                        id="user_status"
                        onChange={handleChange}
                      >
                        <option value="">Select Status</option>
                        <option value="1">Active</option>
                        <option value="0">Deactive</option>
                      </select>
                      {errors.user_status && (
                        <p className="error">{errors.user_status}</p>
                      )}
                    </div>

                    <button type="submit" className="submit-btn">
                      {userId ? "Update User" : "Add User"}
                    </button>
                    <Loader isLoading={loading} />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddUser;
