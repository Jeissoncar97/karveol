import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const PublicRoute = ({ children }) => {
	const { user, loading } = useAuth();

	if (loading) return <p>Cargando...</p>;

	return !user ? children : <Navigate to="/perfil" />;
};

export default PublicRoute;
