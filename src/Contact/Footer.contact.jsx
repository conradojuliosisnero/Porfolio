import ButtonContactFooter from "./Button.contact.footer";
import "./footer.css";

function FooterContact() {
	const Buttons = [
		{
			id: 1,
			name: "Linkedin",
			path: "https://www.linkedin.com/in/julio-conrado-358b09242/",
		},
		{
			id: 2,
			name: "Instagram",
			path: "https://github.com/conradojuliosisnero",
		},
	];

	return (
		<footer className="footer">
			<ul className="footer__list">
				{Buttons.map((button) => (
					<ButtonContactFooter key={button.id} href={button.path}>
						{button.name}
					</ButtonContactFooter>
				))}
			</ul>
		</footer>
	);
}

export default FooterContact;
