import * as React from "react";
import "./MapModal.scss";

import Modal from "react-bootstrap/Modal";
import GoogleApiWrapper from "./MapContainer";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card"

const styles = {
  width: '78vh',
  height: '80vh'
};


class MapModal extends React.Component {
  render() {
    return (
      <div>
        <Modal.Dialog size="lg">
          <Modal.Header>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>

          <Modal.Body style={styles}>
            <GoogleApiWrapper className="GoogleMaps"></GoogleApiWrapper>
          </Modal.Body>

        </Modal.Dialog>
      </div>
    );
  }
}

export default MapModal;
