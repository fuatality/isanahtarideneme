import { useState } from "react";
import Link from "next/link";
import { useRouter } from 'next/router';
import LoginWithSocial from "./LoginWithSocial";
import axios from "axios";
import Cookies from 'js-cookie';
import { useDispatch } from 'react-redux';
import { setRole } from "../../../../features/user/userSlice"; // replace with actual path

const FormContent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(""); 
  const [passwordError, setPasswordError] = useState(""); 
  const router = useRouter();
  const dispatch = useDispatch();

  // Function to validate email format
  const validateEmail = (email) => {
    const pattern = /^[^@]+@[^@]+\.[^@]+$/;
    return pattern.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Clear previous errors
    setEmailError("");
    setPasswordError("");

    // Validate email
    if (!validateEmail(email)) {
      setEmailError("Invalid email format");
      return;
    }

    // Validate password (non-empty for login)
    if (password.trim().length === 0) {
      setPasswordError("Password cannot be empty");
      return;
    }

    try {
      const response = await axios.post('/api/login', { email, password });

    // Extract the token and role from the response
    const { token, role } = response.data;

    // Set the token and role in cookies
    Cookies.set('token', token);
    Cookies.set('role', role);

    // Dispatch the role to the Redux store
    dispatch(setRole(role));
      
      // Use router.push to redirect
      if (userRole === 'admin') {
        router.push('/employers-dashboard/dashboard');
      } else if (userRole === 'user') {
        router.push('/candidates-dashboard/dashboard');
      }
    } catch (error) {
       const errorMessage = error.response?.data?.error || 'An error occurred while logging in';
       setError(errorMessage);
    }
  };

  return (
    <div className="form-inner">
      <h3>Giriş Yap</h3>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>E-mail Adresi</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="@"
            required
          />
          {emailError && <div className="error">{emailError}</div>} {/* Display email error */}
        </div>

        <div className="form-group">
          <label>Şifre</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="****"
            required
          />
          {passwordError && <div className="error">{passwordError}</div>} {/* Display password error */}
        </div>

        <div className="form-group">
          <button
            className="theme-btn btn-style-one"
            type="submit"
          >
            Giriş Yap
          </button>
        </div>
      </form>

      <div className="bottom-box">
        <div className="text">
          Hesabınız Yok Mu?{" "}
          <Link href="/register">
            Kayıt Ol
          </Link>
        </div>

        <div className="divider">
          <span>ya da</span>
        </div>

        <LoginWithSocial />
      </div>
    </div>
  );
};

export default FormContent;
