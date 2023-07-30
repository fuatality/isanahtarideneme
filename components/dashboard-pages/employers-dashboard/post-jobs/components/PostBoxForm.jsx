import Select from "react-select";
import axios from 'axios'; // Importing axios
import { useState } from 'react'; // Importing useState

const PostBoxForm = () => {
  const specialisms = [
    { value: "Banking", label: "Banking" },
    { value: "Digital & Creative", label: "Digital & Creative" },
    { value: "Retail", label: "Retail" },
    { value: "Human Resources", label: "Human Resources" },
    { value: "Managemnet", label: "Managemnet" },
    { value: "Accounting & Finance", label: "Accounting & Finance" },
    { value: "Digital", label: "Digital" },
    { value: "Creative Art", label: "Creative Art" },
  ];
  const [jobTitle, setJobTitle] = useState('');
  const [description, setDescription] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [skills, setSkills] = useState([]);
  const [jobType, setJobType] = useState('');
  const [experience, setExperience] = useState('');
  const [industry, setIndustry] = useState('');
  const [applicationDeadline, setApplicationDeadline] = useState('');
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const [address, setAddress] = useState('');
  const [type, setType] = useState('');
  const [successMessage, setSuccessMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const jobDetails = {
      jobTitle,
      description,
      email,
      company,
      skills,
      jobType,
      experience,
      industry,
      applicationDeadline,
      country,
      city,
      address,
      type
      // ... other fields ...
    };
    try {
      const response = await axios.post('/api/postJob', jobDetails);
      if (response.data.success) {
        // Set success message
        setSuccessMessage('Job posted successfully!');
        // Optionally clear error message if previously set
        setErrorMessage(null);
      }
    } catch (error) {
      // Set error message
      setErrorMessage('An error occurred while posting the job. Please try again.');
      // Optionally clear success message if previously set
      setSuccessMessage(null);
    }
  };

  return (
    <form className="default-form" onSubmit={handleSubmit}>
      {/* Display success message */}
      {successMessage && <div className="alert alert-success">{successMessage}</div>}

      {/* Display error message */}
      {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
      <div className="row">
        {/* <!-- Input --> */}
        <div className="form-group col-lg-12 col-md-12">
          <label>İlan Başlığı</label>
          <input type="text" name="name" placeholder="Başlık" value={jobTitle} onChange={e => setJobTitle(e.target.value)} />
        </div>

        {/* <!-- About Company --> */}
        <div className="form-group col-lg-12 col-md-12">
          <label>İş Tanımı</label>
          <textarea placeholder="" value={description} onChange={e => setDescription(e.target.value)}></textarea>
        </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-6 col-md-12">
          <label>E-mail Adresi</label>
          <input type="text" name="name" placeholder="" value={email} onChange={e => setEmail(e.target.value)}/>
        </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-6 col-md-12">
          <label>İlan Açan Şirket</label>
          <input type="text" name="name" placeholder="" value={company} onChange={e => setCompany(e.target.value)}/>
        </div>

        {/* <!-- Search Select --> */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Aranılan Yetenek </label>
          <Select
            defaultValue={[specialisms[2]]}
            isMulti
            name="colors"
            options={specialisms}
            className="basic-multi-select"
            classNamePrefix="select"
            value={skills}
            onChange={selectedOptions => setSkills(selectedOptions)}
          />
        </div>

        <div className="form-group col-lg-6 col-md-12">
          <label>İş Türü</label>
          <select className="chosen-single form-select" value={jobType}
            onChange={e => setJobType(e.target.value)}>
            <option>Yüz yüze</option>
            <option>Hibrit</option>
            <option>Uzaktan</option>
          </select>
        </div>

       

        <div className="form-group col-lg-6 col-md-12">
          <label>Deneyim</label>
          <select className="chosen-single form-select" value={experience}
            onChange={e => setExperience(e.target.value)}>
            <option>0-1 yıl</option>
            <option>2-5 yıl</option>
            <option>5-10 yıl</option>
          </select>
        </div>

        

        <div className="form-group col-lg-6 col-md-12">
          <label>Endüstri</label>
          <select className="chosen-single form-select" value={industry}
            onChange={e => setIndustry(e.target.value)}>
            <option>Banking</option>
            <option>Digital & Creative</option>
            <option>Retail</option>
            <option>Human Resources</option>
            <option>Management</option>
          </select>
        </div>


        {/* <!-- Input --> */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Son Başvuru Tarihi</label>
          <input type="date" name="name" placeholder="06.04.2020" value={applicationDeadline}
            onChange={e => setApplicationDeadline(e.target.value)}/>
        </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Ülke</label>
          <select className="chosen-single form-select" value={country}
            onChange={e => setCountry(e.target.value)}>
            <option>Türkiye</option>
            <option>Azerbaycan</option>
          </select>
        </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Şehir</label>
          <select className="chosen-single form-select" value={city}
            onChange={e => setCity(e.target.value)}>
            <option>İstanbul</option>
            <option>İzmir</option>
            <option>Ankara</option>
            <option>Bakü</option>
          </select>
        </div>
        <div className="form-group col-lg-6 col-md-12">
          <label>İlan Türü</label>
          <select className="chosen-single form-select" value={type}
            onChange={e => setType(e.target.value)}>
            <option>Öne Çıkarılan</option>
            <option>Vitrin</option>
          </select>
        </div>
        {/* <!-- Input --> */}
        <div className="form-group col-lg-12 col-md-12">
          <label>Adres</label>
          <input
            type="text"
            name="name"
            placeholder="Ataşehir, İstanbul/Türkiye"
            value={address}
            onChange={e => setAddress(e.target.value)}
          />
        </div>
        

        {/* <!-- Input --> */}
        <div className="form-group col-lg-12 col-md-12 text-right">
          <button className="theme-btn btn-style-one" type="submit">Yayınla!</button>
        </div>
      </div>
    </form>
  );
};

export default PostBoxForm;
