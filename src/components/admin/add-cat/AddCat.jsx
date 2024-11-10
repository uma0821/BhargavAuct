"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import Loader from "@/components/loader/Loader";
import "./AddCat.css";
import AdminSideBar from "../admindashboard/AdminSideBar";
import { useDispatch, useSelector } from "react-redux";
import { fetchCatDetails} from "@/store/slices/categorySlices";

const AddCat = ({CatId}) => {
  console.log("====Id=====>", CatId);
  const router = useRouter();
  const [formData, setFormData] = useState({
    cat_name: ""
  });

  const dispatch = useDispatch();
  const { catDetails: CatData } = useSelector((state) => state.category); // category details
    //const { data: categoryData, error: categoryError, loading: categoryLoading} = useSelector((state) => (state.tablesData.allcategories));
    useEffect(() => {

        const fetchData = async () => {
          await dispatch(fetchCatDetails(CatId));
          setLoading(false);
        };
    
        if (CatId) {
          setLoading(true);
          if(!CatData) {
            fetchData();
          }
          console.log("====CatData=====>", CatData);
          if(CatData) {
            setFormData({
              cat_name: CatData?.cat_name
            });
            setLoading(false)
          }
        }


    },[dispatch, CatId]);

    // console.log("====data====>", data);
    // console.log("====categoryData====>", categoryData);
    // console.log("====materialData====>", materialData);


  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false); // Loader state
  const validate = () => {
    let formErrors = {};
    // Category name validation
    if (!formData.cat_name.trim()) {
        formErrors.cat_name = "*Category name is required";
    }
    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };
 
  // running on onchange of input fields
  const handleChange = async(e) => {
    const {name, value} = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]:value,
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

        const response = await fetch("/api/admin/add-cat", {
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
            cat_name: ""
          });
          setErrors({});
          toast.success("Category added Successsfully", {
            position: "top-right",
          });
          router.push('/admin/dashboard');
        } else {
          toast.error(data.error, { position: "top-right" });
        }
      } catch (error) {
        console.error("Error during category add:", error);
        toast.error("Category Add failed", { position: "top-right" });
      } finally {
        setLoading(false); // stop loader
      }
    } else {
      console.log("Form validation failed");
    }
  };

  const handleSelect = (e) => {
    console.log("=====e=====val==>", e.target.value)
  }

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

          const response = await fetch(`/api/admin/update-cat/${CatId}`, {
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
              cat_name: ""
            });
            setErrors({});
            toast.success("Category Updated Successsfully", {
              position: "top-right",
            });
            router.push('/admin/dashboard');
          } else {
            toast.error(data.error, { position: "top-right" });
          }
        } catch (error) {
          console.error("Error during Category add:", error);
          toast.error("Category Update failed", { position: "top-right" });
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
                  <h2>Category Form</h2>
                  <form onSubmit={CatId ? handleUpdate : handleSubmit}>
                    <div className="form-group">
                      <label htmlFor="cat_name">Category:</label>
                      <input
                        type="text"
                        id="cat_name"
                        name="cat_name"
                        value={formData.cat_name}
                        onChange={handleChange}
                      />
                      {errors.cat_name && (
                        <p className="error">{errors.cat_name}</p>
                      )}
                    </div>
                    <button type="submit" className="submit-btn">
                      {CatId ? 'Update Category' : 'Add Category'}
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

export default AddCat;
