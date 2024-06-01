import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AvTable from "../components/core/AvTable";
import AvButton from "../components/core/AvButton";

export interface IDomesticAnimalsPageProps {}

const DomesticAnimalsPage: React.FunctionComponent<
  IDomesticAnimalsPageProps
> = (props) => {
  const [domesticAnimals, setDomesticAnimals] = useState<
    {
      name: string;
      description: string;
    }[]
  >([
    {
      name: "Dog",
      description: "Dogs are domesticated mammals, not natural wild animals.",
    },
    {
      name: "Cat",
      description: "Cats are domesticated mammals, not natural wild animals.",
    },
    {
      name: "Cow",
      description: "Cows are domesticated mammals, not natural wild animals.",
    },
  ]);

  const navigate = useNavigate();
  const redirectToCreatePage = () => {
    navigate("/create");
  };

  return (
    <div>
      <AvTable animals={domesticAnimals} />
      <AvButton label="Create" onClick={redirectToCreatePage} />
    </div>
  );
};

export default DomesticAnimalsPage;
