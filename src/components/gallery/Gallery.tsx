import React, { useCallback, useEffect, useState } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { useQuery } from "@tanstack/react-query";
import { getImages } from "../../api/apis";

function GalleryImages() {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  const imagesQuery = useQuery({
    queryKey: ["images"],
    queryFn: getImages,
  });

  const [photos, setPhotos] = useState<any[]>([]);

  useEffect(() => {
    if (imagesQuery.data) {
      setPhotos(
        imagesQuery.data.map((item) => ({
          src: `https://ebukabackend-cq9d.onrender.com/api/images/image/${item.id}`,
          width: item.type == "portrait" ? 4 : 8,
          height: item.type == "portrait" ? 4 : 4,
        }))
      );
    }
  }, [imagesQuery?.data]);

  return (
    <div className="gallery">
      <Gallery photos={photos} onClick={openLightbox} />
      {imagesQuery.data && imagesQuery.isSuccess && (
        <ModalGateway>
          {viewerIsOpen ? (
            <Modal onClose={closeLightbox}>
              <Carousel
                currentIndex={currentImage}
                views={photos.map((x) => ({
                  ...x,
                }))}
              />
            </Modal>
          ) : null}
        </ModalGateway>
      )}
    </div>
  );
}

export default GalleryImages;
