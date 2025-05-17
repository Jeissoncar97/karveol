import { Link } from 'react-router-dom';

const LogIn = () => {
	return (
		<div className="bg-logo-gradient py-40 text-white mx-auto place-content-center flex items-center">
			<div className="max-w-6xl mx-auto px-4 flex flex-col gap-10">
				<div className="flex flex-col gap-2 text-center">
					<h1 className="text-3xl mx-auto">Bienvenido</h1>
				</div>
				<fieldset className="py-0">
					<form className="flex flex-col gap-5" noValidate>
						<div className="flex flex-col gap-2 text-center relative justify-center aling-center">
							<input
								required
								pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
								type="email"
								name="email"
								id="email"
								placeholder=" "
								autoComplete="email"
								className="peer h-14 w-full rounded-full border border-gray-700  px-4 py-6 text-sm text-white outline-none transition-all duration-200 focus:border-blue-500 "
							/>
							<label
								htmlFor="email"
								className="cursor-auto bg-[#0f0015] absolute px-1 left-4 top-4 text-gray-400 text-sm transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-500 peer-not-placeholder-shown:-top-2.5 peer-not-placeholder-shown:text-sm"
							>
								Dirección de correo electrónico
							</label>
						</div>
						<div className="flex flex-col gap-2 text-center relative justify-center aling-center">
							<input
								required
								type="password"
								name="password"
								id="password"
								placeholder=" "
								className="peer h-14 w-full rounded-full border border-gray-700 bg-transparent px-4 py-6 text-sm text-white outline-none transition-all duration-200 focus:border-blue-500 [&:not(:placeholder-shown)]:bg-transparent"
								autoComplete="current-password"
							/>
							<label
								htmlFor="password"
								className="cursor-auto bg-[#0f0015] absolute px-1 left-4 top-4 text-gray-400 text-sm transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-500 peer-not-placeholder-shown:-top-2.5 peer-not-placeholder-shown:text-sm"
							>
								Contraseña
							</label>
						</div>
						<button className="bg-secondary/80 text-white font-bold text-lg py-3 rounded-full hover:bg-secondary/90 transition duration-300 cursor-pointer">
							Ingresar
						</button>
						<div>
							<span>
								¿No tienes una cuenta?{' '}
								<Link
									to={'/register'}
									className="text-blue-500 hover:underline"
								>
									Registrarse
								</Link>
							</span>
						</div>
					</form>
				</fieldset>
				<div>
					<a href="" className="text-blue-500 hover:underline">
						Términos de uso{' '}
					</a>
					<span>|</span>
					<a href="" className="text-blue-500 hover:underline">
						{' '}
						Política de privacidad
					</a>
				</div>
			</div>
		</div>
	);
};

export default LogIn;
