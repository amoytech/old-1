import React, { useState } from 'react';
import { ToggleLeft, ToggleRight, Smartphone, Volume2, Type } from 'lucide-react';

const Settings = () => {
    const [largeMode, setLargeMode] = useState(true);
    const [volume, setVolume] = useState(80);

    return (
        <div>
            <div className="card">
                <div style={{ padding: '20px 0', borderBottom: '1px solid #eee' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <Smartphone size={32} style={{ marginRight: '15px', color: 'var(--color-primary)' }} />
                            <span style={{ fontSize: '24px' }}>长辈模式</span>
                        </div>
                        <div onClick={() => setLargeMode(!largeMode)} style={{ cursor: 'pointer' }}>
                            {largeMode ? (
                                <ToggleRight size={60} color="var(--color-success)" fill="var(--color-success)" stroke="none" />
                            ) : (
                                <ToggleLeft size={60} color="#ccc" />
                            )}
                        </div>
                    </div>
                    <p style={{ color: '#666', fontSize: '18px', margin: 0, paddingLeft: '47px' }}>
                        已开启：大字号、高对比度、语音播报
                    </p>
                </div>

                <div style={{ padding: '30px 0', borderBottom: '1px solid #eee' }}>
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                        <Type size={32} style={{ marginRight: '15px', color: 'var(--color-primary)' }} />
                        <span style={{ fontSize: '24px' }}>字体大小</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', padding: '0 20px' }}>
                        <span style={{ fontSize: '16px' }}>小</span>
                        <input
                            type="range"
                            min="1" max="5"
                            defaultValue="4"
                            style={{ flex: 1, margin: '0 20px', height: '10px' }}
                        />
                        <span style={{ fontSize: '30px' }}>大</span>
                    </div>
                </div>

                <div style={{ padding: '30px 0' }}>
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                        <Volume2 size={32} style={{ marginRight: '15px', color: 'var(--color-primary)' }} />
                        <span style={{ fontSize: '24px' }}>语音助手音量</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', padding: '0 20px' }}>
                        <Volume2 size={24} />
                        <input
                            type="range"
                            min="0" max="100"
                            value={volume}
                            onChange={(e) => setVolume(e.target.value)}
                            style={{ flex: 1, margin: '0 20px', height: '10px' }}
                        />
                        <span style={{ fontSize: '24px' }}>{volume}%</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Settings;
