/* eslint-disable react/prop-types */
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import {
  Box,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
} from "@chakra-ui/react";
import { useState } from "react";

export function ImageSlider({ imageList }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openModalSlider = (imgIndex) => {
    setCurrentImageIndex(imgIndex);
    setIsModalOpen(true);
  };
  const renderImages = () => {
    return imageList.map((imageLink, i) => {
      return (
        <Image
          h={200}
          src={imageLink}
          boxShadow="xl"
          borderRadius="xl"
          key={imageLink}
          onClick={() => openModalSlider(i)}
        />
      );
    });
  };
  const slider = (
    <Slide
      defaultIndex={currentImageIndex}
      infinite={false}
      autoplay={false}
      arrows={imageList.length > 1}
    >
      {renderImages()}
    </Slide>
  );

  const modalSlider = (
    <Modal
      size="6xl"
      isOpen={isModalOpen}
      onClose={() => setIsModalOpen(false)}
    >
      <ModalOverlay />
      <ModalContent bg="transparent" boxShadow="none">
        <ModalCloseButton zIndex={1} marginRight={3} size="lg" />
        <ModalBody>{slider}</ModalBody>
      </ModalContent>
    </Modal>
  );
  return (
    <>
      <Box w={350}>{slider}</Box>
      {modalSlider}
    </>
  );
}
