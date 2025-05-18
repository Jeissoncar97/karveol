import BlogList from '../components/BlogList';

export default function Blog() {
	return (
		<div>
			<section className=" mx-auto py-10 pt-40 bg-logo-gradient">
				<div className="max-w-5xl mx-auto">
					<h1 className="text-5xl text-center text-secondary font-bold mb-">
						Descubre lo último en automatización, productividad y herramientas
						digitales.
					</h1>
					<p className="text-white py-10">
						En nuestro blog encontrarás actualizaciones importantes de la
						plataforma, nuevas automatizaciones disponibles, tutoriales paso a
						paso para aprovechar al máximo Make y otras herramientas, casos de
						uso reales, ideas para optimizar tu tiempo y contenido exclusivo
						para ayudarte a vivir tu día a día con más eficiencia y menos
						esfuerzo.
					</p>
					<BlogList />
				</div>
			</section>
		</div>
	);
}
