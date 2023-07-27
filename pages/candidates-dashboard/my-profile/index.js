import dynamic from "next/dynamic";
import Seo from "../../../components/common/Seo";
import MyProfile from "../../../components/dashboard-pages/candidates-dashboard/my-profile";
import withAuth from "../../../components/withAuth/withAuth";

const index = () => {
  return (
    <>
      <Seo pageTitle="My Profile" />
      <MyProfile />
    </>
  );
};

const DynamicComponentWithAuth = dynamic(() => Promise.resolve(withAuth(index, 'user')), { ssr: false });

export default DynamicComponentWithAuth;
