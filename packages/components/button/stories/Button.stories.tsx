import { Stack } from '@components/stack'
import { ReactLiveBlock } from '@devtools/ReactLiveBlock'

import { Button } from '../src/'

export const Variants = () => (
  <ReactLiveBlock scope={{ Button, Stack }}>
    <Stack alignItems="end">
      <Button intent="primary">primary button</Button>
      <Button intent="secondary">secondary button</Button>
    </Stack>
  </ReactLiveBlock>
)

export const Sizes = () => (
  <ReactLiveBlock scope={{ Button, Stack }}>
    <Stack alignItems="end">
      <Button size="small">small button</Button>
      <Button size="medium">medium button</Button>
      <Button size="large">large button</Button>
    </Stack>
  </ReactLiveBlock>
)

export const CompoundVariants = () => (
  <ReactLiveBlock scope={{ Button, Stack }}>
    <Stack alignItems="end">
      <Button intent="primary" size="small" disabled>
        hey
      </Button>
    </Stack>
  </ReactLiveBlock>
)
