/* eslint-disable react/prop-types */
import Button from './Button';

function ButtonPanel(props) {
  const { handleClick } = props;
  return (
    <div className="button-panel">
      <div className="group-1">
        <Button name="AC" handleClick={handleClick} />
        <Button name="+/-" handleClick={handleClick} />
        <Button name="%" handleClick={handleClick} />
        <Button name="÷" handleClick={handleClick} />
      </div>
      <div className="group-2">
        <Button name="7" handleClick={handleClick} />
        <Button name="8" handleClick={handleClick} />
        <Button name="9" handleClick={handleClick} />
        <Button name="X" handleClick={handleClick} />
      </div>
      <div className="group-3">
        <Button name="4" handleClick={handleClick} />
        <Button name="5" handleClick={handleClick} />
        <Button name="6" handleClick={handleClick} />
        <Button name="-" handleClick={handleClick} />
      </div>
      <div className="group-4">
        <Button name="1" handleClick={handleClick} />
        <Button name="2" handleClick={handleClick} />
        <Button name="3" handleClick={handleClick} />
        <Button name="+" handleClick={handleClick} />
      </div>
      <div className="group-5">
        <Button name="0" handleClick={handleClick} />
        <Button name="." handleClick={handleClick} />
        <Button name="=" handleClick={handleClick} />
        <Button name="^" handleClick={handleClick} />
      </div>
    </div>
  );
}

ButtonPanel.defaultProps = {
  handleClick: null,
};

export default ButtonPanel;
