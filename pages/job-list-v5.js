import dynamic from "next/dynamic";
import Seo from "../components/common/Seo";
import JobList from "../components/job-listing-pages/job-list-v5";

const index = () => {
  return (
    <>
      <Seo pageTitle="İş İlanları" />
      <JobList />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
