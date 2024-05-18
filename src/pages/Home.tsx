import React from "react";

export interface IHomePageProps {}

const HomePage: React.FunctionComponent<IHomePageProps> = (props) => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <section className="p-1">
            <p>
              Welcome to <strong>AnimalStore</strong> – Your Ultimate Pet
              Paradise!
            </p>
          </section>
          <section className="p-1">
            <p>
              At AnimalStore, we believe that pets are family. Whether you’re a
              seasoned pet parent or looking to bring home your very first
              companion, we are here to provide everything you need to make your
              furry, feathered, or scaly friend happy and healthy.
            </p>
          </section>
          <section className="p-1">
            <p>
              <strong>Discover Our Wide Range of Products</strong>
            </p>
          </section>
          <section className="p-1">
            <p>
              From nutritious food and tasty treats to cozy bedding and fun
              toys, AnimalStore has it all. Our carefully curated selection
              ensures that every product meets the highest standards of quality
              and safety, so you can shop with confidence.
            </p>
          </section>
          <section className="p-1">
            <p>
              <strong>Pet Food and Treats</strong>
            </p>
          </section>
          <section className="p-1">
            <ul>
              <li>Premium brands and specialty diets</li>
              <li>Natural and organic options</li>
              <li>Special treats for training and rewards</li>
            </ul>
          </section>
          <section className="p-1">
            <p>
              <strong>Toys and Accessories</strong>
            </p>
          </section>
          <section className="p-1">
            <ul>
              <li>Engaging toys for all types of play</li>
              <li>Stylish collars, leashes, and harnesses</li>
              <li>Comfy beds and stylish habitats</li>
            </ul>
          </section>
          <section className="p-1">
            <p>
              <strong>Health and Wellness</strong>
            </p>
          </section>
          <section className="p-1">
            <ul>
              <li>Vitamins and supplements</li>
              <li>Grooming supplies and tools</li>
              <li>Health care essentials</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
