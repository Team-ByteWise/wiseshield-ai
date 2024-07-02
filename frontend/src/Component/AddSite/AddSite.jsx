import React from "react";
import axios from "axios";

function AddSite() {
  const [siteName, setSiteName] = React.useState("");
  const [siteUrl, setSiteUrl] = React.useState("");
  const [submitted, setSubmitted] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const [clicked, setClicked] = React.useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!siteName || !siteUrl) {
      return;
    }
    setClicked(true);
    axios
      .post("http://localhost:5000/train", { sites: { [siteName]: [siteUrl] } })
      .then((res) => {
        if (res.data.status === "success") {
          setSubmitted(true);
          setSuccess(true);
        } else {
          setSubmitted(true);
          setSuccess(false);
        }
        setTimeout(() => {
          setSubmitted(false);
          setClicked(false);
        }, 3000);
      })
      .catch((err) => {
        console.log(err);
        setSubmitted(true);
        setSuccess(false);
        setTimeout(() => {
          setSubmitted(false);
          setClicked(false);
        }, 3000);
      });
  };
  return (
    <div className="py-[60px]  bg-[#B0A5F1] flex justify-around">
      <div className="w-2/5 flex flex-col justify-center">
        <span className="text-[45px] font-semibold  text-[#3d3182] ">
          Don&apos;t find a legitimate site ?
        </span>
        <span className="text-[30px] text-[#3d3182]">
          Request us to add it here
        </span>
      </div>
      <div className="h-[100px] w-2/5 my-auto flex flex-col items-center gap-y-4">
        <form onSubmit={handleSubmit} className="flex flex-col space-y-2">
          <input
            type="text"
            value={siteName}
            onChange={(e) => setSiteName(e.target.value)}
            placeholder="Site Name"
            className="border-2 border-black/10 rounded-lg px-3 outline-none duration-150 w-[400px] bg-white/40 py-1.5"
          />
          <input
            type="text"
            value={siteUrl}
            onChange={(e) => setSiteUrl(e.target.value)}
            placeholder="Site URL"
            className="border-2 border-black/10 rounded-lg px-3 outline-none duration-150 w-[400px] bg-white/40 py-1.5"
          />
          <button
            type="submit"
            disabled={clicked}
            className={`rounded-lg px-3 py-1 text-white w-[400px] ${
              clicked
                ? "cursor-not-allowed bg-gray-500"
                : "bg-[#3d3182] cursor-pointer"
            }`}
          >
            Submit
          </button>
          {submitted &&
            (success ? (
              <div className="text-[#3d3182] text-xl font-bold text-center w-[400px]">
                URL has been submitted!
              </div>
            ) : (
              <div className="text-[#823131] text-xl font-bold text-center w-[400px]">
                Failed to submit URL!
              </div>
            ))}
        </form>
      </div>
    </div>
  );
}

export default AddSite;
