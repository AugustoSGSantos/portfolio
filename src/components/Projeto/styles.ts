import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* 2 colunas */
  gap: 24px; /* Espaçamento entre os cards */
  padding: 16px; /* Padding ao redor do container */
`

export const Card = styled.div`
  border: 1px solid ${(props) => props.theme.corDaBorda};
  padding: 16px;
  width: 325px;
`

export const LinkBotao = styled.a`
  color: ${(props) => props.theme.corDeFundo};
  font-size: 14px;
  background-color: ${(props) => props.theme.corDeFundoBotao};
  text-decoration: none;
  padding: 8px;
  display: inline-block;
  margin-top: 24px;
  margin-right: 10px;
  &:last-child {
    margin-right: 0;
  }
`
