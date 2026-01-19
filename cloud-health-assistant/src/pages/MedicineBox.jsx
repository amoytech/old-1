import React, { useState } from 'react';
import { Camera, Plus, Clock, Pill } from 'lucide-react';

const MedicineBox = () => {
    const meds = [
        { id: 1, name: '阿司匹林', desc: '每日1次，每次1片', time: '早饭后', stock: '充足' },
        { id: 2, name: '降压药', desc: '每日2次，每次1片', time: '早/晚饭后', stock: '剩余3天' },
    ];

    return (
        <div>
            <div
                className="card"
                style={{
                    background: 'linear-gradient(135deg, #4CAF50 0%, #8BC34A 100%)',
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    padding: '40px',
                    marginBottom: '30px',
                    cursor: 'pointer'
                }}
            >
                <div style={{ background: 'rgba(255,255,255,0.2)', padding: '20px', borderRadius: '50%', marginBottom: '15px' }}>
                    <Camera size={60} color="white" />
                </div>
                <h2 style={{ margin: 0, fontSize: '30px' }}>拍照录入药品</h2>
                <p style={{ fontSize: '18px', opacity: 0.9, marginTop: '10px' }}>对着药盒拍一拍，自动识别</p>
            </div>

            <h2 style={{ padding: '0 10px', marginBottom: '20px' }}>我的药品</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {meds.map(med => (
                    <div key={med.id} className="card" style={{ display: 'flex', padding: '20px' }}>
                        <div style={{
                            width: '100px', height: '100px',
                            background: '#f5f5f5', borderRadius: '12px',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            marginRight: '20px', flexShrink: 0
                        }}>
                            <Pill size={50} color="#FF9800" />
                        </div>
                        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                            <h3 style={{ marginBottom: '8px', fontSize: '26px' }}>{med.name}</h3>
                            <p style={{ color: '#666', fontSize: '18px', display: 'flex', alignItems: 'center' }}>
                                <Clock size={18} style={{ marginRight: '6px' }} />
                                {med.time}
                            </p>
                            <p style={{ margin: '6px 0 0', color: med.stock.includes('剩余') ? 'var(--color-danger)' : 'var(--color-success)' }}>
                                {med.stock}
                            </p>
                        </div>
                        <button style={{
                            alignSelf: 'center',
                            width: '50px', height: '50px',
                            borderRadius: '50%', border: 'none', background: '#f0f0f0',
                            display: 'flex', alignItems: 'center', justifyContent: 'center'
                        }}>
                            <span style={{ fontSize: '24px', fontWeight: 'bold' }}>...</span>
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MedicineBox;
