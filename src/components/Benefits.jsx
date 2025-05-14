import { Clock, CheckCircle, Smartphone, Briefcase } from "lucide-react";

export default function Benefitsdiv() {
  const benefits = [
    {
      icon: <Clock className="h-8 w-8 text-white" />,
      title: "Ahorra tiempo todos los días",
      description:
        "Automatiza tareas repetitivas como enviar mensajes o mover archivos. Gana tiempo para lo que realmente importa.",
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-white" />,
      title: "Evita errores manuales",
      description:
        "Di adiós al copiar/pegar o a olvidar pasos. Las automatizaciones lo hacen igual siempre y sin fallos.",
    },
    {
      icon: <Smartphone className="h-8 w-8 text-white" />,
      title: "Funciona aunque no estés",
      description:
        "Configura una vez y deja que trabaje por ti. Tus flujos siguen activos mientras tú haces otras cosas.",
    },
    {
      icon: <Briefcase className="h-8 w-8 text-white" />,
      title: "Profesionaliza tu rutina",
      description:
        "Dale un toque pro a tu negocio o proyecto con flujos ordenados, respuestas automáticas y seguimiento claro.",
    },
  ];

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-20">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl sm:text-5xl font-bold text-white">
          ¿Por qué automatizar tu día a día?
        </h2>
        <p className="mt-4 text-white/90 text-lg">
          Simplifica tus tareas, gana tiempo y vive más enfocado.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto pt-10">
        {benefits.map((benefit, idx) => (
          <div key={idx} className="bg-black/0 p-6 rounded-2xl text-left shadow-lg relative" style={{ boxShadow: "0 4px 16px rgba(255, 255, 255, 0.2)" }}>
            <div className="w-15 h-15 content-center grid justify-center absolute -top-7.5 left-1/2 translate-x-[-50%] bg-primary">{benefit.icon}</div>
            <h3 className="text-xl font-semibold text-secondary mb-2 mt-5">
              {benefit.title}
            </h3>
            <p className="text-white">{benefit.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}