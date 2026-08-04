import React from "react";
import useTheme from "../Component/useTheme";
import useApi from "../Component/useApi";
export default function Home() {
  const { dark, toggleTheme } = useTheme();
  const {user,loading,err}=useApi()
  if (err) return <p className="flex text-3xl font-bold text-red-500">{err}</p>
  if (loading) return <p className="text-2xl font-bold"> Wait!!! Api is Loading</p>
  return (
    <div
      className=" min-h-[100vh] w-full p-6"
      style={{
        backgroundColor: dark ? "black" : "white",
        color: dark ? "white" : "#00003f",
      }}
    >
      <div className="flex w-full justify-end mb-4">
        <button
          className="border border-gray-400 bg-blue-500 p-2 rounded-md"
          onClick={toggleTheme}
        >
          {dark ? "Dark Theme" : "Light Theme"}
        </button>
      </div>
      <div>
        <h1 className="text-2xl font-bold text-blue-500 flex justify-center pb-4">Data on this page is coming from Cutom Hooks 1.UseTheme Hook 2.useApi Hook</h1>
        <table className="w-full text-center">
           <thead>
             <tr>
                <th className="border">Photo</th>
                <th className="border">Name</th>
                <th className="border">Email</th>
                <th className="border">age</th>
            </tr>
           </thead>
            <tbody>
                {
                user.map((item)=><tr key={item.id} >
                    <td className="flex justify-center border">
                        <img className="w-16" src={item.image} alt="" />
                    </td>
                    <td className="border">{item.firstName}</td>
                    <td className="border">{item.email}</td>
                    <td className="border">{item.age}</td>
                </tr>)
            }
            </tbody>
            
        </table>
      </div>
       
    </div>
  );
}
