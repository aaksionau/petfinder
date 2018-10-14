import React from "react";
import { Link } from "@reach/router";
import styled, { keyframes } from "react-emotion";
import colors from "./colors";

const Container = styled("header")`
  background-color: ${colors.dark};
  position: sticky;
  top: 0;
  z-index: 10;
`;
const Spin = keyframes`
    from {
        transform:rotate(0deg)
    }

    to{
        transform:rotate(360deg)
    }
`;

const SpyGlass = styled("span")`
  display: inline-block;
  animation: ${props => props.frequency}s ${Spin} linear infinite;
`;

const NavLink = styled(Link)`
  &:hover {
    text-decoration: underline;
  }
`;

class NavBar extends React.Component {
  state = {
    frequency: 10
  };
  halfFrequency = () => {
    this.setState({ frequency: this.state.frequency / 2 });
  };
  render() {
    return (
      <Container>
        <NavLink to="/">Adopt me!</NavLink>
        <NavLink to="/search-params">
          <SpyGlass
            frequency={this.state.frequency}
            onClick={this.halfFrequency}
          >
            <i className="fas fa-search" />
          </SpyGlass>
        </NavLink>
      </Container>
    );
  }
}
export default NavBar;
