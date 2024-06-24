import React from 'react';
import ReducerSample from './ReducerSample.tsx';
import { SampleProvider } from './SampleContext.tsx';

const App: React.FC = () => {
  return (
    <SampleProvider>
      <ReducerSample />
    </SampleProvider>
  );
};

export default App;