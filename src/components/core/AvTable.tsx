import React from "react";

interface Animal {
  name: string;
  description: string;
}

interface AnimalsTableProps {
  animals: Animal[];
}

const AvTable: React.FunctionComponent<AnimalsTableProps> = ({ animals }) => (
  <div className="px-5">
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {animals.map((animal, index) => (
          <tr key={index}>
            <td>{animal.name}</td>
            <td>{animal.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default AvTable;
