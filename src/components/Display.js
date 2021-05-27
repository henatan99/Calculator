import PropTypes from 'prop-types';

function Display({ result, process }) {
  return (
    <div className="display">
      <div className="result">{result}</div>
      <div className="process">{process}</div>
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
