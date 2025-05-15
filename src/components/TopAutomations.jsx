import { useState } from "react";

const topAutomations = [
  {
    title: "Registrar gastos desde Telegram",
    description: "Envía tus gastos por mensaje y guárdalos automáticamente en Google Sheets.",
    image: "images/images-top/prueba1.png",
    tag: "Gratis",
    level: "Básico",
    category: "Finanzas",
  },
  {
    title: "Recordatorios de pago por WhatsApp",
    description: "Envía alertas automáticas a tus clientes antes de que se venza una factura.",
    image: "images/images-top/prueba2.png",
    tag: "Premium",
    level: "Intermedio",
    category: "Negocios",
  },
  {
    title: "Publicar productos en Instagram desde Google Sheets",
    description: "Agrega un producto a Sheets y publícalo en Instagram con foto y precio.",
    image: "images/images-top/prueba3.png",
    tag: "Premium",
    level: "Avanzado",
    category: "Redes Sociales",
  },
  {
    title: "Respuestas automáticas por WhatsApp",
    description: "Responde mensajes frecuentes con texto automático personalizado.",
    image: "images/images-top/prueba4.png",
    tag: "Gratis",
    level: "Básico",
    category: "Mensajería",
  },
  {
    title: "Enviar cotización automática",
    description: "Cuando un cliente llena un formulario, recibe su cotización por correo en segundos.",
    image: "images/images-top/prueba5.png",
    tag: "Gratis",
    level: "Intermedio",
    category: "Ventas",
  },
  {
    title: "Backup diario de archivos en Google Drive",
    description: "Automatiza una copia de seguridad diaria desde una carpeta específica.",
    image: "images/images-top/prueba1.png",
    tag: "Gratis",
    level: "Intermedio",
    category: "Productividad",
  },
  {
    title: "Facturas automáticas desde Airtable",
    description: "Crea y envía facturas PDF cuando marcas un cliente como 'listo'.",
    image: "images/images-top/prueba2.png",
    tag: "Premium",
    level: "Avanzado",
    category: "Finanzas",
  },
  {
    title: "Responder comentarios en redes sociales",
    description: "Responde automáticamente preguntas frecuentes en publicaciones de Facebook o Instagram.",
    image: "images/images-top/prueba3.png",
    tag: "Premium",
    level: "Avanzado",
    category: "Redes Sociales",
  },
  {
    title: "Recordatorios de citas para clientes",
    description: "Envía un mensaje automático antes de cada cita programada.",
    image: "images/images-top/prueba4.png",
    tag: "Gratis",
    level: "Intermedio",
    category: "Servicios",
  },
  {
    title: "Guardar contactos desde formularios web",
    description: "Cuando alguien llena un formulario, se guarda en Google Contacts automáticamente.",
    image: "images/images-top/prueba5.png",
    tag: "Gratis",
    level: "Básico",
    category: "Productividad",
  },
];


export default function TopAutomations() {
  const [type, setType] = useState("Todos");
  const [category, setCategory] = useState("Todas");
  const [level, setLevel] = useState("Todos");
  const [search, setSearch] = useState("");

  // Generar dinámicamente las opciones únicas para los filtros
  const uniqueTypes = ["Todos", ...new Set(topAutomations.map((auto) => auto.tag))];
  const uniqueCategories = ["Todas", ...new Set(topAutomations.map((auto) => auto.category))];
  const uniqueLevels = ["Todos", ...new Set(topAutomations.map((auto) => auto.level))];

  const resetFilters = () => {
    setType("Todos");
    setCategory("Todas");
    setLevel("Todos");
    setSearch("");
  };

  const filtered = topAutomations.filter((auto) => {
    const matchType = type === "Todos" || auto.tag === type;
    const matchCat = category === "Todas" || auto.category === category;
    const matchLvl = level === "Todos" || auto.level === level;
    const matchSearch = auto.title.toLowerCase().includes(search.toLowerCase());
    return matchType && matchCat && matchLvl && matchSearch;
  });

  return (
    <div className="text-white py-20 px-4 sm:px-6 lg:px-20">
      <div className="max-w-7xl mx-auto text-center mb-10">
        <h2 className="text-3xl font-bold">Automatizaciones más usadas</h2>
        <p className="text-zinc-400 mt-2">Explora y filtra según tus necesidades.</p>
      </div>

      {/* Filtros */}
      <div className="flex flex-col justify-center gap-4 mb-8 max-w-5xl mx-auto">
        <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
          {uniqueTypes.map((t) => (
          <button
            key={t}
            onClick={() => setType(t)}
            className={`px-4 py-1 rounded-full border text-sm ${
              type === t
                ? "bg-indigo-500 text-white border-transparent"
                : "border-zinc-600 text-zinc-300 hover:border-indigo-500"
            }`}
          >
            {t}
          </button>
        ))}
        </div>
        <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
          {uniqueCategories.map((c) => (
          <button
            key={c}
            onClick={() => setCategory(c)}
            className={`px-4 py-1 rounded-full border text-sm ${
              category === c
                ? "bg-emerald-500 text-white border-transparent"
                : "border-zinc-600 text-zinc-300 hover:border-emerald-500"
            }`}
          >
            {c}
          </button>
        ))}
        </div>
        <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
          {uniqueLevels.map((l) => (
          <button
            key={l}
            onClick={() => setLevel(l)}
            className={`px-4 py-1 rounded-full border text-sm ${
              level === l
                ? "bg-orange-500 text-white border-transparent"
                : "border-zinc-600 text-zinc-300 hover:border-orange-500"
            }`}
          >
            {l}
          </button>
        ))}
        </div>
        <button
          onClick={resetFilters}
          className="px-4 w-35 mx-auto py-1 border border-red-400 text-red-300 hover:bg-red-500 hover:text-white rounded-full text-sm"
        >
          Reiniciar filtros
        </button>
      </div>

      {/* Búsqueda */}
      <div className="mb-10 max-w-md mx-auto">
        <input
          type="text"
          placeholder="Buscar automatización..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-4 py-2 rounded-lg bg-zinc-800 border border-zinc-600 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      {/* Resultados */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {filtered.length > 0 ? (
          filtered.map((auto, i) => (
            <div
              key={i}
              className="bg-zinc-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-indigo-500/10 transition-all"
            >
              <div className="relative">
                <img
                  src={auto.image}
                  alt={auto.title}
                  className="w-full h-48 object-cover"
                />
                <span
                  className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold ${
                    auto.tag === "Gratis"
                      ? "bg-green-500"
                      : "bg-indigo-500"
                  }`}
                >
                  {auto.tag}
                </span>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2">{auto.title}</h3>
                <p className="text-zinc-400 text-sm mb-4">{auto.description}</p>
                <div className="flex justify-between items-center text-xs text-zinc-500 mb-2">
                  <span className="bg-zinc-700 px-2 py-1 rounded">{auto.category}</span>
                  <span className="bg-zinc-700 px-2 py-1 rounded">{auto.level}</span>
                </div>
                <button className="bg-primary/80 hover:bg-primary text-white px-4 py-2 rounded-md text-sm w-full transition cursor-pointer">
                  Ver plantilla
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-zinc-400 col-span-full text-center">No se encontraron resultados.</p>
        )}
      </div>
    </div>
  );
}