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
const EditCatPage = ({params}) => {
    const { id } = params;
  return (
    <div>

      <Header adminLogin={true}/>
      <Breadcrumb1 pagetitle="Admin Edit Cat" currentPage="Admin Edit Cat" />
      <AddCat CatId={id}/>
      <Footer />
    </div>
  );
};

export default EditCatPage;
