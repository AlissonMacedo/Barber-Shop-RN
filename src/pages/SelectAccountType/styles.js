import styled from 'styled-components/native';
import Button from '~/components/Button';

export const Container = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: #000;
`;

export const ContainerFront = styled.View`
  flex: 1;
  background: rgb(202, 202, 202);
`;

export const CardAccount = styled.TouchableOpacity`
  flex: 1;
  margin: 15px 30px;
  background: rgb(37, 41, 46);
  border-radius: 5px;
`;

export const ImageButton = styled.Image`
  flex: 1;
`;

export const ButtonCard = styled(Button).attrs({
  placeholderTextColor: '#000',
})`
  height: 65px;
`;
