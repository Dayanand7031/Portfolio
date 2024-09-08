import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';



function Contact() {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      name: data.name,
      email: data.email,
      message: data.message
    }
    try {
      await axios.post("https://getform.io/f/broljrda",userInfo);
      toast.success("your message has been send")
    } catch(error) {
      console.log(err);
      toast.error("Something went Wrong");

    }
  }
  return (
    <>
      <div name="Contact"
        className='max-w-screen-2xl container mx-auto px-4 md:px-20'>
        <h1 className='text-3xl font-bold mb-5'>Contact me</h1>
        <p className="  ">
          Please fill out the form below to contact me
        </p>
        <div className='flex flex-col md:flex items-center justify-center mt-5 mb-5'>

          <form className=" w-[300px] pb-4 border-[2px] px-4 py-2 space-y-5 rounded-lg bg-slate-200"
            // action='https://getform.io/f/broljrda'
            // method='POST'
            onSubmit={handleSubmit(onSubmit)}
          >
            <h1 className='text-xl font-bold'>Send your message</h1>
            <div className='space-y-1'>

              <sapn className="font-semibold text-gray-700">Full Name</sapn>
              <br />
              <input
                id="name"
                name="name"
                type='text'
                placeholder='Enter your Full Name'
                className='border-[2px] rounded-md outline-none px-3 py-2'
                {...register("name", { required: true })}
              ></input>
              <br />
              {errors.name && <span>This field is required</span>}
            </div>

            <div className='space-y-1'>
              <sapn className="font-semibold text-gray-700">Email Address</sapn>
              <br />
              <input
                id="email"
                name="email"
                type='email'
                placeholder='Enter your email address'
                className='border-[2px] rounded-md outline-none px-3 py-2'
                {...register("email", { required: true })}></input>
                <br />
              {errors.email && <span>This field is required</span>}

            </div>

            <div className='space-y-1'>
              <sapn className="font-semibold text-gray-700">Message</sapn>
              <br />
              <textarea

                className="shadow rounded-md w-full appearance-none border  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="message"
                name="message"
                type="text"
                placeholder="Type your message here"
                {...register("message", { required: true })}
              />
              <br />
              {errors.message && <span>This field is required</span>}

            </div>
            <button
              type="submit"
              className="bg-black text-white rounded-xl px-3 py-2 hover:bg-slate-700 duration-300"
            >
              Send
            </button>

          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
