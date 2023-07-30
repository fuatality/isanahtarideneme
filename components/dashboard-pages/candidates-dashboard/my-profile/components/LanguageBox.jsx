const LanguageBox = ({ boxId, index }) => {
  return (
    <form className="default-form">
      <div className="row">
        {/* <!-- Input --> */}
        <div className="form-group col-lg-6 col-md-12">
          <label>{index}. Yabanci Dil</label>
          <select className="chosen-single form-select" required>
            <option>İngilizce</option>
            <option>Fransızca</option>
            <option>İspanyolca</option>
            <option>Japonca</option>
            <option>Arapça</option>
          </select>
        </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Seviye</label>
          <select className="chosen-single form-select" required>
            <option>A2</option>
            <option>A1</option>
            <option>B2</option>
            <option>B1</option>
            <option>C2</option>
            <option>C1</option>
          </select>
        </div>

        {/* <!-- Input --> 
        <div className="form-group col-lg-6 col-md-12">
          <label>Find On Map</label>
          <input
            type="text"
            name="name"
            placeholder="Ataşehir, İstanbul/Türkiye."
            required
          />
        </div>*/}

        {/* <!-- Input -->
        <div className="form-group col-lg-3 col-md-12">
          <label>Latitude</label>
          <input type="text" name="name" placeholder="İstanbul" required />
        </div> */}

        {/* <!-- Input --> 
        <div className="form-group col-lg-3 col-md-12">
          <label>Longitude</label>
          <input type="text" name="name" placeholder="İstanbul" required />
        </div>*/}

        {/* <!-- Input --> 
        <div className="form-group col-lg-12 col-md-12">
          <button className="theme-btn btn-style-three">Search Location</button>
        </div>

        <div className="form-group col-lg-12 col-md-12">
          <div className="map-outer">
            <div style={{ height: "420px", width: "100%" }}>
              <Map />
            </div>
          </div>
        </div>*/}
        {/* End MapBox */}

        {/* <!-- Input --> */}
      </div>
    </form>
  );
};

export default LanguageBox;
