import React, { useState } from "react";
import AvTable from "../components/core/AvTable";
import AvButton from "../components/core/AvButton";
import { useNavigate } from "react-router-dom";
import AvSearch from "../components/core/AvSearch";

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

  const [filteredAnimals, setFilteredAnimals] = useState<
    {
      name: string;
      description: string;
    }[]
  >([]);

  const handleSearch = (searchTerm: string) => {
    // 3. Create handleSearch function
    setFilteredAnimals(
      animals.filter((animal) =>
        animal.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  };

  const navigate = useNavigate();
  const redirectToCreatePage = () => {
    navigate("/create");
  };

  return (
    <div>
      <AvSearch onSearch={handleSearch} />
      <AvTable
        animals={filteredAnimals.length > 0 ? filteredAnimals : animals}
      />
      <AvButton label="Create" onClick={redirectToCreatePage} />
    </div>
  );
};

export default WildAnimalsPage;
