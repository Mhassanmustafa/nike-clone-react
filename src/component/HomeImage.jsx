import React, { Component } from "react";
import Image from "./Images/nike-just-do-it.jpg";

class HomeImage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <section id="main-banner " className="container-fluid banner">
          <div className="banner__container">
            <div className="banner__item">
              <div className="banner__wrapper">
                {/* <h1>hello</h1> */}
                <img
                  className="img-fluid"
                  id="banner__Image"
                  src="https://static.nike.com/a/images/f_auto/dpr_1.0/w_1237,c_limit/3970e816-b2a3-440e-b2e3-2df925432ecf/nike-just-do-it.jpg"
                  alt=""
                  srcset=""
                />
              </div>
            </div>
          </div>
        </section>
        {/* <div>
          <div className="container">
            
          </div>
        </div> */}
      </>
    );
  }
}

export default HomeImage;
