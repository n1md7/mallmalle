import {Offcanvas} from "react-bootstrap";
import logo from '../assets/mallmalle.png';

type Props = {
  show: boolean;
  handleClose: any; 
}
export default function MenuSidebar(props: Props) {

  return (
    <>
      <Offcanvas show={props.show} onHide={props.handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <img src={logo} alt="mallmale@2x.png" width={128}/>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <h3 className="mb-4 fw-bold">კატეგორიები</h3>
          <ul className="list-group menu-sidebar">
            <li className="list-group-item active">ტანსაცმელი</li>
            <li className="list-group-item">ფეხსაცმელი</li>
            <li className="list-group-item">აქსესუარები</li>
            <li className="list-group-item">ბოქსები</li>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
