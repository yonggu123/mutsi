'use client';

import React from 'react';
import { useParams } from 'next/navigation';

interface ContentData {
    title: string;
    content: string;
    externalLink?: string;
  }
  
  // 콘텐츠 데이터
  const contentData: Record<string, ContentData> = {
    smartphone: {
      title: '스마트폰 사용법',
      content: '스마트폰 사용법에 대한 세부 설명입니다.',
    },
    'digital-banking': {
      title: '디지털 뱅킹',
      content: '디지털 뱅킹의 주요 기능과 활용법에 대해 알아봅니다.',
    },
    'social-media': {
      title: '소셜 미디어 활용',
      content: '소셜 미디어를 효과적으로 활용하는 방법을 배워봅니다.',
    },
    'scam-cases': {
      title: '피싱 사례',
      content: '보이스피싱의 실제 사례를 확인해보세요.',
    },
    'voice': {
      title: '보이스 피싱 예방 가이드',
      content: '보이스피싱을 예방하기 위한 가이드를 제공합니다.',
      externalLink: 'https://m.blog.naver.com/veritasenior/223729982402',
  
    },
    'sms': {
        title: '스미싱 예방 가이드',
        content: '스미싱을 예방하기 위한 가이드를 제공합니다.',
    },
    'loan': {
        title: '대출 사기 가이드',
        content: '대출사기를 예방하기 위한 가이드를 제공합니다.',
    },
      
  };
  
  const DetailPage = () => {
    const params = useParams() as { categoryId?: string; subCategoryId?: string }; // 타입 명시
    const subCategoryId = params?.subCategoryId;
  
    // subCategoryId가 없는 경우 에러 처리
    if (!subCategoryId) {
      return <p>세부 카테고리 ID가 없습니다.</p>;
    }
  
    // 콘텐츠 데이터 가져오기
    const content = contentData[subCategoryId];
  
    // 콘텐츠가 없는 경우 에러 처리
    if (!content) {
      return <p>존재하지 않는 콘텐츠입니다.</p>;
    }

    // 외부 링크가 있는 경우 바로 이동
    if (content.externalLink) {
        // 클라이언트에서 바로 리디렉션
        if (typeof window !== 'undefined') {
        window.location.href = content.externalLink;
        }
        return <p>외부 링크로 이동 중...</p>;
    }
  
    return (
      <div>
        <h1>{content.title}</h1>
        <p>{content.content}</p>
      </div>
    );
  };
  
  export default DetailPage;