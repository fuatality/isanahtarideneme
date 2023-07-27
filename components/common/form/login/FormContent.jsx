import { useState } from "react";
import Link from "next/link";
import { useRouter } from 'next/router';
import LoginWithSocial from "./LoginWithSocial";
import axios from "axios";
import Cookies from 'js-cookie';

const FormContent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/login", { email, password });
      const data = response.data;
      const token = data.token;
      const userRole = data.role;  // Extract the role from the response data
      
      Cookies.set('jwt', token);
      Cookies.set('userRole', userRole);  // Save the user's role in a cookie

      // Handle successful login
      console.log(data);
      
      // Use router.push to redirect
      if (userRole === 'admin') {
        router.push('/employers-dashboard/dashboard')
      } else if (userRole === 'user') {
        router.push('/candidates-dashboard/dashboard')
      }
    } catch (error) {
      // Handle error
      console.log(error);
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
