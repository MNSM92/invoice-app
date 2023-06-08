import { useEffect } from "react";

import logo from "../../assets/logo.svg";
import avater from "../../assets/image-avatar.jpg";
import moon from "../../assets/icon-moon.svg";


export default function Sidebar({ darkMode, setDarkMode }){


    useEffect(() => {
        const body = document.body;
        if (darkMode) {
          body.classList.add("dark");
        } else {
          body.classList.remove("dark");
        }
      }, [darkMode]);
    
      const toggleDarkMode = () => {
        setDarkMode(!darkMode);
      };


    return(
        <>
            <div className="flex lg:flex-col flex-row justify-between fixed lg:h-full lg:w-[103px] w-full h-[80px] bg-gray-700 dark:bg-black  left-0 top-0 lg:rounded-r-2xl">
                {/* Icon */}
                <div className="lg:w-[103px] lg:h-[103px] w-[80px] h-[80px] overflow-hidden">
                <div className="absolute overflow-hidden top-0 left-0 lg:w-full lg:h-[103px] w-[80px] h-full bg-[#7C5DFA] items-center justify-center rounded-r-2xl">
                    <div className="absolute top-10 left-0 lg:w-full lg:h-[103px] w-[80px] h-full bg-[#9277FF] items-center justify-center rounded-tl-2xl rounded-br-2xl"></div>
                    <div className="absolute top-0 left-0  w-full h-full">
                    <img src={logo} alt="" className="w-full h-full p-[25px]" />
                    </div>
                </div>
                </div>
                {/* Icon */}

                <div className="flex lg:flex-col flex-row justify-between items-center lg:w-[103px] lg:h-[117px] w-[120px] h-full overflow-hidden lg:mb-6 mr-8">
                <button onClick={toggleDarkMode} className="w-5 h-5">
                    <img src={moon} alt="moon" className="w-full h-full" />
                </button>
                <div className="lg:w-full lg:h-[1px] w-[1px] h-full bg-[#494E6E]"></div>
                <div className="lg:w-10 lg:h-10 w-8 h-8 overflow-hidden rounded-full">
                    <img src={avater} alt="" className="w-full h-full" />
                </div>
                </div>
            </div>
        </>
    )
}


