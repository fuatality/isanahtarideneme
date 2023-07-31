import Link from "next/link";

const SidebarHeader = () => {
  return (
    <div className="pro-header">
      <Link href="/">
        <img src="/images/logo.svg" alt="brand" height="100px" width="100px"/>
        
      </Link>
      {/* End logo */}

      <div className="fix-icon" data-bs-dismiss="offcanvas" aria-label="Close">
        <span className="flaticon-close"></span>
      </div>
      {/* icon close */}
    </div>
  );
};

export default SidebarHeader;
