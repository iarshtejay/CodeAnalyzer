import React from "react";

const JiraContext = React.createContext([
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  { authCode: "", authFlag: "", accessToken: "", cloudId: "", refreshToken: "" },
  () => {
=======
  { authCode: "", authFlag: "", accessToken: "", cloudId: "" },
  () => {
    console.log("in here?");
>>>>>>> e1bf161f (jira integration + context api complete)
=======
  { authCode: "", authFlag: "", accessToken: "", cloudId: "", refreshToken: "" },
  () => {
>>>>>>> 29376015 (updating backend deploy vars)
  },
=======
    {authCode: "", authFlag: "", accessToken: "", cloudId: "", refreshToken: ""},
    () => {
    },
>>>>>>> 46eb48e9 (fixing mc)
=======
    {authCode: "", authFlag: "", accessToken: "", cloudId: "", refreshToken: ""},
    () => {
    },
=======
  { authCode: "", authFlag: "", accessToken: "", cloudId: "" },
  () => {
    console.log("in here?");
  },
>>>>>>> ae4d25bc (jira integration + context api complete)
>>>>>>> dae46cb7 (jira integration + context api complete)
]);

export default JiraContext;
