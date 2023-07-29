import dynamic from "next/dynamic";
import Seo from "../../../components/common/Seo";
import PostJob from "../../../components/dashboard-pages/employers-dashboard/post-jobs";
import withAuth from "../../../components/withAuth/withAuth";

const index = () => {
  return (
    <>
      <Seo pageTitle="İlan Aç" />
      <PostJob />
    </>
  );
};

const DynamicComponentWithAuth = dynamic(() => Promise.resolve(withAuth(index, 'admin')), { ssr: false });

export default DynamicComponentWithAuth;
