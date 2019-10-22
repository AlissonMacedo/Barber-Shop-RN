import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: rgba(0, 0, 0, 0.5);
`;

export const ProvidersList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  numColumns: 1,
})`
  margin-top: 45px;
  padding: 0 16px;
`;

export const Provider = styled(RectButton)`
  background: rgba(255, 255, 255, 0.7);
  border-radius: 4px;
  padding: 20px;
  flex: 1;
  flex-direction: row;
  align-items: center;
  margin: 0 10px 20px;
`;

export const Avatar = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 40px;
`;

export const Name = styled.Text`
  margin-top: 15px;
  font-size: 14px;
  font-weight: bold;
  color: #333;
  text-align: center;
`;
