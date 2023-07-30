import { useState } from "react";
import axios from "axios";
import Cookies from 'js-cookie';
import { useDispatch } from 'react-redux';
import { setRole } from "../../../../features/user/userSlice";
import { useRouter } from 'next/router';

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
  const router = useRouter();
  const dispatch = useDispatch();

  // Error states
  const [fullnameError, setFullnameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passwordConfirmationError, setPasswordConfirmationError] = useState("");
  const [fileError, setFileError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Clear previous errors
    setFullnameError("");
    setEmailError("");
    setPhoneError("");
    setPasswordError("");
    setPasswordConfirmationError("");
    setFileError("");

    // Full name validation
    if (fullname.trim().length === 0) {
      setFullnameError("Full name cannot be empty");
      return;
    }

    // Email validation
    const emailPattern = /^[^@]+@[^@]+\.[^@]+$/;
    if (!emailPattern.test(username)) {
      setEmailError("Invalid email format");
      return;
    }

    // Phone number validation (optional)
    const phonePattern = /^[0-9]{10}$/; // Example pattern for 10-digit phone number
    if (!phonePattern.test(phone)) {
      setPhoneError("Invalid phone number");
      return;
    }

    // Password validation
    if (password.trim().length < 8) {
      setPasswordError("Password must be at least 8 characters long");
      return;
    }

    // Password confirmation validation
    if (password !== passwordConfirmation) {
      setPasswordConfirmationError("Passwords do not match");
      return;
    }

    // File validation (optional)
    if (documents && !['.pdf', '.jpeg', '.doc', '.docx'].includes(documents.name.split('.').pop())) {
      setFileError("Invalid file type");
      return;
    }

    // Form data preparation
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

    try {
      const response = await axios.post("/api/register", formData);
      const data = response.data;
      const token = data.token;
      const userRole = data.userRole; // Extract the user role from the response data
      Cookies.set('jwt', token);
      Cookies.set('userRole', userRole); // Save the user's role in a cookie

      dispatch(setRole(userRole));

      // Handle successful registration
      console.log(data);
      
      router.push('/candidates-dashboard/dashboard');
    } catch (error) {
      // Handle error
      console.log(error);
    }
  };

  const handleFileChange = (e) => {
    setDocuments(e.target.files[0]);
  };

  return (
    <form onSubmit={handleSubmit} encType="multipart/form-data">
      {/* name */}
      <div className="form-group">
        <label>Ad Soyad</label>
        <input type="text" name="fullname" placeholder="Ad Soyad" required onChange={(e) => setFullname(e.target.value)} />
        {fullnameError && <div className="error">{fullnameError}</div>}
      </div>

      {/* email */}
      <div className="form-group">
        <label>E-mail Adresi</label>
        <input type="email" name="username" placeholder="E-mail Adresi" required onChange={(e) => setUsername(e.target.value)} />
        {emailError && <div className="error">{emailError}</div>}
      </div>

      {/* phone number */}
      <div className="form-group">
        <label>Telefon Numarası</label>
        <input type="tel" name="phone" placeholder="Telefon Numarası" required onChange={(e) => setPhone(e.target.value)} />
        {phoneError && <div className="error">{phoneError}</div>}
      </div>

      {/* date */}
      <div className="form-group">
        <label>Doğum Tarihi</label>
        <input type="date" name="birthdate" placeholder="GG.AA.YYYY" required onChange={(e) => setBirthdate(e.target.value)} />
      </div>

      {/* password */}
      <div className="form-group">
        <label>Şifre Oluştur</label>
        <input type="password" name="password" placeholder="Şifre Oluştur" required onChange={(e) => setPassword(e.target.value)} />
        {passwordError && <div className="error">{passwordError}</div>}
      </div>

      {/* password confirmation */}
      <div className="form-group">
        <label>Şifrenizi tekrar giriniz</label>
        <input type="password" name="passwordConfirmation" placeholder="Şifrenizi tekrar giriniz" required onChange={(e) => setPasswordConfirmation(e.target.value)} />
        {passwordConfirmationError && <div className="error">{passwordConfirmationError}</div>}
      </div>

      {/* file upload */}
      <div className="form-group">
        <label>CV'ni Yükle</label>
        <input type="file" name="documents" accept=".pdf,.jpeg,.doc,.docx"  onChange={handleFileChange} />
        {fileError && <div className="error">{fileError}</div>}
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
