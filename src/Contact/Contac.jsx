import styled from "styled-components";
import MyForm from "./Form.contact";

function ContactMe() {
	const Container = styled.div`
		display: flex;
		width: 100%;
		height:100vh;
		justify-content: center;
		align-items: center;
	`;

	return (
		<Container className="contact">
			<MyForm />
		</Container>
	);
}

export default ContactMe;
