import { useEffect, useState } from "react"
import { Project } from "../Components/Project"

export function Prortfolio() {

    const [projects, setProjects] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function getProjects() {
            const response = await fetch("/MyProjects.json")
            console.log(response)
            if (response.ok) {
                setLoading(false)
                const data = await response.json()
                setProjects(data.projects)
                console.log(data)
            }
        }
        getProjects()

    }, [])

    return (
        <main>
            <h1>Nos produits</h1>
            <div className="d-flex gap-2 flex-wrap">
                {loading && <div className="spinner-border text-secondary"></div>}
                {projects && projects.map(project => (
                    <Project key={project.id} project={project} />

                ))}
            </div>
        </main>
    )
}