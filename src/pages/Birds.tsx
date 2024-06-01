import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AvTable from "../components/core/AvTable";
import AvButton from "../components/core/AvButton";
import AvSearch from "../components/core/AvSearch";

export interface IBirdsPageProps {}

const BirdsPage: React.FunctionComponent<IBirdsPageProps> = (props) => {
  const [filteredBirds, setFilteredBirds] = useState<
    { name: string; description: string }[]
  >([]);
  const handleSearch = (searchTerm: string) => {
    setFilteredBirds(
      birds.filter((bird) =>
        bird.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  };

  const [birds, setBirds] = useState<{ name: string; description: string }[]>([
    {
      name: "Eagle",
      description: "The eagle is a bird of prey.",
    },
    {
      name: "Owl",
      description: "Owls are birds from the order Strigiformes.",
    },
    {
      name: "Parrot",
      description: "Parrots are birds of the roughly 393 species.",
    },
  ]);

  const navigate = useNavigate();
  const redirectToCreatePage = () => {
    navigate("/create");
  };

  return (
    <div>
      <div>
        <AvSearch onSearch={handleSearch} />
        <AvTable animals={filteredBirds.length > 0 ? filteredBirds : birds} />
        <AvButton label="Create" onClick={redirectToCreatePage} />
      </div>
    </div>
  );
};

export default BirdsPage;
