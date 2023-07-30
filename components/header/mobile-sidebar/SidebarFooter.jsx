import { useDispatch, useSelector } from "react-redux";
import { setRole } from "../../../features/user/userSlice";
import Cookies from "js-cookie";
import Link from "next/link";
import { useRouter } from "next/router";

const SidebarFooter = () => {
  const socialContent = [
    { id: 1, icon: "fa-facebook-f", link: "https://www.facebook.com/" },
    { id: 2, icon: "fa-twitter", link: "https://www.twitter.com/" },
    { id: 3, icon: "fa-instagram", link: "https://www.instagram.com/" },
    { id: 4, icon: "fa-linkedin-in", link: "https://www.linkedin.com/" },
  ];

  const userRole = useSelector((state) => state.user.role); // Replace with your logic to retrieve the user role
  const router = useRouter();
  const dispatch = useDispatch();

  const logout = () => {
    // Clear the JWT token and user role from the Cookies
    Cookies.remove("jwt");
    Cookies.remove("userRole");

    // Set the user role in the Redux store to "guest"
    dispatch(setRole("guest"));

    // Redirect the user to the home page
    router.push("/");
  };

  return (
    <div className="mm-add-listing mm-listitem pro-footer">
      {userRole === "guest" ? (
        <a href="/login" className="theme-btn btn-style-four mm-listitem__text">
          Giriş Yap / Üye Ol
        </a>
      ) : (
        <button onClick={logout} className="theme-btn btn-style-one mm-listitem__text">
          Çıkış Yap
        </button>
      )}

      <div className="mm-listitem__text">
        <div className="contact-info">
          <span className="phone-num">
            <span>Bize Ulaşın</span>
            <a href="tel:1234567890">123 456 7890</a>
          </span>
          <span className="address">
          Ataşehir, İstanbul.
          </span>
          <a href="mailto:support@unicorn.com" className="email">
            support@unicorn.com
          </a>
        </div>
        {/* End .contact-info */}

        <div className="social-links">
          {socialContent.map((item) => (
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              key={item.id}
            >
              <i className={`fab ${item.icon}`}></i>
            </a>
          ))}
        </div>
        {/* End social-links */}
      </div>
      {/* End .mm-listitem__text */}
    </div>
  );
};

export default SidebarFooter;
