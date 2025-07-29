import React from 'react';
import classNames from 'classnames';

export interface ButtonProps {
  type?: 'primary' | 'default' | 'dashed' | 'link' | 'text';
  size?: 'large' | 'middle' | 'small';
  disabled?: boolean;
  loading?: boolean;
  children?: React.ReactNode;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<ButtonProps> = ({
  type = 'default',
  size = 'middle',
  disabled = false,
  loading = false,
  children,
  className,
  onClick,
  ...rest
}) => {
  const classes = classNames(
    'viking-btn',
    {
      [`viking-btn-${type}`]: type !== 'default',
      [`viking-btn-${size}`]: size !== 'middle',
      'viking-btn-loading': loading,
      'viking-btn-disabled': disabled,
    },
    className
  );

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled || loading) {
      e.preventDefault();
      return;
    }
    onClick?.(e);
  };

  return (
    <button
      className={classes}
      disabled={disabled}
      onClick={handleClick}
      {...rest}
    >
      {loading && <span className="viking-btn-loading-icon">⏳</span>}
      {children}
    </button>
  );
};

export default Button; 
