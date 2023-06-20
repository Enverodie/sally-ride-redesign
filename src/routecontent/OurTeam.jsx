import TeamMemberCard from "../cards/TeamMemberCard";
import StephenImage from "../images/team_images/stephen.jpg";
import '../cards/cardHolders.scss';

export const ROUTE = '/OurTeam';
export const TITLE_SHORT = "Our Team";
export const TITLE = "Meet the #SallyRidePride team!";

function OurTeam() {
    return ( 
        <>

<h2>About us:</h2>
<p>We are team 093 in I101 section 5555. We are designing a social media campaign to raise awareness around Sally Ride and her inspirational story of overcoming discrimination and adversity to become the first American woman in space.</p>
<h3>Website redesign:</h3>
<div className="genericCardHolder">
    <TeamMemberCard leader={true} name="Stephen Smith" about="I am from Bloomington, Indiana. I obtained my B.S. in Computer Science from the IU Luddy School of Informatics, Computing & Engineering with a minor in Web Design and Development." contact="enverodie@gmail.com" image={StephenImage} />
</div>

<h3>Original project:</h3>
<div className="genericCardHolder" style={{opacity: .72}}>
    <TeamMemberCard leader={true} name="Stephen Smith" about="I am a lifelong Hoosier, born in Bloomington, living in Spencer. I am a transfer student at Indiana University Bloomington majoring in Computer Science." contact="sms10@iu.edu" image={StephenImage} />
    <TeamMemberCard leader={false} name="Cade Hurley" about="I'm originally from South Bend, Indiana. I am a first year student attending Indiana University as an Informatics major." image={'https://sms10.pages.iu.edu/i101/project/team_images/cade.jpg'} />
    <TeamMemberCard leader={false} name="Tate Ensmenger" about="I'm from Bloomington. I'm a Junior-year transfer student new to IU after two years at Earlham College. I'm pursuing a B.S. in Informatics." image={'https://sms10.pages.iu.edu/i101/project/team_images/tate.jpg'} />
</div>
        
        </>
     );
}

export default OurTeam;