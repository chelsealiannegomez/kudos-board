import './ViewCard.css'

const ViewCard = ( {prop, setVisibility} ) => {
    const { style, setStyle } = setVisibility;
    const handleExit = () => {
        setStyle({display: "none"});
    }

    return (
        <div style={style} className="card-modal">
            <div className="card-modal-content">
                <span onClick={handleExit}>&times;</span>
                <img src={prop.gif_path} />
                <h1>{prop.title}</h1>
                <p>{prop.message}</p>
                <h2>{prop.author}</h2>
            </div>
        </div>
    )
}

export default ViewCard