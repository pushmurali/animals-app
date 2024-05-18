import React, { useState } from "react";
import AvTable from "../components/core/AvTable";

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
  return (
    <div>
      <p>This is the Domestic Animals page</p>
      <AvTable animals={domesticAnimals} />
    </div>
  );
};

export default DomesticAnimalsPage;
