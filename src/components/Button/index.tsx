// import libraries
import * as React from 'react';

// third-party libraries

// styles
import './Button.scss';

// components

// interfaces
import { ButtonProps } from './interfaces';

// helper functions

const Button = (props: ButtonProps) => {
  const {
    size,
    type,
    isActive,
    submit = false,
    isLoading = false,
    alignImageRight = true,
    disabled,
    classes,
    ...rest
  } = props;
  return (
    <button
      { ...rest }
      type={submit ? 'submit' : 'button'}
      id={props.id}
      disabled={disabled}
      className={classes}
      onClick={props.onClick}
    >
    </button>
  );
};

export default Button;
