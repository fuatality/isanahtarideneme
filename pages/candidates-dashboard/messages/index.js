import dynamic from "next/dynamic";
import Seo from "../../../components/common/Seo";
import Messages from "../../../components/dashboard-pages/candidates-dashboard/messages";
import withAuth from "../../../components/withAuth/withAuth";

const index = () => {
  return (
    <>
      <Seo pageTitle="Messages" />
      <Messages />
    </>
  );
};

const DynamicComponentWithAuth = dynamic(() => Promise.resolve(withAuth(index, 'user')), { ssr: false });

export default DynamicComponentWithAuth;