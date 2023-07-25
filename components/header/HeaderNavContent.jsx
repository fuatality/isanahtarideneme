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

const HeaderNavContent = () => {
  const router = useRouter();

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

          <li
            className={`${
              isActiveParent(employerItems, router.asPath) ||
              router.asPath === "/employers-dashboard/dashboard"
                ? "current"
                : ""
            } dropdown`}
          >
            <span>Şirketler</span>
            <ul>
              {employerItems.map((item) => (
                <li className="dropdown" key={item.id}>
                  <span
                    className={
                      isActiveParentChaild(item.items, router.asPath)
                        ? "current"
                        : ""
                    }
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
              <li
                className={
                  isActiveLink("/employers-dashboard/dashboard", router.asPath)
                    ? "current"
                    : ""
                }
              >
                <Link href="/employers-dashboard/dashboard">
                  Şirket Paneli
                </Link>
              </li>
            </ul>
          </li>
          {/* End Employers menu items */}

          <li
            className={`${
              isActiveParent(candidateItems, router.asPath) ||
              router.asPath === "/candidates-dashboard/dashboard"
                ? "current"
                : ""
                ? "current"
                : ""
            } dropdown`}
          >
            <span>Adaylar</span>
            <ul>
              {candidateItems.map((item) => (
                <li className="dropdown" key={item.id}>
                  <span
                    className={
                      isActiveParentChaild(item.items, router.asPath)
                        ? "current"
                        : ""
                    }
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
              <li
                className={
                  router.asPath === "/candidates-dashboard/dashboard"
                    ? "current"
                    : ""
                }
              >
                <Link href="/candidates-dashboard/dashboard">
                  Aday Paneli
                </Link>
              </li>
            </ul>
          </li>
          {/* End Candidates menu items */}

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
