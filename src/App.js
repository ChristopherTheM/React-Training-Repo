import React from 'react';
import './style.css';
import SubmitButton from './SubmitButton';
import Title from './Title';

export default function App() {
  return (
    <div>
      <Title />
      <p>Start editing to see some magic happen :)</p>
      <SubmitButton />
    </div>
  );
}
