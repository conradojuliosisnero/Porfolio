import { useState } from 'react';
import styled from 'styled-components';

const ToggleSwitch = styled.label`
  position: absolute;
  display: inline-block;
  width: 60px;
  height: 34px;
  right: 50px;

  @media (max-width: 720px) {
   right: 20px;
   margin: 15px 0px 0px 0px;
  }
`;

const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  border-radius: 34px;
  transition: 0.4s;

  &::before {
    position: absolute;
    content: '';
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    border-radius: 50%;
    transition: 0.4s;
  }
`;

const Input = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + ${Slider} {
    background-color: #2196F3;
  }

  &:checked + ${Slider}::before {
    transform: translateX(26px);
  }
`;


function DarkModeSwitch() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleModeToggle = () => {
		if (isDarkMode === false) {
			setIsDarkMode(true)
		}else{
			setIsDarkMode(false)
		}
  };

  return (
    <ToggleSwitch>
      <Input
        type="checkbox"
        checked={isDarkMode}
        onChange={handleModeToggle}
      />
      <Slider />
    </ToggleSwitch>
  );
}

export default DarkModeSwitch;
