import { useState } from "react";
import Sidebar from "./Components.jsx/Sidebar";
import plus from "../assets/icon-plus.svg";
import empty from "../assets/illustration-empty.svg";
import data from "../data.json";
import SlideOver from "./Components.jsx/SlideOverAI";

import { Fragment } from "react";
import { Transition, Listbox } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";

import { useEffect } from "react";

function Dashboard({ isMobile }) {
  const [selected, setSelected] = useState(null);
  const [open, setOpen] = useState(true);

  const filtered_data = data.filter((i) =>
    selected === null ? i.status !== "" : i.status === selected.name
  );

  const listItems = filtered_data.map((i) => (
    <>
      {isMobile ? (
        <button className="flex flex-row py-8 bg-white shadow rounded-lg w-full h-full">
          <div className="flex flex-col w-1/2 h-auto pl-6 justify-center">
            <p className="text-base font-bold leading-none pb-6 text-left">
              {i.order_no}
            </p>
            <p className="text-xs font-medium leading-none text-gray-400 pb-4 text-left">
              {i.due}
            </p>
            <p className="text-base font-bold leading-normal text-left text-gray-900">
              {i.price}
            </p>
          </div>
          <div className="flex flex-col w-1/2 h-auto pr-6 items-end">
            <p className="text-xs font-medium leading-none text-gray-400 text-right pt-4 pb-4">
              {i.name}
            </p>

            <div className="w-[104px] h-10">
              <div
                className={
                  "flex items-center justify-center flex-1 h-full px-8 py-auto rounded-md " +
                  (i.status === "Paid"
                    ? "bg-[#F3FDFA]"
                    : i.status === "Draft"
                    ? "bg-orange-100"
                    : "bg-gray-100")
                }
              >
                <div className="flex space-x-2 items-center justify-center flex-1 h-full">
                  <div
                    className={
                      "w-2 h-2 rounded-full " +
                      (i.status === "Paid"
                        ? "bg-green-400"
                        : i.status === "Pending"
                        ? "bg-orange-400"
                        : "bg-gray-400")
                    }
                  />
                  <p
                    className={
                      "text-base font-bold leading-none " +
                      (i.status === "Paid"
                        ? "text-green-400"
                        : "text-orange-400")
                    }
                  >
                    {i.status}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </button>
      ) : (
        <button className="flex flex-row justify-between items-center py-4 pl-8 pr-6 bg-white shadow rounded-lg w-full h-full">
          <p className="text-base font-bold leading-none">{i.order_no}</p>
          <p className="text-xs font-medium leading-none text-gray-400">
            {i.due}
          </p>
          <p className="text-xs font-medium leading-none text-gray-400">
            {i.name}
          </p>
          <p className="text-base font-bold leading-normal text-right text-gray-900">
            {i.price}
          </p>
          <div className="w-[104px] h-10">
            <div
              className={
                "flex items-center justify-center flex-1 h-full px-8 py-auto rounded-md " +
                (i.status === "Paid"
                  ? "bg-[#F3FDFA]"
                  : i.status === "Pending"
                  ? "bg-orange-100"
                  : "bg-gray-100")
              }
            >
              <div className="flex space-x-2 items-center justify-center flex-1 h-full">
                <div
                  className={
                    "w-2 h-2 rounded-full " +
                    (i.status === "Paid"
                      ? "bg-green-400"
                      : i.status === "Pending"
                      ? "bg-orange-400"
                      : "bg-gray-400")
                  }
                />
                <p
                  className={
                    "text-base font-bold leading-none " +
                    (i.status === "Paid"
                      ? "text-green-400"
                      : i.status === "Pending"
                      ? "text-orange-400"
                      : "text-gray-400")
                  }
                >
                  {i.status}
                </p>
              </div>
            </div>
          </div>
          <p>&#62;</p>
        </button>
      )}
    </>
  ));

  const option_list = [
    { id: "1", name: "Draft" },
    { id: "2", name: "Pending" },
    { id: "3", name: "Paid" },
  ];

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  const [detail, setDetail] = useState();

  const dert = option_list.map((option) => (
    <Listbox.Option
      key={option.id}
      className={({ active }) =>
        classNames(
          active ? "bg-indigo-600 text-white cursor-pointer" : "text-gray-900",
          "relative cursor-default select-none py-2 pl-10 pr-3"
        )
      }
      value={option}
    >
      {({ selected, active }) => (
        <>
          <div className="flex items-center">
            <span
              className={classNames(
                selected ? "font-semibold" : "font-normal",
                "ml-3 block truncate"
              )}
            >
              {option.name}
            </span>
          </div>

          <span
            className={classNames(
              active ? "text-white" : "text-indigo-600",
              "absolute inset-y-0 left-0 flex items-center pl-4"
            )}
          >
            {selected ? (
              <CheckBoxIcon className="h-5 w-5" aria-hidden="true" />
            ) : (
              <CheckBoxOutlineBlankIcon
                className="h-5 w-5"
                aria-hidden="true"
              />
            )}
          </span>
        </>
      )}
    </Listbox.Option>
  ));

  useEffect(() => {
    setDetail(dert);
  }, []);

  const emptyData = (
    <div className="flex flex-col justify-between absolute w-[241px] h-[342px] left-[42%] top-[34%]">
      <div className="w-full h-[200px]">
        <img src={empty} alt="empty pic" className="h-full w-full"></img>
      </div>
      <p className="text-xl text-center pt-6 font-bold text-gray-900">
        There is nothing here
      </p>
      <p className="text-xs leading-none text-center text-gray-400">
        {" "}
        Create an invoice by clicking the <br />
        New Invoice button and get started
      </p>
    </div>
  );

  return (
    <>
      <div className="w-full h-full">
        <div className="absolute top-0 left-0 w-full h-full bg-[#F8F8FB]">
          <div className="flex flex-col space-y-4 justify-between absolute lg:w-[730px] md:w-[87.5%] w-[87.2%] h-auto lg:left-[355px] md:left-[6.5%] left-[6.4%] lg:top-[196px] md:top-[251px] top-[180px]">
            {filtered_data.length > 0 ? listItems : emptyData}
          </div>

          <div className="flex justify-between absolute lg:w-[730px] md:w-[87.5%] w-[87.2%] h-[55px] lg:left-[355px] md:left-[6.5%] left-[6.4%] xl:top-[77px] md:top-[141px] top-[104px]">
            <div className="flex flex-col justify-between h-full w-[135px]">
              <p className="text-4xl font-bold">Invoices</p>
              <p className="text-[11px]">There are 7 total invoices.</p>
            </div>
            <div className="flex flex-row space-x-2 w-auto h-full">
              <div className="flex w-auto h-full items-center">
                <Listbox value={selected} onChange={setSelected}>
                  {({ open }) => (
                    <>
                      <div className="relative">
                        <Listbox.Button className="relative group w-full cursor-pointer rounded-md bg-gray-50 py-1.5 pl-3 pr-10 text-left text-gray-900 font-bold">
                          <span className="flex items-center">
                            <span className="ml-3 block truncate">
                              Filter by status
                            </span>
                          </span>
                          <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                            <ChevronDownIcon
                              className="h-5 w-5 text-indigo-600"
                              aria-hidden="true"
                            />
                          </span>
                        </Listbox.Button>

                        <Transition
                          show={open}
                          as={Fragment}
                          leave="transition ease-in duration-100"
                          leaveFrom="opacity-100"
                          leaveTo="opacity-0"
                        >
                          <Listbox.Options className="absolute z-10 mt-1 h-auto w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                            {detail}
                          </Listbox.Options>
                        </Transition>
                      </div>
                    </>
                  )}
                </Listbox>
              </div>

              <button onClick={()=>setOpen(true)} className="flex justify-between items-center h-[48px] w-auto rounded-full bg-[#7C5DFA]">
                <div className="flex w-8 h-8 ml-2 rounded-full overflow-hidden bg-white justify-center items-center">
                  <img src={plus} alt="moon" className="w-[10px] h-[10px]" />
                </div>
                <p className="text-sm font-bold text-white pr-4 pl-2">
                  {isMobile ? "New" : "New Invoice"}
                </p>
              </button>
            </div>
          </div>
        </div>
        <Sidebar />
        
      </div>
      <SlideOver open={open} setOpen={setOpen} />
    </>
  );
}

export default Dashboard;
