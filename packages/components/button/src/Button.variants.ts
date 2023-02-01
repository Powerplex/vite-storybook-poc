import { cva, VariantProps } from 'class-variance-authority'

const defaultVariants = {
  intent: 'primary',
  size: 'small',
} as const

const compoundVariantRecord = {
  withRidiculousPadding: {
    intent: 'primary',
    size: 'small',
    disabled: true,
  } as const,
}

export const buttonVariants = cva(
  [
    'font-semibold',
    'border-xs',
    'border-solid',
    'rounded-xs',
    'hover:transition-colors',
    'hover:duration-100',
    'border-transparent',
  ],
  {
    variants: {
      disabled: {
        true: ['opacity-50', 'cursor-not-allowed'],
      },
      intent: {
        primary: ['bg-bg-primary', 'text-fg-cta', 'hover:bg-bg-primary-subtle'],
        secondary: ['bg-bg-secondary', 'hover:bg-bg-secondary-subtle'],
      },
      size: {
        small: ['text-s', 'px-s', 'py-xs'],
        medium: ['text-m', 'px-m', 'py-s'],
        large: ['text-l', 'px-l', 'py-m'],
      },
    },
    defaultVariants,
    compoundVariants: [{ ...compoundVariantRecord.withRidiculousPadding, className: '!p-xxl' }],
  }
)

export type ButtonVariantsProps = VariantProps<typeof buttonVariants> // & { intent: string } <- to mark a prop as required
