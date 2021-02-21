/*!

=========================================================
* BLK Design System React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import classnames from "classnames";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";
// reactstrap components
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    Label,
    FormGroup,
    Form,
    Input,
    FormText,
    NavItem,
    NavLink,
    Nav,
    Table,
    TabContent,
    TabPane,
    Container,
    Row,
    Col,
    UncontrolledTooltip,
    UncontrolledCarousel,
} from "reactstrap";

// core components
import MainNav from "../../components/Navbars/MainNav.js";

let ps = null;

function typeOne(props){

}

export default function ProfilePage() {
    React.useEffect(() => {
        if (navigator.platform.indexOf("Win") > -1) {
            document.documentElement.className += " perfect-scrollbar-on";
            document.documentElement.classList.remove("perfect-scrollbar-off");
            let tables = document.querySelectorAll(".table-responsive");
            for (let i = 0; i < tables.length; i++) {
                ps = new PerfectScrollbar(tables[i]);
            }
        }

        document.body.classList.toggle("profile-page");
        return function cleanup() {
            if (navigator.platform.indexOf("Win") > -1) {
                ps.destroy();
                document.documentElement.className += " perfect-scrollbar-off";
                document.documentElement.classList.remove("perfect-scrollbar-on");
            }
            document.body.classList.toggle("profile-page");
        };
        // Specify how to clean up after this effect:

    },[]);
    let button;
    return (
        <>
            <MainNav />

            <div className="wrapper">
                <div className="section index-page" style={{padding:"200px 0 0"}}>
                    <img
                        alt="..."
                        className="dots"
                        src={require("../../assets/img/dots.png").default}
                    />
                    <Container className="align-items-center">
                        <div className="squares square1" />
                        <div className="squares square2" />
                        <div className="squares square3" />
                        <div className="squares square4" />
                        <div className="squares square5" />
                        <div className="squares square6" />
                        <div className="squares square7" />
                        <Row>
                            <Col lg="6" md="6">
                                <h5 className="text-on-back">Type 1</h5>
                                {(() => {
                                    if (false) {
                                        return (
                                            //https://codepen.io/pen?editors=0010
                                            <p className="profile-description">
                                                You are a practical individual that values other’s opinions. You take diligent care of your diet and maintain your appearance. Compared to other types, you have more friends and are more giving. People in your type have a greater interest in politics, classical music and romance, and lesser interest in both religion, technology and movies. Lastly, you are not as scared by things such as rats and storms.
                                            </p>
                                        )
                                    } else if (true) {
                                        return (
                                            <p className="profile-description">
                                                You have an imaginative mind! Compared to other’s you have a greater inclination to Movies, Science and Art. You are more spiritual and usually have good dreams. Furthermore, you have more empathy than most individuals and as a result also feel more lonely. Most importantly, you are giving!
                                            </p>
                                        )
                                    } else {
                                        return (
                                            <p className="profile-description">
                                                You are a rockstar! You care less about other people’s opinions and follow your own goals. As a result you are slightly less empathetic. You are not as anxious as others and are essentially nonchalant. You enjoy food and rock and have less of an interest in Politics, Romance, Art, and Classical Music.
                                            </p>
                                        )
                                    }
                                })()}

                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className="section">

                    <Container className="align-items-center">
                        <Row>
                            <Col lg="6" md="6">
                                <h5 className="text-on-back">Matches</h5>
                            </Col>
                        </Row>
                    <Table responsive>
                        <thead>
                        <tr>
                            <th className="text-center">#</th>
                            <th>Email</th>
                            <th>Type</th>
                            <th className="text-right">Send An Email</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td className="text-center">1</td>
                            <td>17@survey.com</td>
                            <td>Type 2</td>
                            <td className="text-right">
                                <Button className="btn-icon" color="info" size="sm" href={"mailto:em@i.l"}>
                                    <i className="fa fa-user"></i>
                                </Button>
                            </td>
                        </tr>
                        <tr>
                            <td className="text-center">2</td>
                            <td>844@survey.com</td>
                            <td>Type 2</td>
                            <td className="text-right">
                                <Button className="btn-icon" color="info" size="sm" href={"mailto:em@i.l"}>
                                    <i className="fa fa-user"></i>
                                </Button>
                            </td>
                        </tr>
                        <tr>
                            <td className="text-center">3</td>
                            <td>938@survey.com</td>
                            <td>Type 1</td>
                            <td className="text-right">
                                <Button className="btn-icon" color="info" size="sm" href={"mailto:em@i.l"}>
                                    <i className="fa fa-user"></i>
                                </Button>
                            </td>
                        </tr>
                        </tbody>
                    </Table>
                    </Container>
                </div>
            </div>
        </>
    );
}
