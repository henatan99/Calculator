import Button from './Button';

function ButtonPanel() {
  return (
      <div className="button-panel">
          <div className="group-1">
              <Button name="AC" clickHandler={handleClick("AC")}/>
              <Button name="+/-" clickHandler={handleClick("+/-")}/>
              <Button name="%" clickHandler={handleClick("%")}/>
              <Button name="÷" clickHandler={handleClick("÷")}/>
          </div>
          <div className="group-2">
              <Button name="7" clickHandler={handleClick("7")}/>
              <Button name="8" clickHandler={handleClick("8")}/>
              <Button name="9" clickHandler={handleClick("9")}/>
              <Button name="X" clickHandler={handleClick("X")}/>
          </div>
          <div className="group-3">
              <Button name="4" clickHandler={handleClick("4")}/>
              <Button name="5" clickHandler={handleClick("5")}/>
              <Button name="6" clickHandler={handleClick("6")}/>
              <Button name="-" clickHandler={handleClick("-")}/>
          </div>
          <div className="group-4">
              <Button name="1" clickHandler={handleClick("1")}/>
              <Button name="2" clickHandler={handleClick("2")}/>
              <Button name="3" clickHandler={handleClick("3")}/>
              <Button name="+" clickHandler={handleClick("+")}/>
          </div>
          <div className="group-5">
              <Button name="0" clickHandler={handleClick("0")}/>
              <Button name="." clickHandler={handleClick(".")}/>
              <Button name="=" clickHandler={handleClick("=")}/>
          </div>
      </div>
  )
}

function handleClick(name) {
  return props.clickHandler
}

export default ButtonPanel;
