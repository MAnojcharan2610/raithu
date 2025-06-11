import './Introduction.scss';
import image2 from '../../assets/image2.jpg';
import image3 from '../../assets/image3.jpg';
import image4 from '../../assets/image4.jpg';
import image5 from '../../assets/image5.jpg';
import BackButton from '../../components/BackButton/BackButton';

const Introduction = () => {
  return (
    <div className="introduction-wrapper">
      <BackButton />
      <div className="introduction-container">
        <div className="introduction-header">
          <h1>Introduction</h1>
        </div>

        <div className="content-sections">
          <section className="content-section">
            {/* First paragraph and image */}
            <p>
              Rice mill workers play a crucial role in the processing and production of one of the
              world's most essential staple foods. However, despite their importance, these workers
              often face numerous challenges that affect their health, well-being, and livelihood. Long
              working hours, exposure to dust and noise, lack of proper safety measures, and
              inadequate wages are common issues in many rice mills, especially in developing
              regions. Additionally, the absence of job security and limited access to healthcare or
              social benefits further worsens their condition. Understanding and addressing these
              problems is essential for improving their quality of life and ensuring a more sustainable
              rice production industry.
            </p>
            <div className="image-section">
              <img src={image2} alt="Rice mill workers in action" />
              <span className="image-caption">Daily challenges faced by rice mill workers</span>
            </div>

            {/* Second paragraph and image */}
            <p>
              Rice mill workers form the backbone of the rice processing industry, which is vital for
              feeding millions of people across the globe. Despite their indispensable contribution,
              these workers often endure extremely poor working conditions. Most rice mills,
              especially in rural and underdeveloped areas, lack modern equipment and basic safety
              infrastructure, exposing workers to high levels of dust, noise, and heat for prolonged
              hours. Continuous exposure to rice husk dust can lead to serious respiratory issues such
              as asthma, bronchitis, and other lung-related diseases. In addition, workers frequently
              suffer from musculoskeletal problems due to repetitive manual tasks and the lifting of
              heavy loads. Low wages, delayed payments, lack of job security, and absence of labor
              rights or union representation add to their hardships. Many rice mill workers are also
              deprived of access to healthcare, clean drinking water, sanitation, and housing, further
              deteriorating their quality of life. Women workers, who often form a significant portion
              of the workforce, face gender-based discrimination, lower pay, and harassment. These
              challenges highlight the urgent need for labor reforms, improved working conditions,
              and better health and welfare programs for rice mill workers to ensure their dignity and
              well-being.
            </p>
            <div className="image-section">
              <img src={image3} alt="Health and safety concerns" />
              <span className="image-caption">Poor working conditions in rice mills</span>
            </div>

            {/* Middle paragraphs */}
            <p>
              Rice is a staple food for a large portion of the world’s population, especially in Asia,
              where it forms a major part of the daily diet. Behind every grain of rice that reaches our
              plate is the hard labor of rice mill workers, who process raw paddy into edible rice.
              Despite their essential role in the food supply chain, these workers often face numerous
              difficulties in their day-to-day lives. The nature of their work is physically demanding,
              and it is often carried out in hazardous environments with little regard for worker safety
              and welfare. Most of these issues are the result of poor regulation, lack of modernization
              in the milling sector, and the exploitation of cheap labor, especially in developing
              countries.
            </p>
            <p>
              One of the most pressing problems faced by rice mill workers is the harsh working
              environment. Most rice mills generate a large amount of dust during the de-husking and
              polishing processes. Workers are constantly exposed to fine rice husk dust, which poses
              serious health risks. Prolonged inhalation of this dust can lead to chronic respiratory
              diseases such as asthma, bronchitis, and even long-term lung damage. Unfortunately,
              many mills do not provide adequate protective gear such as masks or proper ventilation
              systems. The situation is made worse by long working hours, which often exceed legal
              limits. Workers may be required to work for 10 to 12 hours a day, sometimes without
              sufficient breaks, leading to fatigue and long-term health issues such as back pain and
              joint disorders.
            </p>
            <p>
              In addition to health problems, rice mill workers often face economic exploitation.
              Many are paid extremely low wages that are not proportionate to the amount of physical
              labor they perform. Payment may be irregular, with some workers receiving wages on
              a weekly or monthly basis, while others are paid only after the completion of large
              workloads. In some cases, workers are hired through informal channels, which means
              they are not officially registered as employees and are therefore not entitled to benefits
              such as health insurance, paid leave, or pensions. This lack of job security makes them
              highly vulnerable to exploitation and sudden unemployment.
            </p>
            <p>
              Women working in rice mills face even greater challenges. They are often paid less than
              their male counterparts for the same amount of work and are more likely to be employed
              in temporary or part-time roles. In addition to facing wage discrimination, many women
              workers also deal with unsafe working conditions and harassment, with very few
              mechanisms in place to report such incidents. The dual burden of labor at the mill and
              household responsibilities adds to their stress and limits their opportunities for upward
              mobility or education.
            </p>
            <p>
              Living conditions for rice mill workers are also often substandard. Many workers live
              in small, overcrowded quarters near the mill premises, with limited access to clean
              water, sanitation facilities, and electricity. These poor living conditions, combined with
              long hours of strenuous work, take a toll on their physical and mental health. Education
              for their children is often neglected due to financial constraints, which perpetuates a
              cycle of poverty and limited opportunity across generations.
            </p>
            <div className="image-section">
              <img src={image4} alt="Modern rice mill facility" />
              <span className="image-caption">Need for modernization in rice mills</span>
            </div>

            {/* Add the fifth image before conclusion */}
            <div className="image-section">
              <img src={image5} alt="Workers' living conditions" />
              <span className="image-caption">Impact on workers' families and communities</span>
            </div>

            {/* Conclusion paragraphs */}
            <p>
              In conclusion, rice mill workers play an essential but often overlooked role in the food
              production chain. While their labor supports the global demand for rice, they continue
              to face significant challenges in terms of health, wages, working conditions, and overall
              quality of life. Addressing these issues is not only a matter of social justice but also
              essential for creating a more sustainable and humane agricultural industry. It is the
              responsibility of governments, mill owners, and society as a whole to recognize their
              contribution and work toward improving their lives.
            </p>
            <p>
              Solving the problems faced by rice mill workers requires a multi-dimensional approach
              involving policy changes, awareness campaigns, industrial reforms, and community
              support. While the government plays a critical role in setting labor standards,
              enforcement is often weak or non-existent, particularly in smaller mills located in
              remote areas. Therefore, stronger monitoring mechanisms must be established to ensure
              compliance with safety regulations, minimum wage laws, and working hour limits.
              Labor inspectors should regularly visit mills to assess conditions and penalize those
              who fail to meet basic standards.
            </p>
            <p>
              Another key solution is the modernization of rice mills. Many of the health hazards
              faced by workers—such as respiratory problems caused by rice husk dust—can be
              minimized through better technology and automation. Upgrading machinery not only
              improves production efficiency but also reduces the physical burden on workers.
              Additionally, simple investments like installing dust extractors, providing masks, ear
              protection, and ergonomic tools can make a significant difference in worker health and
              productivity.
            </p>
            <p>
              Education and training also play an important role. Many workers, especially women,
              are unaware of their rights under labor laws. Organizing awareness drives and
              workshops can empower workers to demand better conditions and resist exploitation.
              Non-governmental organizations (NGOs) and labor unions can partner with local
              governments to reach out to these workers and offer legal aid, counseling, and training
              in alternative skills, helping them transition to better job opportunities if desired.
            </p>
            <p>
              Furthermore, ensuring access to basic services like healthcare, clean drinking water,
              and housing is essential. Mobile health camps can provide regular check-ups, while
              government housing schemes can be extended to laborers living in poor conditions near
              mill premises. Special provisions for the education of workers’ children would help
              break the cycle of poverty that often keeps families trapped in low-wage labor
            </p>
          </section>

          {/* Continue adding all sections in the same pattern */}
        </div>
      </div>
    </div>
  );
};

export default Introduction;