import GenericButton from "../../buttons/GenericButton";
import MultipleImageSelectorDescription from "../../images/MultipleImageSelectorDescription";

export const ROUTE = '/OurCampaign/DataAnalysis';
export const TITLE_SHORT = "Data Analysis";

function DataAnalysis() {
    return ( 
<>
<h3>Overview:</h3>
<p>Tate analyzed the data we received, and put them in excel charts. You can view some of these charts below.</p>
<MultipleImageSelectorDescription images={[
    {id: 26, text: (
        <>
            <h4>Demographics: Age</h4>
            <p>A column graph representing the percentage of survey respondents indicated as being a part of select age categories.</p>
        </>
    )},
    {id: 27, text: (
        <>
            <h4>Demographics: Gender</h4>
            <p>A column graph representing the percentage of survey respondents' gender.</p>
        </>
    )},
    {id: 28, text: (
        <>
            <h4>Demographics: Minority Status</h4>
            <p>A column graph representing the percentage of survey respondents indicated as being in a minority.</p>
        </>
    )},
    {id: 29, text: (
        <>
            <h4>Demographics: Race</h4>
            <p>A column graph representing the percentage of survey respondents indicated as being a particular race.</p>
        </>
    )},
]} />

</>
     );
}

export default DataAnalysis;