import { useState } from 'react';
import client from '../../data/client';

const ForgotPassword = () => {
	const [email, setEmail] = useState('');
	const [loading, setLoading] = useState(false);
	const [message, setMessage] = useState('');
	const [error, setError] = useState('');

	const handleResetPassword = async (e) => {
		e.preventDefault();
		setLoading(true);
		setMessage('');
		setError('');

		if (!email) {
			setError('Por favor ingresa tu correo.');
			setLoading(false);
			return;
		}

		const { error } = await client.auth.resetPasswordForEmail(email, {
			redirectTo: 'http://localhost:5173/reset-password', // Cambia a tu ruta real
		});

		if (error) {
			setError('Error: ' + error.message);
		} else {
			setMessage('Te hemos enviado un enlace para restablecer tu contraseña.');
		}
		setLoading(false);
	};

	return (
		<div className="w-full bg-logo-gradient py-40 text-white mx-auto place-content-center flex items-center min-h-screen">
			<div className="max-w-md mx-auto p-6 bg-transparent text-white shadow-md rounded-lg w-full">
				<h2 className="text-xl font-semibold mb-4 text-center">
					Recuperar Contraseña
				</h2>
				<form onSubmit={handleResetPassword} className="flex flex-col gap-4">
					<input
						id="email"
						type="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						placeholder="Tu correo electrónico"
						required
						className="border px-4 py-2 rounded"
						autoComplete="email"
					/>
					<button
						type="submit"
						disabled={loading}
						className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
					>
						{loading ? 'Enviando...' : 'Enviar enlace'}
					</button>
				</form>
				{message && <p className="text-green-600 mt-4 text-sm">{message}</p>}
				{error && <p className="text-red-500 mt-4 text-sm">{error}</p>}
			</div>
		</div>
	);
};

export default ForgotPassword;
