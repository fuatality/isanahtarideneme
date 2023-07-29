import dynamic from "next/dynamic";
import Seo from "../../../components/common/Seo";
import CompanyProfile from "../../../components/dashboard-pages/employers-dashboard/company-profile";
import withAuth from "../../../components/withAuth/withAuth";

const index = () => {
  return (
    <>
      <Seo pageTitle="Şirket Profili" />
      <CompanyProfile />
    </>
  );
};

const DynamicComponentWithAuth = dynamic(() => Promise.resolve(withAuth(index, 'admin')), { ssr: false });

export default DynamicComponentWithAuth;
