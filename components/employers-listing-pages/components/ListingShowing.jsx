const ListingShowing = () => {
  return (
    <div className="ls-show-more">
      <p>497 işten 36'sı gösteriliyor.</p>
      <div className="bar">
        <span className="bar-inner" style={{ width: "40%" }}></span>
      </div>
      <button className="show-more">Daha Fazla Göster</button>
    </div>
  );
};

export default ListingShowing;
