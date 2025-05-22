import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import client from '../data/client';

const LogIn = () => {
	const [formData, setFormData] = useState({ email: '', password: '' });
	const [error, setError] = useState('');
	const [success, setSuccess] = useState('');
	const navigate = useNavigate();

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setError('');
		setSuccess('');

		const { error } = await client.auth.signInWithPassword({
			email: formData.email,
			password: formData.password,
		});

		if (error) {
			setError('Correo o contraseña incorrectos.');
		} else {
			setTimeout(() => {
				navigate('/perfil'); // o a donde desees llevar al usuario
			}, 1500);
		}
	};

	return (
		<div className="bg-logo-gradient py-40 text-white mx-auto place-content-center flex items-center min-h-screen">
			<div className="max-w-6xl mx-auto px-4 flex flex-col gap-10">
				<div className="flex flex-col gap-2 text-center">
					<h1 className="text-3xl mx-auto">Bienvenido</h1>
				</div>
				<fieldset className="py-0">
					<form
						className="flex flex-col gap-5"
						noValidate
						onSubmit={handleSubmit}
					>
						<div className="flex flex-col gap-2 text-center relative">
							<input
								required
								type="email"
								name="email"
								id="email"
								value={formData.email}
								onChange={handleChange}
								placeholder=" "
								autoComplete="email"
								className="peer h-14 w-full rounded-full border border-gray-700 px-4 py-6 text-sm text-white outline-none transition-all duration-200 focus:border-blue-500"
							/>
							<label
								htmlFor="email"
								className="cursor-auto bg-[#0f0015] absolute px-1 left-4 top-4 text-gray-400 text-sm transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-500 peer-not-placeholder-shown:-top-2.5 peer-not-placeholder-shown:text-sm"
							>
								Dirección de correo electrónico
							</label>
						</div>
						<div className="flex flex-col gap-2 text-center relative">
							<input
								required
								type="password"
								name="password"
								id="password"
								value={formData.password}
								onChange={handleChange}
								placeholder=" "
								className="peer h-14 w-full rounded-full border border-gray-700 px-4 py-6 text-sm text-white outline-none transition-all duration-200 focus:border-blue-500"
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

						{error && <p className="text-red-500 text-sm">{error}</p>}
						{success && <p className="text-green-500 text-sm">{success}</p>}
						<p className="text-center mt-4">
							¿Olvidaste tu contraseña?{' '}
							<Link
								to={'/forgot-password'}
								className="text-blue-500 hover:underline"
							>
								Restablecer
							</Link>
						</p>
						<div className="text-center">
							<span>
								¿No tienes una cuenta?{' '}
								<Link to="/register" className="text-blue-500 hover:underline">
									Registrarse
								</Link>
							</span>
						</div>
					</form>
				</fieldset>
				<div>
					<Link
						to="/terminos-y-condiciones"
						className="text-blue-500 hover:underline"
					>
						Términos de uso
					</Link>
					<span> | </span>
					<Link to="/politicas" className="text-blue-500 hover:underline">
						Política de privacidad
					</Link>
				</div>
			</div>
		</div>
	);
};

export default LogIn;
