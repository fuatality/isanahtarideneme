import MobileMenu from "../../../header/MobileMenu";
import DashboardHeader from "../../../header/DashboardHeader";
import DashboardEmployerSidebar from "../../../header/DashboardEmployerSidebar";
import BreadCrumb from "../../BreadCrumb";
import CopyrightFooter from "../../CopyrightFooter";
import CompanyList from "./components/CompanyList"; // Import the component to display companies
import MenuToggler from "../../MenuToggler";

const ManageCompanies = () => {
  return (
    <div className="page-wrapper dashboard">
      <span className="header-span"></span>
      <DashboardHeader />
      <MobileMenu />
      <DashboardEmployerSidebar />
      <section className="user-dashboard">
        <div className="dashboard-outer">
          <BreadCrumb title="Şirketleri Düzenle" />
          <MenuToggler />
          <div className="row">
            <div className="col-lg-12">
              <CompanyList /> {/* Component to render the list of companies */}
            </div>
          </div>
        </div>
      </section>
      <CopyrightFooter />
    </div>
  );
};

export default ManageCompanies;
