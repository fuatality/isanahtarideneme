const ReferenceBox = () => {
  return (
    <form className="default-form">
      <div className="row">


        {/* <!-- Input --> */}
        <div className="form-group col-lg-6 col-md-12">
          <label>İsim</label>
          <input
            type="text"
            name="name"
            placeholder="Ad Soyad"
            required
          />
        </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Telefon Numarası</label>
          <input
            type="text"
            name="name"
            placeholder="+90___ __ __"
            required
          />
        </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Firma</label>
          <input
            type="text"
            name="name"
            placeholder=""
            required
          />
        </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Ünvan</label>
          <input
            type="text"
            name="name"
            placeholder=""
            required
          />
        </div>



        {/* <!-- Input --> */}
        <div className="form-group col-lg-6 col-md-12">
          <button type="submit" className="theme-btn btn-style-one">
            +
          </button>
        </div>
      </div>
    </form>
  );
};

export default ReferenceBox;
