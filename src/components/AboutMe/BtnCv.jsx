import './aboutme.css'

function BtnCv() {
	return (
		<button className="about__btn">
			<span>
				<a href="cv/CV.pdf" download="CV.pdf">
					Descargar CV
				</a>
			</span>
		</button>
	);
}

export default BtnCv;
