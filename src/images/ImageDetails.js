/**
 * ImageDetails.js collects and associates various metadata 
 * with images available throughout the website.
 */

import Img1 from './index_images/sr1.jpg';
import Img2 from './index_images/sr2.jpg';
import Img3 from './index_images/sr3.jpg';
import Img4 from './index_images/sr4.jpg';
import Img5 from './index_images/sr5.jpg';

import fc1 from './campaign_images/post_planning/fc1.png';
import fc2 from './campaign_images/post_planning/fc2.png';
import fs1 from './campaign_images/post_planning/fs1.png';
import fs2 from './campaign_images/post_planning/fs2.png';
import ft1 from './campaign_images/post_planning/ft1.png';
import ft2 from './campaign_images/post_planning/ft2.png';

import ic1 from './campaign_images/post_planning/ic1.png';
import ic2 from './campaign_images/post_planning/it2.png';
import is1 from './campaign_images/post_planning/is1.png';
import is2 from './campaign_images/post_planning/it2.png';
import it1 from './campaign_images/post_planning/it1.png';
import it2 from './campaign_images/post_planning/it2.png';

import tc1 from './campaign_images/post_planning/tc1.png';
import tc2 from './campaign_images/post_planning/tc2.png';
import ts1 from './campaign_images/post_planning/ts1.png';
import ts2 from './campaign_images/post_planning/ts2.png';
import tt1 from './campaign_images/post_planning/tt1.png';
import tt2 from './campaign_images/post_planning/tt2.png';

import irf from './campaign_images/revision_3/facebook_prototype_3.png';
import iri from './campaign_images/revision_3/instagram_prototype3.png';
import irt from './campaign_images/revision_3/twitter_prototype3.png';

import demographicsage from './campaign_images/data_analysis/age.jpg';
import demographicsgender from './campaign_images/data_analysis/gender.jpg';
import demographicsminority from './campaign_images/data_analysis/minstat.jpg';
import demographicsrace from './campaign_images/data_analysis/race.jpg';

/**
 * Object constructor that stores all image metadata
 * @param {*} src The image associated with a file
 * @param {*} alt The alt description for the image
 * @returns Object representing the image
 */
export function ImageDetail(src, alt, details) {
    return new (function() {
        this.src = src;
        this.alt = alt;
        this.details = details;
    })();
}

// Image ID corresponds to the index in the array
const ImageDetails = [
    ImageDetail(Img1, "Sally Ride in spacecraft", "Sally Ride during the STS-7 mission in 1983"),
    ImageDetail(Img2, "A rocket with attached space shuttle", "The Challenger mission"),
    ImageDetail(Img3, "Sally posing with crew in front of space shuttle image", "Sally & crew"),
    ImageDetail(Img4, "Sally behind a podium smiling", "Sally at a science festival"),
    ImageDetail(Img5, "Tam speaking into a microphone in front of a projector showing Sally smiling", "Tam O'Shaughnessy"),
    ImageDetail(fc1, '', 'Cade Facebook 1'), // id: 5
    ImageDetail(fc2, '', 'Cade Facebook 2'),
    ImageDetail(fs1, '', 'Stephen Facebook 1'),
    ImageDetail(fs2, '', 'Stephen Facebook 2'),
    ImageDetail(ft1, '', 'Tate Facebook 1'),
    ImageDetail(ft2, '', 'Tate Facebook 2'), // id: 10
    ImageDetail(ic1, '', 'Cade Instagram 1'),
    ImageDetail(ic2, '', 'Cade Instagram 2'),
    ImageDetail(is1, '', 'Stephen Instagram 1'),
    ImageDetail(is2, '', 'Stephen Instagram 2'),
    ImageDetail(it1, '', 'Tate Instagram 1'), // id: 15
    ImageDetail(it2, '', 'Tate Instagram 2'),
    ImageDetail(tc1, '', 'Cade Twitter 1'),
    ImageDetail(tc2, '', 'Cade Twitter 2'),
    ImageDetail(ts1, '', 'Stephen Twitter 1'),
    ImageDetail(ts2, '', 'Stephen Twitter 2'), // id: 20
    ImageDetail(tt1, '', 'Tate Twitter 1'),
    ImageDetail(tt2, '', 'Tate Twitter 2'),
    ImageDetail(irf, '', 'Facebook revision'),
    ImageDetail(iri, '', 'Instagram revision'),
    ImageDetail(irt, '', 'Twitter revision'), // id: 25
    ImageDetail(demographicsage, '', 'Age'),
    ImageDetail(demographicsgender, '', 'Gender'),
    ImageDetail(demographicsminority, '', 'Minority Status'),
    ImageDetail(demographicsrace, '', 'Race'),
]

export default ImageDetails;