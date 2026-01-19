import React, { useState, useEffect } from 'react';
import { Phone, AlertTriangle } from 'lucide-react';
import { motion, useAnimation } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Emergency = () => {
    const [pressing, setPressing] = useState(false);
    const [progress, setProgress] = useState(0);
    const navigate = useNavigate();
    const controls = useAnimation();

    useEffect(() => {
        let interval;
        if (pressing) {
            interval = setInterval(() => {
                setProgress(p => {
                    if (p >= 100) {
                        clearInterval(interval);
                        alert("正在呼叫紧急联系人并在发送位置...");
                        navigate('/home');
                        return 100;
                    }
                    return p + 2; // fill in ~1-2 seconds
                });
            }, 20);
        } else {
            setProgress(0);
        }
        return () => clearInterval(interval);
    }, [pressing, navigate]);

    return (
        <div style={{
            height: '100vh',
            background: '#FFEBEE',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
            position: 'relative',
            userSelect: 'none'
        }}>
            <button
                onClick={() => navigate('/home')}
                style={{
                    position: 'absolute', top: '20px', right: '20px',
                    background: 'white', border: 'none', padding: '10px 20px',
                    borderRadius: '20px', fontSize: '18px', fontWeight: 'bold'
                }}
            >
                取消
            </button>

            <h1 style={{ color: 'var(--color-danger)', marginBottom: '10px' }}>紧急求助</h1>
            <p style={{ fontSize: '20px', marginBottom: '40px', color: '#666' }}>长按下方按钮 3 秒呼叫</p>

            <div
                style={{ position: 'relative', width: '240px', height: '240px' }}
                onPointerDown={() => setPressing(true)}
                onPointerUp={() => setPressing(false)}
                onPointerLeave={() => setPressing(false)}
            >
                {/* Progress Circle (Background) */}
                <svg width="240" height="240" style={{ transform: 'rotate(-90deg)' }}>
                    <circle cx="120" cy="120" r="110" stroke="#ffcdd2" strokeWidth="10" fill="transparent" />
                    <circle
                        cx="120" cy="120" r="110"
                        stroke="var(--color-danger)"
                        strokeWidth="10"
                        fill="transparent"
                        strokeDasharray={2 * Math.PI * 110}
                        strokeDashoffset={2 * Math.PI * 110 * (1 - progress / 100)}
                        style={{ transition: 'stroke-dashoffset 0.1s linear' }}
                    />
                </svg>

                {/* Button Inner */}
                <motion.div
                    animate={pressing ? { scale: 0.95 } : { scale: 1 }}
                    style={{
                        position: 'absolute',
                        top: '20px', left: '20px',
                        width: '200px', height: '200px',
                        borderRadius: '50%',
                        background: 'var(--color-danger)',
                        display: 'flex',
                        flexDirection: 'column', // Changed to column to stack icon
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 10px 30px rgba(211, 47, 47, 0.4)',
                        color: 'white'
                    }}
                >
                    <AlertTriangle size={60} fill="white" stroke="var(--color-danger)" />
                    <span style={{ fontSize: '24px', fontWeight: 'bold', marginTop: '10px' }}>SOS</span>
                </motion.div>
            </div>

            <p style={{ marginTop: '40px', fontSize: '18px', color: '#888', textAlign: 'center' }}>
                系统将自动发送您的位置<br />给子女和急救中心
            </p>
        </div>
    );
};

export default Emergency;
