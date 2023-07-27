const CertificateBox = () => {
  return (
    <form className="default-form">
      <div className="row">


        {/* <!-- Input --> */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Sertifika Adı</label>
          <input
            type="text"
            name="name"
            placeholder=""
            required
          />
        </div>

        <div className="form-group col-lg-6 col-md-12">
          <label>Tarihi</label>
          <select className="chosen-single form-select" required>
            <option>2023</option>
            <option>2022</option>
            <option>2021</option>
          </select>
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

export default CertificateBox;
