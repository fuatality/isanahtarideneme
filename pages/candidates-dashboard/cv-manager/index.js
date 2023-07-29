import dynamic from "next/dynamic";
import Seo from "../../../components/common/Seo";
import CvManager from "../../../components/dashboard-pages/candidates-dashboard/cv-manager";
import withAuth from "../../../components/withAuth/withAuth";

const index = () => {
  return (
    <>
      <Seo pageTitle="CV" />
      <CvManager />
    </>
  );
};

const DynamicComponentWithAuth = dynamic(() => Promise.resolve(withAuth(index, 'user')), { ssr: false });

export default DynamicComponentWithAuth;
