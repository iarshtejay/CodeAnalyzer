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

  useEffect(() => {
    ; (async () => {
      const strapiToken = await localStorage.getItem("token");
      const commFiles = await api.getCommitedFilesByUser({
        authorname: 'web-flow'
      }, {
        headers: {
          'Authorization': 'Bearer ' + strapiToken
        }
      });
      
      if (commFiles.data) {
        setCommittedFiles(commFiles.data.data);
        setLoadedCommittedFiles(true);
        generateChartData(committedFiles);
      }
    })()
  }, []);


  const generateChartData = (data) => {
    const addCountByMonth = [0,0,0,0,0,0,0,0,0,0,0,0]
    const deleteCountByMonth = [0,0,0,0,0,0,0,0,0,0,0,0]
    const modificationsCountByMonth = [0,0,0,0,0,0,0,0,0,0,0,0]

    for(const committedFile of data){

      if(committedFile.status === "added" ){
        addCountByMonth[new Date(committedFile.commitdate).toISOString().getMonth()]++;
      }else if(committedFile.status === "deleted" ){
        deleteCountByMonth[new Date(committedFile.commitdate).toISOString().getMonth()]++;
      }else if(committedFile.status === "modified" ){
        modificationsCountByMonth[new Date(committedFile.commitdate).toISOString().getMonth()]++;
      }
    }
    setDataByMonth({"addition":addCountByMonth, "modification":modificationsCountByMonth, "deletion":deleteCountByMonth});
    console.log(dataByMonth)
    console.log(addCountByMonth)
    console.log(modificationsCountByMonth)
    console.log(deleteCountByMonth)
  }

  var data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [{
      label: "Aditions ",
      data: dataByMonth.addition,
      borderColor: 'green',
    },
    {
      label: "Modifications ",
      data: dataByMonth.modification,
      borderColor: 'yellow',
    },
    {
      label: "Deletions ",
      data: dataByMonth.deletion,
      borderColor: 'red',
    }]
  };

  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="mt--7" fluid>
        <Row className="mt-5">
          <div className="col">
            <Card className="bg-gradient-default shadow">
              <CardHeader className="bg-transparent">
                <Row className="align-items-center">
                  <div className="col">
                    <h6 className="text-uppercase text-light ls-1 mb-1">
                      Overview
                    </h6>
                    <h2 className="text-white mb-0">File Changes By User</h2>
                  </div>
                </Row>
              </CardHeader>
              <CardBody>
                {/* Chart */}
                <div className="chart">
                  <Line
                    data={data}
                    options={chartExample1.options4}
                    height={100}
                    getDatasetAtEvent={(e) => console.log(e)}
                  />
                </div>
              </CardBody>
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default FileModifications;
