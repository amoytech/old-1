import React from 'react';
import { Star, Send, Share2, Smile, Frown } from 'lucide-react';

const HealthReport = () => {
    return (
        <div>
            <div className="card" style={{ textAlign: 'center', padding: '40px 20px' }}>
                <h2 style={{ color: '#666', fontSize: '24px' }}>本周健康状况</h2>

                <div style={{ margin: '30px 0', color: 'var(--color-success)' }}>
                    <Smile size={120} strokeWidth={1.5} />
                </div>

                <h1 style={{ fontSize: '40px', color: 'var(--color-primary)', margin: '10px 0' }}>表现很棒！</h1>
                <p style={{ fontSize: '20px', color: '#666', lineHeight: 1.6 }}>
                    血压控制平稳，记得按时吃药哦。<br />
                    睡眠质量比上周好很多！
                </p>

                <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '20px' }}>
                    {[1, 2, 3, 4, 5].map(i => (
                        <Star key={i} size={30} fill="#FFC107" color="#FFC107" />
                    ))}
                </div>
            </div>

            <div className="card">
                <h3>关键指标</h3>
                <div style={{ marginTop: '15px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '20px' }}>
                        <span>血压达标率</span>
                        <span style={{ fontWeight: 'bold', color: 'var(--color-success)' }}>95%</span>
                    </div>
                    <div style={{ height: '20px', background: '#eee', borderRadius: '10px', overflow: 'hidden' }}>
                        <div style={{ width: '95%', height: '100%', background: 'var(--color-success)' }}></div>
                    </div>
                </div>

                <div style={{ marginTop: '25px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '20px' }}>
                        <span>运动量</span>
                        <span style={{ fontWeight: 'bold', color: 'orange' }}>一般</span>
                    </div>
                    <div style={{ height: '20px', background: '#eee', borderRadius: '10px', overflow: 'hidden' }}>
                        <div style={{ width: '60%', height: '100%', background: 'orange' }}></div>
                    </div>
                </div>
            </div>

            <button className="btn btn-primary" style={{ marginTop: '20px', height: '70px' }}>
                <Share2 size={28} style={{ marginRight: '10px' }} />
                发送给子女
            </button>
        </div>
    );
};

export default HealthReport;
