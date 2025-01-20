'use client';

import React from 'react';
import styled from 'styled-components';

// 스타일링 컴포넌트
const CategoryContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const CategoryTitle = styled.h1`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 20px;
  text-align: center;
`;

const CategoryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
`;

const CategoryCard = styled.div`
  background: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 16px;
  text-align: center;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }
`;

const CategoryImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
`;

const CategoryName = styled.h2`
  font-size: 18px;
  margin: 10px 0;
  color: #333;
`;

const ViewMoreButton = styled.button`
  background-color: #ff9933;
  color: white;
  border: none;
  padding: 10px 16px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background-color: #e67e22;
  }
`;

// Mock Data
const categories = [
  { id: 1, name: '디지털 교육', image: '/digital-education.jpg', path: '/category/digital-education' },
  { id: 2, name: '사회 문제 해결', image: '/social-issues.jpg', path: '/category/social-issues' },
  { id: 3, name: '헬스케어', image: '/healthcare.jpg', path: '/category/healthcare' },
  { id: 4, name: '라이프스타일', image: '/lifestyle.jpg', path: '/category/lifestyle' },
];

const CategoryPage = () => {
  return (
    <CategoryContainer>
      <CategoryTitle>카테고리</CategoryTitle>
      <CategoryGrid>
        {categories.map((category) => (
          <CategoryCard key={category.id}>
            <CategoryImage src={category.image} alt={category.name} />
            <CategoryName>{category.name}</CategoryName>
            <ViewMoreButton onClick={() => window.location.href = category.path}>
              더 보기
            </ViewMoreButton>
          </CategoryCard>
        ))}
      </CategoryGrid>
    </CategoryContainer>
  );
};

export default CategoryPage;
