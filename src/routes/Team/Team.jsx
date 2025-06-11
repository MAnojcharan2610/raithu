import { motion } from 'framer-motion';
import BackButton from '../../components/BackButton/BackButton';
import './Team.scss';

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: "CH.N.V.BHAVYA",
      rollNo: "232U1A3312",
      color: "#3498db"
    },
    {
      id: 2,
      name: "K.MOUNIKA",
      rollNo: "232U1A3336",
      color: "#e74c3c"
    },
    {
      id: 3,
      name: "B.NAGA SUREKHA",
      rollNo: "232U1A3309",
      color: "#2ecc71"
    },
    {
      id: 4,
      name: "CH.L.SAI DIVYA",
      rollNo: "232U1A3315",
      color: "#f39c12"
    }
  ];

  return (
    <motion.div
      className="team-wrapper"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <BackButton />
      <div className="team-content">
        <h1>Our Team</h1>
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              className="member-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              style={{ '--accent-color': member.color }}
            >
              <div className="member-content">
                <div className="member-initials">
                  {member.name.split('.').pop().charAt(0)}
                </div>
                <h2>{member.name}</h2>
                <div className="roll-no">{member.rollNo}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Team;