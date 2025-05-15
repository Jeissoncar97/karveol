import BlogList from "../components/BlogList";

export default function Blog() {
  return (
    <section className=" mx-auto py-10 pt-40 bg-logo-gradient">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-6">Blog de Automatizaciones</h1>
      <BlogList />
      </div>
    </section>
  );
}
