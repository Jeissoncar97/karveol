import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import client from '../../data/client';

const ResetPassword = () => {
	const [password, setPassword] = useState('');
	const [confirm, setConfirm] = useState('');
	const [message, setMessage] = useState('');
	const [error, setError] = useState('');
	const navigate = useNavigate();

	const handleReset = async (e) => {
		e.preventDefault();
		setMessage('');
		setError('');

		if (password !== confirm) {
			setError('Las contraseñas no coinciden.');
			return;
		}

		const { error } = await client.auth.updateUser({ password });

		if (error) {
			setError('Hubo un error al actualizar la contraseña: ' + error.message);
		} else {
			setMessage('Contraseña actualizada correctamente...');
			setTimeout(() => navigate('/perfil'), 3000);
		}
	};

	return (
		<div className="w-full bg-logo-gradient py-40 text-white mx-auto place-content-center flex items-center min-h-screen">
			<div className="max-w-md mx-auto mt-20 p-6 shadow-lg rounded-lg">
				<h2 className="text-2xl font-semibold mb-4 text-center">
					Restablecer contraseña
				</h2>
				<form onSubmit={handleReset} className="flex flex-col gap-4">
					<input
						type="password"
						placeholder="Nueva contraseña"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						required
						className="border rounded px-4 py-2"
					/>
					<input
						type="password"
						placeholder="Confirmar contraseña"
						value={confirm}
						onChange={(e) => setConfirm(e.target.value)}
						required
						className="border rounded px-4 py-2"
					/>
					<button
						type="submit"
						className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 cursor-pointer"
					>
						Actualizar contraseña
					</button>
				</form>
				{error && <p className="text-red-500 mt-4 text-sm">{error}</p>}
				{message && <p className="text-green-500 mt-4 text-sm">{message}</p>}
			</div>
		</div>
	);
};

export default ResetPassword;
