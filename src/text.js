import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import countriesData from "./data/countries.json";
import Header from "./components/Header";
import Country from "./components/Country";
import CountryDetails from "./components/CountryDetails";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState("");
  const [darkMode, setDarkMode] = useState(false);


  useEffect(() => {
    // Simulate async behavior
    const fetchData = async () => {
      // Use setTimeout to simulate async behavior
      setTimeout(() => {
        setCountries(countriesData);
        setFilteredCountries(countriesData);
      }, 500);
    };

    fetchData();
  }, []);

  const handleSearch = () => {
    const filtered = countries.filter((country) =>
      country.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCountries(filtered);
  };

  const handleInputChange = (event) => {
    const term = event.target.value;
    setSearchTerm(term);
    const filtered = countries.filter((country) =>
      country.name.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredCountries(filtered);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleRegionClick = (region) => {
    setSelectedRegion(region);
    setShowDropdown(false);

    const filtered = countries.filter((country) => country.region === region);
    setFilteredCountries(filtered);
  };

  return (
    <Router>
      <div className="App">
        <div className={`container ${darkMode ? "dark" : ""}`}>
          <Header darkMode={darkMode} setDarkMode={setDarkMode} />
          <h1>dsdfsdf</h1>
          <main>
            <Routes>
              
              <Route
                path="/"
                element={
                  <div>
                    <div className="section-1">
                      <div className="section-1-left">
                        <div className="input-container">
                          <svg
                            className="search"
                            width="20px"
                            height="20px"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            onClick={handleSearch}
                          >
                            <path
                              d="M14.9536 14.9458L21 21M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                              stroke="#000000"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                          <input
                            type="text"
                            id="input-search"
                            placeholder="Search for a country..."
                            value={searchTerm}
                            onChange={handleInputChange}
                            onKeyPress={handleKeyPress}
                          />
                        </div>
                      </div>
                      <div className="section-1-right">
                        <svg
                          className="arrow-down"
                          width="20px"
                          height="20px"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          onClick={toggleDropdown}
                        >
                          <path
                            d="M5.70711 9.71069C5.31658 10.1012 5.31658 10.7344 5.70711 11.1249L10.5993 16.0123C11.3805 16.7927 12.6463 16.7924 13.4271 16.0117L18.3174 11.1213C18.708 10.7308 18.708 10.0976 18.3174 9.70708C17.9269 9.31655 17.2937 9.31655 16.9032 9.70708L12.7176 13.8927C12.3271 14.2833 11.6939 14.2832 11.3034 13.8927L7.12132 9.71069C6.7308 9.32016 6.09763 9.32016 5.70711 9.71069Z"
                            fill="#0F0F0F"
                          />
                        </svg>
                        <div
                          className="custom-dropdown"
                          onClick={toggleDropdown}
                        >
                          Filter by Region
                        </div>
                        {showDropdown && (
                          <div className="dropdown-options">
                            <div onClick={() => handleRegionClick("Africa")}>
                              Africa
                            </div>
                            <div onClick={() => handleRegionClick("Americas")}>
                              America
                            </div>
                            <div onClick={() => handleRegionClick("Asia")}>
                              Asia
                            </div>
                            <div onClick={() => handleRegionClick("Europe")}>
                              Europe
                            </div>
                            <div onClick={() => handleRegionClick("Oceania")}>
                              Oceania
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    
                      <div className="section-2">
                        <div className="section-2-container">
                          {filteredCountries.map((country, index) => (
                            <Country key={index} country={country} />
                          ))}
                        </div>
                      </div>
               
                  </div>
                }
              />
              <Route
                path="/country/:alpha3Code"
                element={<CountryDetails countries={countries} />}
              />
            </Routes>
          </main>
        </div>

        <div className="attribution">
          Challenge by{" "}
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by{" "}
          <a
            href="https://www.frontendmentor.io/profile/vonjytahina"
            target="_blank"
          >
            Vonjy Tahina CHAN
          </a>
          .
        </div>
      </div>
    </Router>
  );
};

export default App;
