import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: rgb(37, 41, 46);
`;

export const TextInforView = styled.View`
  justify-content: center;
  align-items: center;
  height: 45px;
`;

export const TextInfo = styled.Text`
  margin: 10px 17px 10px;
  flex: 1;
  font-size: 20px;
  font-weight: bold;
  color: #fff;
`;

export const ProvidersList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  numColumns: 1,
})`
  margin-top: 5px;
  padding: 0 7px;
`;

export const Provider = styled(RectButton)`
  background: #fff;
  border-radius: 1px;
  padding: 0px;
  flex: 1;
  flex-direction: row;

  margin: 0 10px 10px;
`;

export const Avatar = styled.Image`
  width: 120px;
  height: 120px;
  border-radius: 0px;
`;

export const Description = styled.View`
  flex: 1;
  flex-direction: column;
`;

export const Title = styled.Text`
  margin-top: 10px;
  font-size: 20px;
  font-weight: bold;
  color: #333;
  text-align: center;
`;

export const DescriptionTextArrow = styled.View`
  flex: 1;
  flex-direction: row;
`;

export const DescriptionText = styled.View`
  flex: 1;
`;

export const TextDescription = styled.Text`
  margin: 10px;
  flex: 1;
  margin-top: 5px;
  font-size: 10px;
  font-weight: bold;
  color: #333;
`;
