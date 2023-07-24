const OrderInfo = () => {
  return (
    <ul className="order-info">
      <li>
        <span>Sipariş Numarası</span>
        <strong>13119</strong>
      </li>

      <li>
        <span>Tarih</span>
        <strong>27/07/2021</strong>
      </li>

      <li>
        <span>Toplam</span>
        <strong>$40.10</strong>
      </li>

      <li>
        <span>Ödeme Yöntemi</span>
        <strong>Hesaba Transfer</strong>
      </li>
    </ul>
  );
};

export default OrderInfo;
