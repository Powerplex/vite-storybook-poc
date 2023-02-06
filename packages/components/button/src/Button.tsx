import { componentCxMapper } from '@theme/constants.mjs'
import { cx } from 'class-variance-authority'
import { ComponentPropsWithoutRef, PropsWithChildren } from 'react'

import { buttonVariants, ButtonVariantsProps } from './Button.variants'

interface Props extends ButtonVariantsProps, ComponentPropsWithoutRef<'button'> {
  className?: string
  disabled?: boolean
}

export function Button({
  className,
  color = 'gray',
  children,
  disabled = false,
  intent = 'primary',
  size = 'small',
  ...rest
}: PropsWithChildren<Props>) {
  const buttonHtmlProps = { ...rest, disabled }

  return (
    <button
      data-intent={intent}
      data-size={size}
      data-disabled={disabled}
      className={cx(
        componentCxMapper.btn,
        buttonVariants({
          intent,
          size,
          disabled: !!disabled,
          className,
        })
      )}
      {...buttonHtmlProps}
    >
      {children}
    </button>
  )
}
