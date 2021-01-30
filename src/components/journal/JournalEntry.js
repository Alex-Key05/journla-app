import React from "react";

const JournalEntry = ({ value }) => {
  return (
    <div className="journal__entry">
      <div
        className="journal__entry-picture"
        style={{
          backgroundSize: "cover",
          backgroundImage:
            "url(https://lh3.googleusercontent.com/proxy/Pa78g4k3tIvfoZXlVSHDGpsb-TdiBHMdbEjFgPCEuDJRr2318tXF5Daz_KFntig3zuo-k7K6dMF4tJKN_FPUapkER7MXsT721-sYtFaIfGPoxsXGSyaQ1d3tqJcim-embQDlP9WJ5cqRP7MoygI4GGSZZIiqczphH3t-aGAbx2wk2ak25KeA)",
        }}
      ></div>

      <div className="journal__entry-body">
        <p className="journal__entry-title">Un nuevo comienzo</p>
        <p className="journal__entry-content">
          Aliquip nulla est cupidatat cillum enim laboris elit pariatur.
        </p>
      </div>
      <div className="journal__entry-date">
        <span>Friday</span>
        <h4>29</h4>
      </div>
    </div>
  );
};

export default JournalEntry;
