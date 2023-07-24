const BreadCrumb = ({ title = "" }) => {
  return (
    <div className="upper-title-box">
      <h3>{title}</h3>
      <div className="text">Neler olup bitiğine göz at!</div>
    </div>
  );
};

export default BreadCrumb;
