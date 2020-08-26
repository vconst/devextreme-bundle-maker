import React from 'react';
import NativeButton from '../../../bundles/react/button-native';

function App() {
  return (
    <div>
        NativeButton
        <NativeButton text="Click Me!" onClick={() => alert('clicked')} />
    </div>
  );
}

export default App;
