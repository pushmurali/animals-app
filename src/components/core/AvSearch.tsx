import React, { useState, ChangeEvent } from "react"; // Import React and necessary dependencies
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

interface SearchInputProps {
  onSearch: (searchTerm: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ onSearch }) => {
  const [search, setSearch] = useState("");

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value;
    setSearch(searchTerm);
    onSearch(searchTerm);
  };

  return (
    <div className="container-fluid py-3">
      <div className="row">
        <div className="col px-5">
          <input
            type="text"
            value={search}
            onInput={handleInput}
            className="form-control" // Bootstrap class for styled input
          />
        </div>
      </div>
    </div>
  );
};

export default SearchInput;
