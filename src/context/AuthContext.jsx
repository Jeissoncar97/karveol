import { createContext, useContext, useEffect, useState } from 'react';
import client from '../data/client';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		// Comprobar si hay una sesión activa
		const getSession = async () => {
			const { data: { session } } = await client.auth.getSession();
			setUser(session?.user ?? null);
			setLoading(false);
		};

		getSession();

		// Suscripción a cambios de autenticación
		const { data: listener } = client.auth.onAuthStateChange((_event, session) => {
			setUser(session?.user ?? null);
		});

		return () => listener.subscription.unsubscribe();
	}, []);

	return (
		<AuthContext.Provider value={{ user, loading }}>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuth = () => useContext(AuthContext);
