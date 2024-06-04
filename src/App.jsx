import { useState, useEffect, useCallback, useMemo } from "react";
import LegendPath from "./components/LegendPath";
import talentPathData from "./config/talentPath.json";
import "./App.scss";

const App = () => {
  const [paths, setPaths] = useState([]);
  const [maxAllowedPoints, setMaxAllowedPoints] = useState(0);
  const [pointsSpent, setPointsSpent] = useState(0);

  useEffect(() => {
    const initializePaths = () => {
      const updatedPaths = talentPathData.paths.map((path) => {
        const initialPoints = Array.from(
          { length: path.availableSkills },
          (_, index) => index < path.pointsSpent
        );
        return {
          ...path,
          points: initialPoints,
          pointsSpent: path.pointsSpent,
        };
      });
      setPaths(updatedPaths);
      setMaxAllowedPoints(talentPathData.maxPoints);
      setPointsSpent(
        updatedPaths.reduce((total, path) => total + path.pointsSpent, 0)
      );
    };
    initializePaths();
  }, []);

  const handlePointsUpdate = useCallback(
    (pathIdx, pointIdx, isIncrement) => {
      if (isIncrement && pointsSpent >= maxAllowedPoints) {
        return;
      }

      setPaths((prevPaths) => {
        const updatedPaths = prevPaths.map((path, index) => {
          if (index !== pathIdx) return path;

          const newPoints = [...path.points];
          const newPointsSpent = path.pointsSpent + (isIncrement ? 1 : -1);

          if (
            (pointIdx === 0 || newPoints[pointIdx - 1]) &&
            !newPoints[pointIdx + 1] &&
            newPoints[pointIdx] !== isIncrement
          ) {
            newPoints[pointIdx] = isIncrement;
            return { ...path, points: newPoints, pointsSpent: newPointsSpent };
          }

          return path;
        });

        const newTotalPointsSpent = updatedPaths.reduce(
          (total, path) => total + path.pointsSpent,
          0
        );

        setPointsSpent(newTotalPointsSpent);
        return updatedPaths;
      });
    },
    [pointsSpent, maxAllowedPoints]
  );

  const isMaxPointsReached = useMemo(
    () => pointsSpent >= maxAllowedPoints,
    [pointsSpent, maxAllowedPoints]
  );

  return (
    <div className="app">
      <div className="app__main-container">
        <div className="app__title">
          TitanStar Legends - Rune Mastery Loadout Talent Calculator 9000
        </div>
        <div className="calculator__container">
          <div className="calculator__main">
            {paths.map((path, index) => (
              <div key={index} className="talent__path-wrapper">
                <div className="talent__path-label">{path.title}</div>
                <LegendPath
                  pathIndex={index}
                  path={path.points}
                  onPointChange={handlePointsUpdate}
                  maxPointsReached={isMaxPointsReached}
                />
              </div>
            ))}
          </div>
          <div
            className={`points__counter ${
              isMaxPointsReached ? "points__counter--max" : ""
            }`}
          >
            {pointsSpent} / {maxAllowedPoints}
            <br />
            <span>Points Spent</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
