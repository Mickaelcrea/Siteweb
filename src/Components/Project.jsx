import { Link } from "react-router-dom";

export function Project(props) {
    console.log(props)
    return (
        <article className="card bg-light p-2" style={{ width: "18rem" }}>
            <img src={props.project.image.src} alt={props.project.image.src} />
            <h3>{props.project.title}</h3>
            <p>{props.project.software}</p>
        </article>
    )

}