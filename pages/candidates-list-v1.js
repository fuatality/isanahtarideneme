import dynamic from "next/dynamic";
import Seo from "../components/common/Seo";
import CandidatesListV1 from "../components/candidates-listing-pages/candidates-list-v1";

const index = () => {
    return (
        <>
            <Seo pageTitle="Aday Listesi" />
            <CandidatesListV1 />
        </>
    );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
