import MultipleImageSelector from "../../images/MultipleImageSelector";

export const ROUTE = '/OurCampaign/PostPlanning';
export const TITLE_SHORT = "Post Planning";

function PostPlanning() {
    return ( 
<>
<h3>Overview:</h3>
<p>This part of the project consisted of creating first drafts of each social media post. We did this by creating six draft posts per group member, two for each social media platform (Facebook, Instagram, Twitter). These images were submitted to our team Discord server. All the submissions can be found below in platform order.</p>
<MultipleImageSelector images={[5,6, 7, 8, 9, 10]}>
    <h4>Facebook</h4>
</MultipleImageSelector>
<MultipleImageSelector images={[11, 12, 13, 14, 15, 16]}>
    <h4>Instagram</h4>
</MultipleImageSelector>
<MultipleImageSelector images={[17, 18, 19, 20, 21, 22]}>
    <h4>Twitter</h4>
</MultipleImageSelector>
</>
     );
}

export default PostPlanning;