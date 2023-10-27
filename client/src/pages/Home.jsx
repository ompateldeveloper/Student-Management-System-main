import { useState } from "react"
import StudentsList from "../components/StudentsList";
import AddStudent from "../components/AddStudent";
import Navbar from "../components/Navbar";

export default function Home() {
    const [open, setOpen] = useState(false);
    
    return (
        <div >
            <div className="add-student-btn mx-auto md:w-9/12">
                <button className="mx-2 my-2 text-sm font-bold text-white bg-green-400 hover:bg-green-500 rounded-md py-1 px-2" onClick={()=>{setOpen(true)}}>Add Student</button>
            </div>
            <AddStudent open={open} setOpen={setOpen}/>
            <StudentsList/>
        </div>
    )
}
