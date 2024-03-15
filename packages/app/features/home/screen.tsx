import {
  Button,
  H1,
  Paragraph,
  YStack,
} from '@my/ui'
import { useState } from 'react'

export function HomeScreen() {
  const [disabled, setDisabled] = useState(true)

  return (
    <YStack f={1} jc="center" ai="center" p="$4" space>
      <YStack space="$4" bc="$background">
        <H1>The issue</H1>
        <Paragraph>
          First click the red button to disable the orange button.
          Once the orange button is disabled click it and it will turn yellow (press style).
          But this pressStyle is never removed 
        </Paragraph>
          <Button
            backgroundColor="red"
            pressStyle={{backgroundColor: 'blue'}}
            onPress={() => setDisabled(!disabled)}
          >
            click to disable bellow button
          </Button>
          <Button
            backgroundColor="orange"
            pressStyle={{backgroundColor: 'yellow'}}
            disabled={disabled}
          >
            problem button (pressStyle is not removed)
          </Button>
      </YStack>
    </YStack>
  )
}

