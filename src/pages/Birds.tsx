import React, { useEffect, useState } from "react";

import AvTable from "../components/core/AvTable";

export interface IBirdsPageProps {}

const BirdsPage: React.FunctionComponent<IBirdsPageProps> = (props) => {
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

  return (
    <div>
      <p>This is the Birds page</p>
      <div>
        <AvTable animals={birds} />
      </div>
    </div>
  );
};

export default BirdsPage;
