import React from "react";
import Pet from "./Pet";
import { petfinder } from "./Api";
import Search from "./SearchBox";
import { connect } from "react-redux";
import { RouteComponentProps } from "@reach/router";
import Props from "./Props";

class Results extends React.Component<RouteComponentProps<Props>> {
  public state = {
    pets: []
  };
  public componentDidMount() {
    this.search();
  }
  public search = () => {
    petfinder.pet
      .find({
        output: "full",
        location: this.props.location,
        animal: this.props.animal,
        breed: this.props.breed
      })
      .then(data => {
        let pets;

        if (data.petfinder.pets && data.petfinder.pets.pet) {
          if (Array.isArray(data.petfinder.pets.pet)) {
            pets = data.petfinder.pets.pet;
          } else {
            pets = [data.petfinder.pets.pet];
          }
        } else {
          pets = [];
        }

        this.setState({
          pets
        });
      });
  };
  render() {
    return (
      <div className="search">
        <Search search={this.search} />
        {this.state.pets.map(pet => {
          let breed;
          if (Array.isArray.apply(pet.breeds.breed)) {
            breed = pet.breeds.breed.join(" ");
          } else {
            breed = pet.breeds.breed;
          }

          return (
            <Pet
              key={pet.id}
              animal={pet.animal}
              name={pet.name}
              breed={breed}
              media={pet.media}
              location={`${pet.contact.city}, ${pet.contact.state}`}
              id={pet.id}
            />
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = ({ location, breed, animal }) => ({
  location,
  animal,
  breed
});

export default connect(mapStateToProps)(Results);
