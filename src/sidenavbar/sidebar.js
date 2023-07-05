import { useHistory } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { toast } from "react-toastify";
import {
    FaAddressBook,
    FaBookReader,
    FaGreaterThan,
    FaPhone,
    FaMailBulk

} from "react-icons/fa";

export default function BaseApp({ title, children }) {
    const history = useHistory()
    const logout = () => {
        sessionStorage.clear();
        toast("User Logout")
        history.push('/login');
    };

    return (
                <div>
                    <Navbar className=" navbar navbar-dark bg-primary" expand="lg">
                        <Container fluid>
                            <Navbar.Toggle style={{ border: "1px solid red", borderRight: "8px",backgroundColor:"green" }} aria-controls="navbarScroll" ></Navbar.Toggle>
                            <Navbar.Collapse id="navbarScroll">
                                <Nav
                                    className="me-auto my-2 my-lg-0"
                                    style={{ maxHeight: '100px' }}
                                    navbarScroll
                                >

                                    <button id='nav-btn-clr' className="btn me-2" type="button" onClick={() => history.push("/dashboard")} ><div className="icon">{<FaBookReader/>} <span>Dashboard</span></div> </button>
                                    <button id='nav-btn-clr' className="btn me-2" type="button" onClick={() => history.push("/addmobile")}><div className="icon">{<FaAddressBook/>}<span>Add Mobile</span></div></button>
                                </Nav>
                                <button id='nav-btn-clr' className="btn me-2"  type="button" onClick={() => logout()}><div className="icon">{<FaGreaterThan/>} <span>Logout</span></div></button>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                    <div className="title">{title}</div>
                    <div className="childred ">
                        {children}
                        <footer className='bg-primary'>
                            contact us
                            <div><span style={{paddingRight:"5px"}}><FaMailBulk/></span> email : Ragulmobile@gmail.com</div>
                            <div> <span style={{paddingRight:"5px"}}><FaPhone/></span>phone : 9788652355</div>
                        </footer>

                    </div>
                </div>
    );
}
