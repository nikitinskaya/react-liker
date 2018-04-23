import React from 'react';
import { render as r } from 'react-dom';

const Stars = ({ length }) =>
  <span>{Array.from({ length }, (v, i) => ++i).map(() => '⭐️').join('')}</span>;
r(
  <div><Stars length="5" /></div>,
  document.querySelector('.cont'),
);
