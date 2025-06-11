import './Abstract.scss';
import BackButton from '../../components/BackButton/BackButton';

const Abstract = () => {
  return (
    <div className="abstract-wrapper">
      <BackButton />
      <div className="abstract-container">
        <div className="abstract-header">
          <h1>Abstract</h1>
        </div>

        <div className="abstract-content">
          <p>
            Our project is to identify the problems faced by the people working in rice mills.
            We conducted a survey in Setti Gunta Road, Nellore. Our main goal is to identify
            the percentage of workers facing health or financial problems due to working in rice mills,
            give awareness on respiratory diseases caused due to working process and give them advice
            on how they can be prevented. We collected the data from workers and found out the number
            of workers facing respiratory problems or financial problems due to low wages.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Abstract;