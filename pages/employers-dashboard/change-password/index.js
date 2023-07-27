import dynamic from "next/dynamic";
import Seo from "../../../components/common/Seo";
import ChangePassword from "../../../components/dashboard-pages/employers-dashboard/change-password";
import withAuth from "../../../components/withAuth/withAuth";

const index = () => {
  return (
    <>
      <Seo pageTitle="Change Password" />
      <ChangePassword />
    </>
  );
};

const DynamicComponentWithAuth = dynamic(() => Promise.resolve(withAuth(index, 'admin')), { ssr: false });

export default DynamicComponentWithAuth;
