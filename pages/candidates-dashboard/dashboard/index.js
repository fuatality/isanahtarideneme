import dynamic from "next/dynamic";
import Seo from "../../../components/common/Seo";
import DashboadHome from "../../../components/dashboard-pages/candidates-dashboard/dashboard";
import withAuth from "../../../components/withAuth/withAuth";

const index = () => {
    return (
        <>
            <Seo pageTitle="Aday Paneli" />
            <DashboadHome />
        </>
    );
};

const DynamicComponentWithAuth = dynamic(() => Promise.resolve(withAuth(index, 'user')), { ssr: false });

export default DynamicComponentWithAuth;
