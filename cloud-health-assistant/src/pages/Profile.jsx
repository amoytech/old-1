import React from 'react';
import { User, FileText, Settings as SettingsIcon, Volume2, Type } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
    const navigate = useNavigate();

    const menuItems = [
        { title: '我的挂号记录', icon: <FileText size={28} />, path: '#' },
    ];

    return (
        <div>
            <div className="card" style={{ display: 'flex', alignItems: 'center', padding: '30px' }}>
                <div style={{
                    width: '100px', height: '100px',
                    borderRadius: '50%', background: '#eee',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    marginRight: '20px'
                }}>
                    <User size={60} color="#999" />
                </div>
                <div>
                    <h2 style={{ margin: 0, fontSize: '30px' }}>张建国</h2>
                    <p style={{ fontSize: '20px', color: '#666', marginTop: '8px' }}>76岁 | 身份证尾号 1234</p>
                </div>
            </div>

            <div className="card" style={{ padding: '10px 0' }}>
                {menuItems.map((item, index) => (
                    <div
                        key={index}
                        onClick={() => navigate(item.path)}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            padding: '24px 30px',
                            borderBottom: index < menuItems.length - 1 ? '1px solid #eee' : 'none',
                            cursor: 'pointer'
                        }}
                    >
                        <div style={{ color: 'var(--color-primary)', marginRight: '20px' }}>
                            {item.icon}
                        </div>
                        <span style={{ fontSize: '24px', flex: 1 }}>{item.title}</span>
                        <span style={{ fontSize: '24px', color: '#ccc' }}>&gt;</span>
                    </div>
                ))}
            </div>

            <div className="card" style={{ marginTop: '20px', padding: '30px', textAlign: 'center', background: '#E3F2FD' }}>
                <h3 style={{ margin: 0, color: '#1565C0' }}>子女端绑定状态</h3>
                <p style={{ fontSize: '20px', marginTop: '10px' }}>已绑定：儿子张伟</p>
            </div>
        </div>
    );
};

export default Profile;
