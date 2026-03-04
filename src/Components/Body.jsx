import React, { useState } from "react";

const Body = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(null);
  const [message, setMessage] = useState("");

  const handlesubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch(
        "https://readhub-study.onrender.com/api/waitlist/add",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        },
      );
      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        setMessage(data.message || "Successfully added to waitlist!");
        setEmail("");
      } else {
        setStatus("error");
        setMessage(data.message || data.error || "Something went wrong");
      }
    } catch (err) {
      setStatus("error");
      setMessage("Could not reach server. Try again later.");
    }
  };

  return (
    <section className="text-[#1c1c1c] px-3 mt-25 lg:mt-120">
      <h1 className="text-[32px] font-semibold text-center leading-10 lg:text-[60px] lg:leading-17 lg:mt-30 lg:font-bold">
        Welcome to
        <p className="inline pl-2 text-[#2d80f9]">ReadHub</p>{" "}
        <br className="max-lg:hidden" /> Your Personal Library, Redefined.
      </h1>

      <p className="mt-13 text-[14px] font-normal leading-[21px] text-[#4d4d4d] text-center lg:text-[20px] lg:px-99 lg:leading-7">
        Say goodbye to cluttered tabs and hello to focused reading. ReadHub is
        your ultimate digital sanctuary, built to help you read smarter,
        remember more, and organize your world of words.
      </p>

      <div className="mt-15 flex flex-col items-center shadow-[0_0.602187px_1.80656px_-0.833333px_#007dfc0d,0_2.28853px_6.8656px_-1.66667px_#007dfc0d,0_10px_30px_-2.5px_#007dfc0d] rounded-[47px] h-[276px] justify-between py-5 px-8 border-[#007dfc0d] border-[2px] lg:w-200 lg:mx-auto lg:h-100 ">
        <h3 className="text-[24px] font-semibold lg:text-[45px] lg:font-bold">
          Join our waitlist
        </h3>
        <p className="text-[14px] text-[#4d4d4d] text-center lg:text-[20px] lg:px-10">
          Join our waitlist. Be the first to experience a distraction-free
          reading revolution.
        </p>

        <form
          onSubmit={handlesubmit}
          className="flex flex-col items-center justify-between w-full gap-5 lg:w-100 lg:gap-10"
        >
          <label
            htmlFor="Email"
            className="w-full text-[14px] h-[50px] lg:h-19 shadow-[-2px_-2px_4px_0px_#fafbff,2px_2px_4px_0px_#007dfc26] rounded-[100px]"
          >
            <div className="rounded-[100px] shadow-[inset_-2px_-2px_4px_0px_#fafbff,inset_2px_2px_4px_0px_#007dfc26] h-[50px] lg:h-19 overflow-hidden lg:text-[20px] lg:flex">
              <input
                type="email"
                value={email}
                name="Email"
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Enter your email"
                className="border-[#4d4d4d] cursor-text font-normal text-ellipsis p-[15px] w-full outline-0"
              />
            </div>
          </label>
          <button
            type="submit"
            disabled={status === "loading"}
            className="rounded-[100px] shadow-[-3px_-3px_6px_0px_#fafbff,3px_3px_6px_0px_#007dfc26] h-[50px] hover:cursor-pointer lg:h-16 lg:w-fit px-7 lg:text-xl hover:text-[#2d80f9] disabled:opacity-50"
          >
            {status === "loading" ? "Adding to waitlist..." : "Join"}
          </button>
          {message && (
            <p
              className={`text-sm font-medium ${
                status === "success" ? "text-green-600" : "text-red-600"
              }`}
            >
              {message}
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Body;
