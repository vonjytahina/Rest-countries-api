import React from 'react';
import { Link } from 'react-router-dom';

const Country = ({ country }) => {
  return (
    <div className="country">
      <Link to={`/country/${encodeURIComponent(country.alpha3Code.toLowerCase())}`}>
      <img src={country.flags.png} className="flag" alt={`${country.name}`} />
      <h3 className="country-name">{country.name}</h3>
      <div>Population: <span className="population">{country.population.toLocaleString('en-US')}</span></div>
      <div>Region: <span className="region">{country.region}</span></div>
      <div>Capital: <span className="capital">{country.capital}</span></div>
      </Link>
    </div>
  );
};

export default Country;