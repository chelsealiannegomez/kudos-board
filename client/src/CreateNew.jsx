import CreateModal from "./CreateModal";
import './CreateNew.css'

const CreateNew = ( { button } ) => {
    const {isCreateNew, setIsCreateNew} = button;

    const handleClick = () => {
        setIsCreateNew(true);
    }

    return (
        <div className="create">
            {!isCreateNew ? <button onClick={handleClick}>Create New</button> : <CreateModal />}
        </div>
    )
}

export default CreateNew