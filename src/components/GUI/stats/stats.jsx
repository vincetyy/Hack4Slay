import './stats.css';
import Chart from '../chart/chart'

export default function Stats(block) {
  return (
    <div>


      <div className="impactContainer">

        <div className="impact">
          <img src={block.societal_impact_img} alt="Societal Impact Image" />
          <div className="impactText">
            <h2>Societal Impact</h2>
            <p>We are providing <strong>130,000</strong> people with a gateway to nature</p>
            <a href="link_to_your_live_impact_page" className="impactLink">See our live impact</a>
          </div>
        </div>

        <div className="impact">
          <img src={block.educational_impact_img} alt="Educational Impact Image" />
          <div className="impactText">
            <h2>Educational Impact</h2>
            <p>We are supporting <strong>25,000</strong> volunteers in learning and training</p>
            <a href="link_to_your_live_impact_page" className="impactLink">See our live impact</a>
          </div>
        </div>

        <div className="impact">
          <img src={block.sustainable_impact_img} alt="Sustainable Impact Image" />
          <div className="impactText">
            <h2>Sustainable Impact</h2>
            <p>We are working with <strong>520</strong> partners to further this initiative</p>
            <a href="link_to_your_live_impact_page" className="impactLink">See our live impact</a>
          </div>
        </div>
      </div>
      <div className="impactContainer">

        <div className="impact">
          <h1>Wow Kampung</h1>
          <p>Training & Education...</p>
          <div className="stats">
            <div className="active-learners">
              <h2>Right now, we're supporting</h2>
              <div className="number">4999</div>
              <p>active learners</p>
            </div>
            <div className="bar-chart">
              <Chart />
            </div>
          </div>
        </div>
        <div className="impact">
          <img src={block.educational_impact_img} alt="Educational Impact Image" />
          <div className="impactText">
            <h2>Educational Impact</h2>
            <p>We are supporting <strong>25,000</strong> volunteers in learning and training</p>
            <a href="link_to_your_live_impact_page" className="impactLink">See our live impact</a>
          </div>
        </div>

        <div className="impact">
          <img src={block.sustainable_impact_img} alt="Sustainable Impact Image" />
          <div className="impactText">
            <h2>Sustainable Impact</h2>
            <p>We are working with <strong>520</strong> partners to further this initiative</p>
            <a href="link_to_your_live_impact_page" className="impactLink">See our live impact</a>
          </div>
        </div>
      </div>
    </div>

  );
}
