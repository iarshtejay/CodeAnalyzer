import React from "react";

const JiraContext = React.createContext([
<<<<<<< HEAD
  { authCode: "", authFlag: "", accessToken: "", cloudId: "", refreshToken: "" },
  () => {
=======
  { authCode: "", authFlag: "", accessToken: "", cloudId: "" },
  () => {
    console.log("in here?");
>>>>>>> e1bf161f (jira integration + context api complete)
  },
]);

export default JiraContext;
