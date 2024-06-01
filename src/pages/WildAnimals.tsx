import React, { useState } from "react";
import AvTable from "../components/core/AvTable";
import AvButton from "../components/core/AvButton";
import { useNavigate } from "react-router-dom";

export interface IWildAnimalsPageProps {}

const WildAnimalsPage: React.FunctionComponent<IWildAnimalsPageProps> = (
  props
) => {
  const [animals, setAnimals] = useState<
    { name: string; description: string }[]
  >([
    {
      name: "Lion",
      description: "The lion is a large cat of the genus Panthera.",
    },
    {
      name: "Tiger",
      description: "The tiger is the largest living cat species.",
    },
    {
      name: "Bear",
      description: "Bears are carnivoran mammals of the family Ursidae.",
    },
  ]);

  const navigate = useNavigate();
  const redirectToCreatePage = () => {
    navigate("/create");
  };

  return (
    <div>
      <AvTable animals={animals} />
      <AvButton label="Create" onClick={redirectToCreatePage} />
    </div>
  );
};

export default WildAnimalsPage;
