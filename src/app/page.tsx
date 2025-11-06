"use client";
import React, { useState } from 'react';
import Preloader from '../app/components/Preloader';

// トップページのコンポーネントです
const Home: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      {/* 1. Preloader コンポーネントを配置 */}
      <Preloader onLoaded={() => setIsLoaded(true)} />

      {/* 2. メインコンテンツは、アニメーション完了後に表示 */}
      <div style={{ opacity: isLoaded ? 1 : 0, transition: 'opacity 0.8s ease-in' }}>
        
        {/* === トップページ（ヒーローセクション） === */}
        <section id="hero" className="content-section" style={{ minHeight: '90vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center' }}>
            <h1 style={{ fontSize: '4rem', letterSpacing: '0.3em' }}>
                イノベーションをデザインする
            </h1>
            <p style={{ fontSize: '1.5rem', color: 'var(--color-accent)', marginTop: '10px' }}>
                【あなたの名前】のクリエイティブワーク
            </p>
        </section>
        
        {/* === その他のコンテンツ（仮） === */}
        <section id="about" className="content-section">
            <h2>自己紹介</h2>
            <p>ここにあなたの経歴やスキル、理念などを記述します。</p>
        </section>

      </div>
    </>
  );
};

export default Home;