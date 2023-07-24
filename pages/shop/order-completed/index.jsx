import dynamic from "next/dynamic";
import Seo from "../../..//components/common/Seo";
import OrderCompleted from "../../../components/shop/order-completed";

const index = () => {
  return (
    <>
      <Seo pageTitle="Sipariş Tamamlandı!" />
      <OrderCompleted />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
