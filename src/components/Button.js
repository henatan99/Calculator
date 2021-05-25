/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling
const Button = ({ name }) => <button className="button" type="submit" onClick={handleClick(props.name)}>{name}</button>;

function handleClick(props) {
    return props.clickHandler;
}
   
export default Button;
