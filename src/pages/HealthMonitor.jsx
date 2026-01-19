import React, { useState } from 'react';
import { Plus, Minus, Activity, ArrowRight } from 'lucide-react';

const HealthMonitor = () => {
    const [zoomLevel, setZoomLevel] = useState(1);

    // Simulated data for "Large numbers"
    const bloodPressure = { sys: 135, dia: 85, status: '偏高' };

    return (
        <div>
            <div className="card" style={{ padding: '30px' }}>
                <h2 style={{ fontSize: '24px', color: '#666' }}>当前血压</h2>
                <div style={{ display: 'flex', alignItems: 'baseline', marginTop: '10px' }}>
                    <span style={{ fontSize: '60px', fontWeight: 'bold', color: 'var(--color-text-main)', marginRight: '10px' }}>
                        {bloodPressure.sys}/{bloodPressure.dia}
                    </span>
                    <span style={{ fontSize: '24px', color: '#666' }}>mmHg</span>
                </div>
                <div style={{
                    marginTop: '10px',
                    display: 'inline-block',
                    padding: '8px 24px',
                    borderRadius: 'var(--radius-full)',
                    background: '#FFEBEE',
                    color: 'var(--color-danger)',
                    fontSize: '24px',
                    fontWeight: 'bold'
                }}>
                    {bloodPressure.status}
                </div>
                <p style={{ marginTop: '20px', fontSize: '18px', color: '#888' }}>
                    测量时间：今天 上午 08:30
                </p>
            </div>

            <div className="card">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                    <h3>血压趋势</h3>
                    <div style={{ display: 'flex', gap: '10px' }}>
                        <button
                            onClick={() => setZoomLevel(Math.max(1, zoomLevel - 0.5))}
                            style={{
                                width: '50px', height: '50px',
                                borderRadius: '12px', border: '2px solid #ddd', background: 'white'
                            }}
                        >
                            <Minus size={30} color="#666" />
                        </button>
                        <button
                            onClick={() => setZoomLevel(Math.min(2, zoomLevel + 0.5))}
                            style={{
                                width: '50px', height: '50px',
                                borderRadius: '12px', border: '2px solid #ddd', background: 'white'
                            }}
                        >
                            <Plus size={30} color="#666" />
                        </button>
                    </div>
                </div>

                {/* Simulated Chart Area */}
                <div style={{
                    height: '200px',
                    background: '#f0f0f0',
                    borderRadius: '8px',
                    position: 'relative',
                    overflow: 'hidden',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <div style={{
                        width: '100%',
                        height: '100%',
                        transform: `scale(${zoomLevel})`,
                        transformOrigin: 'center',
                        transition: 'transform 0.3s',
                        display: 'flex',
                        alignItems: 'flex-end',
                        padding: '20px',
                        justifyContent: 'space-around'
                    }}>
                        {/* Simple bars to represent chart for accessibility/simplicity */}
                        {[120, 130, 125, 135, 140, 132, 128].map((h, i) => (
                            <div key={i} style={{
                                width: '10%',
                                height: `${(h - 100) * 3}px`,
                                background: i === 4 ? 'var(--color-danger)' : 'var(--color-success)', // Highlight the high one
                                borderRadius: '4px 4px 0 0',
                                position: 'relative'
                            }}>
                                {zoomLevel > 1.2 && (
                                    <span style={{ position: 'absolute', top: '-25px', left: '-5px', fontSize: '14px' }}>{h}</span>
                                )}
                            </div>
                        ))}
                        {/* Line connector simulation would be better with SVG but this is a quick proto */}
                        <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
                            <path d="M10 150 L50 120 L100 135 L150 100 L200 80 L250 110 L300 120" fill="none" stroke="rgba(0,0,0,0.1)" strokeWidth="4" />
                        </svg>
                    </div>
                </div>
                <p style={{ textAlign: 'center', color: '#999', marginTop: '10px' }}>
                    点击 + 或 - 放大查看
                </p>
            </div>

            <button className="btn btn-primary btn-large-action" style={{ marginTop: '20px' }}>
                <Activity size={32} style={{ marginRight: '10px' }} />
                开始测量
            </button>
        </div>
    );
};

export default HealthMonitor;
