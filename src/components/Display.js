import PropTypes from 'prop-types';

function Display({ result, process }) {
  return (
    <div>
      <div className="result">{result}</div>
    </div>
  );
}

Display.propTypes = {
  result: PropTypes.string,
};

Display.defaultProps = {
  result: 0,
};

export default Display;
