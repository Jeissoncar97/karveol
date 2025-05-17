import React from 'react';
import CountrySelector from '../components/CountrySelector';
import { Link } from 'react-router-dom';
const Register = () => {
	return (
		<div className="bg-logo-gradient pb-20 pt-40 text-white mx-auto place-content-center flex items-center">
			<div className="max-w-6xl mx-auto px-4 flex flex-col gap-10">
				<div>
					<h1 className="text-3xl">Bienvenido</h1>
				</div>
				<fieldset className="py-0 ">
					<form className="flex flex-col gap-5">
						<div className="flex flex-col gap-2 text-center relative justify-center aling-center">
							<input
								required
								type="name"
								name="name"
								id="name"
								placeholder=" "
								autoComplete="name"
								className="peer h-14 w-full rounded-full border border-gray-700  px-4 py-6 text-sm text-white outline-none transition-all duration-200 focus:border-blue-500"
							/>
							<label
								htmlFor="name"
								className="cursor-auto bg-[#0f0015] absolute px-1 left-4 top-4 text-gray-400 text-sm transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-500 peer-not-placeholder-shown:-top-2.5 peer-not-placeholder-shown:text-sm"
							>
								Nombre completo
							</label>
						</div>
						<div className="flex flex-col gap-2 text-center relative justify-center aling-center">
							<input
								required
								pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
								type="email"
								name="email"
								id="email"
								placeholder=" "
								autoComplete="email"
								className="peer h-14 w-full rounded-full border border-gray-700 bg-transparent px-4 py-6\3 text-sm text-white placeholder-transparent outline-none transition-all duration-200 focus:border-blue-500 focus:ring-0"
							/>
							<label
								htmlFor="email"
								className="cursor-auto bg-[#0f0015] absolute px-1 left-4 top-4 text-gray-400 text-sm transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-500 peer-not-placeholder-shown:-top-2.5 peer-not-placeholder-shown:text-sm"
							>
								Dirección de correo electrónico
							</label>
						</div>
						<CountrySelector />
						<div className="flex flex-col gap-2 text-center relative justify-center aling-center">
							<input
								required
								type="password"
								name="password"
								id="password"
								placeholder=""
								className="peer h-14 w-full rounded-full border border-gray-700 bg-transparent px-4 py-6\3 text-sm text-white placeholder-transparent outline-none transition-all duration-200 focus:border-blue-500 focus:ring-0"
								autoComplete="current-password"
							/>
							<label
								htmlFor="password"
								className="cursor-auto bg-[#0f0015] absolute px-1 left-4 top-4 text-gray-400 text-sm transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-500 peer-not-placeholder-shown:-top-2.5 peer-not-placeholder-shown:text-sm"
							>
								Contraseña
							</label>
						</div>
						<div className="flex flex-col gap-2 text-center relative justify-center aling-center">
							<input
								required
								type="password"
								name="password2"
								id="password2"
								placeholder=""
								className="peer h-14 w-full rounded-full border border-gray-700 bg-transparent px-4 py-6\3 text-sm text-white placeholder-transparent outline-none transition-all duration-200 focus:border-blue-500 focus:ring-0"
								autoComplete="current-password2"
							/>
							<label
								htmlFor="password2"
								className="cursor-auto bg-[#0f0015] absolute px-1 left-4 top-4 text-gray-400 text-sm transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-500 peer-not-placeholder-shown:-top-2.5 peer-not-placeholder-shown:text-sm"
							>
								confirmar contraseña
							</label>
						</div>

						<button className="bg-secondary/80 text-white font-bold text-lg py-3 rounded-full hover:bg-secondary/90 transition duration-300 cursor-pointer">
							Registrarse
						</button>
						<p className="text-sm text-gray-400">
							Al crear su cuenta, usted acepta los{' '}
							<Link
								to="/terminos-de-uso"
								className="text-blue-500 hover:underline"
							>
								Términos de uso{' '}
							</Link>{' '}
							<br />y las{' '}
							<Link to="/politicas" className="text-blue-500 hover:underline">
								{' '}
								Política de privacidad
							</Link>
							.{' '}
						</p>
						<div>
							<span>
								¿Ya tienes una cuenta?{' '}
								<Link to="/log-in" className="text-blue-500 hover:underline">
									Iniciar sesión
								</Link>
							</span>
						</div>
					</form>
				</fieldset>
			</div>
		</div>
	);
};

export default Register;
