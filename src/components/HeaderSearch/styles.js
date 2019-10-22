import styled from 'styled-components/native';
import Input from '~/components/Input';

export const Container = styled.View``;

export const HeaderPesquisa = styled.View`
  padding: 7px 40px 20px;
  padding-left: 50px;
  width: 100%;
  height: 60px;
`;

export const InputPesquisa = styled(Input).attrs({
  placeholderTextColor: '#000',
})`
  background: #eee;
  margin-bottom: 10px;
  height: 35px;
`;
