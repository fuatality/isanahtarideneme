import axios from 'axios';
import React from 'react';
import Select from 'react-select';

const FormInfoBox = () => {
  const [logoPreview, setLogoPreview] = React.useState(null);
  const [coverImagePreview, setCoverImagePreview] = React.useState(null);

  const handleImageChange = (e, setPreview) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', e.target.name.value);
    formData.append('industry', e.target.industry.value);
    formData.append('country', e.target.country.value);
    formData.append('city', e.target.city.value);
    formData.append('address', e.target.address.value);
    formData.append('website', e.target.website.value);
    formData.append('logo', e.target.logo.files[0]);
    formData.append('coverImage', e.target.coverImage.files[0]);

    axios.post('/companies', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
    })
    .then((response) => {
      alert('Employer created successfully!');
    })
    .catch((error) => {
      alert('Error creating employer. Please check the entered details.');
    });
  };

  return (
    <form className="default-form" onSubmit={handleSubmit}>
      <div className="row">
        {/* Existing fields here */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Logo</label>
          <input type="file" name="logo" accept="image/*" onChange={(e) => handleImageChange(e, setLogoPreview)} required />
          {logoPreview && <img src={logoPreview} alt="Logo Preview" />}
        </div>
        <div className="form-group col-lg-6 col-md-12">
          <label>Cover Image</label>
          <input type="file" name="coverImage" accept="image/*" onChange={(e) => handleImageChange(e, setCoverImagePreview)} required />
          {coverImagePreview && <img src={coverImagePreview} alt="Cover Image Preview" />}
        </div>
      <div className="form-group col-lg-6 col-md-12">
        <label>Şirket Adı</label>
        <input type="text" name="name" placeholder="Employer Name" required />
      </div>
      <div className="form-group col-lg-6 col-md-12">
        <label>Endüstri</label>
        <input type="text" name="industry" placeholder="Industry" required />
      </div>

      <div className="form-group col-lg-6 col-md-12">
        <label>Ülke</label>
        <input type="text" name="country" placeholder="Ülke" required />
      </div>
                {/* <!-- Input --> */}
      <div className="form-group col-lg-6 col-md-12">
        <label>Şehir</label>
        <input type="text" name="city" placeholder="Şehir" required />
      </div>

                {/* <!-- Input --> */}
      <div className="form-group col-lg-6 col-md-12">
            <label>Açık Adres</label>
            <input type="text" name="address" placeholder="Açık Adres" required />
      </div>
      <div className="form-group col-lg-6 col-md-12">
        <label>Websitesi</label>
        <input type="text" name="website" placeholder="Website" required />
      </div>
      
    </div>
    <div className="form-group col-lg-6 col-md-12">
        <button type="submit" className="theme-btn btn-style-one">Şirket Yarat</button>
      </div>
    </form>
  );
};

export default FormInfoBox;
