import {View} from 'react-native';
import React from 'react';
import styled from 'styled-components';
const StyledContainer = styled.View`
  flex: 1;
  background-color: #224f85;
  justify-content: space-around;
  align-items: center;
`;
const StyledView = styled.View`
  height: 50px;
  width: 120px;
  background-color: white;
  border-radius: 20px;
  align-self: center;
  margin-bottom: 100px;
  margin-top: 100px;
`;
const StyledText = styled.Text`
  font-size: 30px;
  font-weight: 600;
  align-self: center;
  margin-top: 5px;
  color: #000;
`;
const StyleCount = styled.Text`
  font-size: 40px;
  font-weight: 600;
  align-self: center;
  color: #75e6e2;
`;

const StyledScreen = () => {
  return (
    <StyledContainer>
      <StyledView>
        <StyledText>-1</StyledText>
      </StyledView>
      <StyleCount>0</StyleCount>
      <StyledView>
        <StyledText>+1</StyledText>
      </StyledView>
    </StyledContainer>
  );
};

export default StyledScreen;
