const OrderDetails = () => {
  return (
    <div className="order-box">
      <h3>Siparişiniz</h3>
      <table>
        <thead>
          <tr>
            <th>
              <strong>Ürün</strong>
            </th>
            <th>
              <strong>Ara Toplam</strong>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="cart-item">
            <td className="product-name">Hoodie x2</td>
            <td className="product-total">59.00</td>
          </tr>

          <tr className="cart-item">
            <td className="product-name">Seo Books x 1</td>
            <td className="product-total">67.00</td>
          </tr>
        </tbody>
        <tfoot>
          <tr className="cart-subtotal">
            <td>Ara Toplam</td>
            <td>
              <span className="amount">$178.00</span>
            </td>
          </tr>
          <tr className="cart-subtotal">
            <td>Kargo</td>
            <td>
              <span className="amount">$178.00</span>
            </td>
          </tr>
          <tr className="order-total">
            <td>Toplam</td>
            <td>
              <span className="amount">$9,218.00</span>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default OrderDetails;
