import FooterDefault from "../../../components/footer/common-footer";
import DefaulHeader2 from "../../header/DefaulHeader2";
import MobileMenu from "../../header/MobileMenu";
import FilterTopBox from "./FilterTopBox";
import JobSearchForm from "./JobSearchForm";
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';

const index = () => {
    const router = useRouter();
    const userRole = useSelector((state) => state.user.role);

    useEffect(() => {
        if(userRole !== 'admin') {
            router.push('/admin-dashboard/dashboard');
        }
    }, []);

    return (
        <>
            {/* <!-- Header Span --> */}
            <span className="header-span"></span>


            <DefaulHeader2 />
            {/* End Header with upload cv btn */}

            <MobileMenu />
            {/* End MobileMenu */}

            <section className="page-title">
                <div className="auto-container">
                    <JobSearchForm />
                    {/* <!-- Job Search Form --> */}
                </div>
            </section>
            {/* <!--End Page Title--> */}

            <section className="ls-section">
                <div className="auto-container">
                    <div className="row">
                        <div className="content-column col-lg-12">
                            <div className="ls-outer">
                                <FilterTopBox />
                            </div>
                        </div>
                        {/* <!-- End Content Column --> */}
                    </div>
                    {/* End row */}
                </div>
                {/* End container */}
            </section>
            {/* <!--End Listing Page Section --> */}

            <FooterDefault footerStyle="alternate5" />
            {/* <!-- End Main Footer --> */}
        </>
    );
};

export default index;
