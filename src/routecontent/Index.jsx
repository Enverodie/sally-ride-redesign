import { useContext } from "react";
import { ImagePoolContext } from "../contexts/ImagePoolContext";
import ImageSeed from "../images/ImageSeed";
import { Helmet } from "react-helmet";

export const ROUTE = '/';
export const TITLE_SHORT = "Home";
export const TITLE = "Sally Ride: An Innovator in STEM";

function Index() {

    const imagePoolContext = useContext(ImagePoolContext);
    imagePoolContext.clearImagePool(0);
    imagePoolContext.clearImagePool(1);

    return ( 
        <>
<Helmet>
    <title>Sally Ride Project - Home</title>
</Helmet>
<h2>The First American Woman in Space</h2>
<p>Sally Ride was the first American woman in space. As expected by the title, she had to overcome numerous challenges throughout her time in the space program and especially finding her way into the field.</p>

<ImageSeed imageID={0} imagePoolNumber={0} maxBreakpoint={"Mobile"} />

<p>Most notably NASA selected her and 34 others out of around 8000 applicants to take part in the 1978 astronaut class; the first to include women. Alongside her, only 5 other women were selected for the program, and ultimately only her and four other male astronauts flew in the Challenger shuttle, making her the first American woman in space.</p>

<ImageSeed imageID={1} imagePoolNumber={1} maxBreakpoint={"Mobile"} />

<p>Not only is training in the astronaut program a difficult task, but to do so alongside the societal expectations for women not to do so, or not to be capable of doing so, make her accomplishments more remarkable.</p>

<ImageSeed imageID={2} imagePoolNumber={0} maxBreakpoint={"Mobile"} />

<p>Her time at NASA gave her a few opportunities to progress the STEM field. For one, she helped develop the robot arm for the Challenger. She also served on the investigation board after both the Challenger and Columbia accidents, learning how such disasters can be corrected in future missions.</p>

<ImageSeed imageID={3} imagePoolNumber={1} maxBreakpoint={"Mobile"} />

<p>More importantly, she became a physics professor at the University of California, San Diego. She later founded Sally Ride Science, a company to promote STEM literacy among young people, especially on girls and minorities. She wrote five children's books about space.</p>

<ImageSeed imageID={4} imagePoolNumber={0} maxBreakpoint={"Mobile"} />

<p>Ride is underrepresented in the STEM field not only because she was a woman, but, as became well-known after her passing, she was also LGBT. She had been in a romantic relationship with her business partner Tam O'Shaughnessy for 27 years before her death.</p>

<h2>Why Sally Ride?</h2>
<p>We think Sally Ride is a great example to showcase women in STEM for the State Department and for the whole world, because her story demonstrates her own excellence and drive to succeed, while also highlighting an important idea we feel has been neglected: that women have been at the forefront of our country’s development forever. While they have faced discrimination and prejudice for generations, they have continued pressing forward despite their obstacles and have been a part of the greatest moments in American innovation. Showcasing Sally Ride reminds us that women have been here since the beginning, and it's time for them to come to the forefront, rather than be hidden away.</p>
        </>
     );
}

export default Index;