export const posts = [
	{
		id: 1,
		title:
			'Qué es Make y cómo empezar a automatizar tu vida sin saber programar',
		slug: 'qué-es-Make-y-cómo-empezar-a-automatizar-tu-vida-sin-saber-programar',
		summary:
			'Registra tus gastos enviando un mensaje por Telegram que se guarda automáticamente.',
		content: `
    <p> En un mundo donde el tiempo es uno de los recursos más valiosos, aprender a <strong>automatizar tareas repetitivas</strong> puede marcar una gran diferencia en tu vida personal y profesional. Aquí es donde entra <strong>Make</strong>: una poderosa herramienta de automatización sin código que está revolucionando cómo trabajamos día a día.<p/>
    <br/>
    <P> En este artículo aprenderás: <P/><br/>
    <ol class="list-decimal list-inside">
      <li class="my-3">Qué es Make y para qué sirve</li>
      <li class="my-3">Cómo registrarte paso a paso</li>
      <li class="my-3">Cómo funciona su interfaz</li>
      <li class="my-3">Cómo crear tu primera automatización (escenario)</li>
      <li class="my-3">Algunos ejemplos útiles</li>
      <li class="my-3">Consejos y recursos adicionales</li>
    </ol>
    <br/>
    <hr class="text-gray-700 my-10">
    <br/>
    <h3 class="text-3xl font-bold pb-10">🧠 ¿Qué es Make?</h3>
    <p><strong>Make.com</strong> (antes llamado Integromat) es una plataforma visual que te permite <strong>conectar aplicaciones y automatizar procesos</strong> sin escribir una sola línea de código. Funciona mediante bloques llamados <strong>módulos</strong>, donde cada uno representa una acción, como recibir un mensaje, guardar un archivo o enviar un correo.</p>
    <br/>
    <p>En lugar de hacer tareas manuales como copiar datos de un email a un Excel, Make lo hace por ti automáticamente.<p/>
    <br/>
    <hr class="text-gray-700 my-10">
    <br/>
    <h3 class="text-3xl font-bold pb-10">✅ ¿Para qué puedes usar Make?</h3>
    <ul class="list-disc list-inside">
      <li class="my-3">Registrar tus gastos diarios desde Telegram a Google Sheets.</li>
      <li class="my-3">Recibir una notificación cuando alguien llena un formulario.</li>
      <li class="my-3">Publicar automáticamente en redes sociales.</li>
      <li class="my-3">Enviar respuestas automáticas a tus clientes.</li>
      <li class="my-3">Sincronizar datos entre tus herramientas favoritas (Notion, Gmail, Google Drive, Airtable, etc.).</li>
    </ul>
    <br/>
    <hr class="text-gray-700 my-10">
    <br/>
    <h3 class="text-3xl font-bold pb-10">📝 ¿Cómo registrarte en Make?</h3>
    <ol class="list-decimal list-inside">
      <li class="my-3">Ve a <a class="text-blue-400 hover:underline hover:decoration-blue-400" href="https://www.make.com/" target="_blank" rel="noopener noreferrer">Make.com</a></li>
      <li class="my-3">Haz clic en “Sign Up”.</li>
      <li class="my-3">Puedes registrarte con:</li>
      <ul class="list-disc list-inside">
        <li class="my-3">Google</li>
        <li class="my-3">Microsoft</li>
        <li class="my-3">Email personal o corporativo</li>
      </ul>
      <li class="my-3">Verifica tu correo electrónico.</li>
      <li class="my-3">¡Listo! Ya puedes entrar al panel principal.</li>
    </ol>
    <br/>
    <hr class="text-gray-700 my-10">
    <br/>
    <h3 class="text-3xl font-bold pb-10">🧭 Conociendo la interfaz de Make</h3>
    <p>Cuando ingresas, verás una interfaz dividida en:</p>
    <ul class="list-disc list-inside">
      <li class="my-3"><strong>Dashboard: </strong>Panel con tus escenarios creados.</li>
      <li class="my-3"><strong>Scenarios: </strong>Donde creas y editas automatizaciones.</li>
      <li class="my-3"><strong>Templates: </strong>Plantillas predefinidas.</li>
      <li class="my-3"><strong>Apps: </strong>Todas las aplicaciones disponibles (más de 1.000).</li>
      <li class="my-3"><strong>Webhooks / Connections / Keys: </strong>Opciones técnicas para usuarios avanzados.</li>
    </ul>
    <br/>
    <hr class="text-gray-700 my-10">
    <br/>
    <h3 class="text-3xl font-bold pb-10">⚙️ Cómo crear tu primera automatización (escenario)</h3>
    <p>Vamos a crear un ejemplo simple: cuando recibes un mensaje en Telegram, guardar el texto en Google Sheets.</p>
    <p class="pt-10"><strong>Paso 1: Crea un nuevo escenario</strong></p>
    <ul class="list-disc list-inside">
      <li class="my-3">Haz clic en <strong>“Create a new scenario”</strong></li>
      <li class="my-3">Busca “Telegram Bot” y “Google Sheets”</li>
      <li class="my-3">Agrega ambos al escenario</li>
    </ul>
    <p class="pt-10"><strong>Paso 2: Configura el módulo de Telegram</strong></p>
    <ul class="list-disc list-inside">
      <li class="my-3">Crea uno en <a class="text-blue-400 hover:underline hover:decoration-blue-400" href="https://t.me/BotFather"  target="_blank" rel="noopener noreferrer" >@BotFather</a></li>
      <li class="my-3">Copia el token y pégalo en Make</li>
    </ul>
    <p class="pt-10"><strong>Paso 3: Configura Google Sheets</strong></p>
    <ul class="list-disc list-inside">
      <li class="my-3">Conéctate a tu cuenta de Google</li>
      <li class="my-3">Selecciona la hoja de cálculo donde guardarás los mensajes</li>
      <li class="my-3">Configura las columnas (ej. Fecha, Mensaje)</li>
    </ul>
    <p class="pt-10"><strong>Paso 4: Conecta los módulos</strong></p>
    <ul class="list-disc list-inside">
      <li class="my-3">Arrastra una línea entre los módulos para conectarlos</li>
      <li class="my-3">Configura el flujo de datos (ej. Mensaje de Telegram a Google Sheets)</li>
    </ul>
    <p class="pt-10"><strong>Paso 5: Prueba y activa el escenario</strong></p>
    <ul class="list-disc list-inside">
      <li class="my-3">Haz clic en “Run once” para probarlo</li>
      <li class="my-3">Si todo funciona, activa el escenario</li>
      <li class="my-3">¡Listo! Ahora cada vez que recibas un mensaje en Telegram, se guardará automáticamente en Google Sheets.</li>
    </ul>
    <br/>
    <hr class="text-gray-700 my-10">
    <br/>
    <h3 class="text-3xl font-bold pb-10">🛠️ Ejemplos útiles que puedes crear</h3>
    <table class="border-collapse mx-auto my-10 border border-gray-400 ...">
      <thead>
        <tr>
          <th class="border-l border-b border-gray-300 p-4">Automatización</th>
          <th class="border-l border-b border-gray-300 p-4">Qué hace</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="border-l border-b border-gray-300 p-4">Registro de gastos diarios</td>
          <td class="border-l border-b border-gray-300 p-4">Envías “Comida 12.000” al bot y se guarda</td>
        </tr>
        <tr>
          <td class="border-l border-b border-gray-300 p-4">Enviar recordatorios por WhatsApp</td>
          <td class="border-l border-b border-gray-300 p-4">Toma datos de un Excel y manda mensajes</td>
        </tr>
        <tr>
          <td class="border-l border-b border-gray-300 p-4">Crear tareas en Notion</td>
          <td class="border-l border-b border-gray-300 p-4">Cada vez que recibes un formulario</td>
        </tr>
        <tr>
          <td class="border-l border-b border-gray-300 p-4">Guardar archivos adjuntos de correo</td>
          <td class="border-l border-b border-gray-300 p-4">Gmail ➜ Google Drive automáticamente</td>
        </tr>
      </tbody>
    </table>
    <br/>
    <hr class="text-gray-700 my-10">
    <br/>
    <h3 class="text-3xl font-bold pb-10">🧩 Consejos al usar Make</h3>
    <ul class="list-disc list-inside">
      <li class="my-3">Comienza con escenarios simples: no intentes hacer todo de una vez.</li>
      <li class="my-3">Prueba cada módulo antes de activarlo.</li>
      <li class="my-3">Organiza tus escenarios con etiquetas para encontrarlos fácilmente.</li>
      <li class="my-3">Aprovecha los templates gratuitos en su biblioteca.</li>
      <li class="my-3">Consulta la documentación y tutoriales en su página oficial.</li>
      <li class="my-3">Únete a comunidades en línea para compartir experiencias y aprender de otros usuarios.</li>
      <li class="my-3">Recuerda que la práctica hace al maestro: cuanto más uses Make, más fácil te resultará.</li>
    </ul>
    <br/>
    <hr class="text-gray-700 my-10">
    <br/>
    <h3 class="text-3xl font-bold pb-10">📚 Recursos adicionales</h3>
    <ul class="list-disc list-inside">
      <li class="my-3"><a class="text-blue-400 hover:underline hover:decoration-blue-400" href="https://apps.make.com/" target="_blank" rel="noopener noreferrer">Documentación oficial de Make</a></li>
      <li class="my-3"><a class="text-blue-400 hover:underline hover:decoration-blue-400" href="https://www.youtube.com/@itsmake" target="_blank" rel="noopener noreferrer">Canal de YouTube de Make</a></li>
      <li class="my-3"><a class="text-blue-400 hover:underline hover:decoration-blue-400" href="https://www.make.com/en/templates" target="_blank" rel="noopener noreferrer">Plantillas gratuitas</a></li>
      <li class="my-3"><a class="text-blue-400 hover:underline hover:decoration-blue-400" href="https://community.make.com/" target="_blank" rel="noopener noreferrer">Comunidad de Make</a></li>
      <li class="my-3"><a class="text-blue-400 hover:underline hover:decoration-blue-400" href="https://www.make.com/en/blog" target="_blank" rel="noopener noreferrer">Blog de Make</a></li>
      <li class="my-3"><a class="text-blue-400 hover:underline hover:decoration-blue-400" href="https://academy.make.com/" target="_blank" rel="noopener noreferrer">Academia de Make</a></li>
      <li class="my-3"><a class="text-blue-400 hover:underline hover:decoration-blue-400" href="https://www.make.com/en/integrations" target="_blank" rel="noopener noreferrer">Integraciones disponibles</a></li>
      <li class="my-3"><a class="text-blue-400 hover:underline hover:decoration-blue-400" href="https://www.make.com/en/pricing" target="_blank" rel="noopener noreferrer">Precios y planes</a></li>
      <li class="my-3"><a class="text-blue-400 hover:underline hover:decoration-blue-400" href="https://www.make.com/en/partners" target="_blank" rel="noopener noreferrer">Programa de partners</a></li>
    </ul>
    `,
		image: '/images/images-blog/blog1.png',
		date: '14 de mayo del 2025',
	},
];
