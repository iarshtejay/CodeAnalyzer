import React, { useContext, useEffect, useState } from "react";
import RepositoriesContext from "../contexts/RepositoriesContext";
import { BACKGROUND_COLORS, BORDER_COLORS } from "../COLORS.js";
import Pie from "components/Charts/Pie";
import {
  Card,
  CardBody,
  Col,
  Container,
  Row,
  CardTitle,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import { api } from "../lib/api";
import BarComponent from "components/Charts/BarComponent";

const Repositories = () => {
  const [repos, setRepos] = useContext(RepositoriesContext);
  const [langPieData, setLangPieData] = useState(null);
  const [contribDataTotal, setContribDataTotal] = useState(null);
  const [contribDataAdd, setContribDataAdd] = useState(null);
  const [contribDataDel, setContribDataDel] = useState(null);
  const [selectedContrib, setSelectedContrib] = useState("total");

  const processLangData = async () => {
    if (repos.selectedRepo.attributes) {
      const languageObj = repos.selectedRepo.attributes.languages;
      console.log(languageObj);
      const labels = Object.keys(languageObj);
      const vals = Object.values(languageObj);
      const data = {
        labels,
        datasets: [
          {
            label: "Share of language in repository",
            data: vals,
            backgroundColor: BACKGROUND_COLORS,
            borderColor: BORDER_COLORS,
            borderWidth: 1,
          },
        ],
      };
      await setLangPieData(data);
    }
  };

  const selectBarData = () => {
    console.log(selectedContrib);
    if (selectedContrib === "total") return contribDataTotal;
    else if (selectedContrib === "add") return contribDataAdd;
    else if (selectedContrib === "del") return contribDataDel;
  };

  const processContribData = async () => {
    const selRep = repos.selectedRepo;
    const repoId = repos.selectedRepo.id;
    console.log("OUTERSELREP", selRep);
    if (repos.selectedRepo.attributes) {
      let totalArr = [];
      let addArr = [];
      let delArr = [];
      console.log("kjasdkljasjdasd", repos.selectedRepo.id);
      const contribData = await api
        .getContributorsForRepo(
          { repoId },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        )
        .then((res) => res.data)
        .then((res) => res.data);
      let labels = [];
      contribData?.map((entry) => {
        addArr.push(entry.attributes.sumadditions);
        delArr.push(entry.attributes.sumdeletions);
        totalArr.push(entry.attributes.sumchanges);
        labels.push(entry.attributes.author_id);
      });
      const addObj = {
        labels: ["guy1", "guy2", "guy3"],
        datasets: [
          {
            label: "LOC",
            data: [0, 0, 0],
            backgroundColor: "rgba(53, 162, 235, 0.5)",
          },
        ],
      };
      const delObj = {
        labels: ["guy1", "guy2", "guy3"],
        datasets: [
          {
            label: "LOC",
            data: [873, 3482, 109],
            backgroundColor: "rgba(255, 206, 86, 0.2)",
          },
        ],
      };
      const totalObj = {
        labels: ["guy1", "guy2", "guy3"],
        datasets: [
          {
            label: "LOC",
            data: [183, 2384, 1823],
            backgroundColor: "rgba(153, 102, 255, 0.2)",
          },
        ],
      };
      await setContribDataAdd(addObj);
      await setContribDataDel(delObj);
      await setContribDataTotal(totalObj);
    }
  };

  useEffect(() => {
    processLangData();
    processContribData();
  }, [repos]);

  return (
    <div className="header bg-gradient-info pb-8 pt-5 pt-md-8">
      {console.log(repos)}
      <Container fluid>
        <div className="header-body">
          <Row>
            <Col>
              <Card
                className="card-stats mb-4 mb-xl-0"
                style={{
                  height: "250px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-evenly",
                  width: "60%",
                }}
              >
                <CardTitle
                  tag="h5"
                  className="text-uppercase text-muted mb-2 ml-3"
                >
                  Share of Languages
                </CardTitle>
                {langPieData ? <Pie data={langPieData} /> : null}
              </Card>
            </Col>

            <Col lg="6" xl="3">
              <Card className="card-stats mb-4 mb-xl-0">
                <CardBody>
                  <Row>
                    <div className="col">
                      <CardTitle
                        tag="h5"
                        className="text-uppercase text-muted mb-0"
                      >
                        Performance
                      </CardTitle>
                      <span className="h2 font-weight-bold mb-0">49,65%</span>
                    </div>
                    <Col className="col-auto">
                      <div className="icon icon-shape bg-info text-white rounded-circle shadow">
                        <i className="fas fa-percent" />
                      </div>
                    </Col>
                  </Row>
                  <p className="mt-3 mb-0 text-muted text-sm">
                    <span className="text-success mr-2">
                      <i className="fas fa-arrow-up" /> 12%
                    </span>{" "}
                    <span className="text-nowrap">Since last month</span>
                  </p>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row style={{ marginTop: "20px" }}>
            <Col>
              <Card
                className="card-stats mb-4 mb-xl-0"
                style={{
                  height: "350px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-evenly",
                  width: "100%",
                }}
              >
                <CardTitle
                  tag="h5"
                  className="text-uppercase text-muted mb-2 ml-3"
                >
                  Top contributors
                </CardTitle>

                <FormGroup tag="fieldset">
                  {/* <legend>Radio Buttons</legend> */}
                  <FormGroup check>
                    <Label check>
                      <Input
                        type="radio"
                        name="radio1"
                        onChange={() => setSelectedContrib("total")}
                        checked={selectedContrib === "total"}
                      />{" "}
                      Total changes
                    </Label>
                  </FormGroup>
                  <FormGroup check>
                    <Label check>
                      <Input
                        type="radio"
                        name="radio1"
                        onChange={() => setSelectedContrib("add")}
                        checked={selectedContrib === "add"}
                      />{" "}
                      Additions
                    </Label>
                  </FormGroup>
                  <FormGroup check>
                    <Label check>
                      <Input
                        type="radio"
                        name="radio1"
                        onChange={() => setSelectedContrib("del")}
                        checked={selectedContrib === "del"}
                      />{" "}
                      Deletions
                    </Label>
                  </FormGroup>
                </FormGroup>
                {contribDataTotal ? (
                  <BarComponent data={selectBarData()} />
                ) : null}
              </Card>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Repositories;
