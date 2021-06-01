import PropTypes from 'prop-types';

const btnStyle = (color, wide) => {  
  return ({
    backgroundColor: color,
    width: wide,
    height: '100px',
    color: '#000',
    fontSize: '20px',
    borderColor: '#bababa',
  });
}

const Button = ({ name, handleClick, color, wide }) => <button style={btnStyle(color, wide)} type="submit" onClick={() => handleClick(name)}>{name}</button>;
Button.propTypes = {
  name: PropTypes.string,
  handleClick: PropTypes.func,
};

Button.defaultProps = {
  name: null,
  handleClick: null,
};

export default Button;
