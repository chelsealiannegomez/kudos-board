const Board = ( { home } ) => {
    const onBack = () => {
        home.setIsHome(true);
    }

    return (
        <div onClick={onBack}>Back</div>
    )
}

export default Board;