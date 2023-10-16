import { useState } from 'react';
import { Menu, Question } from '@components';

function Quiz() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const toggleMenuVisibility = () => {
    setIsMenuVisible((previousIsMenuVisible) => !previousIsMenuVisible);
  };

  return (
    <>
      <Question
        onMenuIconClick={toggleMenuVisibility}
      />
      <Menu
        isVisible={isMenuVisible}
        onCloseIconClick={toggleMenuVisibility}
      />
    </>
  );
}

export default Quiz;
