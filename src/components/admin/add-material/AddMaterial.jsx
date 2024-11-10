"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import Loader from "@/components/loader/Loader";
import "./AddMaterial.css";
import AdminSideBar from "../admindashboard/AdminSideBar";
import { useDispatch, useSelector } from "react-redux";
import { fetchMaterialDetails } from "@/store/slices/materialSlices";

const AddMaterial = ({MatId}) => {
  console.log("====MatId=====>", MatId);
  const router = useRouter();
  const [formData, setFormData] = useState({
    mat_name: "",
    applied_tax: "",
    is_active: "Y"
  });

    const dispatch = useDispatch();
    const { matDetails: MatData } = useSelector((state) => state.material); // material details
    useEffect(() => {
        
        const fetchData = async () => {
          await dispatch(fetchMaterialDetails(MatId));
          setLoading(false);
        };
    
        if (MatId) {
          setLoading(true);
          if(!MatData) {
            fetchData();
          }
          if(MatData) {
            setFormData({
              mat_name: MatData?.mat_name,
              applied_tax: MatData?.applied_tax
            });
            setLoading(false)
          }
        }

    },[MatData, MatId]);

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false); // Loader state

  const validate = () => {
    let formErrors = {};
    
    if (!formData.mat_name.trim()) {
        formErrors.mat_name = "*Material Name is required";
    }

    
    if (!formData.applied_tax) {
        formErrors.applied_tax = "*Tax is required";
    }

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  // running on onchange of input fields
  const handleChange = async(e) => {
    const { name, value } = e.target;
    
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
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

        const response = await fetch("/api/admin/add-material", {
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
            mat_name: "",
            applied_tax: "",
            is_active: "Y"
          });
          setErrors({});
          toast.success("Material added Successsfully", {
            position: "top-right",
          });
          router.push('/admin/dashboard');
        } else {
          toast.error(data.error, { position: "top-right" });
        }
      } catch (error) {
        console.error("Error during Material add:", error);
        toast.error("Material Add failed", { position: "top-right" });
      } finally {
        setLoading(false); // stop loader
      }
    } else {
      console.log("Form validation failed");
    }
  };


  const handleUpdate = async(e) => {
    console.log("handleupdate")
    e.preventDefault();
    if(validate()) {
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

          const response = await fetch(`/api/admin/update-material/${MatId}`, {
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
              mat_name: "",
              applied_tax: "",
              is_active: ""
            });
            setErrors({});
            toast.success("Material Updated Successsfully", {
              position: "top-right",
            });
            router.push('/admin/dashboard');
          } else {
            toast.error(data.error, { position: "top-right" });
          }
        } catch (error) {
          console.error("Error during Material add:", error);
          toast.error("Material Update failed", { position: "top-right" });
        } finally {
          setLoading(false); // stop loader
        }
    } else {
      console.log("form is not validated");
    }
  }

  return (
    <>
      {/* {auctionLoading || materialLoading || categoryLoading && <Loader />} */}
      <div className="dashboard-section pt-110 mb-110">
        <div className="container">
          <div className="dashboard-wrapper">
            <AdminSideBar />
            <div className="dashboard-content-wrap">
              <div className="bidding-summary-wrap auct_form_wrap">
                <div className="form-container">
                  <h2>Material Form</h2>
                  <form onSubmit={MatId ? handleUpdate : handleSubmit}>
                    <div className="form-group">
                      <label htmlFor="mat_name">Material Name:</label>
                      <input
                        type="text"
                        id="mat_name"
                        name="mat_name"
                        value={formData.mat_name}
                        onChange={handleChange}
                      />
                      {errors.mat_name && (
                        <p className="error">{errors.mat_name}</p>
                      )}
                    </div>
                    <div className="form-group">
                      <label htmlFor="applied_tax">Tax %:</label>
                      <input
                        type="number"
                        id="applied_tax"
                        name="applied_tax"
                        step="0.01" 
                        value={formData.applied_tax}
                        onChange={handleChange}
                      />
                      {errors.applied_tax && (
                        <p className="error">{errors.applied_tax}</p>
                      )}
                    </div>

                    <button type="submit" className="submit-btn">
                      {MatId ? 'Update Material' : 'Add Material'}
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

export default AddMaterial;
