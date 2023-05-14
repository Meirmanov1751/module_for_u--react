import React from 'react';
import './footer.css'

function Footer(props) {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <div className="footer__content">
            <div className="footer__item">
              <p>2В – это информационно-образовательный портал, служащий для предоставления возможностей для каждого
                школьника Казахстана</p>
              <p>© 2B inc., 2022 Все права защищены</p>
            </div>
            <div className="footer__item">
              <h3>Наш проект</h3>
              <ul>
                <li><a href="#">О проекте</a></li>
                <li><a href="#">Что мы предлагаем</a></li>
              </ul>
            </div>
            <div className="footer__item">
              <h3>Соц. сети</h3>
              <ul>
                <li><a href="#">Instagram</a></li>
                <li><a href="#">Telegram</a></li>
                <li><a href="#">Facebook</a></li>
              </ul>
            </div>
          </div>
          <div className="footer__contact">
            <p>Адрес: Город Алматы, Саина 2</p>
            <p>Номер: +7 (XXX) XXX XX XX</p>
            <p>Gmail.com: 2B_INC@gmail.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
