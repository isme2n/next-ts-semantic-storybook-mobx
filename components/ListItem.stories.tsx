import * as React from 'react'
import { storiesOf } from '@storybook/react'
import ListItem from './ListItem'

storiesOf('ListItem', module).add('default', () => {
  return <ListItem id={'abab'} title={'Some Titles'} description={'Some kind of description'} />
})