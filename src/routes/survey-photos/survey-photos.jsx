import {  AnimatePresence,motion } from 'framer-motion';
import { useState } from 'react';
import BackButton from '../../components/BackButton/BackButton';
import image6 from '../../assets/image6.jpg';
import image7 from '../../assets/image7.jpg';
import image8 from '../../assets/image8.jpg';
import image9 from '../../assets/image9.jpg';
import './survey-photos.scss';

const SurveyPhotos = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const photos = [
    {
      id: 1,
      src: image6,
      title: 'Working Conditions',
      description: 'Daily life of rice mill workers showing their working environment'
    },
    {
      id: 2,
      src: image7,
      title: 'Safety Measures',
      description: 'Workers using protective equipment and safety gear'
    },
    {
      id: 3,
      src: image8,
      title: 'Mill Infrastructure',
      description: 'Current state of rice mill machinery and facilities'
    },
    {
      id: 4,
      src: image9,
      title: 'Community Impact',
      description: 'How rice mills affect the local community and workers\' families'
    }
  ];

  return (
    <div className="survey-photos">
      <BackButton />
      <h1>Survey Photo Documentation</h1>
      <div className="photos-grid">
        {photos.map((photo) => (
          <motion.div
            key={photo.id}
            className="photo-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            onClick={() => setSelectedPhoto(photo)}
          >
            <div className="photo-wrapper">
              <img src={photo.src} alt={photo.title} loading="lazy" />
              <div className="photo-overlay">
                <span>Click to expand</span>
              </div>
            </div>
            <div className="photo-info">
              <h3>{photo.title}</h3>
              <p>{photo.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedPhoto && (
          <motion.div 
            className="fullscreen-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPhoto(null)}
          >
            <motion.div 
              className="fullscreen-content"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={e => e.stopPropagation()}
            >
              <img src={selectedPhoto.src} alt={selectedPhoto.title} />
              <div className="fullscreen-info">
                <h2>{selectedPhoto.title}</h2>
                <p>{selectedPhoto.description}</p>
              </div>
              <button 
                className="close-button"
                onClick={() => setSelectedPhoto(null)}
              >
                ×
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SurveyPhotos;