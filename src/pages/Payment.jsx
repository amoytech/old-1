import React, { useState, useEffect } from 'react';
import { Check, Loader } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Payment = () => {
    const [status, setStatus] = useState('confirm'); // confirm, processing, success
    const navigate = useNavigate();

    const handlePay = () => {
        setStatus('processing');
        setTimeout(() => {
            setStatus('success');
            // Auto redirect after success display
            setTimeout(() => {
                navigate('/home');
            }, 3000);
        }, 2000);
    };

    if (status === 'success') {
        return (
            <div style={{ textAlign: 'center', padding: '60px 20px', height: '80vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{
                    width: '120px', height: '120px',
                    borderRadius: '50%', background: 'var(--color-success)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    marginBottom: '30px'
                }}>
                    <Check size={80} color="white" strokeWidth={4} />
                </div>
                <h1 style={{ color: 'var(--color-success)', fontSize: '40px' }}>支付成功</h1>
                <p style={{ fontSize: '24px', color: '#666' }}>医生将马上联系您</p>
            </div>
        );
    }

    if (status === 'processing') {
        return (
            <div style={{ textAlign: 'center', padding: '60px 20px', height: '80vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <Loader size={80} color="var(--color-primary)" className="spin" />
                <h2 style={{ marginTop: '30px' }}>正在支付...</h2>
            </div>
        );
    }

    return (
        <div>
            <div className="card" style={{ textAlign: 'center', padding: '40px 20px' }}>
                <p style={{ fontSize: '24px', color: '#666', margin: 0 }}>本次挂号费用</p>
                <div style={{ fontSize: '60px', fontWeight: 'bold', margin: '20px 0', color: 'var(--color-text-main)' }}>
                    ¥ 15.00
                </div>
                <div style={{ background: '#f5f5f5', padding: '20px', borderRadius: '8px', textAlign: 'left' }}>
                    <p style={{ fontSize: '20px', margin: '5px 0' }}>收款方：市第一医院</p>
                    <p style={{ fontSize: '20px', margin: '5px 0' }}>科室：心血管内科 - 李医生</p>
                </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', margin: '30px 0', padding: '20px', background: '#E8F5E9', borderRadius: '12px', border: '1px solid var(--color-success)' }}>
                <Check size={30} color="var(--color-success)" style={{ marginRight: '15px' }} />
                <span style={{ fontSize: '20px', color: '#2E7D32' }}>已开启免密支付 (单笔&lt;50元)</span>
            </div>

            <button onClick={handlePay} className="btn btn-success btn-large-action">
                确认支付
            </button>

            <p style={{ textAlign: 'center', marginTop: '30px', color: '#999', fontSize: '18px' }}>
                支付遇到问题？<span style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}>联系客服</span>
            </p>

            <style>{`
        .spin { animation: spin 1s linear infinite; }
        @keyframes spin { 100% { transform: rotate(360deg); } }
      `}</style>
        </div>
    );
};

export default Payment;
