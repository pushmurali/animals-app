import React from "react";

const AnimalCreate: React.FunctionComponent = () => {
  const [name, setName] = React.useState<string>("");
  const [description, setDescription] = React.useState<string>("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle form submission here
    console.log(`Name: ${name}, Description: ${description}`);
  };

  return (
    <div className="container">
      <div className="row justify-content-centre">
        <div className="col-md-6">
          <form className="p-3">
            <div className="form-group mb-3">
              <input
                type="text"
                className="form-control"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
              />
            </div>
            <div className="form-group mb-3">
              <input
                type="text"
                className="form-control"
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Description"
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AnimalCreate;
