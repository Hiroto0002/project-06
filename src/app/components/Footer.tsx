import React from 'react';

const Footer: React.FC = () => {
  return (
    // フッターは控えめに、上部に細いライン（border-t）を入れます
    <footer className="w-full py-8 text-center mt-20"
            style={{ borderTop: '1px solid #333', backgroundColor: 'var(--color-dark)' }}>
      <div className="max-w-7xl mx-auto">
        <p className="text-sm font-light tracking-wider" style={{ color: '#aaa' }}>
          &copy; 2025 【あなたの名前】. All Rights Reserved.
        </p>
        <div className="mt-2 text-xs" style={{ color: '#666' }}>
          Powered by Next.js & React
        </div>
      </div>
    </footer>
  );
};

export default Footer;