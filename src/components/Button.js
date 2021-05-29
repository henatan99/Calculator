import PropTypes from 'prop-types';

const Button = ({ name, handleClick }) => <button className="button" type="submit" onClick={() => handleClick(name)}>{name}</button>;
Button.propTypes = {
  name: PropTypes.string,
  handleClick: PropTypes.func,
};

Button.defaultProps = {
  name: null,
  handleClick: null,
};

export default Button;
