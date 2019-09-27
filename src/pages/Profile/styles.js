import styled from 'styled-components/native';

import Input from '~/components/Input';
import Button from '~/components/Button';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background: rgb(202, 202, 202);
`;

export const Separator = styled.View`
  height: 1px;
  background: #000;
  margin: 20px 0 30px;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #fff;
  font-weight: bold;
  align-self: center;
  margin-top: 30px;
`;

export const Form = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { padding: 30 },
})`
  align-self: stretch;
`;

export const FormInput = styled(Input).attrs({
  placeholderTextColor: '#000',
})`
  background: rgba(96, 96, 96, 0.1);
  margin-bottom: 10px;
`;

export const SubmitButton = styled(Button)`
  background: rgb(57, 78, 99);
  margin-top: 5px;
`;

export const LogoutButton = styled(Button)`
  margin-top: 10px;
  background: rgba(57, 78, 99, 0.3);
`;
