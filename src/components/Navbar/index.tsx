import styles from './Navbar.module.css'
import { useNavigate, Link } from 'react-router-dom'
import { SearchBar } from '../../components';

const Navbar = () => {

    const navigate = useNavigate ();

    return (

        <div>
            <nav className={styles.nav}>
                <div>
                    <figure onClick={() => navigate('/')}>
                        <img src="./src/assets/react.svg" alt="" />
                    </figure>
                </div>
                <div>
                    <ul className='flex flex-column gap-5'>
                        {/* <li>Home</li>
                        <li>Sport</li> */}
                        <Link to='/'>Home</Link>
                        <Link to='/sports'>Sports</Link>
                        <Link to='/health'>Health</Link>
                        <Link to='/entertainment'>Entertainment</Link>
                        <Link to='/tech'>Tech <span className='font-features sups text-stone-600 text-xs' >Premium</span></Link>
                        <Link to='/business'>Business <span className='font-features sups text-stone-600 text-xs' >Premium</span></Link>
                        
                    </ul>
                </div>
                <div className='flex flex-row  gap-10'>

                    <div>
                        <SearchBar />
                    </div>

                    {/* <div className='flex flex-row gap-0'>
                        <Input className='bg-slate-100 rounded-bl-xl rounded-tl-xl '
                        placeholder='Search news ... '/>
                        <button className='p-1 bg-slate-100 text-black rounded-br-xl rounded-tr-xl'>Search </button>
                    </div> */}

                    <div>
                    <Link to='/subscribe'>Subscribe</Link>

                    </div>
                    <div>
                        <Link to='/login'>Login</Link>
                    </div>
                    {/* <div>
                        <a href="/login">Try login</a>
                    </div> */}
                </div>
            </nav>
        </div>
    )
}

export default Navbar