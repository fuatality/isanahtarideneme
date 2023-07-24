import dynamic from "next/dynamic";
import Seo from "../components/common/Seo";
import Terms from "../components/pages-menu/terms";

const index = () => {
  return (
    <>
      <Seo pageTitle="Koşullar" />
      <Terms />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
