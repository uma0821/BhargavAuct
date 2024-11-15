import AddAuction from "@/components/admin/add-auction/AddAuction";
import AddLot from "@/components/admin/add-lots/AddLot";
import AdminAuctionList from "@/components/admin/auctionslist/AdminAuctionList";
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
      <Breadcrumb1 pagetitle="Admin Add Lots" currentPage="Admin Add Lots" />
      <AddLot />
      <Footer />
    </div>
  );
};

export default AdminPage;
