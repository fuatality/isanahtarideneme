import axios from 'axios';
import React, { useEffect, useState } from 'react';

const CompanyList = () => {
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch the companies from the backend
    axios.get('/companies')
      .then((response) => {
        setCompanies(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError('Failed to fetch companies. Please try again later.');
        setLoading(false);
      });
  }, []);

  return (
    <div className="company-list">
      <h4>Şirketler</h4>
      <table className="default-table manage-company-table">
        <thead>
          <tr>
            <th>İsim</th>
            <th>Endüstri</th>
            <th>Ülke</th>
            <th>Şehir</th>
            <th>Adres</th>
            <th>Websitesi</th>
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <tr>
              <td colSpan="6">Loading...</td>
            </tr>
          ) : error ? (
            <tr>
              <td colSpan="6">{error}</td>
            </tr>
          ) : companies.length > 0 ? (
            companies.map((company) => (
              <tr key={company.id}>
                <td>{company.name}</td>
                <td>{company.industry}</td>
                <td>{company.country}</td>
                <td>{company.city}</td>
                <td>{company.address}</td>
                <td><a href={company.website} target="_blank" rel="noopener noreferrer">{company.website}</a></td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6">No companies found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CompanyList;
