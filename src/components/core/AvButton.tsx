import React from "react";

interface IAvButtonProps {
  onClick: () => void;
  label: string;
}

const AvButton: React.FunctionComponent<IAvButtonProps> = (props) => {
  return (
    <button className="btn btn-secondary" onClick={props.onClick}>
      {props.label}
    </button>
  );
};

export default AvButton;
