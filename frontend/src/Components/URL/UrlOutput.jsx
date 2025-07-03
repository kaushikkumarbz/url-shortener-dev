import { Center } from '@mantine/core'
import React from 'react'

export default function UrlOutput(props) {
  return (
    <div>
      <Center> {props.response.shortCode}</Center>
    </div>
  )
}
