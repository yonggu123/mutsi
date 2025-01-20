'use client';

import StyledComponentsRegistry from '../lib/registry';
import React, { useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const LayoutContainer = styled.div`
  width: 100%;
  height: 100%;
  align-items: center;
  margin: 0 auto;
  padding: 00px;
`;

const Header = styled.header`
  background: transparent;
  padding: 20px;
  text-align: center;
`;

const StyledLogo = styled.img`
  width: 170px;
  height: auto;
  margin: 0 auto;
  cursor: pointer;
`;

const SearchBarWrapper = styled.div`
  width: 100%;
  padding: 20px 0;
  display: flex;
  margin-bottom: 20px;
  justify-content: center; /* 중앙 정렬 */
  box-sizing: border-box;
`;

const SearchBarContainer = styled.div`
  width: 100%;
  max-width: 480px;
  padding: 3px;
  border-radius: 24px;
  justify-content: center;
  box-sizing: border-box; /* 패딩과 테두리를 크기에 포함 */
  background: linear-gradient(to right, #ff7e5f, #feb47b);
  overflow: visible; /* 잘림 방지 */
`;

const SearchBar = styled.input`
  width: 100%;
  height: 48px;
  padding: 0 0px 0 10px;
  border-radius: 22px;
  box-sizing: border-box;
  border: none;
  background: white;
  font-size: 16px;
  color: #333;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &::placeholder {
    color: #666;
    transition: all 0.3s ease;
    line-height: 48px; /* 텍스트가 세로 중앙에 위치 */
    
  }

  &:focus {
    outline: none;
  }
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [searchValue, setSearchValue] = useState('');
  const pathname = usePathname(); // 현재 경로 가져오기

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  // 공통 레이아웃 제외 조건
  const isExcludedPath = pathname === '/' || pathname.startsWith('/home');

  return (
    <html lang="ko">
      <body suppressHydrationWarning={true}>
        <StyledComponentsRegistry>
          <LayoutContainer>
            {/* 공통 레이아웃: 제외 경로가 아닐 때만 렌더링 */}
            {!isExcludedPath && (
              <>
                <Header>
                  <Link href="/home">
                    <StyledLogo src="/LogoF.svg" alt="로고" />
                  </Link>
                </Header>

                <SearchBarWrapper>
                  <SearchBarContainer>
                    <SearchBar
                      placeholder="오늘은 어떤 것을 배워볼까?"
                      value={searchValue}
                      onChange={handleSearchChange}
                    />
                  </SearchBarContainer>
                </SearchBarWrapper>
              </>
            )}

            {/* 페이지 콘텐츠 */}
            {children}
          </LayoutContainer>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
