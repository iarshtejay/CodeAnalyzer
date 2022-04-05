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
    const [committedFiles, setCommittedFiles] = useState([]);
    const [loadedCommittedFiles, setLoadedCommittedFiles] = useState(false);
    const [dataByMonth, setDataByMonth] = useState({});
  
    const userId = localStorage.getItem("strapiUserId");

    useEffect(() => {
        ; (async () => {
          const strapiToken = await localStorage.getItem("token");
          const commFiles = await api.getCommitedFilesByUser({
            authorname: 'web-flow'
            //authorname: userId
          }, {
            headers: {
              'Authorization': 'Bearer ' + strapiToken
            }
          });
          
          if (commFiles.data) {
            setCommittedFiles(commFiles.data.data);
            setLoadedCommittedFiles(true);
            console.log(commFiles.data.data)
            //await generateChartData(commFiles.data.data);
            // Data model down so using random values
            // Array.apply(null, {length: 12}).map(x=>Math.floor(Math.random()*5))
            setDataByMonth({"addition":[1,0,3,5,2,1,1,3,4,2,4,1], "modification":[3,1,4,2,5,3,2,6,2,1,5,1], "deletion":[2,1,0,3,4,1,5,1,3,2,1,4]})
          }
        })()
      }, []);

  const generateChartData = (data) => {
  }

  var data = {
  };

  return (
     <></>
  );
};

export default FileModifications;
