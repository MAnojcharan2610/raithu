import { useState } from 'react';
import {  AnimatePresence,motion } from 'framer-motion';
import './Questionnarie.scss';
import BackButton from '../../components/BackButton/BackButton';

const Questionnarie = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const questions = [
    {
      id: 'q1',
      question: 'What is your name?',
      type: 'text',
      required: true
    },
    {
      id: 'q2',
      question: 'What is your phone number?',
      type: 'tel',
      required: true
    },
    {
      id: 'q3',
      question: 'What is your aadhaar card number?',
      type: 'text',
      required: true
    },
    {
      id: 'q4',
      question: 'What is your address?',
      type: 'textarea',
      required: true
    },
    {
      id: 'q5',
      question: 'Do you have access to essential benefits like medical allowances or maternity leave?',
      type: 'radio',
      options: ['Yes', 'No'],
      required: true
    },
    {
      id: 'q6',
      question: 'What is the machinery used in rice mill? Does the machinery cause any physical harm?',
      type: 'textarea',
      required: true
    },
    {
      id: 'q7',
      question: 'Are you facing any health issues related to respiratory system?',
      type: 'radio',
      options: ['Yes', 'No', 'Sometimes'],
      required: true
    },
    {
      id: 'q8',
      question: 'Are you facing any financial issues?',
      type: 'radio',
      options: ['Yes', 'No'],
      required: true
    },
    {
      id: 'q9',
      question: 'Are the wages paid to you sufficient to meet your monthly expenditure?',
      type: 'radio',
      options: ['Yes', 'No', 'Barely sufficient'],
      required: true
    },
    {
      id: 'q10',
      question: 'What are the problems faced by you due to long working hours?',
      type: 'textarea',
      required: true
    },
    {
      id: 'q11',
      question: 'Do you take any safety measures while working with machines?',
      type: 'radio',
      options: ['Always', 'Sometimes', 'Never'],
      required: true
    },
    {
      id: 'q12',
      question: 'What is your opinion on female workers getting paid less than male workers?',
      type: 'textarea',
      required: true
    },
    {
      id: 'q13',
      question: 'Does the rice mill have proper ventilation?',
      type: 'radio',
      options: ['Yes', 'No', 'Partially'],
      required: true
    },
    {
      id: 'q14',
      question: 'Do you have any other source of income?',
      type: 'radio',
      options: ['Yes', 'No'],
      required: true
    },
    {
      id: 'q15',
      question: 'Are you aware about workers\' rights?',
      type: 'radio',
      options: ['Yes', 'No', 'Partially aware'],
      required: true
    }
  ];

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleChange = (id, value) => {
    setAnswers(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.keys(answers).length === questions.length) {
      setSubmitted(true);
      console.log('Submitted answers:', answers);
    } else {
      alert('Please answer all questions');
    }
  };

  const progressPercentage = ((currentStep + 1) / questions.length) * 100;

  if (submitted) {
    return (
      <motion.div 
        className="questionnaire-success"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <h2>Thank you for completing the survey! 🎉</h2>
        <p>Your responses have been recorded.</p>
        <button onClick={() => {
          setAnswers({});
          setSubmitted(false);
          setCurrentStep(0);
        }}>
          Take Another Survey
        </button>
      </motion.div>
    );
  }

  return (
    <div className="questionnaire-wrapper">
      <BackButton />
      <div className="progress-bar">
        <div 
          className="progress-fill"
          style={{ width: `${progressPercentage}%` }}
        />
        <span className="progress-text">
          Question {currentStep + 1} of {questions.length}
        </span>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep}
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -50, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="question-container"
        >
          <h3 className="question-number">Question {currentStep + 1}</h3>
          <div className="question-content">
            <h2>{questions[currentStep].question}</h2>
            
            {questions[currentStep].type === 'textarea' ? (
              <textarea
                value={answers[questions[currentStep].id] || ''}
                onChange={(e) => handleChange(questions[currentStep].id, e.target.value)}
                placeholder="Type your answer here..."
              />
            ) : questions[currentStep].type === 'radio' ? (
              <div className="radio-options">
                {questions[currentStep].options.map((option) => (
                  <motion.div
                    key={option}
                    className="radio-option"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <input
                      type="radio"
                      id={`${questions[currentStep].id}-${option}`}
                      name={questions[currentStep].id}
                      value={option}
                      checked={answers[questions[currentStep].id] === option}
                      onChange={(e) => handleChange(questions[currentStep].id, e.target.value)}
                    />
                    <label htmlFor={`${questions[currentStep].id}-${option}`}>
                      {option}
                    </label>
                  </motion.div>
                ))}
              </div>
            ) : (
              <input
                type={questions[currentStep].type}
                value={answers[questions[currentStep].id] || ''}
                onChange={(e) => handleChange(questions[currentStep].id, e.target.value)}
                placeholder="Type your answer here..."
              />
            )}
          </div>

          <div className="navigation-buttons">
            {currentStep > 0 && (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handlePrev}
                className="prev-button"
              >
                Previous
              </motion.button>
            )}
            {currentStep < questions.length - 1 ? (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleNext}
                className="next-button"
                disabled={!answers[questions[currentStep].id]}
              >
                Next
              </motion.button>
            ) : (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleSubmit}
                className="submit-button"
                disabled={!answers[questions[currentStep].id]}
              >
                Submit
              </motion.button>
            )}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Questionnarie;