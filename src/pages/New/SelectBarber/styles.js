import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import Input from '~/components/Input';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: rgba(0, 0, 0, 0.5);
`;

export const HeaderPesquisa = styled.View`
  padding: 45px 0px 0px;
  margin: 0px 20px;
`;

export const FormInput = styled(Input).attrs({
  placeholderTextColor: '#000',
})`
  background: rgba(255, 255, 255, 0.7);
  margin-bottom: 10px;
`;

export const ProvidersList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  numColumns: 1,
})`
  flex: 1;
  margin-top: 5px;
  padding: 0 7px;
`;

export const Provider = styled(RectButton)`
  background: rgba(255, 255, 255, 0.7);
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
