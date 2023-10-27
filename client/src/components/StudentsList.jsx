import { useEffect } from "react"
import { useGlobalContext } from "../context/GlobalContext"
import Student from "./Student"
import axios from "axios"

export default function StudentsList() {
    const { students, setStudents } = useGlobalContext()
    async function fetchStudents() {
        await axios.get("http://localhost:4000/student/all")
            .then((data) => {
                setStudents(data.data)
            })
            .catch(() => {

            })
    }
    useEffect(() => {
        fetchStudents()

    }, [])
    return (
        <div>
            {students && <div className="student-list mx-auto w-full md:w-9/12">
                {
                    students.map((data) => (
                        <Student data={data} key={data._id} />
                    ))
                }
            </div>}
        </div>
    )
}
