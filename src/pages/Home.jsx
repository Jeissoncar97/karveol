import React from 'react';
import Benefits from '../components/Benefits.jsx';
import {
	MessageCircle,
	Wallet,
	ClipboardList,
	Briefcase,
	LayoutGrid,
	Share2,
} from 'lucide-react';
import TopAutomations from '../components/TopAutomations.jsx';
const Home = () => {
	const categories = [
		{
			icon: <MessageCircle className="h-8 w-8 text-primary" />,
			name: 'Mensajería automática',
			description: 'Responde en WhatsApp o Telegram sin mover un dedo.',
		},
		{
			icon: <Wallet className="h-8 w-8 text-primary" />,
			name: 'Finanzas personales',
			description: 'Organiza tus gastos y registros automáticamente.',
		},
		{
			icon: <ClipboardList className="h-8 w-8 text-primary" />,
			name: 'Gestión de tareas',
			description: 'Conecta formularios, listas y recordatorios.',
		},
		{
			icon: <Briefcase className="h-8 w-8 text-primary" />,
			name: 'Negocios',
			description: 'Atiende clientes, registra ventas y más.',
		},
		{
			icon: <LayoutGrid className="h-8 w-8 text-primary" />,
			name: 'Notion + Make',
			description: 'Llena tablas automáticamente desde cualquier app.',
		},
		{
			icon: <Share2 className="h-8 w-8 text-primary" />,
			name: 'Redes sociales',
			description: 'Automatiza publicaciones, análisis y respuestas.',
		},
	];
	return (
		<div className="pt-40 px-4 bg-logo-gradient">
			<section>
				<h1 className="mx-auto font-bold md:text-7xl text-balance text-center max-w-[20ch] md:leading-[1.16] text-4xl text-white">
					<span className="text-primary">Automatizaciones </span>reales para
					<span className="text-secondary"> personas reales</span>
				</h1>
				<p className=" max-w-[40ch] text-white/80 text-center text-2xl mt-10 mx-auto">
					Explora herramientas y plantillas que te ayudan a recuperar tiempo,
					reducir errores y vivir con más claridad.
				</p>
				<div className="flex items-center gap-x-5 gap-y-4 justify-center flex-wrap mt-9">
					<button className="cursor-pointer px-4 justify-center rounded-[10px] flex items-center gap-x-2.5 hover:scale-105 transition-transform duration-300 border-2 border-secondary text-secondary border-brand-blue font-bold text-lg py-1.5">
						Explorar
					</button>
					<button className="cursor-pointer px-4 justify-center rounded-[10px] flex items-center gap-x-2.5 hover:scale-105 transition-transform duration-300  bg-primary text-white border-brand-blue font-bold text-lg py-1.5">
						Registrarse
					</button>
				</div>
			</section>
			<div className="py-15">
				<Benefits />
			</div>
			<div className="py-20 px-4 sm:px-6 lg:px-20 bg-logo-gradient text-white">
				<div className="max-w-7xl mx-auto text-center mb-12">
					<h2 className="text-3xl sm:text-5xl font-bold text-secondary">
						Explora nuestras categorías
					</h2>
					<p className="mt-2 text-white/80 text-lg">
						Automatizaciones listas para usar, según lo que necesites hoy
					</p>
				</div>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
					{categories.map((cat, idx) => (
						<a
							href="#"
							key={idx}
							className="bg-black p-6 rounded-2xl shadow-lg hover:shadow-primary/50 transition-all"
						>
							<div className="mb-4">{cat.icon}</div>
							<h3 className="text-xl font-semibold mb-1">{cat.name}</h3>
							<p className="text-zinc-400 text-sm">{cat.description}</p>
						</a>
					))}
				</div>
				<TopAutomations />
			</div>
		</div>
	);
};

export default Home;
