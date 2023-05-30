import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import beach from '../../assets/beach.mp4';
import { AuthContext } from '../../context/AuthContext';

const Main = () => {
  const linkStyle = {
    color: 'red',
    fontSize: 'large',
  };

  const { isLoggedIn, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
  };

  return (
    <>
      <div className="position-relative vh-100">
        <video className="w-100 position-absolute top-0 start-0" autoPlay loop muted>
          <source src={beach} type="video/mp4" />
        </video>

        <Container className="position-relative" style={{ zIndex: 10 }}>
          <Row className="justify-content-center align-items-center">
            <Col xs="auto" className="text-center">
              <header className='my-4'>
                <NavLink style={({ isActive }) => isActive ? linkStyle : null} className='mx-4' to='/'>Home</NavLink>
                {isLoggedIn ? (
                  <>
                    <NavLink className='mx-4' to='/users'>Users</NavLink>
                    <Button className='mx-4' onClick={handleLogout}>Logout</Button>
                  </>
                ) : (
                  <>
                    <NavLink className='mx-4' to='/login'>
                      Login
                    </NavLink>
                    <NavLink className='mx-4' to='/register'>
                      Register
                    </NavLink>
                  </>
                )}
                <h1 className="mt-4 text-white">MatchYou</h1>
                <h2 className='text-white mt-4'>BLA BLA BLA BLA BLA BLA</h2>
                <div className='d-flex flex-column gap-3 mt-4'>
                  {/* <button className="btn btn-primary mt-4" onClick=''>CONTINUE WITH GOOGLE</button> */}
                  {/* <button className="btn btn-primary mt-4" onClick=''>CONTINUE WITH E-MAIL</button>
                  <button className="btn btn-primary mt-4" onClick=''>CONTINUE WITH P-NUMBER</button> */}
                </div>
              </header>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Main;
