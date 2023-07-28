import Link from "next/link";
import {
  blogItems,
  candidateItems,
  employerItems,
  findJobItems,
  homeItems,
} from "../../data/mainMenuData";
import {
  isActiveParent,
  isActiveLink,
  isActiveParentChaild,
} from "../../utils/linkActiveChecker";
import { useRouter } from "next/router";
import { useSelector } from 'react-redux';

const HeaderNavContent = () => {
  const router = useRouter();
  const userRole = useSelector((state) => state.user.role);


  return (
    <>
      <nav className="nav main-menu">
        <ul className="navigation" id="navbar">
          {/* current dropdown */}
          <li className={`${
            isActiveParent(homeItems, router.asPath) ? "current" : ""
          }`}>
          <Link href="/">Ana Sayfa</Link>
          </li>
          {/* End homepage menu items */}

          <li className={`${
    isActiveParent(findJobItems, router.asPath) ? "current" : ""
}`}>
    <Link href="/job-list-v5">İş İlanları</Link>
</li>

          {/* End homepage menu items */}
          {/* End findjobs menu items */}

          


          

          <li className={`${
    isActiveParent(blogItems, router.asPath) ? "current" : ""
}`}>
    <Link href="/blog-list-v1">Kariyer Fuarı</Link>
</li>
          {/* End Blog menu items */}

         {/* <li
            className={`${
            
              isActiveParentChaild(shopItems[0].items, router.asPath)
                ? "current "
                : ""
            } dropdown`}
          >
            <span>Sayfalar</span>
            <ul>
              {shopItems.map((item) => (
                <li className="dropdown" key={item.id}>
                  <span
                    className={`${
                      isActiveParentChaild(shopItems[0].items, router.asPath)
                        ? "current "
                        : ""
                    }`}
                  >
                    {item.title}
                  </span>
                  <ul>
                    {item.items.map((menu, i) => (
                      <li
                        className={
                          isActiveLink(menu.routePath, router.asPath)
                            ? "current"
                            : ""
                        }
                        key={i}
                      >
                        <Link href={menu.routePath}>{menu.name}</Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
              
            </ul>
          </li>*/}
          {/* End Pages menu items */}
        </ul>
      </nav>
    </>
  );
};

export default HeaderNavContent;
