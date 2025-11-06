"use client"; 

import Link from 'next/link';
import React from 'react';

const Header: React.FC = () => {
  return (
    // bg-gray-900/90 (Tailwindのダークカラーと透明度) を使って高級感を出す
    // z-50 で重なり順を指定
    <header className="fixed top-0 left-0 w-full z-50 bg-gray-900/90 backdrop-blur-sm transition-all duration-300">
      <nav className="flex justify-between items-center max-w-7xl mx-auto p-4 md:p-6">
        
        {/* ロゴ/サイト名: text-white と hover:text-amber-500 でホバーアニメーションを設定 */}
        <div className="text-2xl font-serif tracking-widest cursor-pointer text-white transition-colors duration-300">
          {/* text-white を初期値とし、hover:text-amber-500 (明るいゴールド) でホバー時に色を変える */}
          <Link href="/" className="hover:text-amber-500">
            YOUR LOGO
          </Link>
        </div>
        
        {/* メニュー項目 */}
        <ul className="flex space-x-8">
          {['自己紹介', 'ポートフォリオ', 'ブログ', 'コンタクト'].map((item) => (
            <li key={item}>
              <Link href={`#${item.toLowerCase()}`} 
                    className="uppercase text-sm font-light tracking-widest text-white transition-colors duration-300 hover:text-amber-500">
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