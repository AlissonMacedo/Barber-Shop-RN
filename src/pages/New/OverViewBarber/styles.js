import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: rgb(37, 41, 46);
`;

export const ImageBarber = styled.Image`
  width: 100%;
  height: 200px;
`;

export const HeaderBarber = styled.View`
  height: 50px;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  margin: 10px;
  border-bottom-width: 1px;
  border-color: #eee;
`;

export const TextHeaderBarber = styled.Text`
  color: #eee;
  font-size: 25px;
  font-weight: bold;
  margin: 5px 0px 0px;
`;

export const AvatarBarber = styled.Image`
  margin-left: 15px;
  width: 90px;
  height: 90px;
  border-radius: 45px;
  margin-top: -50px;
`;

export const ProvidersList = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 0px;
  padding: 0 0px;
`;

export const HeaderService = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-content: center;
  height: 65px;
  margin: 0px 10px 10px;

  border-bottom-width: 1px;
  border-color: #eee;
`;

export const IconWifi = styled.Image`
  margin: 10px 10px 0px;
  width: 40px;
  height: 40px;
  border-radius: 20px;
`;

export const TextIcon = styled.Text`
  color: #fff;
  font-size: 15px;
  margin: 5px;
`;

export const TexDetailsBaber = styled.Text`
  margin: 10px;
  color: #eee;
  font-size: 20px;
  font-weight: bold;
  align-self: stretch;
`;

export const FooterBarber = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  height: 50px;
  background: #fff;
`;
