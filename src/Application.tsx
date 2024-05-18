import React from "react";
import AppRoutes from "./routes";

export interface IApplicationProps {}

const Application: React.FunctionComponent<IApplicationProps> = (props) => {
  return <AppRoutes />;
};

export default Application;
