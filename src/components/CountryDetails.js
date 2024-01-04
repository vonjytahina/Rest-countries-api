import React from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

const CountryDetails = ({ countries }) => {
  const { alpha3Code } = useParams();
  const navigate = useNavigate();
  console.log(countries);
  console.log("URL Parameter:", alpha3Code);

  const country = countries.find(
    (c) => c.alpha3Code.toLowerCase() === alpha3Code
  );

  const replaceAlpha3CodeWithName = (borders) => {
    return borders
      .map((border) => {
        const matchingCountry = countries.find((c) => c.alpha3Code === border);
        return matchingCountry ? matchingCountry.name : border;
      })
      .join(" ");
  };

  return (
    <div className="country-details">
      <div className="back" onClick={() => navigate("/")}>
        <svg
          width="20px"
          height="20px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.68473 7.33186C8.07526 6.94134 8.07526 6.30817 7.68473 5.91765C7.29421 5.52712 6.66105 5.52712 6.27052 5.91765L1.60492 10.5832C0.823873 11.3643 0.823872 12.6306 1.60492 13.4117L6.27336 18.0801C6.66388 18.4706 7.29705 18.4706 7.68757 18.0801C8.0781 17.6896 8.0781 17.0564 7.68757 16.6659L4.02154 12.9998L22 12.9998C22.5523 12.9998 23 12.5521 23 11.9998C23 11.4476 22.5523 10.9998 22 10.9998L4.01675 10.9998L7.68473 7.33186Z"
            fill="#0F0F0F"
          />
        </svg>
        <span>Back</span>
      </div>
      <div className="country-details-container">
        <div className="country-details-left">
          <img
            src={country.flags.png}
            className="flag"
            alt={`${country.name} flag`}
          />
        </div>
        <div className="country-details-right">
          <h3 className="country-name">{country.name}</h3>

          <div className="country-details-right-middle">
            <div className="country-details-right-middle-left">
              <div>
                Native Name:{" "}
                <span className="native-name">{country.nativeName}</span>
              </div>
              <div>
                Population:{" "}
                <span className="population">
                  {country.population.toLocaleString("en-US")}
                </span>
                <span></span>
              </div>
              <div>
                Region: <span className="region">{country.region}</span>
              </div>
              <div>
                Sub Region: <span className="capital">{country.subregion}</span>
              </div>
              <div>
                Capital: <span className="capital">{country.capital}</span>
              </div>
            </div>
            <div className="country-details-right-middle-right">
              <div>
                Top Level Domain:{" "}
                <span className="capital">{country.topLevelDomain}</span>
              </div>
              <div>
                Currencies:{" "}
                <span className="capital">
                  {country.currencies
                    .map((currency) => currency.name)
                    .join(", ")}
                </span>
              </div>
              <div>
                Languages:{" "}
                <span className="capital">
                  {country.languages
                    .map((language) => language.name)
                    .join(", ")}
                </span>
              </div>
            </div>
          </div>

          {country.borders && (
            <div className="country-details-right-bottom">
              <div className="border-title">Border Countries: </div>
              <div className="border-list">
                {country.borders.map((border) => (
                  <Link
                    key={border}
                    to={`/country/${border.toLowerCase()}`}
                    className="border"
                  >
                    {replaceAlpha3CodeWithName([border])}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CountryDetails;
