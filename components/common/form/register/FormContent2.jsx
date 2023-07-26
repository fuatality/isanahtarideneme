const FormContent2 = () => {
    
  return (
    <formComp method="post" action="add-parcel.html">

      {/* name */}
      <div className="form-group">
        <label>Firma Adı</label>
        <input type="text" name="name" placeholder="Firma Adı" required />
      </div>

      <div className="form-group">
      <label>Sektör</label>
          <select className="chosen-single form-select" required>
            
          </select>
      </div>    
      

      {/* phone number */}
      <div className="form-group">
      <label>İl</label>
          <select className="chosen-single form-select" required>
            
          </select>
      </div>

      {/* date */}
      <div className="form-group">
      <label>İlçe</label>
          <select className="chosen-single form-select" required>
            
          </select>
      </div>

      {/* password */}
      <div className="form-group">
      <label>Vergi Dairesi</label>
          <select className="chosen-single form-select" required>
            
          </select>
      </div>

      <div className="form-group">
        <label>Vergi Numarası</label>
        <input type="text" name="name" placeholder="Vergi Numarası" required />
      </div>

      {/* password confirmation */}
      <div className="form-group">
        <label>Adres</label>
        <input type="address" name="name" placeholder="Adres" required />
      </div>

      {/* file upload */}
      <div className="form-group">
        <label>Yetkili Adı Soyadı</label>
        <input type="text" name="name" placeholder="Ad Soyad" required />
      </div>

      <div className="form-group">
        <label>Telefon Numarası</label>
        <input type="tel" name="name" placeholder="Telefon Numarası" required />
      </div>

      <div className="form-group">
        <label>E-mail Adresi</label>
        <input type="email" name="name" placeholder="E-mail Adresi" required />
      </div>

      <div className="form-group">
          <label>Şifre</label>
          <input
            id="password-field"
            type="password"
            name="password"
            placeholder="****"
          />
      </div>

      <div className="form-group">
          <label>Şifre (tekrar)</label>
          <input
            id="password-field"
            type="password"
            name="password"
            placeholder="****"
          />
      </div>

      {/* checkboxes */}
      <div className="form-group">
        <label>
          <input type="checkbox" name="dataProcessingConsent" required />
          Verilerimin Açık Rıza Metni’nde belirtilen şekilde işlenmesine onay veriyorum.
        </label>
        <label>
          <input type="checkbox" name="communicationConsent" required />
          İletişim bilgilerime e-ileti gönderilmesine izin veriyorum.
        </label>
        <label>
          <input type="checkbox" name="termsConsent" required />
          Kullanım Koşulları'nı okudum, onaylıyorum.
        </label>
      </div>

      {/* registration */}
      <div className="form-group">
        <button className="theme-btn btn-style-one" type="submit">
          Kaydol
        </button>
      </div>

    </formComp>
  );
};
  export default FormContent2;
  