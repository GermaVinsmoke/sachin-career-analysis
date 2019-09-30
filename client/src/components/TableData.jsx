import React from 'react';
import styled from 'styled-components';

const Table = styled.table`
  border: none;
  width: 100%;
  display: table;
  border-collapse: collapse;
  border-spacing: 0;
  text-align: center;
  overflow: auto;
`;

const TabelContainer = styled.div`
  height: 450px;
  width: 20%;
  overflow: auto;
  @media only screen and (max-width: 768px) {
    width: 100%;
    margin: 20px 0px;
    height: 250px;
  }
`;

const TableRow = styled.tr`
  &:nth-child(odd) {
    background-color: #ddd;
  }
`;

const Td = styled.td`
  height: 45px;
`;

const TableHeading = styled.th`
  height: 45px;
`;

const TableData = ({ keys, labelData, datasetData }) => {
  return (
    <TabelContainer>
      <Table>
        <tbody>
          <TableRow>
            {keys.map(heading => (
              <TableHeading key={heading}>{heading}</TableHeading>
            ))}
          </TableRow>
          {labelData.map((row, i) => (
            <TableRow key={i}>
              <Td>{row}</Td>
              <Td>{datasetData[i]}</Td>
            </TableRow>
          ))}
        </tbody>
      </Table>
    </TabelContainer>
  );
};

export default TableData;
