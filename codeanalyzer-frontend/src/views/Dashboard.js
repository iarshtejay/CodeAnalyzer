/*!

=========================================================
* Argon Dashboard React - v1.2.1
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import { useEffect, useState, useContext } from "react";
// node.js library that concatenates classes (strings)
import classnames from "classnames";
// javascipt plugin for creating charts
import Chart from "chart.js";
// react plugin used to create charts
import { Bar, Line } from "react-chartjs-2";
import axios from "axios";

import useQuery from "../hooks/useQuery";
// reactstrap components
import {
    Button,
    Card,
    CardBody,
    CardHeader,
    Col,
    Container,
    Nav,
    NavItem,
    NavLink,
    Progress,
    Row,
    Table,
} from "reactstrap";

// core components
import {
    chartExample1,
    chartExample2,
    chartOptions,
    parseOptions,
} from "variables/charts.js";
import GithubContext from "../contexts/GithubContext";
import { api } from "../lib/api";
import { useHistory } from "react-router-dom";
import Header from "components/Headers/Header.js";

const Dashboard = (props) => {
    const [activeNav, setActiveNav] = useState(1);
    const query = useQuery();
    const [chartExample1Data, setChartExample1Data] = useState("data1");
    const [repositoryCounts, setRepositoryCounts] = useState(0);
    const [contributorCounts, setContributorCounts] = useState(0);
    const [refactoringCounts, setRefactoringCounts] = useState(0);
    const [refactoringsChartData, setRefactoringsChartData] = useState([]);
    const [commitsChartData, setCommitsChartData] = useState([]);
    const [topCommits,setTopCommit] = useState([]);
    const [dataLoaded,setDataLoaded] = useState(false);
    const { user, setUser } = useContext(GithubContext);
    const [smells, setSmells] = useState(); 
    const [loadedSmells, setLoadedSmells] = useState(false);
    const history = useHistory();

    useEffect(() => {
        (async () => {
            const accessToken = query.get("access_token");
            console.log(accessToken);
            const refreshToken = query.get("refresh_token");
            const expiresIn = query.get("raw[expires_in]");
            // console.log('AT->', accessToken, refreshToken, expiresIn);
            if (accessToken) {
                const userRegistration = await api.authGithubUser(accessToken);
                console.log("UR", userRegistration);
                // console.log('UR->', userRegistration);
                if (userRegistration && userRegistration.data.user) {
                    // console.log('CGA', userRegistration.data.user, userRegistration.data.user, accessToken, refreshToken, expiresIn);
                    const createGithubAuth = await createGithubAuths(
                        userRegistration.data.user,
                        accessToken,
                        refreshToken,
                        expiresIn,
                        {
                            headers: {
                                Authorization: "Bearer " + userRegistration.data.jwt,
                            },
                        }
                    );
                    if (createGithubAuth) {
                        console.log("User Registration was Successful!");
                        console.log(
                            "CGA",
                            createGithubAuth.data.data.attributes.user.data,
                            createGithubAuth,
                            accessToken
                        );
                        await setUser({
                            ...createGithubAuth.data.data.attributes.user.data,
                            accessToken,
                        });
                        console.log("user", user);
                        await localStorage.setItem(
                            "strapiUserId",
                            createGithubAuth.data.data.attributes.user.data.id
                        );

                    }
                }

                console.log("user", user);
                await localStorage.setItem("token", userRegistration.data.jwt);
                await localStorage.setItem("githubToken", accessToken);

                fetchDashboardData();
            }

        const token = localStorage.getItem("token");

        const smellsDataRes = await axios.get("http://34.125.39.69:3000/designite?repo=zxpoly&owner=qurram-zaheer");
        if(smellsDataRes.length!=0){
            setSmells(smellsDataRes.data);
            setLoadedSmells(true);
        }

        if(token){
            fetchDashboardData();
        }
    })();
    }, []);

    const fetchDashboardData = async () => {
        console.log("inside!!!");
        const accessToken = await localStorage.getItem("token");
        const userId = localStorage.getItem("strapiUserId");
        const repoCount = await api.getUserRepos(userId);
        if (repoCount) {
            console.log("RC", repoCount);
            if (repoCount.data.data.length === 0) {
                history.push("/add-repos");
            }
            setRepositoryCounts(repoCount.data.data.length);
        }
        const contCount = await api.getContributorsCount(null, {
            headers: {
                Authorization: "Bearer " + accessToken,
            },
        });
        if (contCount) {
            console.log("CC", contCount);
            setContributorCounts(contCount.data);
        }
        const refactoringCount = await api.getTotalRefactorings(null, {
            headers: {
                Authorization: "Bearer " + accessToken,
            },
        });
        if (refactoringCount) {
            console.log("RC", refactoringCount);
            setRefactoringCounts(refactoringCount.data);
        }
        const refactoringChartData = await api.getRefactoringData(null, {
            headers: {
                Authorization: "Bearer " + accessToken,
            },
        });
        if (refactoringChartData) {
            console.log("RCD", refactoringChartData);
            setRefactoringsChartData(refactoringChartData.data.data);
        }
        const commitChartData = await api.getCommitsCountByRepo(null, {
            headers: {
                Authorization: "Bearer " + accessToken,
            },
        });
        if (commitChartData) {
            console.log("CCD", commitChartData);
            setCommitsChartData(commitChartData.data);
        }
        
        const getTopCommits = await api.getTopCommits({repositoryId:repoCount.data.data[0].id},{
            headers: {
                'Authorization': 'Bearer ' + accessToken
            }
        });
        if(getTopCommits.length != 0){
            setTopCommit([...getTopCommits.data]); 
            setDataLoaded(true);
        }
        
    }

    var refactoringChartDataFeed = {
        labels: refactoringsChartData.map(function (item) {
            return item.attributes.commitdate?.slice(0, 10);
        }),
        datasets: [
            {
                label: "Total Refactorings Done Across Repos By Date",
                data: refactoringsChartData.map(function (item) {
                    return item.attributes.totalchanges;
                }),
            },
        ],
    };

    var commitByRepoDataFeed = {
        labels: Object.keys(commitsChartData),
        datasets: [
            {
                label: "Commits By Repo",
                data: Object.values(commitsChartData),
            },
        ],
    };

    const createGithubAuths = async (
        user,
        accessToken,
        refreshToken,
        expiresIn,
        headers
    ) => {
        try {
            console.log("Headers", headers);
            return await api.createAuths(
                {
                    data: {
                        accessToken: accessToken,
                        refreshToken: refreshToken,
                        expiresIn: expiresIn,
                        user: user.id,
                        kind: "Github",
                    },
                },
                headers
            );
        } catch (err) {
            console.error("Unable to add Github Auths -> ", err);
        }
    };

    if (window.Chart) {
        parseOptions(Chart, chartOptions());
    }

    const toggleNavs = (e, index) => {
        e.preventDefault();
        setActiveNav(index);
        setChartExample1Data("data" + index);
    };
    return (
        <>
            <Header
                showCards={true}
                repositoryCounts={repositoryCounts}
                contributorCounts={contributorCounts}
                refactoringCounts={refactoringCounts}
            />
            {/* Page content */}
            <Container className="mt--7" fluid>
                <Row>
                    <Col className="mb-5 mb-xl-0" xl="8">
                        <Card className="bg-gradient-default shadow">
                            <CardHeader className="bg-transparent">
                                <Row className="align-items-center">
                                    <div className="col">
                                        <h6 className="text-uppercase text-light ls-1 mb-1">
                                            Overview
                                        </h6>
                                        <h2 className="text-white mb-0">
                                            Refactorings across Repositories
                                        </h2>
                                    </div>
                                </Row>
                            </CardHeader>
                            <CardBody>
                                {/* Chart */}
                                <Line
                                    data={refactoringChartDataFeed}
                                    options={chartExample1.options2}
                                    height={150}
                                    getDatasetAtEvent={(e) => console.log(e)}
                                />
                            </CardBody>
                        </Card>
                    </Col>
                    <Col xl="4">
                        <Card className="shadow">
                            <CardHeader className="bg-transparent">
                                <Row className="align-items-center">
                                    <div className="col">
                                        <h6 className="text-uppercase text-muted ls-1 mb-1">
                                            Trending Repos
                                        </h6>
                                        <h2 className="mb-0">Total commits by Repository</h2>
                                    </div>
                                </Row>
                            </CardHeader>
                            <CardBody>
                                {/* Chart */}
                                <Bar
                                    data={commitByRepoDataFeed}
                                    options={chartExample2.options}
                                    height={150}
                                />
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <Row className="mt-5">
                    <Col className="mb-5 mb-xl-0" xl="8">
                        <Card className="shadow">
                            <CardHeader className="border-0">
                                <Row className="align-items-center">
                                    <div className="col">
                                        <h3 className="mb-0">Smells Summary</h3>
                                    </div>
                                </Row>
                            </CardHeader>
                            <></>
                            <Table className="align-items-center table-flush" responsive>
                                <thead className="thead-light">
                                <tr>
                                    <th scope="col">Smell</th>
                                    <th scope="col">Count</th>
                                </tr>
                                </thead>
                                    <tbody>
                                    {
                                        loadedSmells ? Object.keys(smells).map((keyName,i)=>{
                                            return(
                                                <tr>
                                                <th scope="row">{keyName}</th>
                                                <td>{smells[keyName]}</td>
                                        </tr>
                                            )
                                        }) :
                                        <tr>   Fetching...</tr>
                                    }
                                </tbody>
                            </Table>
                        </Card>
                    </Col>
                    <Col xl="4">
                        <Card className="shadow">
                            <CardHeader className="border-0">
                                <Row className="align-items-center">
                                    <div className="col">
                                        <h3 className="mb-0">Top 5 commit</h3>
                                    </div>
                                    <div className="col text-right">
                                        <Button
                                            color="primary"
                                            href="#pablo"
                                            onClick={(e) => e.preventDefault()}
                                            size="sm"
                                        >
                                            See all
                                        </Button>
                                    </div>
                                </Row>
                            </CardHeader>
                            <Table className="align-items-center table-flush" responsive>
                                <thead className="thead-light">
                                    <tr>
                                        <th scope="col">Repository</th>
                                        <th scope="col">Date</th>
                                        <th scope="col" />
                                    </tr>
                                </thead>
                                <tbody>
                                   {
                                
                                        
                                            topCommits.map((commit)=>{
                                               return (
                                                <tr>
                                                <th scope="row">{commit.repository.name}</th>
                                                <td>{commit.commitdate}</td>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <span className="mr-2">{commit.totalchanges}</span>
                                                        <div>
                                                            <Progress
                                                                max="100"
                                                                value="60"
                                                                barClassName="bg-gradient-danger"
                                                            />
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>  
                                               ) 
                                            })   
                                   }
                                              
                                </tbody>
                            </Table>
                        </Card>
                    </Col>
                </Row>
            </Container>
           
            
        </>
    );
};

export default Dashboard;
