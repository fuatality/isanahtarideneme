import Link from "next/link";
import LoginWithSocial from "./LoginWithSocial";

const FormContent = () => {
  return (
    <div className="form-inner">
      <h3>Giriş Yap</h3>

      {/* <!--Login Form--> */}
      <form method="post">
        <div className="form-group">
          <label>E-mail Adresi</label>
          <input type="email" name="user-email" placeholder="@" required />
        </div>
        {/* name */}

        <div className="form-group">
          <label>Şifre</label>
          <input
            type="password"
            name="password"
            placeholder="****"
            required
          />
        </div>
        {/* password */}

        <div className="form-group">
          <div className="field-outer">
            <div className="input-group checkboxes square">
              <input type="checkbox" name="remember-me" id="remember" />
              <label htmlFor="remember" className="remember">
                <span className="custom-checkbox"></span> Beni Hatırla
              </label>
            </div>
            <a href="#" className="pwd">
              Şifremi Unuttum
            </a>
          </div>
        </div>
        {/* forgot password */}

        <div className="form-group">
          <button
            className="theme-btn btn-style-one"
            type="submit"
            name="log-in"
          >
            Giriş Yap
          </button>
        </div>
        {/* login */}
      </form>
      {/* End form */}

      <div className="bottom-box">
        <div className="text">
          Hesabınız Yok Mu?{" "}
          <Link
            href="#"
            className="call-modal signup"
            data-bs-toggle="modal"
            data-bs-target="#registerModal"
          >
            Kayıt Ol
          </Link>
        </div>

        <div className="divider">
          <span>ya da</span>
        </div>

        <LoginWithSocial />
      </div>
      {/* End bottom-box LoginWithSocial */}
    </div>
  );
};

export default FormContent;
