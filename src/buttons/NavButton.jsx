import { Link, useLocation } from 'react-router-dom';

import './buttons.scss';

function NavButton({href, children}) {
    const {pathname} = useLocation();

    return ( 
        <Link className={"NavButton " + (href === pathname ? 'active' : 'inactive')} to={href}>
            <div className="buttonStatus"></div>
            <div className='label'>
            {
                // this is where the name of the button goes
                children
            }
            </div>
        </Link>
     );
}

export default NavButton;