import PropTypes from 'prop-types';
import Button from './Button';

function ButtonPanel(props) {
  const { handleClick } = props;
  return (
    <div className="button-panel">
      <div className="group-1">
        <Button name="AC" handleClick={handleClick} color="#e0e0e0" wide="25%"/>
        <Button name="+/-" handleClick={handleClick} color="#e0e0e0" wide="25%"/>
        <Button name="%" handleClick={handleClick} color="#e0e0e0" wide="25%"/>
        <Button name="÷" handleClick={handleClick} color="#f5913e" wide="25%"/>
      </div>
      <div className="group-2">
        <Button name="7" handleClick={handleClick} color="#e0e0e0" wide="25%"/>
        <Button name="8" handleClick={handleClick} color="#e0e0e0" wide="25%"/>
        <Button name="9" handleClick={handleClick} color="#e0e0e0" wide="25%"/>
        <Button name="X" handleClick={handleClick} color="#f5913e" wide="25%"/>
      </div>
      <div className="group-3">
        <Button name="4" handleClick={handleClick} color="#e0e0e0" wide="25%"/>
        <Button name="5" handleClick={handleClick} color="#e0e0e0" wide="25%"/>
        <Button name="6" handleClick={handleClick} color="#e0e0e0" wide="25%"/>
        <Button name="-" handleClick={handleClick} color="#f5913e" wide="25%"/>
      </div>
      <div className="group-4">
        <Button name="1" handleClick={handleClick} color="#e0e0e0" wide="25%"/>
        <Button name="2" handleClick={handleClick} color="#e0e0e0" wide="25%"/>
        <Button name="3" handleClick={handleClick} color="#e0e0e0" wide="25%"/>
        <Button name="+" handleClick={handleClick} color="#f5913e" wide="25%"/>
      </div>
      <div className="group-5">
        <Button name="0" handleClick={handleClick} color="#e0e0e0" wide="50%"/>
        <Button name="." handleClick={handleClick} color="#e0e0e0" wide="25%"/>
        <Button name="=" handleClick={handleClick} color="#f5913e" wide="25%"/>
      </div>
    </div>
  );
}

ButtonPanel.propTypes = {
  handleClick: PropTypes.func,
};

ButtonPanel.defaultProps = {
  handleClick: null,
};

export default ButtonPanel;
