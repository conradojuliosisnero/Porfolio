import "./buttonfooter.css";

function ButtonContactFooter(props) {
	return <a className="btn__footer" href={props.href}>{props.children}</a>;
}

export default ButtonContactFooter;
