import React from 'react'
import Background from "@/assets/login2.png";
import Victory from "@/assets/victory.svg";
import { TabsList, TabsTrigger,Tabs,TabsContent } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
const Auth = () => {
    const[email ,setEmail] = useState("")
    const[Password,setPassword] = useState("")
    const[confirmPassword,setConfirmPassword] = useState("")

 const handleLogin = async () =>{};
 
 const handleSignup = async () =>{};



  return (
    <div className='h-[100vh] w-[100vw] flex items-center justify-center'>
        <div className='h-[80vh] bg-white border-2 border-white  text-opacity-90 shadow-2xl w-[80vw] md:w-[90vw] lg:w-[70vw] xl:w-[60vw] rounded-3xl grid xl:grid-cols-2'>
            <div className='flex flex-col gap-10 items-center justify-center'>
                <div className='flex items-center justify-center flex-col'>
                    <div className='flex items-center justify-center'>
                        <h1 className='text-5xl font-bold md:text-6xl'>
                            welcome
                        </h1>
                        <img src={Victory} alt = " Victory Emoji" className='h-[100px]'/>
                    </div>
                    <p className='font-medium text-center'>Fill in the details to get started with the chatApp</p>
                </div>
                <div className='flex items-center justify-center w-full'>
                    <Tabs  className="w-3/4">
                    <TabsList className='bg-transparent rounded-none w-full'>
                    <TabsTrigger value="login" className='data-[state=active]:bg-transparent text-black text-opacity-90 border-b-2 rouded-none w-full data-[state=active]: text-black data-[state=active]:font-semibold data-[state=active]:border-b-purple-500 p-3 transition-all duration-300'>Login</TabsTrigger>
                    <TabsTrigger className='data-[state=active]:bg-transparent text-black text-opacity-90 border-b-2 rouded-none w-full data-[state=active]: text-black data-[state=active]:font-semibold data-[state=active]:border-b-purple-500 p-3 transition-all duration-300' value="signup">Signup</TabsTrigger>
                    </TabsList>
                    <TabsContent className='flex flex-col gap-5' value="login">
                        <Input placeholder = "Email" type="email"
                        className="rounded-full p-6" value={email}
                        onChange = {(e) => setEmail(e.target.value)}/>
                        <Input placeholder = "Password" type="password"
                        className="rounded-full p-6" value={Password}
                        onChange = {(e) => setPassword(e.target.value)}/>
                        <Button className='rounded-full p-6' onClick = {handleLogin}>
                            Login
                        </Button>
                       
                    </TabsContent>
                    <TabsContent  className='
                   flex flex-col gap-5' value="signup">
                         <Input placeholder = "Email" type="email"
                        className="rounded-full p-6" value={email}
                        onChange = {(e) => setEmail(e.target.value)}/>
                        <Input placeholder = "Password" type="password"
                        className="rounded-full p-6" value={Password}
                        onChange = {(e) => setPassword(e.target.value)}/>
                        <Input placeholder = "ConfirmPassword" type="password"
                        className="rounded-full p-6" value={confirmPassword}
                        onChange = {(e) => setConfirmPassword(e.target.value)}/>
                        <Button className='rounded-full p-6' onClick = {handleSignup}>
                            SignUp
                        </Button>
                    
                    </TabsContent>
                       </Tabs>

                    
                </div>
            </div>
            <div className='hidden xl:flex justify-center items-center'>
                <img src={Background} alt="background login" className='h-[700px]'/>
            </div>

        </div>
        
        </div>
  )
}

export default Auth