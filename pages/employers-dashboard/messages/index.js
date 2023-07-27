import dynamic from "next/dynamic";
import Seo from "../../../components/common/Seo";
import Messages from "../../../components/dashboard-pages/employers-dashboard/messages";
import withAuth from "../../../components/withAuth/withAuth";

const index = () => {
  return (
    <>
      <Seo pageTitle="Messages" />
      <Messages />
    </>
  );
};

const DynamicComponentWithAuth = dynamic(() => Promise.resolve(withAuth(index, 'admin')), { ssr: false });

export default DynamicComponentWithAuth;
