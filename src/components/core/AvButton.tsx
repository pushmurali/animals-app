import React from "react";

interface IAvButtonProps {
  onClick: () => void;
  label: string;
}

const AvButton: React.FunctionComponent<IAvButtonProps> = (props) => {
  return (
    <div style={{ padding: "48px" }}>
      {" "}
      {/* 3rem equivalent in pixels for Bootstrap 4 */}
      <button
        style={{
          backgroundColor: "royalblue",
          color: "white",
          padding: "10px",
        }}
        className="btn"
        onClick={props.onClick}
      >
        {props.label}
      </button>
    </div>
  );
};

export default AvButton;
