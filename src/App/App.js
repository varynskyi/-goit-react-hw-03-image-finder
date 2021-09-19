import { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';

import { fetchImages } from '../services/api';
import { Container } from './App.styled';
import { Searchbar } from '../Components/Searchbar/Searchbar';
import { ImageGallery } from '../Components/ImageGallery/ImageGallery';
import { ImageGalleryItem } from '../Components/ImageGalleryItem/ImageGalleryItem';
import { Button } from '../Components/Button/Button';
import { Spinner } from '../Components/Loader/Loader';
import Modal from '../Components/Modal/Modal';

import '../App.css';
import 'react-toastify/dist/ReactToastify.css';

export class App extends Component {
  state = {
    imageName: null,
    images: [],
    status: 'idle',
    page: 1,
    showModal: false,
    largeUrl: '',
  };

  handleFormSubmit = imageName => {
    if (this.state.imageName === imageName) {
      toast('Your request has already been completed, please enter a new one');
      return;
    }
    this.resetState();
    this.setState({ imageName });
  };

  handleSelectedImg = imageUrl => {
    this.setState({ selectedImg: imageUrl });
  };

  resetState = () => {
    this.setState({
      imageName: null,
      images: [],
      status: 'idle',
      page: 1,
      showModal: false,
      largeUrl: '',
    });
  };

  toggleModal = () => {
    this.setState(state => ({
      showModal: !state.showModal,
    }));
  };

  selectedImg = data => {
    this.setState({
      largeUrl: data,
    });
  };

  onLoadMore = () => {
    this.setState(prevState => ({
      page: this.state.page + 1,
    }));
  };

  async componentDidUpdate(prevProps, prevState) {
    const { imageName, page } = this.state;

    if (
      prevState.imageName !== this.state.imageName ||
      prevState.page !== this.state.page
    ) {
      this.setState({
        status: 'pending',
      });

      if (imageName.trim() === '') {
        this.setState({
          status: 'idle',
        });
        return toast.error('Please enter your search data');
      }

      try {
        const images = await fetchImages(imageName, page);

        if (images.length === 0) {
          this.setState({
            status: 'idle',
          });
          return toast.error('No matches found');
        }

        this.setState(prevState => ({
          images: [...prevState.images, ...images],
          status: 'resolved',
        }));
      
      } catch (error) {
        this.setState({ status: 'rejected' });
        toast.error('Error');
      }

      page > 1 &&
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        });
    }
  }

  render() {
    const { images, status, showModal, largeUrl } = this.state;

    return (
      <Container>
        <Searchbar onSearch={this.handleFormSubmit} />
        {status === 'pending' && <Spinner />}
        <ImageGallery>
          <ImageGalleryItem
            images={images}
            toggleModal={this.toggleModal}
            selectedImg={this.selectedImg}
          />
        </ImageGallery>
        {images.length > 11 && <Button onClick={this.onLoadMore} />}

        {showModal && (
          <Modal
            largeImg={largeUrl}
            showLoader={showModal}
            toggleModal={this.toggleModal}
          />
        )}
        <ToastContainer autoClose={3000} />
      </Container>
    );
  }
}