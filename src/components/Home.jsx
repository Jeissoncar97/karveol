import React from 'react';
import Benefits from './Benefits.jsx';

const Home = () => {
	return (
		<div className="pt-40 px-4 bg-logo-gradient">
			<section>
				<h1 className="mx-auto font-bold md:text-7xl text-balance text-center max-w-[20ch] md:leading-[1.16] text-4xl text-white">
				<span className="text-primary">Automatizaciones </span>reales para
				<span className='text-secondary'> personas reales</span>
			</h1>
			<p className=" max-w-[40ch] text-white/80 text-center text-2xl mt-10 mx-auto">
				Explora herramientas y plantillas que te ayudan a recuperar tiempo,
				reducir errores y vivir con más claridad.
			</p>
			<div className='flex items-center gap-x-5 gap-y-4 justify-center flex-wrap mt-9'>
				<button className="cursor-pointer px-4 justify-center rounded-[10px] flex items-center gap-x-2.5 hover:scale-105 transition-transform duration-300 border-2 border-secondary text-secondary border-brand-blue font-bold text-lg py-1.5">
					Explorar
				</button>
				<button className="cursor-pointer px-4 justify-center rounded-[10px] flex items-center gap-x-2.5 hover:scale-105 transition-transform duration-300  bg-primary text-white border-brand-blue font-bold text-lg py-1.5">
					Registrarse
				</button>
			</div>
			</section>
			<div className='py-15'>
				<Benefits />
			</div>
			
		</div>
	);
};

export default Home;
