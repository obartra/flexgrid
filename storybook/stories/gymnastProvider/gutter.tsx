import * as React from 'react'
import { times } from 'lodash'
import { number } from '@storybook/addon-knobs'
import { GymnastProvider, Grid, Col } from 'gymnast'
import { colors } from '../../shared'

export default () => {
  const gutter = number('Gutter', 2, { range: true, min: 1, max: 24, step: 1 })
  const verticalGutter = number('Vertical Gutter', 2, {
    range: true,
    min: 1,
    max: 24,
    step: 1,
  })
  const base = number('Base', 8, { range: true, min: 1, max: 24, step: 1 })
  const innerPadding = number('Inner Padding', 2, {
    range: true,
    min: 1,
    max: 4,
    step: 1,
  })

  return (
    <GymnastProvider
      gutter={gutter}
      verticalGutter={verticalGutter}
      base={base}
    >
      <Grid padding="0 L/2">
        {times(6, key => (
          <Col key={key} size={4}>
            <Grid
              style={colors.colors1}
              padding={innerPadding}
              align="center"
              justify="center"
            >
              {key + 1}
            </Grid>
          </Col>
        ))}
      </Grid>
    </GymnastProvider>
  )
}
