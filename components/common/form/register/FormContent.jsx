const FormContent = () => {
  return (
    <formUser method="post" action="add-parcel.html">

      {/* name */}
      <div className="form-group">
        <label>Ad Soyad</label>
        <input type="text" name="fullname" placeholder="Ad Soyad" required />
      </div>

      {/* email */}
      <div className="form-group">
        <label>E-mail Adresi</label>
        <input type="email" name="username" placeholder="E-mail Adresi" required />
      </div>

      {/* phone number */}
      <div className="form-group">
        <label>Telefon Numarası</label>
        <input type="tel" name="phone" placeholder="Telefon Numarası" required />
      </div>

      {/* date */}
      <div className="form-group">
        <label>Doğum Tarihi</label>
        <input type="date" name="birthdate" placeholder="GG.AA.YYYY" required />
      </div>

      {/* password */}
      <div className="form-group">
        <label>Şifre Oluştur</label>
        <input id="password-field" type="password" name="password" placeholder="Şifre Oluştur" required />
      </div>

      {/* password confirmation */}
      <div className="form-group">
        <label>Şifrenizi tekrar giriniz</label>
        <input type="password" name="passwordConfirmation" placeholder="Şifrenizi tekrar giriniz" required />
      </div>

      {/* file upload */}
      <div className="form-group">
        <label>CV'ni Yükle</label>
        <input type="file" name="documents" accept=".pdf,.jpeg,.doc,.docx" required />
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

    </formUser>
  );
};

export default FormContent;
