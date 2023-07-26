import dynamic from "next/dynamic";
import Seo from "../components/common/Seo";
import BlogList from "../components/blog-meu-pages/blog-list-v1";

const index = () => {
  return (
    <>
      <Seo pageTitle="Kariyer Fuarı" />
      <BlogList />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
