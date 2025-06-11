import { motion } from 'framer-motion';
import BackButton from '../../components/BackButton/BackButton';
import image24 from '../../assets/image24.jpg';
import './Conclusion.scss';

const Conclusion = () => {
  return (
    <motion.div
      className="conclusion-wrapper"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <BackButton />
      <div className="conclusion-content">
        <h1>Conclusion</h1>
        <div className="content-container">
          <div className="background-image">
            <img src={image24} alt="Rice Mill Workers" />
          </div>
          <motion.div
            className="conclusion-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <p>
              In conclusion, 40% of workers are facing respiratory issues and more than 60% of
              workers (62%) are facing financial issues. Most of the workers have no knowledge about
              workers rights and the safety precautions that should be taken while working with
              machines.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Conclusion;