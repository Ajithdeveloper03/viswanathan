'use client';
import React from 'react';
import { useModal } from '@/app/context/ModalContext';

interface ModalTriggerButtonProps {
  children: React.ReactNode;
  className?: string;
}

const ModalTriggerButton: React.FC<ModalTriggerButtonProps> = ({ children, className }) => {
  const { openModal } = useModal();

  return (
    <button type="button" onClick={openModal} className={className}>
      {children}
    </button>
  );
};

export default ModalTriggerButton;
