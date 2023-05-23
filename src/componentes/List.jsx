import React, { useState, useEffect } from "react";

const List = ({ produto, quantidade, unidadeMedida, status }) => {
    let [done, setDone] = useState(status);
    let [corButton, setCorButton] = useState("");

    useEffect(() => {
        if (done === false) {
            setCorButton("btn btn-outline-primary");
        } else {
            setCorButton("btn btn-outline-danger");
        };
    }, [done]);

    function click() {
        setDone(prevState => !prevState);
    };

    return (
        <li className="border-bottom">
            <div className="d-flex flex-Row align-items-center p-2">
                <button className={corButton} onClick={click}>
                    {done === true ? <strong>Retirar dos comprados</strong> : <strong>Marcar como comprado</strong>}
                </button>
                <div className="px-5 fs-5">{produto} - {quantidade}{unidadeMedida}</div>
            </div>
        </li>
    );
}
export default List