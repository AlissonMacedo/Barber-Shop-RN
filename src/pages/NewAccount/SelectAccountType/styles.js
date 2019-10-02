import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

export const Background = styled.SafeAreaView`
  flex: 1;
  background: rgb(37, 41, 46);
`;

export const Container = styled.View`
  width: 100%;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Texto = styled.Text`
  color: #fff;
  font-size: 30px;
`;

export const ImgAccount = styled.Image`
  margin: 40px 0px 10px;
  width: 150px;
  height: 150px;
  border-radius: 75px;
  background: #eee;
`;

export const Button = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
`;
