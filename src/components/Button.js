/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling

const Button = ({ name, handleClick }) => <button className="button" type="submit" onClick={() => handleClick(name)}>{name}</button>;

export default Button;
