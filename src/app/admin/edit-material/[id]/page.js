import AddMaterial from "@/components/admin/add-material/AddMaterial";
import Breadcrumb1 from "@/components/common/Breadcrumb1";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";

export const metadata = {
  title: "Bhargava Auctions",
  icons: {
    icon: "/assets/img/bh-auction-logo.jpeg",
  },
};
const EditMaterialPage = ({params}) => {
    const { id } = params;
  return (
    <div>

      <Header adminLogin={true}/>
      <Breadcrumb1 pagetitle="Admin Edit Material" currentPage="Admin Edit Material" />
      <AddMaterial MatId={id}/>
      <Footer />
    </div>
  );
};

export default EditMaterialPage;
