
import './SignIn.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import Form from '../../components/Form/Form';
import './SignIn.scss'


function SignIn() {


    return (

        <div className="main-contain">
            <main className="main bg-dark">
                <div className='form'></div>
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
