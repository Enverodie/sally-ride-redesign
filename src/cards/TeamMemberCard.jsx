import './cards.scss';

function TeamMemberCard({leader, name, about, contact, image}) {
    return ( 
        <div className="card TeamMemberCard">
            <div className="imageContainer">
                <img src={image} alt={name} />
            </div>
            <div className='textContainer'>
                <div className='name'>
                    {
                        // leader &&
                        // <div className="leader">Team Leader</div>
                    }
                    {name}
                </div>
                { about && <div className='about'>{about}</div> }
                { contact && <div className='contact'>{contact}</div> }
            </div>
        </div>
     );
}

export default TeamMemberCard;