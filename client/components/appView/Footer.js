import React from 'react'

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return ( 
      <div>
        <footer>
          <ul>
            <li>
            <a href="https://github.com/hipcup/hipcup-app" target="_blank">© Hipcup 2015<i className="icon fa fa-github"></i></a>
            </li>
            <li>
              <span>Melinda Bernardo</span>
              <a href="https://github.com/melindabernrdo" target="_blank"><i className="icon fa fa-github"></i></a>&nbsp;
              <a href="https://www.linkedin.com/in/melindabernrdo" target="_blank"><i className="icon fa fa-linkedin"></i></a>
            </li>
            <li>
              <span>Irving Barajas</span>
              <a href="https://github.com/irvingaxelb" target="_blank"><i className="icon fa fa-github"></i></a>&nbsp;
              <a href="https://www.linkedin.com/in/irvingbarajas" target="_blank"><i className="icon fa fa-linkedin"></i></a>
            </li>
          </ul>
        </footer>
      </div>
    )
  }
}

export default Footer;
