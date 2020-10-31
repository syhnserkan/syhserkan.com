import React, { createContext, useState, ReactNode } from 'react';

export const initialState = {
  titleColor: { light: '#343a40', dark: 'white' },
  linkColor: { light: '#8d44d1', dark: 'white' },
  linkHoverColor: { light: '#1b1d25', dark: '#4AC143' },
  buttonColor: { light: '#8d44d1', dark: '#4AC143' },
  buttonHoverColor: { light: '#782cbe', dark: '#39ba32' },
  feedBackButtonColor: { light: '#8d44d1', dark: '#787f87' },
  feedBackButtonBackgroundColor: { light: 'edf2ff', dark: '#edf2ff' },
  articleNewTagBackgroundColor: { light: '#d3f9d8', dark: '#4AC143' },
  articleNewTagTextColor: { light: 'black', dark: '#f6f8fb' },
  articleTagColor: '#f6f8fb',
  white: 'white',
  black: 'black',
  aboutTextColor: { light: '#495057', dark: '#B3B0B1' },
  guidesHeadingColor: { light: 'black', dark: 'gray' },
  guidesBackgroundColor: { light: '#f6f8fb', dark: '#E6E8EB' },
};

//If initial value is a const we specify as  ||| as typeof initialState ||
const ColorModeContext = createContext({} as typeof initialState);

type Props = {
  children?: ReactNode;
};

const CustomColorModeProvider = ({ children }: Props) => {
  const [getColorMode] = useState(initialState);

  return <ColorModeContext.Provider value={getColorMode}>{children}</ColorModeContext.Provider>;
};

export { CustomColorModeProvider, ColorModeContext };
