"use client";
import React from 'react';

// トップページのコンポーネントです
const Home: React.FC = () => {
  return (
    // ここがサイトのメインコンテンツ部分になります
    <div className="content-section">
      
      {/* 画面に表示する仮の見出し */}
      <h1 style={{ textAlign: 'center', marginTop: '150px' }}>
        ウェブサイトのメインコンテンツがここに入ります
      </h1>
      <p style={{ textAlign: 'center', fontSize: '1.2rem', color: 'var(--color-accent)' }}>
        現在は高級感のあるダークテーマが適用されています。
      </p>

    </div>
  );
};

export default Home;