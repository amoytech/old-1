import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';

const Layout = ({ children, title, backTo }) => {
    const navigate = useNavigate();

    return (
        <>
            <header style={{
                padding: 'var(--spacing-md)',
                background: 'var(--color-primary)',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                position: 'sticky',
                top: 0,
                zIndex: 100,
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }}>
                {backTo && (
                    <button
                        onClick={() => navigate(backTo)}
                        style={{
                            background: 'none',
                            border: 'none',
                            color: 'white',
                            cursor: 'pointer',
                            padding: '8px',
                            marginRight: '8px',
                            display: 'flex',
                            alignItems: 'center'
                        }}
                        aria-label="返回"
                    >
                        <ChevronLeft size={40} strokeWidth={3} />
                    </button>
                )}
                <h1 style={{ margin: 0, fontSize: 'var(--font-size-xl)' }}>{title}</h1>
            </header>
            <main style={{ padding: 'var(--spacing-md)', flex: 1, overflowY: 'auto' }}>
                {children}
            </main>
        </>
    );
};

export default Layout;
