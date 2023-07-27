import { useState } from "react";

const FormContent = () => {
  const [fullname, setFullname] = useState("");
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [documents, setDocuments] = useState(null);
  const [dataProcessingConsent, setDataProcessingConsent] = useState(false);
  const [communicationConsent, setCommunicationConsent] = useState(false);
  const [termsConsent, setTermsConsent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('fullname', fullname);
    formData.append('username', username);
    formData.append('phone', phone);
    formData.append('birthdate', birthdate);
    formData.append('password', password);
    formData.append('passwordConfirmation', passwordConfirmation);
    formData.append('documents', documents);
    formData.append('dataProcessingConsent', dataProcessingConsent);
    formData.append('communicationConsent', communicationConsent);
    formData.append('termsConsent', termsConsent);

    const response = await fetch("/api/register", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (response.ok) {
      // TODO: Handle successful registration
      console.log(data);
    } else {
      // TODO: Handle error
      console.log(data.error);
    }
  };

  const handleFileChange = (e) => {
    setDocuments(e.target.files[0]);
  };

  // Render the form
  return (
    <form onSubmit={handleSubmit} encType="multipart/form-data">

      {/* name */}
      <div className="form-group">
        <label>Ad Soyad</label>
        <input type="text" name="fullname" placeholder="Ad Soyad" required onChange={(e) => setFullname(e.target.value)} />
      </div>

      {/* email */}
      <div className="form-group">
        <label>E-mail Adresi</label>
        <input type="email" name="username" placeholder="E-mail Adresi" required onChange={(e) => setUsername(e.target.value)} />
      </div>

      {/* phone number */}
      <div className="form-group">
        <label>Telefon Numarası</label>
        <input type="tel" name="phone" placeholder="Telefon Numarası" required onChange={(e) => setPhone(e.target.value)} />
      </div>

      {/* date */}
      <div className="form-group">
        <label>Doğum Tarihi</label>
        <input type="date" name="birthdate" placeholder="GG.AA.YYYY" required onChange={(e) => setBirthdate(e.target.value)} />
      </div>

      {/* password */}
      <div className="form-group">
        <label>Şifre Oluştur</label>
        <input id="password-field" type="password" name="password" placeholder="Şifre Oluştur" required onChange={(e) => setPassword(e.target.value)} />
      </div>

      {/* password confirmation */}
      <div className="form-group">
        <label>Şifrenizi tekrar giriniz</label>
        <input type="password" name="passwordConfirmation" placeholder="Şifrenizi tekrar giriniz" required onChange={(e) => setPasswordConfirmation(e.target.value)} />
      </div>

      {/* file upload */}
      <div className="form-group">
        <label>CV'ni Yükle</label>
        <input type="file" name="documents" accept=".pdf,.jpeg,.doc,.docx" required onChange={handleFileChange} />
      </div>

      {/* checkboxes */}
      <div className="form-group">
        <label>
          <input type="checkbox" name="dataProcessingConsent" required onChange={(e) => setDataProcessingConsent(e.target.checked)} />
          Verilerimin Açık Rıza Metni’nde belirtilen şekilde işlenmesine onay veriyorum.
        </label>
        <label>
          <input type="checkbox" name="communicationConsent" required onChange={(e) => setCommunicationConsent(e.target.checked)} />
          İletişim bilgilerime e-ileti gönderilmesine izin veriyorum.
        </label>
        <label>
          <input type="checkbox" name="termsConsent" required onChange={(e) => setTermsConsent(e.target.checked)} />
          Kullanım Koşulları'nı okudum, onaylıyorum.
        </label>
      </div>

      {/* registration */}
      <div className="form-group">
        <button className="theme-btn btn-style-one" type="submit">
          Kaydol
        </button>
      </div>

    </form>
  );
};

export default FormContent;
