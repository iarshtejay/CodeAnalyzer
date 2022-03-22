import React, { useState } from "react";

const useClean = (props) => {
  //const data = await props;
  //console.log(data);

  const [commit, setCommit] = useState(null);
  const [language, setLanguage] = useState([]);
  const [name, setName] = useState("");
  const [issues, setIssues] = useState(false);
};

export default useClean;
