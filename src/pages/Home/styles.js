import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  background: #ddd;
  justify-content: center;
`;

export const Form = styled.View`
  padding: 0px 0px 25px;
  background: #333;
  align-self: stretch;
  flex-direction: row;
  padding: 10px 10px 5px 10px;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#999',
})`
  flex: 1;
  height: 40px;
  background: #eee;
  border-radius: 4px;
  padding: 0 15px;
  border: 1px solid #eee;
`;

export const SubmitButton = styled(RectButton)`
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  margin-left: 10px;
  margin-left: 10px;
  padding: 0 12px;
`;

export const DetalheHeader = styled.View`
  height: 120px;
  background: #333;
`;

export const BannerHome = styled.Image`
  width: 100%;
  height: 130px;
  margin-top: -80px;
  border-radius: 15px;
`;

export const TextDestak = styled.Text`
  font-size: 20px;
  color: #333;
  margin-left: 5px;
  margin-top: 0px;
  padding-bottom: 0px;
  font-weight: bold;
`;

export const CardList = styled.FlatList.attrs({
  numColumns: 2,
  showsVerticalScrollIndicator: false,
})``;

export const ViewDeskt = styled.View`
  align-self: stretch;
  justify-content: center;
  flex-direction: column;
  padding: 10px 10px;
  margin: 10px 10px 10px 10px;
  border-width: 1px;
  border-radius: 2px;
  border-color: #ddd;
  background: #fff;

  border-width: 1;
  border-radius: 2;
  border-color: #ddd;
  border-bottom-width: 1;
  shadow-color: #000;
  shadow-offset: {width: 0, height: 2};
  shadow-opacity: 0.5;
  shadow-radius: 2;
  elevation: 1;
`;

export const Avatar = styled.Image`
  height: 130px;
  border-radius: 4px;
  padding: 5px;
  flex: 1;
  align-items: center;
  margin: 6px 6px;
  border: solid 1px #ddd;
`;

export const AvatarMini = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  border-radius: 30px;
  border: solid 1px #ddd;
  background-color: #333;
  margin: 5px 5px 10px 5px;
`;

export const AvatarMedium = styled.Image`
  width: 330px;
  height: 120px;
  border-radius: 5px;
  border: solid 1px #ddd;
  margin: 8px;
`;

export const AvatarLocalidade = styled.Image`
  height: 180px;
  border-radius: 4px;
  padding: 3px;
  flex: 1;
  align-items: center;
  margin: 10px 10px 10px 5px;
`;

export const BannerGrande = styled.View`
  height: 200px;
  align-self: stretch;
  margin: 15px 15px 15px 15px;
  background: #eee;
  border-radius: 10px;
  border-width: 1;
  border-radius: 2;
  border-color: #ddd;
  border-bottom-width: 1;
  shadow-color: #000;
  shadow-offset: {width: 0, height: 2};
  shadow-opacity: 0.5;
  shadow-radius: 2;
  elevation: 1;
`;

export const ImagemBannerGrande = styled.Image`
  width: 100%;
  height: 200px;
`;
