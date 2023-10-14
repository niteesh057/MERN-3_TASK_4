import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);

  const fetchData = () => {
    fetch(`https://dummyjson.com/users`)
      .then((response) => response.json())
      .then((actualData) => {
        console.log(actualData);
        setData(actualData.users);
        console.log(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='container-fluid bg-dark text-white text-center'>
      <h1>Dummy data</h1>
      <table className='ni mt-4'>
        <tr className='ni'>
          <th>Sno</th>
          <th>Profile</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Gender</th>
          <th>E-mail</th>
          <th>Username</th>
          <th>Domain</th>
          <th>IP</th>
          <th>University</th>
        </tr>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.id}</td>
            <td>
              <img src={item.image} alt="" height={50} />
            </td>
            <td>{item.firstName}</td>
            <td>{item.lastName}</td>
            <td>{item.gender}</td>
            <td>{item.email}</td>
            <td>{item.username}</td>
            <td>{item.domain}</td>
            <td>{item.ip}</td>
            <td>{item.university}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default App;
