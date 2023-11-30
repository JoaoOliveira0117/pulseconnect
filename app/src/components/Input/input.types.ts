import React from 'react'

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  className?: string;
  variant: 'transparent' | 'outline' | 'filled';
  multiline?: boolean;
  label?: string;
}
