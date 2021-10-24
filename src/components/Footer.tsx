import React from 'react';
import logo from '../assets/mallmalle.png';
import {AiFillFacebook, AiFillYoutube, AiOutlineInstagram} from 'react-icons/ai';
import '../styles/footer.scss';

type Props = {};

export default function Footer(props: Props) {

  return (
    <>
      <div className="container mt-5 mm-footer">
        <div className="row">
          <div className="col-3 d-flex flex-column">
            <div>
              <img src={logo} alt="logo.png" height={36}/>
            </div>
            <div className={'my-3'}>ამერიკული პროდუქტის ხელმისაწვდომობა საქარტველოში</div>
            <div>
              <AiFillFacebook size={'2.5em'}/>
              <AiOutlineInstagram className={'mx-3'} size={'2.5em'}/>
              <AiFillYoutube size={'2.5em'}/>
            </div>
          </div>
          <div className="col-3">
            <h6>პირობები</h6>
            <ul>
              <li>წესები და პირობები</li>
              <li>ხშირად დასმული კითხვები</li>
              <li>დაბრუნების და გაცვლის პოლიტიკა</li>
              <li>დონფიდენციალურობა</li>
              <li>დახმარება</li>
            </ul>
          </div>
          <div className="col-3">
            <h6>ჩვენს შესახებ</h6>
            <ul>
              <li>MAllMale-ს შესახებ</li>
              <li>კონტაქტი</li>
            </ul>
          </div>
          <div className="col-3">
            <h6 className="text-right">სიახლეების გამოწერა</h6>
            <div className="btn-toolbar" role="toolbar">
              <div className="btn-group" role="group">
                <input type="email" className="form-control" placeholder="ელ-ფოსტა"/>
                <button type="button" className="btn btn-outline-secondary">გამოწერა</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr/>
      <p className="text-center small">ყველა უფლება დაცულია</p>
    </>
  );
}
