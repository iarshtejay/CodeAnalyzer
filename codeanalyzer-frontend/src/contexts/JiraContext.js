import React from "react";

const JiraContext = React.createContext([
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
]);

export default JiraContext;
