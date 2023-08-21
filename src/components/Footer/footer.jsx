import "./footer.scss";

const Footer = () => {
    return (
      <div className="footer">
        <div className="bottom">
          <div className="left">
            <span className="logo">Home Life</span>
            <span className="copyright">
              © Copyright 2023. All Rights Reserved
            </span>
          </div>
          <div className="right">
            <img src="/img/payment.png" alt="" />
          </div>
        </div>
      </div>
    );
  };
  
  export default Footer;