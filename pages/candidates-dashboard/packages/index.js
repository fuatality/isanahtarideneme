import dynamic from "next/dynamic";
import Seo from "../../../components/common/Seo";
import Packages from "../../../components/dashboard-pages/candidates-dashboard/packages";
import withAuth from "../../../components/withAuth/withAuth";

const index = () => {
  return (
    <>
      <Seo pageTitle="Paketlerim" />
      <Packages />
    </>
  );
};

const DynamicComponentWithAuth = dynamic(() => Promise.resolve(withAuth(index, 'user')), { ssr: false });

export default DynamicComponentWithAuth;
