import styled from 'styled-components/native';

import Input from '~/components/Input';
import Button from '~/components/Button';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  background: rgb(37, 41, 46);
`;

export const Form = styled.View`
  align-self: stretch;
  margin-top: 20px;
`;

export const FormInput = styled(Input)`
  margin-bottom: 10px;
`;

export const Submitbutton = styled(Button)`
  margin-top: 20px;
`;

export const GroupLinks = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;

export const SignLink = styled.TouchableOpacity`
  margin-top: 20px;
`;

export const SignLinkText = styled.Text`
  margin: 5px;
  color: #fff;
  font-weight: bold;
  font-size: 13px;
`;
