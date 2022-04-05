import { useEffect, useState, useContext } from "react";
// node.js library that concatenates classes (strings)
import classnames from "classnames";
// javascipt plugin for creating charts
import Chart from "chart.js";
// react plugin used to create charts
import { Bar, Line } from "react-chartjs-2";

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
import { chartExample1, chartExample2, chartOptions, parseOptions, } from "variables/charts.js";
import GithubContext from "../contexts/GithubContext"
import { api } from "../lib/api"

import Header from "components/Headers/Header.js";
import JiraAuth from "./JiraAuth";


const commitJiraTicket = () =>{

   // const [data,setData] = useState([]);
    
    

    return(
        <h1>CommitJiraTickets</h1>
    )
}

export default commitJiraTicket;