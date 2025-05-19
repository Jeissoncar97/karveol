import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import client from '../../data/client';

const AuthCallback = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const processRecoveryToken = async () => {
      const token = searchParams.get('token');
      const type = searchParams.get('type');

      if (type === 'recovery' && token) {
        // Convertir el formato del token al que Supabase espera
        navigate(`/reset-password#access_token=${token}&type=recovery`);
      } else {
        navigate('/forgot-password');
      }
    };

    processRecoveryToken();
  }, [navigate, searchParams]);

  return <div>Procesando autenticación...</div>;
};

export default AuthCallback;