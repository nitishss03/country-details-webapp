import { NavLink } from "react-router-dom";
function CountryCard({ country }) {
  const { flags, name, population, region, capital } = country;

  return (
    <li className="card country-card">
      <div className="container-card bg-white-box">
        <img src={flags.svg} alt={flags.alt} />
        <div className="country-info">
          <p className="country-title">
            {name.common.length > 10
              ? name.common.slice(0, 10) + "..."
              : name.common}
          </p>
          <p>
            <span className="country-description">Population:</span>
            {population.toLocaleString()}
          </p>
          <p>
            <span className="country-description">region:</span>
            {region}
          </p>
          <p>
            <span className="country-description">Capital:</span>
            {capital[0]}
          </p>
          <NavLink to={`/country/${name.common}`}>
            <button>Read More</button>
          </NavLink>
        </div>
      </div>
    </li>
  );
}

export default CountryCard;
