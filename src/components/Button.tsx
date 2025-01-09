'use client'

import styled from 'styled-components'
import { ReactNode } from 'react'

interface ButtonProps {
  onClick?: () => void;
  children: ReactNode;
  className?: string;
}

const StyledButton = styled.button`
  padding: 15px 40px;
  background: rgba(255, 255, 255, 0.9);
  border: none;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 600;
  color: #333;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #333;
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
`

export const Button = ({ onClick, children, className }: ButtonProps) => {
  return (
    <StyledButton onClick={onClick} className={className}>
      {children}
    </StyledButton>
  )
}