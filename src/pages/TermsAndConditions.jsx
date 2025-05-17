const TermsAndConditions = () => {
	return (
		<div className="bg-logo-gradient pt-40 pb-20 text-white mx-auto place-content-center flex items-center">
			<div className="px-5 max-w-4xl mx-auto">
				<h1 className="text-4xl font-bold text-primary text-center mb-20">
					Términos y Condiciones de Karveol
				</h1>

				<p className="mb-4">
					Al utilizar los servicios de Karveol, aceptas los siguientes términos
					y condiciones. Estos términos se aplican a todos los usuarios que
					interactúan con nuestras automatizaciones y soluciones ofrecidas
					mediante plataformas como Make (Integromat), Telegram, Google Sheets y
					otros sistemas conectados.
				</p>

				<h2 className="mb-5 text-xl font-semibold mt-15">
					1. Uso del Servicio
				</h2>
				<p className="mb-4">
					Karveol ofrece automatizaciones personalizadas que integran distintas
					aplicaciones para optimizar procesos como el registro de gastos, envío
					de datos, y otras tareas recurrentes. El usuario es responsable del
					uso adecuado de estas herramientas y de mantener segura su información
					de acceso.
				</p>

				<h2 className="mb-5 text-xl font-semibold mt-15">
					2. Integraciones de Terceros
				</h2>
				<p className="mb-4">
					Las automatizaciones creadas con Make pueden depender de plataformas
					de terceros (como Telegram, Google Sheets, Supabase, etc.). Karveol no
					se hace responsable por caídas, errores o cambios en las políticas de
					dichas plataformas.
				</p>

				<h2 className="mb-5 text-xl font-semibold mt-15">
					3. Privacidad y Datos
				</h2>
				<p className="mb-4">
					Los datos que el usuario envía a través de automatizaciones son
					tratados con confidencialidad. Karveol no comercializa ni comparte
					esta información con terceros sin autorización.
				</p>

				<h2 className="mb-5 text-xl font-semibold mt-15">4. Responsabilidad</h2>
				<p className="mb-4">
					Karveol no se responsabiliza por pérdidas de datos o fallos en las
					automatizaciones causados por errores de configuración, cambios en
					APIs, o problemas técnicos externos.
				</p>

				<h2 className="mb-5 text-xl font-semibold mt-15">
					5. Cambios en los Términos
				</h2>
				<p className="mb-4">
					Nos reservamos el derecho de modificar estos términos y condiciones en
					cualquier momento. Se recomienda revisarlos periódicamente.
				</p>

				<h2 className="mb-5 text-xl font-semibold mt-15">6. Contacto</h2>
				<p>
					Para más información o dudas, puedes comunicarte con nosotros a través
					de nuestros canales oficiales.
				</p>
			</div>
		</div>
	);
};

export default TermsAndConditions;
