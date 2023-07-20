import dynamic from "next/dynamic";
import Seo from "../components/common/Seo";
import About from "../components/pages-menu/about";

const index = () => {
  return (
    <>
      <Seo pageTitle="İş Anahtarı" />
      <About />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
