'use client';

import React from 'react';
import styled from 'styled-components';
import { useParams } from 'next/navigation'; // Next.js 훅 사용
import Link from 'next/link';



// 스타일링
const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 30px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
`;

const Card = styled.div`
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  text-align: center;
`;

const Image = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
`;

const CardContent = styled.div`
  padding: 15px;
`;

const CardTitle = styled.h2`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Button = styled(Link)`
  display: inline-block;
  background-color: #f97316;
  color: white;
  padding: 10px 20px;
  margin-top: 10px;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
  transition: background-color 0.3s;

  &:hover {
    background-color: #d8550a;
  }
`;

// 타입 정의
interface SubCategory {
  id: string;
  name: string;
  image: string;
}

// 동적 데이터
const subCategoriesData: Record<string, SubCategory[]> = {
  'senior-digital-class': [
    { id: 'smartphone', name: '스마트폰 사용법', image: '/images/smartphone.jpg' },
    { id: 'digital-banking', name: '디지털 뱅킹', image: '/images/digital-banking.jpg' },
    { id: 'social-media', name: '소셜 미디어 활용', image: '/images/social-media.jpg' },
  ],
  'retirement-info': [
    { id: 'pension', name: '연금 관리', image: '/images/pension.jpg' },
    { id: 'healthcare', name: '의료 서비스', image: '/images/healthcare.jpg' },
  ],
  'well-being': [
    { id: 'food', name: '웰빙푸드', image: '/images/smartphone.jpg' },
    { id: 'exercise', name: '노년기 운동', image: '/images/digital-banking.jpg' },
    { id: 'hobby', name: '건강한 취미', image: '/images/social-media.jpg' },
  ],
  'voice-pishing': [
    { id: 'voice', name: '보이스피싱', image: '/images/voice1.png' },
    { id: 'sms', name: '스미싱', image: '/images/digital-banking.jpg' },
    { id: 'loan', name: '대출사기', image: '/images/social-media.jpg' },
  ],
};

const SubCategoryPage = () => {
  const params = useParams() as { categoryId: string };
  const categoryId = params?.categoryId;

  if (!categoryId) {
    return <p>카테고리 ID가 없습니다.</p>;
  }

  // 현재 카테고리의 세부 카테고리 데이터 가져오기
  const subCategories = subCategoriesData[categoryId];

  if (!subCategories) {
    return <p>존재하지 않는 카테고리입니다.</p>;
  }

  return (
    <Container>
      <Title>{categoryId} 카테고리</Title>
      <Grid>
        {subCategories.map((sub: SubCategory) => (
          <Card key={sub.id}>
            <Image src={sub.image} alt={sub.name} />
            <CardContent>
              <CardTitle>{sub.name}</CardTitle>
              <Button href={`/category/${categoryId}/${sub.id}`}>더 보기</Button>
            </CardContent>
          </Card>
        ))}
      </Grid>
    </Container>
  );
};

export default SubCategoryPage;