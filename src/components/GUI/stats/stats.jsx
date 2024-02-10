import './stats.css';

export default function Stats(block) {
  return (
    <div>


      <div className="impactContainer">

        <div className="impact">
          <img src={block.societal_impact_img} alt="Societal Impact Image" />
          <div className="impactText">
            <h2>Societal Impact</h2>

            <a className="impactLink">See our live impact</a>
          </div>
        </div>

        <div className="impact">
          <img src={block.educational_impact_img} alt="Educational Impact Image" />
          <div className="impactText">
            <h2>Educational Impact</h2>

            <a className="impactLink">See our live impact</a>
          </div>
        </div>

        <div className="impact">
          <img src={block.sustainable_impact_img} alt="Sustainable Impact Image" />
          <div className="impactText">
            <h2>Sustainable Impact</h2>

            <a className="impactLink">See our live impact</a>
          </div>
        </div>
      </div>
      <div className="impactContainer">

        <div className="impact">
          <img src={block.wow_kampung_img} alt="Wow Kampung Image" />
        </div>

        <div className="impact">
          <img src={block.kampung_kampus_img} alt="Kampung Kampus Image" />
        </div>

        <div className="impact">
          <img src={block.balik_kampung_img} alt="Balik Kampung Image" />
        </div>
      </div>
    </div>

  );
}
