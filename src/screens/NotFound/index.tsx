import { Link } from 'react-router-dom';
import { Card } from '../../components';

const NotFound = () => {
  return (
    <div className="container">
      <Card>
        <div className="about">
          <h1>Page not found</h1>
          <p>
            The page you are trying to visit does not exist. If you think you
            might be lost, click the navigation below to head back to the main
            page.
          </p>

          <p>
            <Link to="/">Go home</Link>
          </p>
        </div>
      </Card>
    </div>
  );
};

export default NotFound;
