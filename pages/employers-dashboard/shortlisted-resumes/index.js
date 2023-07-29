import dynamic from "next/dynamic";
import Seo from "../../../components/common/Seo";
import ShortlistedResumes from "../../../components/dashboard-pages/employers-dashboard/shortlisted-resumes";
import withAuth from "../../../components/withAuth/withAuth";

const index = () => {
  return (
    <>
      <Seo pageTitle="Kısa Liste Adaylar" />
      <ShortlistedResumes />
    </>
  );
};

const DynamicComponentWithAuth = dynamic(() => Promise.resolve(withAuth(index, 'admin')), { ssr: false });

export default DynamicComponentWithAuth;
