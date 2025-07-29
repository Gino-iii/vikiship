import React, { forwardRef } from 'react';
import classNames from 'classnames';

export interface InputProps {
  size?: 'large' | 'middle' | 'small';
  disabled?: boolean;
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  className?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
}

const Input = forwardRef<HTMLInputElement, InputProps>(({
  size = 'middle',
  disabled = false,
  placeholder,
  value,
  defaultValue,
  className,
  onChange,
  onFocus,
  onBlur,
  ...rest
}, ref) => {
  const classes = classNames(
    'viking-input',
    {
      [`viking-input-${size}`]: size !== 'middle',
      'viking-input-disabled': disabled,
    },
    className
  );

  return (
    <input
      ref={ref}
      className={classes}
      disabled={disabled}
      placeholder={placeholder}
      value={value}
      defaultValue={defaultValue}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
      {...rest}
    />
  );
});

Input.displayName = 'Input';

export default Input; 
