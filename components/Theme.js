import Image from "next/dist/client/image";
import { Card } from "react-bootstrap";
import health from "../public/health.png";
import instagram from "../public/instagram.png";

export default function Theme() {
return (
<div className="section">
 <div className="row">
    <Card className="card col-xs-12 col-sm-4">
        <Card.Img variant="top" src={health} className="img-card" />
        <Card.Body className="card-content">
          <Card.Title className="card-title">Healthcare</Card.Title>
          <Card.Text>
            The Healthcare track aims to create innovative projects that address various health-related issues.
            Today, we are faced with modern health challenges such as the COVID19 pandemic, mental health, obesity,
            cardiovascular diseases and many more.
          </Card.Text>
        </Card.Body>
      </Card>

      <Card className="card col-xs-12 col-sm-4">
        <Card.Img variant="top" src={instagram} className="img-card" />
        <Card.Body className="card-content">
          <Card.Title className="card-title">Education</Card.Title>
          <Card.Text>
          The Education track aims to create projects that connect and empower students from all aspects of life.
           Ever since the pandemic hit us, the education system had to adapt to the new normal. We, thus, encourage you to build 
           something that modernizes education and makes it accessible for everyone
          </Card.Text>
        </Card.Body>
      </Card>

      <Card className="card col-xs-12 col-sm-4">
        <Card.Img variant="top" src="C:\Users\parit\Documents\Hackathon\hackmoreish\public\health.png" className="img-card" />
        <Card.Body className="card-content">
          <Card.Title className="card-title">Environment</Card.Title>
          <Card.Text>
          This is the only planet we got; we have no planet B (at least not now, not as good as the one we got). 
          Projects in the Environment track aim to a better and more sustainable environment. 
          This is the opportunity to train people into acting more responsibly and create greener technologies for the coming future.
          </Card.Text>
        </Card.Body>
      </Card>

      <Card className="card col-xs-12 col-sm-4">
        <Card.Img variant="top" src="C:\Users\parit\Documents\Hackathon\hackmoreish\public\health.png" className="img-card" />
        <Card.Body className="card-content">
          <Card.Title className="card-title">Open Innovation</Card.Title>
          <Card.Text>
          Have ideas that do not fall into any of the above tracks? Worry not. The best part is we encourage you to
           exercise your ideas and develop technologies that address a problem, without any restrictions.
          </Card.Text>
        </Card.Body>
      </Card>

      <Card className="card col-xs-12 col-sm-4">
        <Card.Img variant="top" src="C:\Users\parit\Documents\Hackathon\hackmoreish\public\health.png" className="img-card" />
        <Card.Body className="card-content">
          <Card.Title className="card-title">Games</Card.Title>
          <Card.Text>
            The Healthcare track aims to create innovative projects that address various health-related issues.
            Today, we are faced with modern health challenges such as the COVID19 pandemic, mental health, obesity,
            cardiovascular diseases and many more. 
          </Card.Text>
        </Card.Body>
      </Card>

      <Card className="card col-xs-12 col-sm-4">
        <Card.Img variant="top" src="C:\Users\parit\Documents\Hackathon\hackmoreish\public\health.png" className="img-card" />
        <Card.Body className="card-content">
          <Card.Title className="card-title">A.I.</Card.Title>
          <Card.Text>
          Artificial intelligence is the intelligence displayed by computers by perceiving their environment. 
          AI-based devices can take actions on their own to achieve a set goal. .Can computers perform all tasks that require human 
           intelligence in the future? Artificial intelligence professionals say that they can. 
          </Card.Text>
        </Card.Body>
      </Card>
</div> 
</div>
);
}