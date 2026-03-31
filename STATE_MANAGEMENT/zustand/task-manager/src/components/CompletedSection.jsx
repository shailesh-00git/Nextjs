import React from "react";

const CompletedSection = () => {
  return (
    <div className="border py-2 px-4 rounded border-gray-300">
      <h2 className="text-lg mb-2  p-1 text-center font-bold">Complete Section</h2>
      <div className="grid grid-cols-6 gap-3">
        <div className="border rounded p-2">
          <p>hello</p>
        </div>
        <div className="border rounded p-2">
          <p>hello</p>
        </div>
        <div className="border rounded p-2">
          <p>hello</p>
        </div>
        <div className="border rounded p-2">
          <p>hello</p>
        </div>
      </div>
    </div>
  );
};

export default CompletedSection;
