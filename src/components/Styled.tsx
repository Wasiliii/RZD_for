import { styled } from 'styled-components';

export const Table = styled.table`
  width: 100%;
  margin-bottom: 20px;
  border: 5px solid #242424;
  border-collapse: collapse;
  outline: 3px solid #213547;
  font-size: 15px;
  background: #242424;

  tbody tr:nth-child(even) {
    background: #242424;

    border: 1px #213547;
  }
`;

export const Th = styled.th`
  font-weight: bold;
  padding: 7px;
  background: #213547;
  border: none;
  text-align: left;
  font-size: 15px;
  border-top: 3px solid #242424;
  border-bottom: 3px solid #213547;
`;

export const Td = styled.td`
  padding: 7px;
  border: none;
  border-top: 3px solid #242424;
  border-bottom: 3px solid #242424;
  font-size: 15px;
`;
