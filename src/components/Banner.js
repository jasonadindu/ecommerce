import Button from "./Buttons";


const Banner = ({title, body}) => {
    return <div className="banner">
        <div className="container">
        <h1 className="title">{title}</h1>
        <p className="text">{body}</p>
        <div className="call-to-action">
            <Button btnClassName={"secondary"} content={"Secondary"}/>
            <Button btnClassName={"primary"} content={"Primary"}/>
        </div>

        </div>
    </div>
}

export default Banner;