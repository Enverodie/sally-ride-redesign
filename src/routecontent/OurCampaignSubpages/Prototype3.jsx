import MultipleImageSelectorDescription from "../../images/MultipleImageSelectorDescription";

export const ROUTE = '/OurCampaign/Prototype3';
export const TITLE_SHORT = "Prototype 3";

function Prototype3() {
    return ( 
<>
<h3>Overview:</h3>
<p>After receiving and visualizing all of our data and input from the survey, we revised our most liked posts to better fit our audience. In most cases, not much was changed from the previous post prototype; our primary changes revolved around the use of images.</p>
<p>For this distributable, we aimed to make our best posts even better. Below are the revisions for each social media platform.</p>
<MultipleImageSelectorDescription images={[
    {id: 23, text: (
        <>
            <h4>Facebook revision:</h4>
            <p>Tate made the final edits for this post prototype. In it, he changed the image to better fit comments received in the survey praising posts featuring Sally herself.</p>
        </>
    )},
    {id: 24, text: (
        <>
            <h4>Instagram revision:</h4>
            <p>Cade made the final edits for this post prototype. In it, he added a few popular hashtags.</p>
        </>
    )},
    {id: 25, text: (
        <>
            <h4>Twitter revision:</h4>
            <p>Stephen made the final edits for this post prototype. There was minimal indication that the text needed changed in any way, so he mainly focused on improving the image. We received much feedback on this front. This revision factored in suggestions from our survey that the previous image looked unprofessional and messy. It also considered suggestions to make Sally look more real, including one that indicated she stands out more when her face is a dominant aspect of the image and another comment that suggested she looked like a "wax figure" instead of a real person.</p>
        </>
    )},
]} />

</>
     );
}

export default Prototype3;