"use client"; // 動き（stateやuseEffect）を使うため、クライアントコンポーネントにします

import React, { useState, useEffect } from 'react';

interface PreloaderProps {
  // 読み込みが完了したときに呼ばれる関数
  onLoaded: () => void;
}

const Preloader: React.FC<PreloaderProps> = ({ onLoaded }) => {
  // loadingState: 0=表示中, 1=フェードアウト開始, 2=完全に非表示
  const [loadingState, setLoadingState] = useState(0);

  useEffect(() => {
    // サイトの読み込みをシミュレートするため、一定時間（例: 2.5秒）後に消える処理を開始
    const timer = setTimeout(() => {
      setLoadingState(1); // ステートを1（フェードアウト開始）に設定
    }, 2500); // 2500ミリ秒 = 2.5秒

    return () => clearTimeout(timer); // コンポーネントが不要になったときにタイマーを解除
  }, []);

  useEffect(() => {
    if (loadingState === 1) {
      // フェードアウトアニメーションの時間（CSSで0.8秒に設定します）が経過したら
      const hideTimer = setTimeout(() => {
        setLoadingState(2); // ステートを2（完全に非表示）に設定
        onLoaded(); // 親コンポーネントに読み込み完了を通知
      }, 800); // CSSアニメーションの時間と合わせる

      return () => clearTimeout(hideTimer);
    }
  }, [loadingState, onLoaded]);

  // loadingStateが2（非表示）の場合は何もレンダリングしない
  if (loadingState === 2) {
    return null;
  }

  return (
    // 画面全体を覆うコンポーネント
    <div 
      className={`fixed inset-0 z-[9999] flex items-center justify-center transition-opacity duration-700`}
      // 高級感を出すため、背景色はCSS変数から取得
      style={{ backgroundColor: 'var(--color-dark)', opacity: loadingState === 1 ? 0 : 1 }} 
    >
      {/* 読み込み中のアニメーション（シンプルなテキストで高級感を演出） */}
      <h1 
        className="text-4xl sm:text-6xl font-serif tracking-[0.5em] animate-pulse"
        style={{ color: 'var(--color-accent)' }}
      >
        LOADING
      </h1>
    </div>
  );
};

export default Preloader;