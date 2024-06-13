import Accounts from "../../data/account.json";// tableau Json
import Account from "../../components/Account/Account";//Composant
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function User() {
    const username = useSelector((state) => state.login.userProfil.userName);

    const navigate = useNavigate();
    const handleDisplayEdit = (e) => {
        e.preventDefault();
        navigate("/editUser");
    };
    return (
        <main className="main bg-dark2">
            <div className="header">
                <h1>
                    Welcome back
                    <br />
                    {username}!
                </h1>
                <button className="edit-button" onClick={handleDisplayEdit}>
                    Edit Name
                </button>
            </div>
            <h2 className="sr-only">Accounts</h2>
            {Accounts.map((account, index) => (
                <Account
                    key={`account-${index}`}
                    title={account.title}
                    amount={account.amount}
                    description={account.description}
                />
            ))}
        </main>
    );
};

export default User;