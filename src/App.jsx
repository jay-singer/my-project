import "./App.css";

// eslint-disable-next-line no-unused-vars
import React from "react";
function App() {
  return (
    <>
      <div className="sticky top-0 z-50">
        <nav className="bg-yellow-400  mx-auto px-2 sm:px-6 lg:px-8 text-center hidden sm:flex h-14 justify-center items-center gap-2 text-[15px]">
          <svg
            className="text-[24px] text-navBag font-thin"
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <g fill="none" fillRule="evenodd">
              <path d="M24 0v24H0V0zM12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></path>
              <path
                fill="currentColor"
                d="M5 9a7 7 0 0 1 14 0v3.764l1.822 3.644A1.1 1.1 0 0 1 19.838 18h-3.964a4.002 4.002 0 0 1-7.748 0H4.162a1.1 1.1 0 0 1-.984-1.592L5 12.764zm5.268 9a2 2 0 0 0 3.464 0zM12 4a5 5 0 0 0-5 5v3.764a2 2 0 0 1-.211.894L5.619 16h12.763l-1.17-2.342a2 2 0 0 1-.212-.894V9a5 5 0 0 0-5-5"
              ></path>
            </g>
          </svg>
          <div>
            <span className="font-bold">Igishaya!</span>
            Umwuka wa mituwel 2023/2024 watangiye. Ishyurira umuryango wawe{" "}
            <a href="/" className="hover:underline font-bold">
              hano
            </a>
          </div>
        </nav>
        <nav className="bg-navBag">
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 ">
            <div className="relative  flex h-16 items-center justify-between ">
              <div className="absolute inset-y-0 -left-2 flex items-center justify-start sm:hidden  bg-navBag">
                {/* Mobile menu button*/}
                <button
                  type="button"
                  className="relative inline-flex items-center justify-center rounded-md p-2 hover:bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white  text-2xl"
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                >
                  <span className="absolute -inset-0.5 "></span>

                  {/*     Icon when menu is closed.

            Menu open: "hidden", Menu closed: "block"*/}

                  <svg
                    className="block h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                </button>
              </div>

              <div className=" flex flex-1 items-center md:justify-between justify-end sm:items-stretch ">
                <div className="flex flex-shrink-0 items-center ">
                  {/* Logo */}
                  <img
                    className="h-8 w-auto"
                    src="/images/irembo-gov.svg"
                    alt="Your Company"
                  />
                </div>
                {/* Navigation links */}
                <div className=" sm:ml-6 sm:block p-3  ">
                  <div className="flex space-x-4 ">
                    {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white"*/}
                    <a
                      href="#"
                      className="rounded-md px-3 py-2 text-sm font-medium text-white flex items-center justify-between gap-1 "
                      aria-current="page"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M11 7L9.6 8.4l2.6 2.6H2v2h10.2l-2.6 2.6L11 17l5-5zm9 12h-8v2h8c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-8v2h8z"
                        ></path>
                      </svg>
                      <span>Kwinjira</span>
                    </a>
                    <a
                      href="#"
                      className="rounded-md px-5 py-[2px]
                        font-medium text-gray-300 bg-blue-500 hover:text-white sm:flex items-center justify-between gap-1 decoration-none text-sm hidden "
                    >
                      <svg
                        className="text-xl text-white font-extrabold"
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 50 50"
                      >
                        <path
                          fill="currentColor"
                          d="M23 36c-7.2 0-13-5.8-13-13s5.8-13 13-13s13 5.8 13 13s-5.8 13-13 13m0-24c-6.1 0-11 4.9-11 11s4.9 11 11 11s11-4.9 11-11s-4.9-11-11-11"
                        ></path>
                        <path
                          fill="currentColor"
                          d="m32.682 31.267l8.98 8.98l-1.414 1.414l-8.98-8.98z"
                        ></path>
                      </svg>
                      <span>Shakisha</span>
                    </a>

                    <a
                      href="#"
                      className="rounded-md px-3 py-2 text-sm font-medium text-gray-300  hover:text-white sm:flex items-center justify-between hidden"
                    >
                      <img
                        className="w-7 h-7 rounded-full me-2 "
                        src="/images/rw.svg"
                        alt="Your Company"
                      />
                      <span>Kinyarwanda</span>
                      <svg
                        className="text-xl text-white font-extrabold self-end ms-1 flex"
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                      >
                        <g fill="none" fillRule="evenodd">
                          <path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></path>
                          <path
                            fill="currentColor"
                            d="M12.707 15.707a1 1 0 0 1-1.414 0L5.636 10.05A1 1 0 1 1 7.05 8.636l4.95 4.95l4.95-4.95a1 1 0 0 1 1.414 1.414z"
                          ></path>
                        </g>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/*Mobile menu, show/hide based on menu state.*/}
        </nav>
      </div>
      <div className="container-fluid flex justify-center  items-center ">
        <div className="flex md:mt-[100px] h-[500px] md:w-[900px] gap-4   rounded-s-md overflow-hidden w-full m-0 justify-center">
          <div className=" bg-blue-500 md:flex flex-col items-center h-full flex-1 hidden">
            <h3 className="font-bold text-4xl text-white text-center mt-[80px] p-0">
              Gufungura konti
            </h3>
            <p className="text-white text-center  w-[350px] p-1 text-lg pt-0 my-5">
              Kurikiza aya mabwiriza yokwiyandikisha kugirango Udufashe
              kugufungurira konti
            </p>

            <div className="">
              <div className="flex gap-10 items-center mb-9 relative">
                <span className="bg-white  text-lg  w-[25px] h-[25px] rounded-full flex justify-center items-center text-blue-400">
                  1
                </span>
                <p className="w-[1px] bg-white h-9 absolute -bottom-9 left-3"></p>
                <p className="text-white">Ohereza amakuru usabwa</p>
              </div>
              <div className="flex gap-10 items-center mb-9 relative">
                <span className=" bg-blue-400  text-lg  w-[25px] h-[25px] rounded-full flex justify-center items-center text-blue-100">
                  2
                </span>
                <p className="w-[1px] bg-white h-9 absolute -bottom-9 left-3"></p>
                <p className="text-blue-300">Isuzuma rya konti</p>
              </div>
              <div className="flex gap-10 items-center mb-10 relative">
                <span className="bg-blue-400  text-lg  w-[25px] h-[25px] rounded-full flex justify-center items-center text-blue-100">
                  3
                </span>
                <p className="text-blue-300">
                  Shyiramwo ijambo ry&apos; ibanga ryawe
                </p>
              </div>
            </div>
          </div>
          <div className="w-[296px] ">
            <form className=" flex flex-col justify-start">
              <h4 className="font-bold text-[19px] text-gray-700 text-center mt-[80px] p-0">
                Gufungura konti
              </h4>
              <div className="">
                <label
                  htmlFor="idCard"
                  className="block  text-start text-[14px]  mb-2 mt-4"
                >
                  Nomero y&apos;indangamuntu
                  <span className="text-red-500 text-[14px]">*</span>
                </label>
                <input
                  className="border border-gray-400 w-full p-2 rounded-md outline-none text-[14px]"
                  type="number"
                  id="idCard"
                  placeholder="Shyiramo nomero y'indangamuntu"
                  required
                />
              </div>
              <div className="">
                <label
                  htmlFor="phone"
                  className="block  text-start text-[14px]  mb-2 mt-4"
                >
                  Numero ya telefoni (Rwanda)
                  <span className="text-red-500 text-[14px]">*</span>
                </label>
                <input
                  className="border border-gray-400 w-full p-2 rounded-md outline-none text-[14px]"
                  type="number"
                  id="phone"
                  placeholder="Andika nomero ya Telefoni"
                  required
                />
              </div>
              <button className="btn w-full bg-blue-500 mt-4 p-2 rounded-md fon text-white">
                Iyandikishe
              </button>
              <footer className="text-[14px] text-gray-800 mt-4 p-2">
                Mu kwiyandikisha, uremeza gukoresha{" "}
                <a href="#" className="text-blue-700">
                  amabwiriza
                </a>{" "}
                mashya ya IremboGov harimo n&apos;ayo{" "}
                <a href="#" className="text-blue-700">
                  Kurinda amakuru
                </a>{" "}
                bwite.
              </footer>
              <div className="px-2">
                <p className="text-[14px] p-0 m-0  ">
                  Usanzwe ufite konti?{" "}
                  <a
                    href="#"
                    className="text-blue-700 text-[14px] hover:underline underline-offset-2"
                  >
                    Injira
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
      <footer className="container-fluid flex sm:justify-evenly justify-center  items-center text-[12px] text-gray-800 md:mt-[60px] sm:gap-0 sm:mt-[10px] p-3 flex-col sm:flex-row gap-2">
        <p>Uburenganziraa bw&apos;Irembo2024burubahirizwa</p>
        <a
          href="#"
          className="flex items-center gap-1 text-blue-700 text-[14px] hover:underline underline-offset-2"
        >
          <span>
            <svg
              className="text-[23px] font-bold"
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M11.95 18q.525 0 .888-.363t.362-.887t-.362-.888t-.888-.362t-.887.363t-.363.887t.363.888t.887.362m-.9-3.85h1.85q0-.825.188-1.3t1.062-1.3q.65-.65 1.025-1.238T15.55 8.9q0-1.4-1.025-2.15T12.1 6q-1.425 0-2.312.75T8.55 8.55l1.65.65q.125-.45.563-.975T12.1 7.7q.8 0 1.2.438t.4.962q0 .5-.3.938t-.75.812q-1.1.975-1.35 1.475t-.25 1.825M12 22q-2.075 0-3.9-.787t-3.175-2.138T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20m0-8"
              ></path>
            </svg>
          </span>
          <span>Ahatangirwa ubufasha</span>
        </a>
        <a href="#" className="flex items-center gap-2">
          <p>Dukurikire kuri</p>
          <div className="hidden sm:flex gap-2 text-[18px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M21.98 4.003a16.56 16.56 0 0 1-2.66 1.015a4.216 4.216 0 0 0-3.698-1.28a4.316 4.316 0 0 0-3.477 4.945a.393.393 0 0 0 0 .11a11.878 11.878 0 0 1-8.666-4.338a4.184 4.184 0 0 0 1.292 5.597a4.14 4.14 0 0 1-1.899-.519v.056a4.228 4.228 0 0 0 3.312 4.117c-.361.09-.732.135-1.104.133a3.744 3.744 0 0 1-.795-.066a4.228 4.228 0 0 0 3.919 2.914a8.467 8.467 0 0 1-5.2 1.788A7.562 7.562 0 0 1 2 18.42a11.734 11.734 0 0 0 6.425 1.888A11.855 11.855 0 0 0 20.457 8.374v-.54a4.549 4.549 0 0 0 1.524-3.831"
              ></path>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M15.402 21v-6.966h2.333l.349-2.708h-2.682V9.599c0-.784.218-1.319 1.342-1.319h1.434V5.857a19 19 0 0 0-2.09-.107c-2.067 0-3.482 1.262-3.482 3.58v1.996h-2.338v2.708h2.338V21H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1z"
              ></path>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 32 32"
            >
              <path
                fill="currentColor"
                d="M26.2 4H5.8C4.8 4 4 4.8 4 5.7v20.5c0 .9.8 1.7 1.8 1.7h20.4c1 0 1.8-.8 1.8-1.7V5.7c0-.9-.8-1.7-1.8-1.7M11.1 24.4H7.6V13h3.5zm-1.7-13c-1.1 0-2.1-.9-2.1-2.1s.9-2.1 2.1-2.1c1.1 0 2.1.9 2.1 2.1s-1 2.1-2.1 2.1m15.1 12.9H21v-5.6c0-1.3 0-3.1-1.9-3.1S17 17.1 17 18.5v5.7h-3.5V13h3.3v1.5h.1c.5-.9 1.7-1.9 3.4-1.9c3.6 0 4.3 2.4 4.3 5.5v6.2z"
              ></path>
            </svg>
          </div>
        </a>
        <a
          href="#"
          className="hover:text-blue-600 hover:underline underline-offset-2"
        >
          Amabwiriza ku mikoreshereze
        </a>
        <a
          href="#"
          className="hover:text-blue-600 hover:underline underline-offset-2"
        >
          Uko sisitemu ihagaze
        </a>
      </footer>
    </>
  );
}

export default App;
