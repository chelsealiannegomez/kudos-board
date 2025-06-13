import './CreateModal.css'

const CreateModal = ( { setVisibility } ) => {
    const { style, setStyle } = setVisibility;

    const handleExit = () => {
        setStyle({display: "none"});
    }

    return (
        <div className="modal" style={style}>
            <div className="modal-content">
                <span onClick={handleExit}>&times;</span>
                <p>Hello</p>
            </div>
        </div>
    )
}

export default CreateModal;