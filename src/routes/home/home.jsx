import './home.scss';
import backgroundImage from '../../assets/image1.jpg';

const Home = () => {
  const projectTitle = {
    main: "IDENTIFICATION OF PROBLEMS FACED BY RICE MILL WORKERS",
    subtitle: "A Community Service Project Report",
    university: "GEETHANJALI INSTITUTE OF SCIENCE AND"
  };

  const teamMembers = [
    { name: "CH.N.V.BHAVYA", id: "232U1A3312" },
    { name: "K.MOUNIKA", id: "232U1A3336" },
    { name: "B.NAGA SUREKHA", id: "232U1A3309" },
    { name: "CH.L.SAI DIVYA", id: "232U1A3315" }
  ];

  return (
    <div className="project-container">
      {/* Optional: If you want to use the image directly */}
      <img src={backgroundImage} alt="Rice mill background" className="background-image" />
      <div className="content-wrapper">
        <header className="project-header">
          <h1>{projectTitle.main}</h1>
          <h2>{projectTitle.subtitle}</h2>
          <h3>Submitted to</h3>
          <h2>{projectTitle.university}</h2>
        </header>

        <main className="project-content">
          <section className="team-section">
            <h3>Submitted By</h3>
            <div className="team-grid">
              {teamMembers.map((member, index) => (
                <div key={index} className="team-member">
                  <p className="member-name">{member.name}</p>
                  <p className="member-id">({member.id})</p>
                </div>
              ))}
            </div>
          </section>

          <section className="guide-section">
            <h3>Under the Esteemed Guidance Of</h3>
            <p className="guide-name">Dr. P.BABU,M.E, Ph. D.</p>
            <p className="department">Department of Computer Science & Engineering (AI&ML)</p>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Home;