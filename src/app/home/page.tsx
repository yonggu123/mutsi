'use client'

import React, { useState } from 'react';
import styled from 'styled-components'
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const ServiceTitle = styled.h2`
  font-family : "GmarketSans";
  font-size: 15px;
  font-weight: 700;
  margin-top: 10px;
  margin-bottom: 20px;
  padding-left: 10px;
`;


const BannerWrapper = styled.div`

  width: 100%;
  height: auto; /* 원하는 배너 높이 */
  object-fit: contain;
  overflow: hidden;
  margin-bottom: 16px; /* 배너와 첫 번째 박스 간 간격 */
  margin: 0; /* 여백 제거 */
  padding: 0; /* 여백 제거 */
  display: flex;
  justify-content: center; /* 수평 중앙 정렬 */
  align-items: center; /* 수직 중앙 정렬 */

`;

const SlideImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover; /* 이미지를 박스에 꽉 채우되, 비율 유지 */
  display: block;
  margin: 0;
  padding: 0;
  
`;

const BannerCarousel = () => {
  const bannerImages = [
    { src: '/banner1_1.png', alt: '배너 1' },
    { src: '/banner2.png', alt: '배너 2' },
    { src: '/banner3.png', alt: '배너 3' },
    { src: '/banner4.png', alt: '배너 4' }

  ];

  return (
    <BannerWrapper>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        style={{ width: '100vw', height: '100%', margin: 0, padding: 0 }}
      >
        {bannerImages.map((item, idx) => (
          <SwiperSlide key={idx}>
            <SlideImage src={item.src} alt={item.alt} />
          </SwiperSlide>
        ))}
      </Swiper>
    </BannerWrapper>
  );
};  

const IconBox = styled.div`
  display: flex;
  flex-direction: column;   /* 위아래(수직)로 배치 */
  align-items: center;      /* 수평 중앙 정렬 */
  gap: 0px;                 /* 아이콘과 텍스트 사이 여백 */
  width: 100%;
  height: auto; /* 원하는 배너 높이 */
  object-fit: contain;
`;

const Label = styled.span`
  font-size: 14px;   /* 글자 크기 (원하는 대로 조정) */
  color: #666;       /* 글자 색상 (원하는 대로 조정) */
  /* 필요하면 폰트 두께나 패딩 등을 추가 */
`;

const ContentBox = styled.div`

  background: transparent;
  border-radius: 12px;
  border: none;
  box-shadow: none;
  width: 100%;

  /* 내부 여백을 줘서 아이콘이 상단/왼쪽에 바짝 붙지 않도록 */
  padding: 16px;

  margin-bottom: 16px; 
`;

const IconContainer = styled.div`
  display: grid;
  
  grid-template-columns: repeat(2, 1fr); /* 2개의 열로 나눔 */
  gap: 10px;           /* 아이콘 간 간격 */
  align-items: flex-start;
  width: 100%;
  height: auto;
  objectFit: "contain"
  
  
  justify-content: center; 
  /* 필요시 justify-content: center; 
     혹은 space-between, flex-start 등으로 바꿀 수 있습니다 */


`;

const HomeContainer = styled.div`
  max-width: 520px;
  min-width: 320px;
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;
  background: transparent; /* #FF9933; */
  padding-bottom: 20px; /* 하단 패딩만 유지 */
  overflow: visible;
  
  /* 아이폰 노치 영역 대응 */
  padding-top: env(safe-area-inset-top);
  padding-bottom: env(safe-area-inset-bottom);
`
const Header = styled.header`
  background: transparent; /* 배경을 투명으로 설정 */
  padding: 20px;
  text-align: center; /* 중앙 정렬 */
`
const StyledLogo = styled.img`
  width: 170px;   /* 원하는 크기 */
  height: auto;
  display: block; /* block으로 하면 margin: 0 auto 가능 */
  margin: 0 auto; /* 가운데 정렬 */
  /* margin-top: 20px;  // 필요하면 상단 여백 추가 */
`
const LogoButton = styled.button`
  background: transparent; /* 배경 투명 */
  border: none; /* 테두리 제거 */
  cursor: pointer; /* 클릭 가능 표시 */
`



const SearchBarWrapper = styled.div`
  position: sticky; /* 고정 위치 설정 */
  top: 0; /* 최상단에 고정 */
  z-index: 100; /* 다른 요소들 위에 표시 */
  background: transparent; /* 배경색 투명 */
  padding: 12px;
  margin-bottom: -20px;
  /* 스크롤 시 그림자 효과 */
  box-shadow: none; /* 0 2px 8px rgba(0, 0, 0, 0.1); */
  
  /* 아이폰 노치 영역 대응 */
  padding-top: max(16px, env(safe-area-inset-top));
  position: relative; /* 추가 */
  border: none; /* 주황색 테두리 제거 */
`


const SearchIcon = styled.img`
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  width: 16px;
  height: 16px;
  z-index: 1;
  pointer-events: auto;
`;


const SearchBarContainer = styled.div`
  width: 100%;
  padding: 3px; /* 테두리 두께 */
  border-radius: 24px; /* 둥근 모서리 설정 */
  background: linear-gradient(to right, #ff7e5f, #feb47b); /* 그라데이션 배경 */
`

const SearchBar = styled.input`
  width: 100%;
  height: 48px;
  padding: 0 00px 0 20px; /* 왼쪽 패딩 증가 */
  border-radius: 22px; /* 내부 요소의 둥근 모서리 설정 */
  border: none; /* 기본 테두리 제거 */
  background: white; /* 배경색 설정 */
  font-size: 16px;
  color: #333;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease; /* 부드러운 전환 효과 */
  cursor: text; /* 마우스 커서 변경 */

  &::placeholder {
    color: #666;
    transition: all 0.3s ease;
  }

  &:focus {
    outline: none; /* 포커스 시 테두리 제거 */
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer; /* 클릭 가능 표시 */
`;

const ContentArea = styled.div`
  padding: 20px 0px;
  
  
  /* 테스트를 위한 임시 컨텐츠 - 높이를 200px로 증가 */
  & > div {
    background: transparent;
    height: 250px; /* 기존 100px에서 200px로 변경 */
    margin-bottom: 20px;
    border-radius: 12px;
    padding: 0;
    border: none;  /*테두리를 주황색으로 변경 */
    box-shadow: none; /* 0 2px 4px rgba(0, 0, 0, 0.1);선택적: 그림자 효과 추가 */

  }

  & > div:first-child {
    border: none;
    height: 100%;
    width: 100%,
    margin: 0;
    padding: 0;
    overflow: hidden;
  } 
`;


const Button = styled.button`
  border: none; /* 테두리 제거 */
  background: transparent; /* 배경 투명 */
  cursor: pointer; /* 클릭 가능 표시 */
`;

const IconButton = ({ src, alt }: { src: string; alt: string }) => (
  <Button>
    <img src={src} alt={alt} style={{ width: '54px', height: '54px' }} />
  </Button>
);



export default function HomePage() {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  /*const iconList = [
    { src: "/naver.svg", label: "네이버" },
    { src: "/kakao.svg", label: "카카오" },
    { src: "/heart2.svg", label: "보험"}

  ];*/

  const secondIconList = [
    { src: '/Group 2.svg', label: '시니어 디지털 교실', path: '/category' },
    { src: '/Group 3.svg', label: '노후대책 필수 정보', path: '/category' },
    { src: '/Group 4.svg', label: '건강한 웰빙 습관', path: '/category' },
    { src: '/Group 5.svg', label: '보이스피싱 퇴치 교육', path: '/category' },
  ];

  const firstRowIcons = secondIconList.slice(0, 2); // 첫 번째 ContentBox용 아이콘 (2개)
  const secondRowIcons = secondIconList.slice(2, 4); // 두 번째 ContentBox용 아이콘 (2개)

  return (
    <HomeContainer>
      <Header>
        <Link href="/home">
          <LogoButton>
          <StyledLogo src="/LogoF.svg" alt="새로운 로고" />
          </LogoButton>
        </Link>
      </Header>
      <SearchBarWrapper>
        <SearchBarContainer>
          <SearchBar 
            placeholder="오늘은 어떤 것을 배워볼까?" 
            type="search"
            value={inputValue}
            onChange={handleInputChange}
          />
          {!inputValue && (
            <IconWrapper>
              <SearchIcon src="/search.svg" alt="돋보기 아이콘" />
            </IconWrapper>
          )}
          
        </SearchBarContainer>
      </SearchBarWrapper>

      <ContentArea>
        <BannerCarousel />

        <ServiceTitle>멋시 대표 서비스</ServiceTitle>

        {Array.from({ length: 10 }).map((_, i) => {
          if (i === 0) {
            return (
              <ContentBox key="first">
                <IconContainer>
                  {firstRowIcons.map((icon, idx) => (
                    <IconBox key={idx}>
                      <Link href={icon.path}>
                        <Button>
                          <img
                            src={icon.src}
                            alt={icon.label}
                            style={{ width: "100%", height: "100%", objectFit: "contain", display: "block" }} // 크기 조정
                          />
                        </Button>
                      </Link>
                      <Label>{icon.label}</Label>
                    </IconBox>
                  ))}
                </IconContainer>
                
              </ContentBox>
             
            );
          } 
          
          if (i === 1) {
            return (
              <ContentBox key="second">
                <IconContainer>
                  {secondRowIcons.map((icon, idx) => (
                    <IconBox key={idx}>
                      <Link href={icon.path}>
                        <Button>
                          <img
                            src={icon.src}
                            alt={icon.label}
                            style={{ width: '100%', height: '100%', display: 'block', objectFit: "contain" }}
                          />
                        </Button>
                      </Link>
                      <Label>{icon.label}</Label>
                    </IconBox>
                  ))}
                </IconContainer>
              </ContentBox>
            );
          }
        
          return <div key={i} />; /*return null; 하면 나머지 contentbox 사라짐 */
        })}
      
       
        
    

      </ContentArea>
    </HomeContainer>
  );
}