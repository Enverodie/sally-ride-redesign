import TeamMemberCard from "../cards/TeamMemberCard";
import StephenImage from "../images/team_images/stephen.jpg";
import '../cards/cardHolders.scss';

export const ROUTE = '/OurTeam';
export const TITLE_SHORT = "Our Team";
export const TITLE = "Meet the #SallyRidePride team!";

function OurTeam() {
    return ( 
        <>

<h1>hello world</h1>
<div className="genericCardHolder">
    <TeamMemberCard leader={true} name="Stephen Smith" about="I am a lifelong Hoosier from Bloomington, Indiana. I am a transfer student at Indiana University Bloomington, and I have studied Computer Science, Web Design and Development." contact="enverodie@gmail.com" image={StephenImage} />

</div>
        
        </>
     );
}

export default OurTeam;