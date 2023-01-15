import { Stack } from '@components/stack'
import { ReactLiveBlock } from '@devtools/ReactLiveBlock'
import { FC } from 'react'

import { Button } from './index'

export default {}
export const variants: FC = () => (
  <ReactLiveBlock scope={{ Button, Stack }}>
    <Stack alignItems="end">
      <Button intent="primary">primary button</Button>
      <Button intent="secondary">secondary button</Button>
    </Stack>
  </ReactLiveBlock>
)

export const sizes: FC = () => (
  <ReactLiveBlock scope={{ Button, Stack }}>
    <Stack alignItems="end">
      <Button size="small">small button</Button>
      <Button size="medium">medium button</Button>
      <Button size="large">large button</Button>
    </Stack>
  </ReactLiveBlock>
)
