import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import client from '../../data/client';

const ResetPassword = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const validateRecoverySession = async () => {
      try {
        // Extraer parámetros del hash
        const hashParams = new URLSearchParams(location.hash.substring(1));
        const accessToken = hashParams.get('access_token');
        const type = hashParams.get('type');

        if (type !== 'recovery' || !accessToken) {
          throw new Error('invalid_recovery_token');
        }

        // Verificar la sesión de recuperación
        const { data: { session }, error } = await client.auth.getSession();

        if (error || !session?.user?.recovery_session) {
          throw new Error('invalid_recovery_session');
        }

        setMessage('');
      } catch (error) {
        setMessage('Enlace inválido o expirado. Por favor solicita uno nuevo.', error);
        setTimeout(() => navigate('/forgot-password'), 3000);
      } finally {
        setLoading(false);
      }
    };

    validateRecoverySession();
  }, [navigate, location]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (password.length < 6) {
      setMessage('La contraseña debe tener al menos 6 caracteres');
      return;
    }

    if (password !== confirmPassword) {
      setMessage('Las contraseñas no coinciden');
      return;
    }

    setLoading(true);
    
    try {
      const { error } = await client.auth.updateUser({ password });

      if (error) throw error;
      
      setMessage('¡Contraseña actualizada correctamente!');
      setTimeout(() => navigate('/log-in'), 2000);
    } catch (error) {
      setMessage(error.message || 'Error al actualizar la contraseña');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div>Validando enlace de recuperación...</div>;
  }

  if (message) {
    return <div>{message}</div>;
  }

  return (
    <div>
      <h2>Restablecer Contraseña</h2>
      <form onSubmit={handleSubmit}>
        {/* Campos del formulario */}
      </form>
    </div>
  );
};

export default ResetPassword;