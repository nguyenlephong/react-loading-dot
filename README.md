# react-feedback-modal

> A simple and beautiful react loading animation. Using for page pre-loading, content loading or transition!

[![NPM](https://img.shields.io/npm/v/react-loading-dot.svg)](https://www.npmjs.com/package/react-loading-dot) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

<img src="https://firebasestorage.googleapis.com/v0/b/yangliweb.appspot.com/o/demo.gif?alt=media&token=fe53135e-527c-4974-860b-ed6c2c8ad786" />

## Install

```bash
npm install react-loading-dot
```

If you are using yarn

```bash
yarn add react-loading-dot
```

## Import

```js
import { Loading } from 'react-loading-dot'
```

## Properties

| Properties | Default        | Description                              | Type   |
| ---------- | -------------- | ---------------------------------------- | ------ |
| dots       | 3              | Number of dots displayed                 | number |
| size       | 1.5rem         | The width and height of each dot         | string |
| margin     | 1rem           | The horizontal distance between each dot | string |
| background | rgb(202,57,57) | The color of the dot                     | string |
| duration   | 0.8s           | The duration of the animation            | string |

## Usage

```jsx
import React, { useState } from 'react'
import { Loading } from 'react-loading-dot'

export const App: React.FC = () => {
  const [loading, setLoading] = useState < boolean > true

  return (
    <div>{loading ? <Loading /> : <div>Display some contents...</div>}</div>
  )
}
```

## Uninstall

In your project directory, run

```bash
npm uninstall react-loading-dot
```

If you are using yarn

```bash
yarn remove react-loading-dot
```

## ChangeLog

- 2020/06/27 version 1.0.2 publish

## License

MIT © [yang052513](https://github.com/yang052513)
