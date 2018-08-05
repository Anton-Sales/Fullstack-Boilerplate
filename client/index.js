console.log('hello client')

import React from 'react'

import { render } from 'react-dom'

document.addEventListener('DOMContentLoaded', () => {
    render(
        <h1>hello world</h1>,
        document.getElementById('app')
    )
})