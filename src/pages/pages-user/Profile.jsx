import { useEffect, useState } from 'react';
import client from '../../data/client';
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

	return (
		<div className="py-40 px-4 bg-logo-gradient min-h-screen">
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
					</div>
				) : (
					<p>Cargando perfil...</p>
				)}
			</div>
		</div>
	);
};

export default Profile;
