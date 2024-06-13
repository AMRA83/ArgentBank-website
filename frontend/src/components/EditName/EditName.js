import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { useSelector, useDispatch } from "react-redux";
import { infoUserName } from "../../Redux/loginSlice";
import { changeUsername } from "../../API/api";

const EditName = () => {
    const navigate = useNavigate();
    const loginStore = useSelector((state) => state.login);
    const storeUserProfil = loginStore.userProfil;
    const dispatch = useDispatch();
    const [newUserName, setNewUserName] = useState(storeUserProfil.userName);
    const token = loginStore.userToken;

    const handleChangeUserName = (e) => {
        setNewUserName(e.target.value);
    };

    const handleCancel = () => {
        navigate("/user");
    };
    /****Faire le PUT pour modifier le userName en base de données****/
    const handleForm = async (e) => {
        e.preventDefault();
        const updateUserName = await changeUsername(newUserName, token);
        if (updateUserName.status === 200) {
            dispatch(infoUserName(newUserName));
            console.log("Le nom d'utilisateur a bien été modifié.", updateUserName.status);
            navigate("/user");
        } else {
            console.error("La mise à jour du nom d'utilisateur a échoué.");
        }
    };

    return (
        <main className="main bg-dark">
            <section className="sign-in-content toogle-edit-name">
                <FontAwesomeIcon className='icon' icon={faUserCircle} />
                <h1>Edit User info</h1>
                <form onSubmit={handleForm}>
                    <div className="input-wrapper">
                        <label htmlFor="username">Username</label>
                        <input
                            value={newUserName}
                            onChange={handleChangeUserName}
                            type="text"
                            id="username"
                            placeholder="Tapez votre username"
                        />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="firstname">First Name</label>
                        <input
                            type="text"
                            id="firstname"
                            disabled
                            value={storeUserProfil.firstName}
                        />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="lastname">Last Name</label>
                        <input
                            type="text"
                            id="lastname"
                            disabled
                            value={storeUserProfil.lastName}
                        />
                    </div>
                    <button type="submit" className="sign-in-button">Save</button>
                </form>
                <button onClick={handleCancel} className="sign-in-button">Cancel</button>
            </section>
        </main>
    );
};

export default EditName;