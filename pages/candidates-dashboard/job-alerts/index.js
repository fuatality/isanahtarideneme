import dynamic from "next/dynamic";
import Seo from "../../../components/common/Seo";
import JobAlerts from "../../../components/dashboard-pages/candidates-dashboard/job-alerts";
import withAuth from "../../../components/withAuth/withAuth";

const index = () => {
  return (
    <>
      <Seo pageTitle="İlan Uyarıları" />
      <JobAlerts />
    </>
  );
};

const DynamicComponentWithAuth = dynamic(() => Promise.resolve(withAuth(index, 'user')), { ssr: false });

export default DynamicComponentWithAuth;
