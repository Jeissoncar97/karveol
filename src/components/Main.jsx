import {
  MessageCircle,
  Wallet,
  ClipboardList,
  Briefcase,
  LayoutGrid,
  Share2,
} from "lucide-react";
import TopAutomations from "./TopAutomations";

export default function Categoriesdiv() {
  const categories = [
    {
      icon: <MessageCircle className="h-8 w-8 text-indigo-400" />,
      name: "Mensajería automática",
      description: "Responde en WhatsApp o Telegram sin mover un dedo.",
    },
    {
      icon: <Wallet className="h-8 w-8 text-indigo-400" />,
      name: "Finanzas personales",
      description: "Organiza tus gastos y registros automáticamente.",
    },
    {
      icon: <ClipboardList className="h-8 w-8 text-indigo-400" />,
      name: "Gestión de tareas",
      description: "Conecta formularios, listas y recordatorios.",
    },
    {
      icon: <Briefcase className="h-8 w-8 text-indigo-400" />,
      name: "Negocios",
      description: "Atiende clientes, registra ventas y más.",
    },
    {
      icon: <LayoutGrid className="h-8 w-8 text-indigo-400" />,
      name: "Notion + Make",
      description: "Llena tablas automáticamente desde cualquier app.",
    },
    {
      icon: <Share2 className="h-8 w-8 text-indigo-400" />,
      name: "Redes sociales",
      description: "Automatiza publicaciones, análisis y respuestas.",
    },
  ];

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-20 bg-logo-gradient text-white">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl sm:text-5xl font-bold">
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
            <h3 className="text-xl font-semibold mb-1">
              {cat.name}
            </h3>
            <p className="text-zinc-400 text-sm">{cat.description}</p>
          </a>
        ))}
      </div>
      <TopAutomations />
    </div>
  );
}