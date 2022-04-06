import { Link } from 'react-router-dom';
import { Card } from '../../components';

const About = () => {
  return (
    <div className="container">
      <Card>
        <div className="about">
          <h1>About this project</h1>
          <p>
            This is the greatest react app ever to leave feedback for a product
            or service
          </p>
          <p>Version: 1.0.0</p>

          <p>
            <Link to="/">Go home</Link>
          </p>
        </div>
      </Card>
    </div>
  );
};

export default About;
