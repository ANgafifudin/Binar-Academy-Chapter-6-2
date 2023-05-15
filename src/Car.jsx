/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
import "./index.css";

import { Container, Table } from 'react-bootstrap';

// eslint-disable-next-line react/prop-types
const Car = ({ data }) => {
  return (
    <Container className="mt-3 mb-5">
      <Table bordered hover className="mb-1">
        <thead>
          <tr className="table-active table-dark">
            <th className="text-center">No</th>
            <th className="text-center">Model</th>
            <th className="text-center">Kapasitas</th>
            <th className="text-center">Tipe Driver</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={item.id}>
              <td className="text-center">{index + 1}</td>
              <td className="text-center">{item.manufacture}</td>
              <td className="text-center">{item.capacity}</td>
              <td className="text-center">{item.available.toString()}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Car;
