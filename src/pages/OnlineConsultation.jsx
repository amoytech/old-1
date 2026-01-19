import React, { useState } from 'react';
import { Video, Phone, User, X, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const OnlineConsultation = () => {
    const [selectedDoctor, setSelectedDoctor] = useState(null);
    const navigate = useNavigate();

    const doctors = [
        { id: 1, name: '李医生', dept: '心血管内科', hospital: '市第一医院', available: true },
        { id: 2, name: '王医生', dept: '全科医疗', hospital: '社区卫生中心', available: true },
        { id: 3, name: '张医生', dept: '内分泌科', hospital: '市中医院', available: false },
    ];

    const handleCall = () => {
        // Navigate to payment or simulate call
        navigate('/payment');
    };

    return (
        <div style={{ position: 'relative' }}>
            <h2 style={{ padding: '0 10px' }}>推荐医生</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {doctors.map(doc => (
                    <div
                        key={doc.id}
                        onClick={() => setSelectedDoctor(doc)}
                        className="card"
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            padding: '24px',
                            border: selectedDoctor?.id === doc.id ? '2px solid var(--color-primary)' : 'none',
                            cursor: 'pointer'
                        }}
                    >
                        <div style={{
                            width: '80px', height: '80px',
                            borderRadius: '50%', background: '#eee',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            marginRight: '20px', flexShrink: 0
                        }}>
                            <User size={50} color="#999" />
                        </div>
                        <div style={{ flex: 1 }}>
                            <h3 style={{ marginBottom: '8px', fontSize: '28px' }}>{doc.name}</h3>
                            <p style={{ margin: 0, fontSize: '18px', color: '#666' }}>{doc.dept} | {doc.hospital}</p>
                            <p style={{ margin: '8px 0 0', color: doc.available ? 'var(--color-success)' : '#999', fontWeight: 'bold' }}>
                                {doc.available ? '● 在线' : '○ 离线'}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            <AnimatePresence>
                {selectedDoctor && (
                    <motion.div
                        initial={{ y: '100%' }}
                        animate={{ y: 0 }}
                        exit={{ y: '100%' }}
                        style={{
                            position: 'fixed',
                            bottom: 0, left: 0, right: 0,
                            background: 'white',
                            boxShadow: '0 -4px 20px rgba(0,0,0,0.2)',
                            borderRadius: '24px 24px 0 0',
                            padding: '30px',
                            zIndex: 200,
                            maxWidth: '480px',
                            margin: '0 auto'
                        }}
                    >
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
                            <h2 style={{ margin: 0 }}>联系 {selectedDoctor.name}</h2>
                            <button
                                onClick={() => setSelectedDoctor(null)}
                                style={{ background: 'none', border: 'none', padding: '10px' }}
                            >
                                <X size={32} />
                            </button>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                            <button
                                onClick={handleCall}
                                className="btn"
                                style={{
                                    flexDirection: 'column', height: '140px',
                                    background: '#E3F2FD', color: '#1565C0'
                                }}
                            >
                                <Video size={48} style={{ marginBottom: '10px' }} />
                                视频通话
                            </button>
                            <button
                                onClick={handleCall}
                                className="btn btn-success"
                                style={{ flexDirection: 'column', height: '140px' }}
                            >
                                <Phone size={48} style={{ marginBottom: '10px' }} />
                                语音通话
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {selectedDoctor && (
                <div
                    onClick={() => setSelectedDoctor(null)}
                    style={{
                        position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
                        background: 'rgba(0,0,0,0.5)', zIndex: 199
                    }}
                />
            )}
        </div>
    );
};

export default OnlineConsultation;
