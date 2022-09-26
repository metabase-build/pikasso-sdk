import { PikassoPayButton } from '@pikasso-sdk/react';
import { useRef, useState } from 'react';
import './App.css';

function App() {
  const formElement = useRef();

  const [nftId, setNftId] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(formElement.current);

    setNftId(formData.get('nftId').toString());
  };

  return (
    <div className="App">
      <header className="App-header">
        {nftId ? (
          <div className="App-button">
            <PikassoPayButton nftId={nftId} environment="production" />
          </div>
        ) : (
          <form ref={formElement} onSubmit={handleSubmit}>
            <input type="text" name={'nftId'} />

            <button type={'submit'}>Add NFT ID</button>
          </form>
        )}
      </header>
    </div>
  );
}

export default App;
