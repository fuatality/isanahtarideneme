const BillingDetails = () => {
  return (
    <div className="default-form">
      <div className="row">
        {/* <!--Form Group--> */}
        <div className="form-group col-lg-6 col-md-12 col-sm-12">
          <div className="field-label">
            Adınız <sup>*</sup>
          </div>
          <input type="text" name="field-name" placeholder="Ad" />
        </div>

        {/* <!--Form Group--> */}
        <div className="form-group col-lg-6 col-md-12 col-sm-12">
          <div className="field-label">
            Soyadınız <sup>*</sup>
          </div>
          <input type="text" name="field-name" placeholder="Soyad" />
        </div>

        {/* <!--Form Group--> */}
        <div className="form-group col-lg-12 col-md-12 col-sm-12">
          <div className="field-label">Şirket Adı</div>
          <input type="text" name="field-name" placeholder="Şirket" />
        </div>

        {/* <!--Form Group--> */}
        <div className="form-group col-lg-12 col-md-12 col-sm-12">
          <div className="field-label">
            Ülke <sup>*</sup>
          </div>
          <select
            name="billing_country"
            className="select2 sortby-select form-select"
            autoComplete="country"
          >
            <option>Select a country&hellip;</option>
            <option value="AX">&#197;land Islands</option>
            <option value="AF">Afghanistan</option>
            <option value="AL">Albania</option>
            <option value="DZ">Algeria</option>
            <option value="AS">American Samoa</option>
            <option value="AD">Andorra</option>
            <option value="AO">Angola</option>
            <option value="AI">Anguilla</option>
            <option value="AQ">Antarctica</option>
            <option value="AG">Antigua and Barbuda</option>
            <option value="AR">Argentina</option>
          </select>
        </div>

        {/* <!--Form Group--> */}
        <div className="form-group col-lg-12 col-md-12 col-sm-12">
          <div className="field-label">
            Adres <sup>*</sup>
          </div>
          <input
            type="text"
            name="field-name"
            placeholder="Mahalle, Sokak, Apartman Adı..."
          />
          <input
            type="text"
            name="field-name"
            placeholder="(optional)"
          />
        </div>

        {/* <!--Form Group--> */}
        <div className="form-group col-lg-6 col-md-12 col-sm-12">
          <div className="field-label">
            İlçe <sup>*</sup>
          </div>
          <input type="text" name="field-name" placeholder="İlçe" required="" />
        </div>

        {/* <!--Form Group--> */}
        <div className="form-group col-lg-6 col-md-12 col-sm-12">
          <div className="field-label">
            İl <sup>*</sup>
          </div>
          <input type="text" name="field-name" placeholder="İl" required="" />
        </div>

        {/* <!--Form Group--> */}
        <div className="form-group col-lg-6 col-md-12 col-sm-12">
          <div className="field-label">
            Posta Kodu <sup>*</sup>
          </div>
          <input type="text" name="field-name" placeholder="Posta Kodu" required="" />
        </div>

        {/* <!--Form Group--> */}
        <div className="form-group col-lg-6 col-md-12 col-sm-12">
          <div className="field-label">Telefon Numarası</div>
          <input type="text" name="field-name" placeholder="+123456789" />
        </div>

        {/* <!--Form Group--> */}
        <div className="form-group col-lg-12 col-md-12 col-sm-12">
          <div className="field-label">E-mail Adresi</div>
          <input type="text" name="field-name" placeholder="E-mail" />
        </div>

        {/* <!--Form Group--> */}
        <div className="form-group col-lg-12 col-md-12 col-sm-12">
          <h3 className="title">Ek Bilgiler</h3>
          <div className="field-label">Sipariş Notu (optional)</div>
          <textarea
            className=""
            placeholder="Ek Bilgileri Yaz"
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default BillingDetails;
