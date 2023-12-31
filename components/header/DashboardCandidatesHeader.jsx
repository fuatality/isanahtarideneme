import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import candidatesMenuData from "../../data/candidatesMenuData";
import HeaderNavContent from "./HeaderNavContent";
import { isActiveLink } from "../../utils/linkActiveChecker";
import { useRouter } from "next/router";
import { useDispatch } from 'react-redux';
import { setRole } from "../../features/user/userSlice";
import Cookies from "js-cookie";

const DashboardCandidatesHeader = () => {
    const [navbar, setNavbar] = useState(false);
    const dispatch = useDispatch();
    const router = useRouter();

    const changeBackground = () => {
        if (window.scrollY >= 0) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
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

    useEffect(() => {
        window.addEventListener("scroll", changeBackground);
    }, []);

    return (
        <header className={`main-header header-shaddow ${navbar ? "fixed-header " : ""}`}>
            <div className="container-fluid">
                <div className="main-box">
                    <div className="nav-outer">
                        <div className="logo-box">
                            <div className="logo">
                                <Link href="/">
                                    <Image alt="brand" src="/images/logo.svg" width={50} height={50} priority />
                                </Link>
                            </div>
                        </div>

                        <HeaderNavContent />

                    </div>

                    <div className="outer-box">
                        <button className="menu-btn">
                            <span className="icon la la-bell"></span>
                        </button>

                        <div className="dropdown dashboard-option">
                            <a className="dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <Image alt="avatar" className="thumb" src="/images/resource/candidate-1.png" width={50} height={50} />
                                <span className="name">Hesabım</span>
                            </a>

                            <ul className="dropdown-menu">
                                {candidatesMenuData.map((item) => (
                                    <li
                                        className={`${isActiveLink(item.routePath, router.asPath) ? "active" : ""} mb-1`}
                                        key={item.id}
                                    >
                                        {item.name === 'Çıkış Yap'
                                            ? <a onClick={logout}><i className={`la ${item.icon}`}></i> {item.name}</a>
                                            : <Link href={item.routePath}><i className={`la ${item.icon}`}></i> {item.name}</Link>
                                        }
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default DashboardCandidatesHeader;
