import { useState } from "react";
import GenericDropdown from "../../buttons/GenericDropdown";
import MultipleImageSelector from "../../images/MultipleImageSelector";

export const ROUTE = '/OurCampaign/PostPlanning';
export const TITLE_SHORT = "Post Planning";

function PostPlanning() {
    return ( 
<>
<h3>Overview:</h3>
<p>This part of the project consisted of creating first drafts of each social media post. We did this by creating six draft posts per group member, two for each social media platform (Facebook, Instagram, Twitter). These images were submitted to our team Discord server. All the submissions can be found below in platform order.</p>
<PostPreviewer />
</>
     );
}

function PostPreviewer() {

    const [ platformID, setPlatformID ] = useState(0);

    const postsFacebook = (
        <MultipleImageSelector images={[5, 6, 7, 8, 9, 10]}>
            <h4>Facebook</h4>
        </MultipleImageSelector>
    );
    const postsInstagram = (
        <MultipleImageSelector images={[11, 12, 13, 14, 15, 16]}>
            <h4>Instagram</h4>
        </MultipleImageSelector>
    );
    const postsTwitter = (
        <MultipleImageSelector images={[17, 18, 19, 20, 21, 22]}>
            <h4>Twitter</h4>
        </MultipleImageSelector>
    );

    return (
        <div style={{position: 'relative', zIndex: 5}}>
            <div style={{position: 'relative', zIndex: 2}}>
                <GenericDropdown options={['Facebook', 'Instagram', 'Twitter']} onOptionSelect={setPlatformID} />
            </div>
            <div style={{position: 'relative', zIndex: 1}}>
                {platformID === 0 && postsFacebook}
                {platformID === 1 && postsInstagram}
                {platformID === 2 && postsTwitter}
            </div>
        </div>
    )
}

export default PostPlanning;