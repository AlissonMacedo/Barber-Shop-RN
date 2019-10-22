import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: rgb(202, 202, 202);
`;

export const ProvidersList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  numColumns: 1,
})`
  margin-top: 40px;
  padding: 0px 0px;
`;

export const Provider = styled(RectButton)`
  background: #fff;
  border-radius: 4px;
  padding: 5px;
  justify-content: space-around;
  flex-direction: row;
  align-items: center;
  margin: 5px 15px;
`;

export const Avatar = styled.Image`
  width: 130px;
  height: 130px;
  border-radius: 10px;
  margin: 5px 0px;
`;

export const DivDadosProvider = styled.View`
  width: 180px;
  height: 130px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const DivDetalhesProvider = styled.View`
  width: 180px;
  height: 100px;
  flex-direction: column;
  align-items: center;
`;

export const DivDetalhes1Provider = styled.View`
  width: 180px;
  height: 30px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Name = styled.Text`
  margin-top: 15px;
  font-size: 20px;
  font-weight: bold;
  color: #333;
  text-align: center;
`;

export const Description = styled.Text`
  margin: 5px;
  font-size: 12px;
  color: #333;
  text-align: center;
`;
