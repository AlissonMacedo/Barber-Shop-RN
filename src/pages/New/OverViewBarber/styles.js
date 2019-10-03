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
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  max-height: 50px;
  margin: 10px 10px 0px;

  align-items: center;
  padding-bottom: 20px;
  border-bottom-width: 1px;
  border-color: #eee;
`;

export const TextHeaderBarber = styled.Text`
  flex: 1;
  color: #eee;
  font-size: 30px;
`;

export const AvatarBarber = styled.Image`
  margin: 20px 10px 20px;
  width: 90px;
  height: 90px;
  border-radius: 45px;
  margin-top: -10px;
`;

export const ProvidersList = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 5px;
  padding: 0 7px;
`;

export const HeaderService = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-content: center;
  height: 65px;
  margin: 10px 10px 10px;

  padding-bottom: 20px;
  border-bottom-width: 1px;
  border-color: #eee;
`;

export const ContainerIcon = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-content: center;
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

export const DetailsBarber = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin: 10px;
`;

export const TexDetailsBaber = styled.Text`
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
