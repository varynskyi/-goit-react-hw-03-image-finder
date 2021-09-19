import { Component } from 'react';
import { Gallery } from './ImageGalery.styled';

export class ImageGallery extends Component {
  render() {
    return <Gallery>{this.props.children}</Gallery>;
  }
}