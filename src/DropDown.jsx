import { useState } from "react";
import PropTypes from "prop-types";
import "./DropDown.css";

const DropDown = ({ selected, setSelected }) => {
  const [isActive, setIsActive] = useState(false);
  const options = ["React", "Vue", "Angular"];

  return (
    <div className="dropdown">
      <div className="dropdown-btn" onClick={(e) => setIsActive(!isActive)}>
        {selected}
        <span className="arrow-icon">🔻</span>
      </div>
      {isActive && (
        <div className="dropdown-content">
          {options.map((option, index) => (
            <div
              key={index}
              onClick={(e) => {
                setSelected(option);
                setIsActive(false);
              }}
              className="dropdown-item"
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

DropDown.propTypes = {
  selected: PropTypes.string.isRequired,
  setSelected: PropTypes.string.isRequired,
};

export default DropDown;
