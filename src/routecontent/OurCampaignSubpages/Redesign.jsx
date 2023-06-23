import GenericButton from "../../buttons/GenericButton";

export const ROUTE = '/OurCampaign/Redesign';
export const TITLE_SHORT = "Redesign";

function Redesign() {
    return ( 
<>
<h3>Overview:</h3>
<p>Almost 4 years after this initial project wrapped up, I wanted a side project to brush up on React. So, I decided it'd be fun to remaster an originally static website I made sophomore year. The goal: redesign and develop the original site, keeping the contents as true to the original as possible. Things I've learned in relation to usability and aesthetics over the years I kept in mind throughout. I wanted a quick project to demonstrate how far I've come in web/UI/UX design and development, and my old team's i101 semester project was perfect for that.</p>
<p>I hope you find the redesign an exciting showcase of improvement, just as I found it an exciting project to revisit. If you want to see the original, or see the source code for this site, I've included links to both below.</p>
<div style={{display: 'flex', width: '100%'}}>
    <GenericButton src="https://sms10.pages.iu.edu/i101/project/index.html" target="_blank">Original site</GenericButton>
    <GenericButton src="https://github.com/Enverodie/sally-ride-redesign" target="_blank">Github</GenericButton>
</div>
</>
     );
}

export default Redesign;