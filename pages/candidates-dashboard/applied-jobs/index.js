import dynamic from "next/dynamic";
import Seo from "../../../components/common/Seo";
import AppliedJobs from "../../../components/dashboard-pages/candidates-dashboard/applied-jobs";
import withAuth from "../../../components/withAuth/withAuth";

const index = () => {
  return (
    <>
      <Seo pageTitle="Başvurduğum İş İlanları" />
      <AppliedJobs />
    </>
  );
};

const DynamicComponentWithAuth = dynamic(() => Promise.resolve(withAuth(index, 'user')), { ssr: false });

export default DynamicComponentWithAuth;