import { useState } from "react";
import logo from "./assets/logo.svg";
import avater from "./assets/image-avatar.jpg";
import moon from "./assets/icon-moon.svg";
import plus from "./assets/icon-plus.svg";
import empty from "./assets/illustration-empty.svg"

function Dashboard() {
  const [value, setValue] =useState(1);



  
        






  return (
    <>
      <div className="w-full h-full">
        <div className="absolute top-0 left-0 w-full h-full bg-[#F8F8FB]">
          <div className="flex flex-col justify-between absolute h-full w-[103px] bg-gray-700 left-0 top-0 rounded-r-2xl">
            <div className="w-[103px] h-[103px] overflow-hidden">
              <div className="absolute overflow-hidden top-0 left-0 w-full h-[103px] bg-[#7C5DFA] items-center justify-center rounded-tr-2xl rounded-br-2xl">
                <div className="absolute top-12 left-0 w-full h-[103px] bg-[#9277FF] items-center justify-center rounded-tl-2xl rounded-br-2xl"></div>
                <div className="absolute top-0 left-0  w-full h-full">
                  <img src={logo} alt="" className="w-full h-full p-[31.5px]" />
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-between items-center w-[103px] h-[117px] overflow-hidden mb-6">
              <div className="w-5 h-5">
                <img src={moon} alt="moon" className="w-full h-full" />
              </div>
              <div className="w-full h-[1px] bg-[#494E6E]"></div>
              <div className="w-10 h-10 overflow-hidden rounded-full">
                <img src={avater} alt="" className="w-full h-full" />
              </div>
            </div>
          </div>

          <div className="flex justify-between absolute w-[730px] h-[55px] left-[355px] top-[77px]">
            <div className="flex flex-col justify-between h-full w-[135px]">
              <p className="text-4xl font-bold">Invoices</p>
              <p className="text-[11px]">There are 7 total invoices.</p>
            </div>
            <div className="flex justify-between items-center h-[48px] w-[150px] rounded-full bg-[#7C5DFA]">
              <div className="flex w-8 h-8 ml-2 rounded-full overflow-hidden bg-white justify-center items-center">
                <img src={plus} alt="moon" className="w-[10px] h-[10px]" />
              </div>
              <p className="text-sm font-bold text-white pr-4">New Invoice</p>
            </div>
          </div>

          {value === 0 ? (
          <div className="flex flex-col space-y-4 justify-between absolute w-[730px] h-[55px] left-[355px] top-[196px]">
          <div className="flex flex-row justify-between items-center py-4 pl-8 pr-6 bg-white shadow rounded-lg w-full h-full">
            <p className="text-base font-bold leading-none">#RT3080</p>
            <p className="text-xs font-medium leading-none text-gray-400">
              Due 19 Aug 2021
            </p>
            <p className="text-xs font-medium leading-none text-gray-400">
              Jensen Huang
            </p>
            <p className="text-base font-bold leading-normal text-right text-gray-900">
              £ 1,800.90
            </p>
            <div className="w-[104px] h-10">
              <div className="flex items-center justify-center flex-1 h-full px-8 pt-3.5 pb-2.5 bg-[#F3FDFA] rounded-md">
                <div className="flex space-x-2 items-center justify-center flex-1 h-full">
                  <div className="w-2 h-2 bg-green-400 rounded-full" />
                  <p className="text-base font-bold leading-none text-green-400">
                    Paid
                  </p>
                </div>
              </div>
            </div>
            <p>&#62;</p>
          </div>
        </div>):(
          <div className="flex flex-col justify-between absolute w-[241px] h-[342px] left-[599px] top-[272px]">
            <div className="w-full h-[200px]">
              <img src={empty} alt="empty pic" className="h-full w-full">
              </img>

            </div>
            <p className="text-xl text-center pt-6 font-bold text-gray-900">There is nothing here</p>
    <p className="text-xs leading-none text-center text-gray-400">  Create an invoice by clicking the <br/>New Invoice button and get started</p>


          </div>
        )}
          
        </div>
      </div>
    </>
  );
}

export default Dashboard;
