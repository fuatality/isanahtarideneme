import dynamic from "next/dynamic";
import Seo from "../../../components/common/Seo";
import ShortListedJobs from "../../../components/dashboard-pages/candidates-dashboard/short-listed-jobs";
import withAuth from "../../../components/withAuth/withAuth";

const index = () => {
  return (
    <>
      <Seo pageTitle="Kısa Liste" />
      <ShortListedJobs />
    </>
  );
};

const DynamicComponentWithAuth = dynamic(() => Promise.resolve(withAuth(index, 'user')), { ssr: false });

export default DynamicComponentWithAuth;
