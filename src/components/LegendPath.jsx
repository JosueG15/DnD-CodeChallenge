import { getIconPosition } from "../helpers";
import "./legendPath.scss";
import PropTypes from "prop-types";

const LegendPath = ({ pathIndex, path, maxPointsReached, onPointChange }) => {
  return (
    <div
      className={`path__wrapper ${
        maxPointsReached ? "path__wrapper--max-reached" : ""
      }`}
    >
      {path.map((point, index) => (
        <div
          key={index}
          className={`path__icon ${point ? "active" : ""}`}
          onClick={() => onPointChange(pathIndex, index, true)}
          onContextMenu={(e) => {
            e.preventDefault();
            onPointChange(pathIndex, index, false);
          }}
          style={{
            backgroundPositionX: getIconPosition(pathIndex, index),
          }}
        />
      ))}
    </div>
  );
};

LegendPath.propTypes = {
  pathIndex: PropTypes.number.isRequired,
  path: PropTypes.arrayOf(PropTypes.bool).isRequired,
  maxPointsReached: PropTypes.bool.isRequired,
  onPointChange: PropTypes.func.isRequired,
};

export default LegendPath;
