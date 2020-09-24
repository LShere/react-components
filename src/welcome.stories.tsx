import React from 'react'
import { storiesOf } from '@storybook/react'

storiesOf('Welcome page', module)
  .add('welcome', () => {
    return (
      <>
        <h1>欢迎来到 ls 组件库</h1>
        <h3>安装试试</h3>
        <code>
          npm install ls-react-componets-lib-test-ver --save
        </code>
      </>
    )
  }, { info : { disable: true }})