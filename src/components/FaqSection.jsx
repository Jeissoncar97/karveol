import { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
	{
		question: '¿Qué es karveol?',
		answer:
			'Es una plataforma que ofrece automatizaciones listas para usar, pensadas para personas que quieren ahorrar tiempo en tareas repetitivas del día a día.',
	},
	{
		question: '¿Necesito registrarme para usar las automatizaciones gratuitas?',
		answer:
			'Algunas automatizaciones están disponibles sin necesidad de crear una cuenta, pero para acceder a más contenido gratuito debes registrarte.',
	},
	{
		question: '¿Qué obtengo con el plan premium?',
		answer:
			'Acceso completo a todas las automatizaciones, soporte prioritario por Telegram, actualizaciones automáticas y acceso anticipado a nuevas funciones.',
	},
	{
		question: '¿Puedo cancelar mi suscripción en cualquier momento?',
		answer:
			'Sí. Puedes cancelar cuando quieras desde tu perfil. No se te volverá a cobrar al finalizar tu período actual.',
	},
	{
		question: '¿Qué herramientas necesito para usar las automatizaciones?',
		answer:
			'Solo necesitas una cuenta en Make.com y seguir nuestras plantillas paso a paso. No se requieren conocimientos técnicos avanzados.',
	},
];

export default function FaqSection() {
	const [openIndex, setOpenIndex] = useState(null);

	const toggle = (index) => {
		setOpenIndex(openIndex === index ? null : index);
	};

	return (
		<section className=" text-white pt-16 px-4">
			<div className="max-w-4xl mx-auto">
				<h2 className="text-4xl font-bold text-center mb-12">
					Preguntas Frecuentes
				</h2>

				<div className="space-y-6">
					{faqs.map((faq, index) => (
						<div
							key={index}
							className="border border-zinc-700 rounded-lg p-6 bg-zinc-800 cursor-pointer"
							onClick={() => toggle(index)}
						>
							<div className="flex justify-between items-center">
								<h3 className="text-lg font-medium">{faq.question}</h3>
								{openIndex === index ? (
									<ChevronUp className="w-5 h-5 text-zinc-400" />
								) : (
									<ChevronDown className="w-5 h-5 text-zinc-400" />
								)}
							</div>

							<AnimatePresence initial={false}>
								{openIndex === index && (
									<motion.div
										key="answer"
										initial={{ opacity: 0, height: 0 }}
										animate={{ opacity: 1, height: 'auto' }}
										exit={{ opacity: 0, height: 0 }}
										transition={{ duration: 0.3 }}
										className="overflow-hidden mt-4"
									>
										<p className="text-zinc-400">{faq.answer}</p>
									</motion.div>
								)}
							</AnimatePresence>
						</div>
					))}
				</div>

				{/* Botón de contacto */}
				<div className="mt-12 text-center">
					<a
						href="/contacto"
						className="inline-block bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-full transition"
					>
						¿Tienes más preguntas? Contáctanos
					</a>
				</div>
			</div>
		</section>
	);
}
