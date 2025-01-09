'use client'

import styled from 'styled-components'

const HomeContainer = styled.div`
  max-width: 480px;
  min-width: 320px;
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;
  background: #FF9933;
  padding-bottom: 20px; /* 하단 패딩만 유지 */
  
  /* 아이폰 노치 영역 대응 */
  padding-top: env(safe-area-inset-top);
  padding-bottom: env(safe-area-inset-bottom);
`

const SearchBarWrapper = styled.div`
  position: sticky; /* 고정 위치 설정 */
  top: 0; /* 최상단에 고정 */
  z-index: 100; /* 다른 요소들 위에 표시 */
  background: #FF9933; /* 배경색 설정 */
  padding: 16px;
  /* 스크롤 시 그림자 효과 */
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  
  /* 아이폰 노치 영역 대응 */
  padding-top: max(16px, env(safe-area-inset-top));
  position: relative; /* 추가 */
`
const SearchIcon = styled.span`
  position: absolute;
  left: 32px; /* padding + icon position */
  top: 50%;
  transform: translateY(-50%);
  font-size: 20px;
  color: #666;
  z-index: 1;
  pointer-events: none; /* 아이콘이 입력을 방해하지 않도록 */
`
const SearchBar = styled.input`
  width: 100%;
  height: 48px;
  padding: 0 20px 0 45px; /* 왼쪽 패딩 증가 */
  border-radius: 24px;
  border: 2px solid #333; /* 두꺼운 검은색 외곽선 추가 */
  background: white;
  font-size: 16px;
  color: #333;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease; /* 부드러운 전환 효과 */
  cursor: text; /* 마우스 커서 변경 */

  &::placeholder {
    color: #666;
    transition: all 0.3s ease;
  }

  /* 호버 효과 - 색상 반전 */
  &:hover {
    background: #333;
    color: white;
    border-color: #333;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

    &::placeholder {
      color: #ddd; /* placeholder 색상도 밝게 변경 */
    }
  }

  /* 포커스 효과 유지 */
  &:focus {
    outline: none;
    background: white;
    color: #333;
    border-color: #333;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);

    &::placeholder {
      color: #666;
    }
  }
`

const ContentArea = styled.div`
  padding: 20px 16px;
  
  /* 테스트를 위한 임시 컨텐츠 - 높이를 200px로 증가 */
  & > div {
    background: white;
    height: 200px; /* 기존 100px에서 200px로 변경 */
    margin-bottom: 16px;
    border-radius: 12px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* 선택적: 그림자 효과 추가 */
  }
`

export default function HomePage() {
  return (
    <HomeContainer>
      <SearchBarWrapper>
         <SearchIcon>🔍</SearchIcon>
        <SearchBar 
          placeholder="오늘은 어떤 것을 배워볼까?" 
          type="search"
        />
      </SearchBarWrapper>
      <ContentArea>
        {/* 스크롤 테스트를 위한 임시 컨텐츠 */}
        {Array.from({ length: 10 }).map((_, i) => (
          <div key={i} />
        ))}
      </ContentArea>
    </HomeContainer>
  )
}