'use client'

import { TextInput } from "@mantine/core";
import { useState } from "react";
import { FaBell, FaCalendar, FaSearch } from "react-icons/fa";

export default function TextInputDesktop(){
    const [value, setValue] = useState('');
    const handleSearch = () => {
        console.log("🔍 Searching for:", value);
    };
    return(
        <div className="flex items-center gap-3 flex-1 mb-10">
            <div className="flex gap-2.5">
                <div className="bg-[#727272] w-[36px] h-[36px] cursor-pointer rounded-[8px] flex justify-center items-center shrink-0 active:scale-98 hover:bg-[#7a7a7a]">
                    <FaBell color="#FFF" size={15} />
                </div>
                <div className="bg-[#727272] w-[36px] h-[36px] cursor-pointer rounded-[8px] flex justify-center items-center shrink-0 active:scale-98 hover:bg-[#7a7a7a]">
                    <FaCalendar color="#FFF" size={15}/>
                </div>
            </div>
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
                    height: "36px",
                    borderRadius: "8px",
                    background: "white",
                    color: "#A1A3AB",
                    padding: "0.6rem",
                    boxShadow: "0px 4px 5px rgba(0, 0, 0, 0.1)",
                    fontSize: "0.875rem",
                    fontWeight: "500",
                    outline: "none",
                    border: "0px solid transparent",
                  }
                }}
                variant="filled"
                radius="md"
            />
            
            <div className="bg-[#727272] h-[36px] w-[36px] cursor-pointer rounded-[8px] flex justify-center items-center shrink-0 hover:bg-[#7a7a7a] active:scale-98" onClick={handleSearch}>
              <FaSearch size={15} color="#FFF" />
            </div>
          </div>
    )
}