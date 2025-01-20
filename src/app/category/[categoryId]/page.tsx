'use client';

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import styled from 'styled-components';

// 스타일 정의
const PostContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  line-height: 1.6;
`;

const Title = styled.h1`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 20px;
  text-align: center;
`;

const Section = styled.section`
  margin-bottom: 40px;
`;

const SectionTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 16px;
`;

const ContentText = styled.p`
  font-size: 16px;
  color: #333;
  margin-bottom: 16px;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 16px;
`;

const Video = styled.video`
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 16px;
`;

// Mock 데이터
const blogPosts = {
  healthcare: {
    title: '헬스케어: 건강한 삶을 위한 가이드',
    content: [
      {
        type: 'text',
        data: '헬스케어는 건강한 라이프스타일을 유지하고 질병을 예방하는 데 중요한 요소입니다.',
      },
      {
        type: 'image',
        data: '/healthcare.jpg',
      },
      {
        type: 'gif',
        data: '/healthcare-animation.gif', // GIF 파일 경로
      },
      {
        type: 'text',
        data: '운동, 식단, 정신 건강을 포괄하는 헬스케어 전략을 소개합니다.',
      },
      {
        type: 'video',
        data: '/healthcare-video.mp4',
      },
      {
        type: 'text',
        data: '의료 기술의 발전으로 건강 관리를 더욱 효율적으로 할 수 있습니다.',
      },
    ],
  },
  lifestyle: {
    title: '라이프스타일: 삶의 질을 높이는 방법',
    content: [
      {
        type: 'text',
        data: '라이프스타일 카테고리에서는 삶을 즐겁게 만드는 다양한 아이디어를 소개합니다.',
      },

      {
        type: 'image',
        data: '/lifestyle.jpg',
      },
      {
        type: 'text',
        data: '취미, 인테리어 팁, 여행 정보 등 다양한 주제를 다룹니다.',
      },
      {
        type: 'gif',
        data: '/life-style.gif', // GIF 파일 경로
      },
    ],
  },
};

const BlogPostPage = () => {
  const { categoryId } = useParams(); // URL에서 categoryId 가져오기
  const [post, setPost] = useState<any>(null);

  useEffect(() => {
    if (categoryId && blogPosts[categoryId as keyof typeof blogPosts]) {
      setPost(blogPosts[categoryId as keyof typeof blogPosts]);
    } else {
      setPost(null);
    }
  }, [categoryId]);

  if (!post) {
    return (
      <PostContainer>
        <Title>포스트를 찾을 수 없습니다.</Title>
        <ContentText>올바른 URL을 입력했는지 확인해주세요.</ContentText>
      </PostContainer>
    );
  }

  return (
    <PostContainer>
      <Title>{post.title}</Title>
      {post.content.map((item: any, index: number) => (
        <Section key={index}>
          {item.type === 'text' && <ContentText>{item.data}</ContentText>}
          {item.type === 'image' && <Image src={item.data} alt="포스팅 이미지" />}
          {item.type === 'gif' && <Image src={item.data} alt="포스팅 GIF" />}
        </Section>
      ))}
    </PostContainer>
  );
};

export default BlogPostPage;
