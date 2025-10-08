'use client'

import { Burger, TextInput } from "@mantine/core";
import { useDisclosure } from '@mantine/hooks';
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { FaCalendar } from "react-icons/fa";



export default function Header() {
  const [value, setValue] = useState('');
  const [opened, { close, toggle }] = useDisclosure(false);
  
  const handleSearch = () => {
    console.log("🔍 Searching for:", value);
  };

  const date = new Date();
  const formattedDate = date
  .toLocaleDateString("de-DE", { day: "2-digit", month: "2-digit", year: "numeric" })
  .replace(/\./g, "/");
  const day = date.toLocaleDateString("en-En", { weekday: "long" });

  return (
    <header className="h-25 bg-[#F8F8F8] text-white p-[30px] flex justify-center items-center">
      <section className="max-w-325 w-325 flex items-center justify-center md:justify-between">
        <div className="flex items-center gap-4">
           <Burger 
            opened={opened} 
            onClick={toggle} 
            aria-label="Toggle navigation" 
            color="black"
            size="sm"
          />
          <div>
            <h2 className="font-semibold text-[2rem]">
              <span className="text-[#FF6767]">Dash</span>
              <span className="text-black">Board</span>
            </h2>
          </div>
        </div>


        <div className="hidden gap-10 flex-1 ml-10 lg:ml-20 md:flex ">
          <div className="flex items-center gap-3 flex-1">
            <TextInput
              placeholder="Search your task here..."
              value={value}
              onChange={(e) => setValue(e.currentTarget.value)}
              className="flex-1"
              styles={{
                root: {
                  flex: 1,
                },
                input: {
                  width: '100%',
                  height: "auto",
                  borderRadius: "8px",
                  background: "white",
                  color: "#A1A3AB",
                  padding: "0.625rem",
                  boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.3)",
                  fontSize: "0.875rem",
                  fontWeight: "500",
                  outline: "none",
                },
              }}
            />
            
            <div className="bg-[#FF6767] h-[100%] px-3.5 cursor-pointer rounded-[8px] flex justify-center items-center" onClick={handleSearch}>
              <FaSearch size={15} color="white" />
            </div>

          </div>
          
          <div className="flex gap-10">
            <div className="flex gap-2.5">
                <div className="bg-[#FF6767] p-2 cursor-pointer rounded-[8px] aspect-[1/1] flex justify-center items-center">
                    <FaBell color="white" size={15} />
                </div>
                <div className="bg-[#FF6767] p-2 cursor-pointer rounded-[8px] aspect-[1/1] flex justify-center items-center">
                    <FaCalendar color="white" size={15}/>
                </div>
            </div>

            <div className="flex flex-col justify-center min-w-30">
                <p className="text-[1rem] leading-tight text-black font-bold truncate">{day}</p>
                <p className="text-[#3ABEFF] text-[0.875rem] font-semibold truncate">{formattedDate}</p>
            </div>
          </div>
        </div>
      </section>
    </header>
  );
}