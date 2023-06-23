import GenericButton from "../../buttons/GenericButton";

export const ROUTE = '/OurCampaign/Presentation';
export const TITLE_SHORT = "Presentation";

function Presentation() {
    return ( 
<>
<h3>Powerpoint presentation:</h3>
<p>Download the final .pptx presentation below.</p>
<GenericButton src="https://sms10.pages.iu.edu/i101/project/distributables/presentation.pptx" target="_blank">Download</GenericButton>
</>
     );
}

export default Presentation;