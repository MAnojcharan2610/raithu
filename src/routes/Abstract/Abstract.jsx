import { motion } from 'framer-motion';
import BackButton from '../../components/BackButton/BackButton';
import image25 from '../../assets/image25.jpg';
import './Abstract.scss';

const Abstract = () => {
  return (
    <motion.div
      className="abstract-wrapper"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <BackButton />
      <div className="abstract-content">
        <div className="background-image">
          <img src={image25} alt="Background" />
        </div>
        <motion.div 
          className="content-container"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <h1>Abstract</h1>
          <div className="text-content">
            <p>
              Our project is to identify the problems faced by the people working in rice mills.
              We conducted a survey in Setti Gunta Road, Nellore. Our main goal is to identify
              the percentage of workers facing health or financial problems due to working in rice mills,
              give awareness on respiratory diseases caused due to working process and give them advice
              on how they can be prevented. We collected the data from workers and found out the number
              of workers facing respiratory problems or financial problems due to low wages.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Abstract;