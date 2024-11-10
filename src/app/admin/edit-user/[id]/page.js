import AdminUsersList from "@/components/admin/userslist/AdminUsersList";
import Breadcrumb1 from "@/components/common/Breadcrumb1";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import { Add } from "@mui/icons-material";
import AddUser from "@/components/admin/edit-user/AddUser";

export const metadata = {
  title: "Bhargava Auctions",
  icons: {
    icon: "/assets/img/bh-auction-logo.jpeg",
  },
};

const AdminUserEditPage = ({params}) => {
const { id } = params;
  
  return (
    <div>
      <Header adminLogin={true}/>
      <Breadcrumb1 pagetitle="Admin Edit User" currentPage="Admin Edit User" />
      <AddUser userId={id} />
      <Footer />
    </div>
  );
};

export default AdminUserEditPage;
