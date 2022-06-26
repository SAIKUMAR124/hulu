import React from "react";
import Thumbnail from "./Thumbnail";

const Results = ({ request }: any) => {
  return (
    <div className="px-5 my-10 sm:grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
      {request.map((result:any, index: number) => (
        <Thumbnail key={index} result={result} />
      ))}
    </div>
  );
};

export default Results;
