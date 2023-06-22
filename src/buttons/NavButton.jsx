import { Link, useLocation } from 'react-router-dom';

import './buttons.scss';

function NavButton({href, children}) {
    const {pathname} = useLocation();

    let activityClass = (href.split('/')[1] === pathname.split('/')[1])? 'active' : 'inactive';

    return ( 
        <Link className={"NavButton " + activityClass} to={href} draggable="false">
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