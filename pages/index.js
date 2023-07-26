import dynamic from "next/dynamic";
import Seo from "../components/common/Seo";
import Home from "../components/home";

const index = () => {
    return (
        <>
            <Seo pageTitle="İş Anahtarı" />
            <Home />
        </>
    );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
