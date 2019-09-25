import styled from 'styled-components/native';
import Button from '~/components/Button';
import Input from '~/components/Input';

export const Container = styled.View`
  flex: 1;
  background: rgb(37, 41, 46);
  justify-content: center;
  align-items: center;
  padding: 0 30px;
`;

export const Form = styled.View`
  align-self: stretch;
  margin-top: 50px;
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
