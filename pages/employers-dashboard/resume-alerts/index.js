import dynamic from "next/dynamic";
import Seo from "../../../components/common/Seo";
import ResumeAlerts from "../../../components/dashboard-pages/employers-dashboard/resume-alerts";
import withAuth from "../../../components/withAuth/withAuth";

const index = () => {
  return (
    <>
      <Seo pageTitle="Özgeçmiş Bildirimleri" />
      <ResumeAlerts />
    </>
  );
};

const DynamicComponentWithAuth = dynamic(() => Promise.resolve(withAuth(index, 'admin')), { ssr: false });

export default DynamicComponentWithAuth;
