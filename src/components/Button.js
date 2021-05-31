import PropTypes from 'prop-types';

const btnClass = (btnName) => {  
  if (['+', '-', 'X', '÷', '='].includes(btnName)) {
    return "yellow-button";
  }
  else if (btnName === '0') {
    return "btn-0";
  }
  else {
    return "button";
  }
}

const Button = ({ name, handleClick }) => <button className={btnClass(name)} type="submit" onClick={() => handleClick(name)}>{name}</button>;
Button.propTypes = {
  name: PropTypes.string,
  handleClick: PropTypes.func,
};

Button.defaultProps = {
  name: null,
  handleClick: null,
};

export default Button;
