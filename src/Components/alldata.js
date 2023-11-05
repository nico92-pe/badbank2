import React from 'react';
import { useContext } from 'react';
import UserContext from './usercontext';
import Table from 'react-bootstrap/Table';

function AllData(){
  const value = useContext(UserContext);
  console.log(value.users);
  const activeName = value.users[value.activeUser].name;
  return (
    <>
    <h5>All Data in Store</h5>
    Active User: {activeName}<br/><br/>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Email</th>
          <th>Name</th>
          <th>Password</th>
        </tr>
      </thead>
      <tbody>
        {value.users.map((value, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{value.email}</td>
              <td>{value.name}</td>
              <td>{value.password}</td>
            </tr>
          ))}
      </tbody>
    </Table>
    </>
  );
}
export default AllData;