import { Link } from 'react-router-dom';

export default function Footer() {
	return (
		<footer className="bg-zinc-900 text-zinc-400 pt-10">
			<div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-10 ">
				<div>
					<h2 className="text-white text-xl font-semibold mb-2 hover:text-primary transition">
						<Link to="/">Karveol</Link>
					</h2>
					<p className="text-sm">
						Simplifica tu vida con automatizaciones pensadas para el día a día.
						Descubre plantillas listas para usar y mejora tu productividad sin
						complicaciones.
					</p>
				</div>

				<div>
					<h3 className="text-white font-medium mb-3">Enlaces</h3>
					<ul className="space-y-2 text-sm">
						<li>
							<Link to="/" className="hover:text-white">
								Inicio
							</Link>
						</li>
						<li>
							<Link to="/catalog" className="hover:text-white">
								Catálogo
							</Link>
						</li>
						<li>
							<Link to="/blog" className="hover:text-white">
								Blog
							</Link>
						</li>
						<li>
							<Link to="/plans" className="hover:text-white">
								Planes
							</Link>
						</li>
					</ul>
				</div>

				<div>
					<div>
						<h3 className="text-white font-medium mb-3">Síguenos</h3>
						<div className="flex space-x-4">
							<a href="#" className="hover:text-white">
								Twitter
							</a>
							<a href="#" className="hover:text-white">
								Instagram
							</a>
							<a href="#" className="hover:text-white">
								Telegram
							</a>
						</div>
					</div>
					<div className="pt-5">
						<h3 className="text-white font-medium mb-3">Contacto</h3>
						<div className="flex flex-col space-x-4">
							<a href="#" className="hover:text-white">
								jeissoncar97@gmail.com
							</a>
							<a href="#" className="hover:text-white">
								(+57) 321 123 1234
							</a>
							<a href="#" className="hover:text-white">
								Telegram
							</a>
						</div>
					</div>
				</div>
			</div>

			<div className="mt-10 border-t border-zinc-700 pt-6 text-center text-xs text-zinc-500">
				&copy; {new Date().getFullYear()} Karveol – Todos los derechos
				reservados.
			</div>
			<div className="bg-indigo-700 py-2 text-gray-100 mt-6">
				<div className="container mx-auto px-4">
					<div className="flex justify-center">
						<div className="text-center">
							Desarrollado & Diseñado por{' '}
							<a
								href="https://www.facebook.com/jeisson.andres.39589/"
								className="hover:text-blue-400 transition duration-300"
								target="_blank"
								rel="noopener noreferrer"
							>
								Jeisson Cardenas
							</a>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
