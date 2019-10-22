import styled from 'styled-components/native';

import Input from '~/components/Input';
import Button from '~/components/Button';

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
`;

export const Separator = styled.View`
  height: 1px;
  background: rgba(255, 255, 255, 0.7);
  margin: 20px 0 30px;
`;

export const TextTitulo = styled.Text`
  padding: 30px;
  font-size: 20px;
  color: #fff;
  font-weight: bold;
  align-self: center;
  margin-top: 30px;
`;

export const Form = styled.View`
  align-self: stretch;
  padding: 30px;
`;

export const FormInput = styled(Input).attrs({
  placeholderTextColor: '#000',
})`
  background: rgba(255, 255, 255, 0.7);
  margin-bottom: 10px;
`;

export const SubmitButton = styled(Button)`
  background: rgb(57, 78, 99);
  margin-top: 5px;
`;

export const LogoutButton = styled(Button)`
  margin-top: 10px;
  background: rgba(255, 255, 255, 0.4);
`;
