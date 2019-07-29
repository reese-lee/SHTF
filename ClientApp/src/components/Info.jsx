import React, { Component } from 'react';
import './Home.css';
import { Layout } from './Layout';
import { UncontrolledCollapse, Button, CardBody, Card } from 'reactstrap';

export class Info extends Component {
  static displayName = Info.name;

  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

  toggle() {
    this.setState(state => ({ collapse: !state.collapse }));
  }

  render () {
    return (
      <Layout>
        <div>
          <h1 className="title3">INFO</h1>

          <div className="buttonDiv">
            <div>
              <Button className="splashButtons" id="toggler" style={{ marginBottom: '1rem' }}>The Big One</Button>
              <UncontrolledCollapse toggler="#toggler">
                <Card>
                  <CardBody>
                    Anim pariatur cliche reprehenderit,
                    enim eiusmod high life accusamus terry richardson ad squid. Nihil
                    anim keffiyeh helvetica, craft beer labore wes anderson cred
                    nesciunt sapiente ea proident.
                  </CardBody>
                </Card>
              </UncontrolledCollapse>
            </div>
          </div>

          <div className="buttonDiv">
            <div>
              <Button className="splashButtons" id="toggler" style={{ marginBottom: '1rem' }}>The Other One</Button>
              <UncontrolledCollapse toggler="#toggler">
                <Card>
                  <CardBody>
                    Anim pariatur cliche reprehenderit,
                    enim eiusmod high life accusamus terry richardson ad squid. Nihil
                    anim keffiyeh helvetica, craft beer labore wes anderson cred
                    nesciunt sapiente ea proident.
                  </CardBody>
                </Card>
              </UncontrolledCollapse>
            </div>


          </div>
          <br/>

        </div>
      </Layout>
    );
  }
}
