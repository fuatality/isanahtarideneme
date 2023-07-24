const WidgetToFilterBox = () => {
  return (
    <div className="chosen-outer">
      {/* <!--search box--> */}
      <div className="search-box-one">
        <form method="post" action="blog.html">
          <div className="form-group">
            <span className="icon flaticon-search-1"></span>
            <input
              type="search"
              name="search-field"
              placeholder="Ara"
              required
            />
          </div>
        </form>
      </div>
      {/* End searchBox one */}

      {/* <!--Tabs Box--> */}
      <select className="chosen-single form-select chosen-container">
        <option>En Yeni</option>
        <option>Son 12 Ay</option>
        <option>Son 18 Ay</option>
        <option>Son 24 Ay</option>
        <option>Son 5 Yıl</option>
      </select>
    </div>
  );
};

export default WidgetToFilterBox;
