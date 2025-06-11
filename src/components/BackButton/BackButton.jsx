import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import './BackButton.scss';

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <motion.button
      className="back-button"
      onClick={() => navigate(-1)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
    >
      <span>←</span> Back
    </motion.button>
  );
};

export default BackButton;