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

const carouselItems = [
    {
        src: require("../../assets/img/denys.jpg").default,
        altText: "Slide 1",
        caption: "Big City Life, United States",
    },
    {
        src: require("../../assets/img/fabien-bazanegue.jpg").default,
        altText: "Slide 2",
        caption: "Somewhere Beyond, United States",
    },
    {
        src: require("../../assets/img/mark-finn.jpg").default,
        altText: "Slide 3",
        caption: "Stocks, United States",
    },
];

let ps = null;

export default function ProfilePage() {
    const [tabs, setTabs] = React.useState(1);
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
    return (
        <>
            <MainNav />
            <div className="wrapper">
                <div className="page-header">
                    <img
                        alt="..."
                        className="dots"
                        src={require("../../assets/img/dots.png").default}
                    />
                    <img
                        alt="..."
                        className="path"
                        src={require("../../assets/img/path4.png").default}
                    />
                    <Container className="align-items-center">
                        <Row>
                            <Col lg="6" md="6">
                                <h1 className="profile-title text-center">First LastName</h1>
                                <h5 className="text-on-back">Type</h5>
                                <p className="profile-description">
                                    Rock: -0.6355691415176077
                                    Movies: -0.465875259673763
                                    Elections: 1.1350806273387946
                                    Judgment calls: 0.4291014076301618
                                    Eating to survive: 0.5987948101991813
                                    Giving: 1.1802984497589515
                                    Storm: -0.7841156341045572
                                    Classical music: 1.419609689232878
                                    Rats: 0.654143863391764
                                    Loneliness: -0.7076964880338388
                                    Cheating in school: 0.6533113896467055
                                    Appearence and gestures: 0.8180608593823635
                                    Romantic: 0.5789733081199273
                                    God: -1.0101851758166447
                                    Science and technology: -0.9137388655138865
                                    Number of friends: 1.1668396937540373
                                </p>
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
                            <th>Name</th>
                            <th>Type</th>
                            <th className="text-right">Email</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td className="text-center">1</td>
                            <td>Andrew Mike</td>
                            <td>Type 1</td>
                            <td className="text-right">
                                <Button className="btn-icon" color="info" size="sm" href={"mailto:em@i.l"}>
                                    <i className="fa fa-user"></i>
                                </Button>
                            </td>
                        </tr>
                        <tr>
                            <td className="text-center">2</td>
                            <td>Andrew Mike</td>
                            <td>Type 1</td>
                            <td className="text-right">
                                <Button className="btn-icon" color="info" size="sm" href={"mailto:em@i.l"}>
                                    <i className="fa fa-user"></i>
                                </Button>
                            </td>
                        </tr>
                        <tr>
                            <td className="text-center">3</td>
                            <td>Andrew Mike</td>
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
