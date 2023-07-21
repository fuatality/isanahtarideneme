const FormContent = () => {
  return (
    <form method="post" action="add-parcel.html">
      <div className="form-group">
        <label>E-mail Adresi</label>
        <input type="email" name="username" placeholder="E-mail" required />
      </div>
      {/* name */}

      <div className="form-group">
        <label>Şifre</label>
        <input
          id="password-field"
          type="password"
          name="password"
          placeholder="****"
        />
      </div>
      {/* password */}

      <div className="form-group">
        <button className="theme-btn btn-style-one" type="submit">
          Üye Ol
        </button>
      </div>
      {/* login */}
    </form>
  );
};

export default FormContent;
