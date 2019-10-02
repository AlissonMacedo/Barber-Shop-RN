import styled from 'styled-components/native';
import Button from '~/components/Button';
import Input from '~/components/Input';

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
export const Form = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { padding: 30 },
})`
  align-self: stretch;
`;

export const FormInput = styled(Input)`
  margin-bottom: 10px;
`;

export const SubmitButton = styled(Button)`
  margin-top: 5px;
`;

export const SignLink = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
`;

export const SignLinkText = styled.Text`
  margin: 10px;
  color: #fff;
  font-weight: bold;
  font-size: 13px;
`;

export const ContainerTitulo = styled.View`
  justify-content: center;
  align-items: center;
  margin: 0px 0px 15px;
`;

export const TextoTitulo = styled.Text`
  color: #fff;
  font-size: 20px;
`;

export const Div = styled.View`
  height: 1px;
  background: rgba(255, 255, 255, 0.2);
  margin: 10px 0 20px;
`;
