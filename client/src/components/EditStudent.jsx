import axios from 'axios'
import { useEffect, useState } from 'react'
import { useGlobalContext } from '../context/GlobalContext'

export default function EditStudent({data,edit,setEdit}) {
    const [formData,setFormData] = useState({"roll":"","name":"","email":"","contact":"","address":"","gender":""})
    const {students,setStudents} = useGlobalContext()
    const EditStudentData = async(e) => {
        e.preventDefault()
        await axios.put(`http://localhost:4000/student/update/${data._id}`,formData)
        .then((update)=>{
            const edit= students.map((std)=>{
                if(std._id===update.data._id){
                    return update.data
                }else{
                    return std
                }
            })
            setStudents(edit)
            setEdit(false)
        })
    }
    useEffect(()=>{
        setFormData(data)
    },[])
    useEffect(()=>{
        console.log(formData);
    },[formData])
    return (
        <div className={"absolute top-0 left-0 w-full h-full flex items-center justify-center bg-zinc-500 bg-opacity-25 duration-200 "} style={{ pointerEvents: edit ? "all" : "none", opacity: edit ? "1" : "0" }}>
            <div className=" absolute w-full h-full " onClick={()=>{setEdit(false)}}>hel</div>
            <form action="" className="flex flex-col z-10 p-2 m-4 bg-white rounded-2xl w-96  shadow-xl " onSubmit={EditStudentData} >
                <div className="close ml-auto mx-2 mt-2 text-zinc-800" onClick={() => { setEdit(false) }}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
                <div className="text-lg font-bold m-2 text-xinc-700 ">Edit Student</div>
                <input type="number" name="" id="" placeholder="Roll no" className="h-10 pl-2 border-2 border-zinc-300 rounded-md m-2" value={formData.roll} onChange={(e)=>setFormData({...formData,"roll":e.target.value})} />
                <input type="text" name="" id="" placeholder="Full Name" className="h-10 pl-2 border-2 border-zinc-300 rounded-md m-2" value={formData.name} onChange={(e)=>setFormData({...formData,"name":e.target.value})}/>
                <input type="email" name="" id="" placeholder="Email" className="h-10 pl-2 border-2 border-zinc-300 rounded-md m-2" value={formData.email} onChange={(e)=>setFormData({...formData,"email":e.target.value})}/>
                <input type="number" name="" id="" placeholder="Contact" className="h-10 pl-2 border-2 border-zinc-300 rounded-md m-2" value={formData.contact} onChange={(e)=>setFormData({...formData,"contact":e.target.value})}/>
                <input type="text" name="" id="" placeholder="Address" className="h-10 pl-2 border-2 border-zinc-300 rounded-md m-2" value={formData.address} onChange={(e)=>setFormData({...formData,"address":e.target.value})}/>
                <div className=" flex items-center m-2 text-zinc-600 ">
                    <div className="mr-2">Select Gender:</div>
                    <label htmlFor="male" className="mr-1 ">Male</label>
                    <input type="radio" name="gender" id="male" value="male" defaultChecked={(e)=> {return formData.gender==e.target.value?true:false}} onChange={(e)=>setFormData({...formData,"gender":e.target.value})}/>
                    <label htmlFor="female" className="mr-1 ml-2" >Female</label>
                    <input type="radio" name="gender" id="female" value="female" defaultChecked={(e)=>{return formData.gender==e.target.value?true:false}} onChange={(e)=>setFormData({...formData,"gender":e.target.value})}/>
                    <label htmlFor="other" className="mr-1 ml-2">Other</label>
                    <input type="radio" name="gender" id="other" value="other" defaultChecked={(e)=>{return formData.gender==e.target.value?true:false}} onChange={(e)=>setFormData({...formData,"gender":e.target.value})}/>
                </div>
                <button className="self-start h-10 py-2 px-4 m-2 text-sm font-bold bg-green-400 text-white text-bold rounded-md  ">Submit</button>
            </form>
        </div>
    )
}
