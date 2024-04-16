import React, { useState } from 'react';
import ToggleButton from './Components/toggleBtn';
import LeftContainer from './Components/leftContainer';
import RightContainer from './Components/rightContainer';


function App() {
  const [isLeftContainerOpen, setIsLeftContainerOpen] = useState(true);

  const toggleLeftContainer = () => {
    setIsLeftContainerOpen(!isLeftContainerOpen);
  };

  return (
    <div className="App">
      <section className="main-container">
        <ToggleButton
          isLeftContainerOpen={isLeftContainerOpen}
          toggleLeftContainer={toggleLeftContainer}
        />
        {isLeftContainerOpen && <LeftContainer />}
        <RightContainer isLeftContainerOpen={isLeftContainerOpen} />
      </section>
    </div>
  );
}

export default App;