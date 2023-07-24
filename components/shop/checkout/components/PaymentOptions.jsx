import Router from "next/router";

const PaymentOptions = () => {
  return (
    <div className="payment-options">
      <ul>
        <li>
          <div className="radio-option radio-box">
            <input
              type="radio"
              name="payment-group"
              id="payment-2"
              defaultChecked
            />
            <label htmlFor="payment-2">
              Hesaba Transfer
              <span className="small-text">
                Ödemenizi doğrudan banka hesabımıza yapın. 
                Lütfen ödeme referansı olarak <strong>Sipariş Numaranızı</strong> kullanın. 
                Paranız hesabımıza geçene kadar siparişiniz aktif olmayacaktır.
              </span>
            </label>
          </div>
        </li>
        {/* End li */}

        {/* End li */}
        <li>
          <div className="radio-option radio-box">
            <input type="radio" name="payment-group" id="payment-4" />
            <label htmlFor="payment-4">
              <strong>Kredi\Banka Kartı</strong>
              <img src="/images/icons/paypal.png" alt="payment" />
            </label>
          </div>
        </li>
      </ul>
      {/* End ul */}

      <div className="btn-box">
        <button
          type="submit"
          className="theme-btn btn-style-one"
          onClick={() => Router.push("/shop/order-completed")}
        >
          Siparişi Onayla
        </button>
      </div>
    </div>
  );
};

export default PaymentOptions;
