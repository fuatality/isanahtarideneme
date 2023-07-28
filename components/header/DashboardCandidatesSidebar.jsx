import Link from "next/link";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import candidatesuData from "../../data/candidatesMenuData";
import { isActiveLink } from "../../utils/linkActiveChecker";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { menuToggle } from "../../features/toggle/toggleSlice";
import { setRole } from "../../features/user/userSlice";
import Cookies from "js-cookie";

const DashboardCandidatesSidebar = () => {
  const { menu } = useSelector((state) => state.toggle);
  const percentage = 30;
  const router = useRouter();

  const dispatch = useDispatch();
  // menu togggle handler
  const menuToggleHandler = () => {
    dispatch(menuToggle());
  };

  const logout = () => {
    // Clear the JWT token and user role from the Cookies
    Cookies.remove('jwt');
    Cookies.remove('userRole');

    // Set the user role in the Redux store to 'guest'
    dispatch(setRole('guest'));

    // Redirect the user to the home page
    router.push('/');
};

  return (
    <div className={`user-sidebar ${menu ? "sidebar_open" : ""}`}>
      {/* Start sidebar close icon */}
      <div className="pro-header text-end pb-0 mb-0 show-1023">
        <div className="fix-icon" onClick={menuToggleHandler}>
          <span className="flaticon-close"></span>
        </div>
      </div>
      {/* End sidebar close icon */}

      <div className="sidebar-inner">
        <ul className="navigation">
          {candidatesuData.map((item) => (
            <li
            className={`${
                isActiveLink(item.routePath, router.asPath)
                    ? "active"
                    : ""
            } mb-1`}
            key={item.id}
            onClick={item.name === 'Çıkış Yap' ? logout : menuToggleHandler}
        >
            <Link href={item.routePath}>
                <i className={`la ${item.icon}`}></i>{" "}
                {item.name}
            </Link>
        </li>
          ))}
        </ul>
        {/* End navigation */}

        <div className="skills-percentage">
          <h4>Profilinin Doluluk Oranı</h4>
          <p>
            `Profilinin <strong>dikkat çekmesi</strong> için daha fazla <strong>bilgilerini doldur</strong>.`
          </p>
          <div style={{ width: 200, height: 200, margin: "auto" }}>
            <CircularProgressbar
              background
              backgroundPadding={6}
              styles={buildStyles({
                backgroundColor: "#7367F0",
                textColor: "#fff",
                pathColor: "#fff",
                trailColor: "transparent",
              })}
              value={percentage}
              text={`${percentage}%`}
            />
          </div>{" "}
          {/* <!-- Pie Graph --> */}
        </div>
      </div>
    </div>
  );
};

export default DashboardCandidatesSidebar;
