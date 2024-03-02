import './presentation.css'

function Welcome() {
    // text welcome (Presentation)
	const text = {
		text: `I am a 19-year-old Colombian frontend developer with one year of
    experience in the field. I consider myself a proactive and
    enthusiastic professional, always eager to learn and grow. My skills
    are centered around HTML, CSS, and JavaScript, and I am familiar with
    popular frameworks like React. I am excited to continue expanding my
    knowledge and contributing to the world of frontend development.`,
	};

    // Url from whatsapp 
    const URLWhatsapp = `https://wa.link/dfshbn`

	return (
		<div className="contenedor__bienvenida">
			<div className="bienvenida__titulo">
				<h1 className="name__welcome">HI,i am Julio</h1>
			</div>
			<div className="bienvenida__titulo">
				<h2 className="leyenda">Frontend Developer</h2>
			</div>
			<div className="bienvenida__texto">
				<p className="texto">{text.text}</p>
				<div className="boton__contactar">
					<button className="boton">
						<span>
							<a href={URLWhatsapp} target="_blank" rel='noreferrer'>
								contact me
							</a>
						</span>
					</button>
				</div>
			</div>
		</div>
	);
}

export default Welcome ;
