import axios from "axios";
import React, { useEffect } from "react";

const truncate = (str, maxLength) => {
  if (str.length <= maxLength) return str;
  return str.slice(0, maxLength) + "...";
};

export default function BasicTable() {
  const [data, setData] = React.useState({});
  useEffect(() => {
    axios
      .get("http://127.0.0.1:5000/trained_sites")
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className=" py-[100px] overflow-x-auto bg-gradient-to-b  from-[#aea0ff] via-[#C7BFF0] via-500%  to-[#B0A5F1]">
      <h1 className=" text-3xl text-center font-semibold text-[60px] mb-[80px] text-[#4C3EA0]">
        Site Knowledge
      </h1>

      <table className="w-4/6 m-auto border-collapse text-sm">
        <thead>
          <tr className=" border-b border-gray-600 bg-muted text-muted-foreground">
            <th className="px-6 py-4 text-[20px] text-center font-medium">
              Site Name
            </th>
            <th className="px-6 py-4 text-[20px] text-center font-medium">
              Sites
            </th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(data).map(([siteName, sites], index) => (
            <React.Fragment key={index}>
              {sites.map((site, siteIndex) => (
                <tr
                  key={siteIndex}
                  className="border-b border-gray-400 hover:bg-muted/40 active:bg-muted/60"
                >
                  {siteIndex === 0 && (
                    <td
                      className="px-6 py-4 border-r text-[17px] border-gray-400 font-medium text-center"
                      rowSpan={sites.length}
                    >
                      {siteName}
                    </td>
                  )}
                  <td className="text-center px-6 py-4">
                    <a
                      href={site}
                      className="text-blue-950 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {truncate(site, 120)}
                    </a>
                  </td>
                </tr>
              ))}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
}
