import { ComponentPropsWithoutRef, FunctionComponent, PropsWithChildren } from 'react'

import { buttonVariants, ButtonVariantsProps } from './Button.variants'

interface Props extends ButtonVariantsProps, ComponentPropsWithoutRef<'button'> {
  className?: string
  disabled?: boolean
}

export const Button: FunctionComponent = ({
  className,
  color = 'gray',
  children,
  disabled = false,
  intent = 'primary',
  size = 'small',
  ...rest
}: PropsWithChildren<Props>) => {
  return (
    <button
      className={buttonVariants({
        intent,
        size,
        disabled: !!disabled,
        className,
      })}
      {...{ ...rest, disabled }}
    >
      {children}
    </button>
  )
}
