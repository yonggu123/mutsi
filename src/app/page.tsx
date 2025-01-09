'use client'

import dynamic from 'next/dynamic'
import styled from 'styled-components'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/Button'

const ReactPlayer = dynamic(() => import('react-player'), {
  ssr: false
})

const LandingContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
`

// 버튼의 위치만 지정하는 wrapper
const ButtonWrapper = styled.div`
  position: absolute;
  bottom: calc(20% - 95px); /* 기존 20%에서 95px 만큼 더 아래로 이동 */
  /* 또는 */
  bottom: 10%; /* 퍼센트 값을 직접 조정 */
  left: 50%;
  transform: translateX(-50%);
`

// 필요한 경우 Button 컴포넌트의 스타일을 확장
const StyledEnterButton = styled(Button)`
  // 여기에 추가적인 스타일 오버라이드 가능
`

export default function LandingPage() {
  const router = useRouter()

  return (
    <LandingContainer>
      <ReactPlayer
        url="https://res.cloudinary.com/ddkszp9ok/video/upload/v1735359090/12234_q7skff.mp4"
        playing
        loop
        muted
        width="100%"
        height="100%"
        style={{ objectFit: 'cover' }}
      />
      <ButtonWrapper>
        <StyledEnterButton onClick={() => router.push('/home')}>
          멋쟁이되기
        </StyledEnterButton>
      </ButtonWrapper>
    </LandingContainer>
  )
}