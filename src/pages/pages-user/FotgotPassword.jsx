import { useState } from 'react';
import client from '../../data/client';

const ForgotPassword = () => {
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');
	const [loading, setLoading] = useState(false);

	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);

		try {
			const { error } = await client.auth.resetPasswordForEmail(email, {
				redirectTo: `${window.location.origin}/auth/callback`,
			});

			if (error) throw error;
			setMessage('¡Revisa tu correo para el enlace de recuperación!');
		} catch (error) {
			setMessage(error.message);
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className="w-full bg-logo-gradient py-40 text-white mx-auto place-content-center flex items-center">
			<h2>Recuperar Contraseña</h2>
			<form onSubmit={handleSubmit}>
				<input
					type="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					placeholder="Tu correo electrónico"
					required
				/>
				<button type="submit" disabled={loading}>
					{loading ? 'Enviando...' : 'Enviar enlace'}
				</button>
			</form>
			{message && <p>{message}</p>}
		</div>
	);
};

export default ForgotPassword;
