import MyForm from "./Form.contact";
import FooterContact from "./Footer.contact";
import styled from "styled-components";

function ContactMe() {
	const Container = styled.div`
		display: flex;
		width: 100%;
		height:100vh;
		flex-direction: column ;
		justify-content: center;
		align-items: center;
	`;

	return (
		<Container className="contact">
			<MyForm />
			<FooterContact/>
		</Container>
	);
}

export default ContactMe;
