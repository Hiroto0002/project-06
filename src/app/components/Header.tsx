"use client";

import Link from 'next/link';
import React from 'react';

// 高級感を出すために、固定されたヘッダーを作成します
const Header: React.FC = () => {
  return (
    // fixed（固定）、z-50（最前面）、bg-dark/90（少し透けたダーク背景）
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300" 
            style={{ backgroundColor: 'rgba(18, 18, 18, 0.9)', backdropFilter: 'blur(5px)' }}>
      <nav className="flex justify-between items-center max-w-7xl mx-auto p-4 md:p-6">
        
        {/* ロゴ/サイト名: ゴールドアクセントとセリフ体 */}
        <div className="text-2xl font-serif tracking-widest cursor-pointer" 
             style={{ color: '#f5f5f5' }}> {/* 修正2: 初期の色をライトカラー(#f5f5f5)に */}
          <Link href="/" style={{ transition: 'color 0.3s' }} 
                // 修正3: ホバー時に具体的なアクセントカラー(#b8860b)を設定
                onMouseOver={e => e.currentTarget.style.color = '#b8860b'} 
                onMouseOut={e => e.currentTarget.style.color = '#f5f5f5'}>
            YOUR LOGO
          </Link>
        </div>
        
        {/* メニュー項目 */}
        <ul className="flex space-x-8">
          {['自己紹介', 'ポートフォリオ', 'ブログ', 'コンタクト'].map((item) => (
            <li key={item}>
              <Link href={`#${item.toLowerCase()}`} 
                    className="uppercase text-sm font-light tracking-widest"
                    style={{ color: '#f5f5f5', transition: 'color 0.3s' }} 
                    // 修正4: 初期の色をライトカラーに
                    // 修正5: ホバー時に具体的なアクセントカラーを設定
                    onMouseOver={e => e.currentTarget.style.color = '#b8860b'} 
                    onMouseOut={e => e.currentTarget.style.color = '#f5f5f5'}>
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;