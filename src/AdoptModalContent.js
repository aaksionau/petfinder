import React from "react";

const AdoptModalContent = props => (
  <React.Fragment>
    <h1>Woould you like to adopt {name}</h1>
    <div className="buttons">
      <button onClick={props.toggleModal}>Yes</button>
      <button onClick={props.toggleModal}>Definitely yes</button>
    </div>
  </React.Fragment>
);

export default AdoptModalContent;
