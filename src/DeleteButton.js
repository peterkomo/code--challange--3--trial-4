import React from "react";

function DeleteButton ({idValue}) {
    function handleDelete(){
        fetch(`http://localhost:4001/transactions/${idValue}`,{
            method: 'DELETE',
        })
    }
    return(
        <button onClick={handleDelete}>Delete</button>
    )
}
export default DeleteButton;