import OrderInfo from "./OrderInfo";
import OrderTable from "./OrderTable";

const index = () => {
  return (
    <>
      <div className="upper-box">
        <span className="icon fa fa-check"></span>
        <h4>Siparişiniz tamamlandı!</h4>
        <div className="text">Siparişiniz tarafımıza ulaşmıştır. Teşekkür ederiz.</div>
      </div>
      {/* End upper-box */}

      <OrderInfo />
      {/* <!--Order Box--> */}

      <div className="order-box">
        <h3>Sipariş Detayları</h3>
        <OrderTable />
      </div>

      {/* <!--End Order Box--> */}
    </>
  );
};

export default index;
