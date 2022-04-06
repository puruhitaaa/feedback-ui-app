import { Link } from 'react-router-dom';

interface HeaderProps {
  text?: string;
  bgColor?: string;
}

const Header = ({
  text = 'Feedback UI',
  bgColor = 'rgba(0,0,0,0.4)',
}: HeaderProps) => {
  const headerStyles = {
    backgroundColor: bgColor,
  };

  return (
    <header style={headerStyles}>
      <div className="container">
        <Link to="/">
          <h2>{text}</h2>
        </Link>
      </div>
    </header>
  );
};

export default Header;
