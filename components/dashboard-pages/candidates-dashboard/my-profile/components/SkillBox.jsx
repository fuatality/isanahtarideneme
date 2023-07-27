const SkillBox = () => {
  return (
    <form className="default-form">
      <div className="row">


        {/* <!-- Input --> */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Kullanılan Programlar</label>
          <input
            type="text"
            name="name"
            placeholder=""
            required
          />
        </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Program Adı</label>
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

export default SkillBox;
