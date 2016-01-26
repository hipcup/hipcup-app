import React from 'react'
import {render} from 'react-dom'
import Hipcup from '../components/hipcup.js'
import * as keys from '../../config.js'

render(
  <Hipcup googleKey={ keys.google_api_key } />,
  document.getElementById('app')
);
