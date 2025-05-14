export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-zinc-400 py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-white text-xl font-semibold mb-2">Karveol</h2>
          <p className="text-sm">
            Simplifica tu vida con automatizaciones pensadas para el día a día.
            Descubre plantillas listas para usar y mejora tu productividad sin complicaciones.
          </p>
        </div>

        <div>
          <h3 className="text-white font-medium mb-3">Enlaces</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">Inicio</a></li>
            <li><a href="#" className="hover:text-white">Catálogo</a></li>
            <li><a href="#" className="hover:text-white">Blog</a></li>
            <li><a href="#" className="hover:text-white">Planes</a></li>
            <li><a href="#" className="hover:text-white">Contacto</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-medium mb-3">Síguenos</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-white">Twitter</a>
            <a href="#" className="hover:text-white">Instagram</a>
            <a href="#" className="hover:text-white">Telegram</a>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-zinc-700 pt-6 text-center text-xs text-zinc-500">
        &copy; {new Date().getFullYear()} Karveol – Todos los derechos reservados.
      </div>
    </footer>
  );
}
