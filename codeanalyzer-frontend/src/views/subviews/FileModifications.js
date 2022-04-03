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
import { useState, useEffect } from "react";
// react component that copies the given text inside your clipboard
import { CopyToClipboard } from "react-copy-to-clipboard";
// React Components
import {
  Badge,
  Card,
  CardHeader,
  CardFooter,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Media,
  Pagination,
  PaginationItem,
  PaginationLink,
  Progress,
  Table,
  Container,
  Row,
  NavItem,
  CardBody,
  Nav,
  NavLink,
  Button,
  Col,
  Alert,
  UncontrolledTooltip,
} from "reactstrap";
// core components
import Header from "components/Headers/Header.js";
// node.js library that concatenates classes (strings)
import classnames from "classnames";
// javascipt plugin for creating charts
import Chart from "chart.js";
// core components
import { chartExample1, chartExample2, chartOptions, parseOptions, } from "variables/charts.js";

import { api } from "../../lib/api"
// react plugin used to create charts
import { Bar, Line } from "react-chartjs-2";
import axios from "axios";
import { createEmitAndSemanticDiagnosticsBuilderProgram } from "typescript";

const FileModifications = () => {

  const [currentUser, setCurrentUser] = useState('tushartushar');
  const [committs, setCommitts] = useState([]);
  const [committedFiles, setCommittedFiles] = useState([]);
  const [loadedCommitts, setLoadedCommitts] = useState(false);

  useEffect(() => {
    ; (async () => {
      const strapiToken = await localStorage.getItem("token");
      const comms = await api.getCommits({
        headers: {
          'Authorization': 'Bearer ' + strapiToken
        }
      });
      if (comms.data) {
        setCommitts(comms.data.data);
        console.log(comms.data);
        setLoadedCommitts(true);
        //loadPullRequestUsers();
      }
    })()
  }, []);

  // const loadPullRequestUsers = async (repo) => {
  //     const accessToken = await localStorage.getItem("githubToken");
  //     const strapiToken = await localStorage.getItem("token");
  //     const pullRequests = await api.getPullRequestsUniqueUsers({
  //       repository: repo,
  //       accessToken: accessToken,
  //     } ,{
  //       headers: {
  //         'Authorization': 'Bearer ' + strapiToken
  //       }
  //     });
  //     console.log(pullRequests);
  //     if(pullRequests){
  //       setPRS(pullRequests.data.contributors);
  //     }
  // }

  // const generatePullRequestsFrequencyPerUser = async (e) => {
  //   const accessToken = await localStorage.getItem("githubToken");
  //   const strapiToken = await localStorage.getItem("token");
  //   const data = await api.getPullRequestFrequencyPerUser({
  //     contributor: chosenPR,
  //     accessToken: accessToken,
  //     repository: repositories
  //   }, {
  //     headers: {
  //       'Authorization': 'Bearer ' + strapiToken
  //     }
  //   });
  //   if ((data.data.createdOn.length <= 0) || (data.data.difference.length <= 0)) {
  //     setUserNotFound(true);
  //   } else {
  //     setUserNotFound(false);
  //   }
  //   setCreatedOn(data.data.createdOn);
  //   const differenceRoundArray =  data.data.difference.map(function(each_element){
  //     return Number(each_element.toFixed(2));
  //   });
  //   setDifference(differenceRoundArray);
  //   e.preventDefault();
  // }

  // var data = {
  //   labels: createdOn,
  //   datasets: [{
  //     label: "Difference in number of days between PRs",
  //     data: difference,
  //     borderColor: 'rgb(255, 255, 255)',
  //   }]
  // };

  return (
    <div>
    </div>
  );
};

export default FileModifications;
