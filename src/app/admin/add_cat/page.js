import AddCat from "@/components/admin/add-cat/AddCat";
import Breadcrumb1 from "@/components/common/Breadcrumb1";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";

export const metadata = {
  title: "Bhargava Auctions",
  icons: {
    icon: "/assets/img/bh-auction-logo.jpeg",
  },
};
const AdminPage = () => {

  return (
    <div>
      <Header adminLogin={true}/>
      <Breadcrumb1 pagetitle="Admin Add Category" currentPage="Admin Add Category" />
      <AddCat />
      <Footer />
    </div>
  );
};

export default AdminPage;
