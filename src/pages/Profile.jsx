import { useEffect, useState } from 'react';
import client from '../data/client';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
	const [user, setUser] = useState(null);
	const navigate = useNavigate();

	useEffect(() => {
		const getUser = async () => {
			const {
				data: { user },
			} = await client.auth.getUser();

			if (!user) {
				navigate('/log-in'); // Redirige si no está logueado
			} else {
				setUser(user);
			}
		};

		getUser();
	}, [navigate]);

	const handleLogout = async () => {
		await client.auth.signOut();
		navigate('/log-in'); // Redirige al login después de cerrar sesión
	};

	return (
		<div className="py-40 px-4 bg-logo-gradient">
			<div className="text-white px-4 pt-20 max-w-xl mx-auto ">
				<h1 className="text-3xl font-bold mb-4">Mi perfil</h1>
				{user ? (
					<div className="space-y-4">
						<p>
							<strong>Correo:</strong> {user.email}
						</p>
						<p>
							<strong>Nombre:</strong>{' '}
							{user.user_metadata?.name || 'No registrado'}
						</p>
						<p>
							<strong>País:</strong>{' '}
							{user.user_metadata?.country || 'No registrado'}
						</p>

						<button
							onClick={handleLogout}
							className="mt-4 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-full transition duration-300"
						>
							Cerrar sesión
						</button>
					</div>
				) : (
					<p>Cargando perfil...</p>
				)}
			</div>
		</div>
	);
};

export default Profile;
