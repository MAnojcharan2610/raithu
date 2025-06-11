import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import BackButton from '../../components/BackButton/BackButton';
import image10 from '../../assets/image10.jpg';
import image11 from '../../assets/image11.jpg';
import image12 from '../../assets/image12.jpg';
import image13 from '../../assets/image13.jpg';
import image14 from '../../assets/image14.jpg';
import image15 from '../../assets/image15.jpg';
import image16 from '../../assets/image16.jpg';
import image17 from '../../assets/image17.jpg';
import image18 from '../../assets/image18.jpg';
import image19 from '../../assets/image19.jpg';
import image20 from '../../assets/image20.jpg';
import image21 from '../../assets/image21.jpg';
import image22 from '../../assets/image22.jpg';
import image23 from '../../assets/image23.jpg';
import './Survey-data.scss';

const SurveyData = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const surveyImages = [
    { id: 1, image: image10, alt: 'Survey Analysis 10' },
    { id: 2, image: image11, alt: 'Survey Analysis 11' },
    { id: 3, image: image12, alt: 'Survey Analysis 12' },
    { id: 4, image: image13, alt: 'Survey Analysis 13' },
    { id: 5, image: image14, alt: 'Survey Analysis 14' },
    { id: 6, image: image15, alt: 'Survey Analysis 15' },
    { id: 7, image: image16, alt: 'Survey Analysis 16' },
    { id: 8, image: image17, alt: 'Survey Analysis 17' },
    { id: 9, image: image18, alt: 'Survey Analysis 18' },
    { id: 10, image: image19, alt: 'Survey Analysis 19' },
    { id: 11, image: image20, alt: 'Survey Analysis 20' },
    { id: 12, image: image21, alt: 'Survey Analysis 21' },
    { id: 13, image: image22, alt: 'Survey Analysis 22' },
    { id: 14, image: image23, alt: 'Survey Analysis 23' }
  ];

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <motion.div
      className="survey-data-wrapper"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <BackButton />
      <h1>Survey Analysis Data</h1>
      
      <div className="data-grid">
        {surveyImages.map((item) => (
          <motion.div
            key={item.id}
            className="data-card"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: item.id * 0.1 }}
            onClick={() => handleImageClick(item)}
          >
            <div className="image-wrapper">
              <img src={item.image} alt={item.alt} />
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            className="fullscreen-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div 
              className="fullscreen-content"
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.5 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img src={selectedImage.image} alt={selectedImage.alt} />
              <button 
                className="close-button"
                onClick={() => setSelectedImage(null)}
              >
                ×
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default SurveyData;