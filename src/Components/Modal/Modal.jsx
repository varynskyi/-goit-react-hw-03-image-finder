import { Component } from 'react';
import { Overlay, Modalstyle } from './Modal.styled';

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleEscClick);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleEscClick);
  }

  handleEscClick = event => {
    if (event.code === 'Escape') {
      this.props.toggleModal();
    }
  };

  handleOverlayClick = e => {
    if (e.target === e.currentTarget) {
      this.props.toggleModal();
    }
  };

  render() {
    return (
      <Overlay onClick={this.handleOverlayClick}>
        <Modalstyle>
          <img src={this.props.largeImg} alt="" />
        </Modalstyle>
      </Overlay>
    );
  }
}