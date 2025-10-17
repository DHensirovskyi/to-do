'use client'

import { useDisclosure, useMediaQuery } from '@mantine/hooks';
import { Modal, Button, Input, Select } from '@mantine/core';
import { IoClose, IoPersonAddSharp } from "react-icons/io5";
import Image from 'next/image';

export const users = [
  {
    img: "/modalUsers/img1.jpg",
    name: "Emma Fischer",
    email: "emma.fischer@example.com",
  },
  {
    img: "/modalUsers/img2.jpg",
    name: "Lukas Meyer",
    email: "lukas.meyer@example.com",
  },
  {
    img: "/modalUsers/img3.jpg",
    name: "Sophie Weber",
    email: "sophie.weber@example.com",
  },
  {
    img: "/modalUsers/img4.jpg",
    name: "Jonas Schmidt",
    email: "jonas.schmidt@example.com",
  },
];


export default function InviteModal() {
  const [opened, { open, close }] = useDisclosure(false);

  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        withCloseButton={false}
        centered
        size={isMobile ? '85vw' : '50vw'}
      >
        <section className="flex flex-col gap-4 rounded-lg bg-white">
          <div className="flex justify-between">
            <div>
                <p className="text-[1rem] font-semibold">Send an invite to a new member</p>
                <div className='border-[#F24E1E] border-1'/>
            </div>
            <button onClick={close} className="text-black hover:text-black/50 cursor-pointer underline"><IoClose size={20}/></button>
          </div>
          <div className="border-black/20 border p-4 flex flex-col gap-5">
            <div className='flex flex-col gap-1.5'>
               <p className="text-[1rem] font-semibold">Email</p>
                <form action="submit" className="flex flex-col sm:flex-row gap-2">
                  <Input
                    className="flex-1"
                    placeholder="neerajgurung99@gmail.com"
                  />
                  <Button
                    className="bg-[#F24E1E] hover:bg-[#ee4b1b] text-white font-medium whitespace-nowrap px-4"
                    style={{ flexShrink: 0, background: '#F24E1E', borderRadius: '8px'}}
                  >
                    Send Invite
                  </Button>
                </form>
            </div>

            <div className='flex flex-col gap-3'>
                <p className="text-[1rem] font-semibold">Members</p>
                {users.map((user) => (
                  <div className='flex justify-between items-center gap-4' key={user.img}>
                    <div className='flex gap-2'>
                      <div className="flex-shrink-0 w-[45px] h-[45px] rounded-full overflow-hidden">
                        <Image 
                          src={user.img}
                          width={45} 
                          height={45} 
                          alt='img'
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className='flex flex-col'>
                        <p className='text-[0.875rem] font-semibold'>{user.name}</p>
                        <p className='text-[0.625rem]'>{user.email}</p>
                      </div>
                  </div>
                   <Select
                    data={['Can edit', 'Read only', 'Owner']}
                    defaultValue="Read only"
                    style={{ width: '150px' }}
                    styles={{
                      input: {
                        border: 'none', 
                        padding: '4px 8px',
                      },
                    }}
                    rightSectionProps={{ style: { pointerEvents: 'none' } }}
                  />
                </div>
                ))}
                
            </div>

            <div className='flex flex-col gap-1.5'>
               <p className="text-[1rem] font-semibold">Project Link</p>
                <form action="submit" className="flex flex-col sm:flex-row gap-2">
                  <Input
                    className="flex-1"
                    placeholder="https://sharelinkhereandthere.com/34565yy29"
                  />
                  <Button
                    style={{ flexShrink: 0, background: '#F24E1E', borderRadius: '8px'}}
                  >
                    Copy Link
                  </Button>
                </form>
            </div>
          </div>
        </section>
      </Modal>

      <button className="w-24 h-9 border border-[#F24E1E] rounded-[8px] p-[1rem] text-[#F24E1E] flex gap-1 active:scale-98 items-center justify-center cursor-pointer hover:bg-[#F24E1E] hover:text-white transition duration-200" onClick={open}>
          <IoPersonAddSharp />
          <p className="text-[1rem] font-medium">Invite</p>
      </button>
    </>
  );
}
