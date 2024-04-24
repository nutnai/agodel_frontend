// components/PictureBox.tsx

import React, { useState, useRef } from 'react';
import Slider from 'react-slick';
import Modal from './modal';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface PictureBoxProps {
  images: string[];
}

const PictureBox: React.FC<PictureBoxProps> = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [showModal, setShowModal] = useState(false);
  const sliderRef = useRef<Slider>(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '10px',
  };

  const handleThumbnailClick = (image: string) => {
    setSelectedImage(image);
  };

  const goToPrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const goToNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const handleViewDetail = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="mt-10 w-7/12 mx-auto">
      <div className="relative overflow-hidden">
        <img
          src={selectedImage}
          alt="Main"
          className=" w-auto mx-auto h-96 object-cover transition-transform duration-300 transform hover:scale-110 cursor-pointer"
          style={{ width: 'auto' }}
          onClick={handleViewDetail}
        />
      </div>
      <div className="mt-6 relative">
        <Slider {...settings} ref={sliderRef}>
          {images.map((image, index) => (
            <div
              key={index}
              onClick={() => handleThumbnailClick(image)}
              className="w-full h-24 "
            >
              <img
                src={image}
                alt={`Image ${index + 1}`}
                className="w-full h-full object-cover cursor-pointer"
              />
            </div>
          ))}
        </Slider>
        <button
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full"
          onClick={goToPrev}
        >
          &lt;
        </button>
        <button
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full"
          onClick={goToNext}
        >
          &gt;
        </button>
      </div>
      {showModal && <Modal imageUrl={selectedImage} onClose={handleCloseModal} />}
    </div>
  );
};

export default PictureBox;
