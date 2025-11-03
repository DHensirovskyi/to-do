'use client'

import { useDisclosure, useMediaQuery } from '@mantine/hooks';
import { Button, Group, Input, Modal, Radio, Textarea } from '@mantine/core';
import { IoClose } from "react-icons/io5";
import { FaTimesCircle } from 'react-icons/fa';
import { DatePickerInput } from "@mantine/dates";
import { IconCalendar } from "@tabler/icons-react";
import { Dropzone, MIME_TYPES } from '@mantine/dropzone';
import { IconUpload } from '@tabler/icons-react';
import { useState } from 'react';
import { FaCircleCheck } from "react-icons/fa6";
import { MdModeEdit } from 'react-icons/md';



export default function UpdateTaskModal({ dots }: { dots: boolean }) {
  const [opened, { open, close }] = useDisclosure(false);
  const [message, setMessage] = useState<"Drag and drop files here or click to browse" | 'File was uploaded' | 'File is not suitable'>("Drag and drop files here or click to browse");

  const isMobile = useMediaQuery('(max-width: 768px)');
  const [title, setTitle] = useState('');
  const [priority, setPriority] = useState('');

  const handleSubmit = () => {
    if (!title.trim() || !priority) {
      alert('Please fill in the required fields: Title and Priority');
      return;
    }
    
    console.log({
      title,
      priority,
    });
    
    close();
    resetForm();
  };


  const resetForm = () => {
    setTitle('');
    setPriority('');
    setMessage("Drag and drop files here or click to browse");
  };

  const isFormValid = title.trim() !== '' && priority !== '';

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
                <p className="text-[1rem] font-semibold">Edit Task</p>
                <div className='border-[#228be6] border-1'/>
            </div>
            <button onClick={close} className="text-black hover:text-black/50 cursor-pointer underline"><IoClose size={20}/></button>
          </div>
          
          <div className='grid xl:grid-cols-3 grid-cols-1 rounded-[12px] gap-6 w-full'>
            <div className='border xl:col-span-2 col-auto flex flex-col gap-4 border-black/10 p-3 rounded-sm'>
                <div className='flex flex-col gap-1.5'>
                    <p className="text-[1rem] font-semibold">Title <span className="text-red-500">*</span></p>
                    <form action="submit" className="flex flex-col sm:flex-row gap-2">
                        <Input
                        className="flex-1"
                        name='title'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        />
                    </form>
                </div>
                <div className='flex flex-col gap-1.5'>
                    <p className="text-[1rem] font-semibold">Date</p>
                    <form action="submit" className="flex flex-col sm:flex-row gap-2">
                        <DatePickerInput
                            placeholder="Pick date"
                            rightSection={<IconCalendar size={16} />}
                            valueFormat="DD/MM/YYYY"
                            className="flex-1"
                        />
                    </form>
                </div>
                <div className='flex flex-col gap-1.5'>
                    <p className="text-[1rem] font-semibold">Priority <span className="text-red-500">*</span></p>
                    <div className="flex flex-col sm:flex-row gap-2">
                        <Radio.Group
                        name="favoriteFramework"
                        withAsterisk
                        value={priority}
                        onChange={setPriority}
                        >
                        <Group mt="xs">
                            <Radio value="extreme" label="Extreme" color='#F21E1E'/>
                            <Radio value="moderate" label="Moderate" color='#3ABEFF'/>
                            <Radio value="low" label="Low" color='#05A301'/>
                        </Group>
                        </Radio.Group>
                    </div>
                </div>
                <div className='flex flex-col gap-1.5'>
                    <p className="text-[1rem] font-semibold">Description</p>
                    <Textarea
                    placeholder="Start writing here"
                    name='description'
                    />
                </div>
            </div>

            <div className='border p-3 xl:col-span-1 col-auto border-black/10 rounded-sm flex flex-col justify-end h-full'>
            <Dropzone
                onDrop={() => setMessage('File was uploaded')}
                onReject={() => setMessage('File is not suitable')}
                maxSize={3 * 1024 ** 2}
                accept={[MIME_TYPES.png, MIME_TYPES.jpeg, MIME_TYPES.pdf]}>
                <div className='flex flex-col justify-center items-center gap-5'>
                    {message === "Drag and drop files here or click to browse" && <IconUpload size={40} />}
                    {message === 'File was uploaded' && <FaCircleCheck size={40} color="#40c057" />}
                    {message === 'File is not suitable' && <FaTimesCircle size={40} color="red" />}
                    <p className='text-center'>{message}</p>
                </div>
            </Dropzone>
            </div>

           </div>
           <div>
            <Button type="submit" onClick={handleSubmit} disabled={!isFormValid}>Submit</Button>
           </div>
        </section>
      </Modal>
      {dots ? 
        <button className="flex items-baseline cursor-pointer gap-0.5 hover:[&_span]:border-[#228be6] hover:[&_span]:bg-[#228be6] active:[&_span]:border-[#228be6] active:[&_span]:bg-[#228be6] active:scale-95 flex-shrink-0" onClick={open}>
          <span className="border border-[#A1A3AB] rounded-full p-0.5 transition-colors duration-200" />
          <span className="border border-[#A1A3AB] rounded-full p-0.5 transition-colors duration-200" />
          <span className="border border-[#A1A3AB] rounded-full p-0.5 transition-colors duration-200" />
        </button>
        :
        <button className="bg-[#228be6] w-[36px] h-[36px] cursor-pointer rounded-[8px] flex justify-center items-center shrink-0 active:scale-98 hover:bg-[#339af0]" onClick={open}>
          <MdModeEdit color="white" size={20}/>
        </button>
      }
      
    </>
  );
}
