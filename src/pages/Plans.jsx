import { Check, X } from 'lucide-react';
import FaqSection from '../components/FaqSection';

const features = [
	{
		label: 'Acceso a plantillas gratuitas',
		free: true,
		premium: true,
	},
	{
		label: 'Descarga sin registro',
		free: true,
		premium: true,
	},
	{
		label: 'Plantillas exclusivas premium',
		free: false,
		premium: true,
	},
	{
		label: 'Actualizaciones automáticas',
		free: false,
		premium: true,
	},
	{
		label: 'Soporte por Telegram',
		free: false,
		premium: true,
	},
	{
		label: 'Acceso anticipado a nuevas automatizaciones',
		free: false,
		premium: true,
	},
];

export default function PlansSection() {
	return (
		<div>
			<section className="py-40 px-4 bg-logo-gradient text-white">
				<div className="max-w-6xl mx-auto text-center">
					<h1 className="text-4xl font-bold mb-4 text-secondary">
						Elige el plan que se adapta a ti
					</h1>
					<p className="text-zinc-400 mb-12">
						Comienza gratis o desbloquea todo el potencial con nuestra
						suscripción premium.
					</p>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						<div className="border border-zinc-700 rounded-2xl p-8 bg-zinc-800">
							<h3 className="text-2xl font-semibold mb-4">Gratis</h3>
							<p className="text-zinc-400 mb-6">
								Para comenzar a automatizar sin complicaciones.
							</p>
							<div className="text-4xl font-bold mb-6">
								$0
								<span className="text-base font-normal text-zinc-400">
									{' '}
									/ mes
								</span>
							</div>

							<ul className="space-y-3 text-left">
								{features.map((item, index) => (
									<li key={index} className="flex items-center gap-3">
										{item.free ? (
											<Check className="text-green-400 w-5 h-5" />
										) : (
											<X className="text-red-400 w-5 h-5" />
										)}
										{item.label}
									</li>
								))}
							</ul>
						</div>

						{/* Plan Premium */}
						<div className="border border-primary rounded-2xl p-8 bg-zinc-800 shadow-lg shadow-emerald-500/10">
							<h3 className="text-2xl font-semibold mb-4">Premium</h3>
							<p className="text-zinc-400 mb-6">
								Desbloquea automatizaciones avanzadas y beneficios exclusivos.
							</p>
							<div className="text-4xl font-bold mb-2 text-primary">
								$10
								<span className="text-base font-normal text-zinc-400">
									{' '}
									/ mes
								</span>
							</div>
							<div className="text-zinc-400 mb-6">
								o $100 al año (ahorra 17%)
							</div>

							<ul className="space-y-3 text-left">
								{features.map((item, index) => (
									<li key={index} className="flex items-center gap-3">
										{item.premium ? (
											<Check className="text-green-400 w-5 h-5" />
										) : (
											<X className="text-red-400 w-5 h-5" />
										)}
										{item.label}
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
				<FaqSection />
			</section>
		</div>
	);
}
