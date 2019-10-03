import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 40px 0;
`;

const Heading = styled.h3`
  margin-bottom: 20px;
`;

const Table = styled.table`
  border: none;
  width: 80%;
  display: table;
  border-collapse: collapse;
  border-spacing: 0;
  text-align: center;
  overflow: auto;
  @media only screen and (max-width: 768px) {
    width: 100%;
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

const RunComparison = ({ data }) => {
  return (
    <Container>
      <Heading>Some of the greatest Batsmen of all time</Heading>
      <Table>
        <tbody>
          <TableRow>
            <TableHeading>Batsman</TableHeading>
            <TableHeading>Runs</TableHeading>
            <TableHeading>Average</TableHeading>
            <TableHeading>Strike Rate</TableHeading>
            <TableHeading>50s/100s</TableHeading>
            <TableHeading>Highest Score</TableHeading>
          </TableRow>
          {data.map((row, i) => (
            <TableRow key={i}>
              <Td>{row.Batsman}</Td>
              <Td>{row.Runs}</Td>
              <Td>{row.Average}</Td>
              <Td>{row['Strike Rate']}</Td>
              <Td>{row['50s/100s']}</Td>
              <Td>{row['Highest Score']}</Td>
            </TableRow>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default RunComparison;
