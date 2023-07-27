import dynamic from "next/dynamic";
import Seo from "../../../components/common/Seo";
import ManageJobs from "../../../components/dashboard-pages/employers-dashboard/manage-jobs";
import withAuth from "../../../components/withAuth/withAuth";

const index = () => {
  return (
    <>
      <Seo pageTitle="Manage Jobs" />
      <ManageJobs />
    </>
  );
};

const DynamicComponentWithAuth = dynamic(() => Promise.resolve(withAuth(index, 'admin')), { ssr: false });

export default DynamicComponentWithAuth;
