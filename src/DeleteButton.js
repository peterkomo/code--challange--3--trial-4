import React from "react";

function DeleteButton ({idValue}) {
    function handleDelete(){
        fetch(`https://flatironbank-at4w.onrender.com/transactions/${idValue}`,{
            method: 'DELETE',
        })
    }
    return(
        <button onClick={handleDelete}>Delete</button>
    )
}
export default DeleteButton;