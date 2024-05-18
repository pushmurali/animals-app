import React from "react";
import { useNavigate } from "react-router-dom";

interface TileProps {
  title: string;
  route: string;
}

const AvTile: React.FunctionComponent<TileProps> = ({ title, route }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(route);
  };

  return (
    <div
      onClick={handleClick}
      className="btn btn-primary"
      style={{ cursor: "pointer" }}
    >
      {title}
    </div>
  );
};

export default AvTile;
