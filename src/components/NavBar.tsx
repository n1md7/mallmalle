import React, {useState} from "react";
import Logo from "../assets/brand-logo@2x.png";
import {Nav, Navbar} from "react-bootstrap";
import {GiHamburgerMenu} from "react-icons/gi";
import {FiSearch} from "react-icons/fi";
import {BiUser} from "react-icons/bi";
import {AiOutlineShoppingCart} from "react-icons/ai";
import {BsBookmark} from "react-icons/bs";
import MenuSidebar from "./MenuSidebar";
import "../styles/currency.scss";

export default function NavBar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true)

  return (
    <>
      <Navbar bg="dark" variant="dark" className="fixed-top navbar-gradient mm-navbar">
        <Nav.Link>
          <GiHamburgerMenu onClick={handleShow} size={"2em"} color={"white"}/>
        </Nav.Link>
        <Navbar.Brand href="#home">
          <img
            alt="mall-male.png"
            src={Logo}
            height="48"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <div className="input-group flex-nowrap me-3">
          <div className="input-group-prepend">
          <span className="input-group-text" id="search-addon">
            <FiSearch size={"1.5em"}/>
          </span>
          </div>
          <input
            spellCheck={false}
            type="search"
            placeholder="ძებნა"
            className="form-control navbar-search ps-0"
            aria-label="Search"
            aria-describedby="search-addon"
          />
        </div>
        <Nav.Item>
          <select name="language" className={"language"}>
            <option value="EN">EN</option>
            <option value="KA">KA</option>
          </select>
        </Nav.Item>
        <Nav.Item>
          <div className="mx-3 button" id="currency-btn">
            <input type="checkbox" className="checkbox"/>
            <div className="knobs">
              <span>$</span>
            </div>
            <div className="layer">{""}</div>
          </div>
        </Nav.Item>
        <Nav.Link>
          <BiUser size={"1.5em"} color={"white"}/>
        </Nav.Link>
        <Nav.Link>
          <BsBookmark size={"1.5em"} color={"white"}/>
        </Nav.Link>
        <Nav.Link>
          <AiOutlineShoppingCart size={"1.5em"} color={"white"}/>
        </Nav.Link>
      </Navbar>
      <MenuSidebar show={show} handleClose={handleClose}/>
    </>
  );
}
