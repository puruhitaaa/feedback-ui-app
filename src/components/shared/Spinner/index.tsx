import spinner from '../../assets/spinner.gif';

const Spinner = () => {
  return (
    <img
      alt="Loading..."
      src={spinner}
      style={{
        width: '100px',
        margin: 'auto',
        display: 'block',
      }}
    />
  );
};

export default Spinner;
