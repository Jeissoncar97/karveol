const PrivacyPolicy = () => {
	return (
		<div className="bg-logo-gradient pt-40 pb-20 text-white mx-auto place-content-center flex items-center">
			<div className="px-5 max-w-4xl mx-auto">
				<h1 className="text-4xl font-bold text-center text-primary mb-20">
					Política de Privacidad de Karveol
				</h1>

				<p className="mb-4">
					En Karveol, valoramos tu privacidad y nos comprometemos a proteger la
					información que compartes con nosotros al usar nuestras
					automatizaciones y servicios integrados con plataformas como Make
					(Integromat), Telegram, Google Sheets y otros sistemas conectados.
				</p>

				<h2 className="mb-5 text-xl font-semibold mt-15">
					1. Recolección de Datos
				</h2>
				<p className="mb-4">
					Recolectamos información como tu nombre, correo electrónico,
					identificadores de usuario en Telegram u otras plataformas, y datos
					operativos que tú mismo compartes mediante los flujos de
					automatización.
				</p>

				<h2 className="mb-5 text-xl font-semibold mt-15">
					2. Uso de la Información
				</h2>
				<p className="mb-4">
					Usamos los datos recopilados para ejecutar automatizaciones, enviar
					notificaciones, almacenar registros en hojas de cálculo o bases de
					datos (como Supabase), y ofrecerte una mejor experiencia en la gestión
					de tus tareas o gastos.
				</p>

				<h2 className="mb-5 text-xl font-semibold mt-15">
					3. Compartición de Datos
				</h2>
				<p className="mb-4">
					No compartimos tu información personal con terceros, excepto cuando es
					necesario para operar los servicios (integraciones con plataformas de
					terceros) o por requerimientos legales.
				</p>

				<h2 className="mb-5 text-xl font-semibold mt-15">
					4. Almacenamiento y Seguridad
				</h2>
				<p className="mb-4">
					La información que procesamos puede almacenarse temporalmente en
					plataformas como Google Sheets, Supabase o en bases de datos
					conectadas a los flujos en Make. Tomamos medidas razonables para
					proteger tus datos contra accesos no autorizados.
				</p>

				<h2 className="mb-5 text-xl font-semibold mt-15">
					5. Derechos del Usuario
				</h2>
				<p className="mb-4">
					Puedes solicitar acceso, corrección o eliminación de tus datos
					personales comunicándote con nosotros. Responderemos dentro del marco
					legal correspondiente.
				</p>

				<h2 className="mb-5 text-xl font-semibold mt-15">
					6. Cambios a esta Política
				</h2>
				<p className="mb-4">
					Podemos actualizar esta política periódicamente. Te notificaremos
					sobre los cambios relevantes a través de nuestros canales habituales.
				</p>

				<h2 className="mb-5 text-xl font-semibold mt-15">7. Contacto</h2>
				<p>
					Si tienes preguntas sobre esta Política de Privacidad, puedes
					escribirnos a través de nuestros canales oficiales o mediante el
					formulario de contacto disponible en la plataforma.
				</p>
			</div>
		</div>
	);
};

export default PrivacyPolicy;
