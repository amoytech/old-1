import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { HeartPulse } from 'lucide-react';
import { motion } from 'framer-motion';

const Splash = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/home');
        }, 3000);
        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <div style={{
            height: '100vh',
            background: 'linear-gradient(135deg, #FF8A00 0%, #FFB74D 100%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white'
        }}>
            <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <div style={{
                    background: 'white',
                    borderRadius: '50%',
                    padding: '40px',
                    boxShadow: '0 10px 20px rgba(0,0,0,0.2)'
                }}>
                    <HeartPulse size={80} color="var(--color-primary)" strokeWidth={2.5} />
                </div>
            </motion.div>
            <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                style={{ marginTop: '30px', fontSize: '40px', textShadow: '0 2px 4px rgba(0,0,0,0.1)' }}
            >
                云康助手
            </motion.h1>
            <p style={{ fontSize: '24px', opacity: 0.9 }}>云端守护，康健一生</p>
        </div>
    );
};

export default Splash;
