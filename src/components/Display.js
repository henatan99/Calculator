/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling
/* eslint-disable react/destructuring-assignment */
import PropTypes from 'prop-types';

function Display(props) {
  return <div className="result">{props.result}</div>;
}

Display.propTypes = {
  result: PropTypes.string,
};

Display.defaultProps = {
  result: 0,
};

export default Display;
