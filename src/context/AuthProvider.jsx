import { useEffect, useState } from 'react';
import supabase from '../data/client';
import AuthContext from './AuthContext'; // ✅ Asegúrate de importar desde 'AuthContext.js'

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);

	useEffect(() => {
		const getSession = async () => {
			const { data } = await supabase.auth.getSession();
			setUser(data.session?.user || null);
		};

		getSession();

		const { data: listener } = supabase.auth.onAuthStateChange(
			(_event, session) => {
				setUser(session?.user || null);
			}
		);

		return () => {
			listener.subscription.unsubscribe();
		};
	}, []);

	return (
		<AuthContext.Provider value={{ user, setUser }}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;
