import { useState } from "react";
import Link from "next/link";
import { useRouter } from 'next/router';
import LoginWithSocial from "./LoginWithSocial";

const FormContent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter(); // Declare router here

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (response.ok) {
      // Handle successful login
      console.log(data);
      const loginModal = document.getElementById('loginPopupModal');
      if (loginModal) {
        loginModal.classList.remove('show');
        loginModal.setAttribute('aria-modal', 'false');
        loginModal.setAttribute('style', 'display: none');
        const modalBackdrops = document.getElementsByClassName('modal-backdrop');
        if (modalBackdrops[0]) modalBackdrops[0].remove();

      // Remove the "modal-open" class from the body
        document.body.classList.remove('modal-open');
      }
      // Use router.push to redirect
      if (data.role === 'admin') {
        router.push('/employers-dashboard/dashboard')
        .then(() => window.location.reload())
      } else if (data.role === 'user') {
        router.push('/candidates-dashboard/dashboard')
        .then(() => window.location.reload())
      }
    } else {
      // Handle error
      console.log(data.error);
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
          <Link href="#" className="call-modal signup" data-bs-toggle="modal" data-bs-target="#registerModal">
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
