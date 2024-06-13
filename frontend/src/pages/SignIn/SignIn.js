
import './SignIn.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import Form from '../../components/Form/Form';



function SignIn() {


    return (

        <div className="main-contain">
            <main className="main bg-dark">

                <section className="sign-in-content">
                    <FontAwesomeIcon className='icon' icon={faUserCircle} />
                    <h1>Sign In</h1>
                    <Form />
                </section>
            </main>
        </div >
    )
}
export default SignIn;
