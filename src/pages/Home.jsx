import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Activity, Stethoscope, Pill, Phone, User, Settings, Mic } from 'lucide-react';

const Home = () => {
    const navigate = useNavigate();

    const menuItems = [
        { title: '血压血糖', icon: <Activity size={50} />, path: '/monitor', color: 'var(--color-success)' },
        { title: '我的药箱', icon: <Pill size={50} />, path: '/meds', color: '#FF9800' },
        { title: '健康报告', icon: <div style={{ fontSize: 40, fontWeight: 'bold' }}>AI</div>, path: '/report', color: '#9C27B0' },
        { title: '找医生', icon: <Stethoscope size={50} />, path: '/consult', color: '#2196F3' },
        { title: '一键急救', icon: <Phone size={50} />, path: '/emergency', color: 'var(--color-danger)', highlight: true },
        { title: '个人中心', icon: <User size={50} />, path: '/profile', color: '#795548' },
        { title: '设置', icon: <Settings size={50} />, path: '/settings', color: '#607D8B' },
    ];

    return (
        <div style={{ padding: 'var(--spacing-md)', paddingBottom: '100px' }}>
            <header style={{ marginBottom: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                    <h2 style={{ marginBottom: '4px' }}>你好，张爷爷</h2>
                    <p style={{ color: 'var(--color-text-sub)', fontSize: '20px' }}>今天身体怎么样？</p>
                </div>
                <div style={{ width: 60, height: 60, borderRadius: '50%', background: '#eee', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <User size={30} color="#666" />
                </div>
            </header>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: 'var(--spacing-md)'
            }}>
                {menuItems.map((item, index) => (
                    <button
                        key={index}
                        onClick={() => navigate(item.path)}
                        style={{
                            borderRadius: 'var(--radius-md)',
                            padding: '24px 16px',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            boxShadow: 'var(--shadow-card)',
                            gridColumn: item.highlight ? 'span 2' : 'span 1',
                            background: item.highlight ? '#FFEBEE' : 'white',
                            border: item.highlight ? '2px solid var(--color-danger)' : 'none'
                        }}
                    >
                        <div style={{
                            marginBottom: '10px',
                            color: item.color
                        }}>
                            {item.icon}
                        </div>
                        <span style={{
                            fontSize: '24px',
                            fontWeight: 'bold',
                            color: item.highlight ? 'var(--color-danger)' : 'var(--color-text-main)'
                        }}>
                            {item.title}
                        </span>
                    </button>
                ))}
            </div>

            {/* Floating Voice Button */}
            <button style={{
                position: 'fixed',
                bottom: '30px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                background: 'var(--color-primary)',
                color: 'white',
                border: 'none',
                boxShadow: '0 4px 20px rgba(255, 138, 0, 0.4)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Mic size={40} />
            </button>
            <div style={{ position: 'fixed', bottom: '10px', width: '100%', textAlign: 'center', left: 0, fontSize: '14px', color: '#999' }}>
                按住说话
            </div>
        </div>
    );
};

export default Home;
