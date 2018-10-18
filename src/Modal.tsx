import React from "react";
import { createPortal } from "react-dom";
import { RouteComponentProps } from "@reach/router";

const modalRoot = document.getElementById("modal");

class Modal extends React.Component<
  RouteComponentProps<{ toggleModal: () => void; name: string }>
> {
  private el = document.createElement("div");

  public componentDidMount() {
    if (modalRoot) {
      modalRoot.appendChild(this.el);
    }
  }
  public componentWillUnmount() {
    if (modalRoot) {
      modalRoot.removeChild(this.el);
    }
  }
  public render() {
    return createPortal(this.props.children, this.el);
  }
}

export default Modal;
