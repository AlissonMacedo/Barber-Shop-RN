import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 60px;
  background-color: rgb(37, 41, 46);
  width: 100%;
`;

export const Logo = styled.Image`
  justify-content: center;
  align-items: center;
  width: 25px;
  height: 25px;
  margin-right: 20px;
`;

export const Texto = styled.Text`
  color: #fff;
  font-size: 20px;
`;
