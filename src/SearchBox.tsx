import { RouteComponentProps } from "@reach/router";
import { ANIMALS } from "petfinder-client";
import React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import changeAnimal from "./actionCreators/changeAnimal";
import changeBreed from "./actionCreators/changeBreed";
import changeLocation from "./actionCreators/changeLocation";
import getBreeds from "./actionCreators/getBreeds";
import { ApplicationState } from "./reducers";
import { Action } from "redux";
import Props from "./Props";

class Search extends React.Component<RouteComponentProps<Props>> {
  public render() {
    const breeds = this.props.breeds ? this.props.breeds : [];
    return (
      <div className="search-params">
        <form>
          <label htmlFor="location">
            Location
            <input
              id="location"
              value={this.props.location}
              placeholder="Location"
              onChange={this.props.handleLocationChange}
            />
          </label>
          <label htmlFor="animal">
            Animal
            <select
              id="animal"
              value={this.props.animal}
              onChange={this.props.handleAnimalChange}
              onBlur={this.props.handleAnimalChange}
            >
              <option />
              {ANIMALS.map(animal => (
                <option key={animal} value={animal}>
                  {animal}
                </option>
              ))}
            </select>
          </label>
          <label htmlFor="breed">
            Breed
            <select
              id="animal"
              value={this.props.breed}
              onChange={this.props.handleBreedChange}
              onBlur={this.props.handleBreedChange}
              disabled={!breeds.length}
            >
              {breeds.map((breed: string) => (
                <option key={breed} value={breed}>
                  {breed}
                </option>
              ))}
            </select>
          </label>
          <button onClick={this.props.search}>Submit</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (obj: ApplicationState) => ({
  breed: obj.breed,
  breeds: obj.breeds,
  animal: obj.animal,
  location: obj.location
});

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
  handleAnimalChange(e: React.ChangeEvent<HTMLSelectElement>) {
    dispatch(changeAnimal(e.target.value));
    dispatch(getBreeds());
  },
  handleBreedChange(e: React.ChangeEvent<HTMLSelectElement>) {
    dispatch(changeBreed(e.target.value));
  },
  handleLocationChange(e: React.ChangeEvent<HTMLInputElement>) {
    dispatch(changeLocation(e.target.value));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
