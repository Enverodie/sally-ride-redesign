import GenericButton from "../../buttons/GenericButton";
import MultipleImageSelectorDescription from "../../images/MultipleImageSelectorDescription";

import '../../tables.scss';

export const ROUTE = '/OurCampaign/DataAnalysis';
export const TITLE_SHORT = "Data Analysis";

function DataAnalysis() {
    return ( 
<>
<h3>Overview:</h3>
<p>Tate analyzed the data we received, and put them in excel charts. You can view some of these charts below.</p>
<p>To know which post number corresponds to which post, please refer to the post prototype 2 google doc. The data references these posts in descending order with the top post revision in each social media section corresponding to #1, and the bottom corresponding to #4.</p>
<GenericButton src="https://docs.google.com/document/d/1HOKbrR1L3noCvCcGEZWJtRV6_Qg1uLCNaDslDf7vdds/edit?usp=sharing" target="_blank">View Google Doc</GenericButton>
<h3>Data Visualization Write-up:</h3>
<p>Our Data Studio chart/pivot tables show us how relatable and interesting our social media campaign is to people across different demographic groups. The first shows how relatable different ethnicities find Sally Ride and our hashtag, and the second shows which posts each age group likes the most, which can help us understand how to appeal to our target audience. </p>
<p>We found Excel to be most streamlined for creating simple charts breaking down the demographics of our survey. I made a couple charts to see what ages, genders, and race/ethnicity groups we got responses from. This is a good way to understand how diverse and varied the perspectives we have collected are.</p>
<p>Both the quantitive data on our social media posts, and some qualitative responses we got from our survey showed which textand images people responded to the most. This feedback will allow us to take the best parts of each post and combine them into a few highly refined posts which should be the most successful.</p>
<h3>Social Media Posts Aggregate Rankings:</h3>
<AggregateTable />
<h3>Survey Demographics:</h3>
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

function AggregateTable() {
    // yes I know this data shouldn't be hardcoded - but it's never going to change, so ¯\_(ツ)_/¯
    return (
        <table className="AggregateTable">
            <TableFacebook />
            <TableInstagram />
            <TableTwitter />	 	
        </table>
 	)
}

function TableFacebook() {
    return (
        <tbody className="aggregateRanking facebook">
            <tr>
                <th>Facebook</th>
                <th>POST</th>
                <th>COUNT</th>
                <th>PERCENT</th>
            </tr>
            <tr>
                <td>MOST EDUCATIONAL</td>
                <td>1</td>
                <td>99</td>
                <td>42.13%</td>
            </tr>
            <tr>
                <td>LEAST EDUCATIONAL</td>
                <td>2</td>
                <td>102</td>
                <td>43.40%</td>
            </tr>
            <tr>
                <td>MOST ENJOYABLE</td>
                <td>1</td>
                <td>70</td>
                <td>29.79%</td>
            </tr>
            <tr>
                <td>LEAST ENJOYABLE</td>
                <td>2</td>
                <td>82</td>
                <td>34.89%</td>
            </tr>
        </tbody>
    )
}

function TableTwitter() {
    return (
        <tbody className="aggregateRanking twitter">
            <tr>
                <th>Twitter</th>
                <th>POST</th>
                <th>COUNT</th>
                <th>PERCENT</th>
            </tr>
            <tr>
                <td>MOST INTERESTING</td>
                <td>3</td>
                <td>89</td>
                <td>34.50%</td>
            </tr>
            <tr>
                <td>LEAST INTERESTING</td>
                <td>1</td>
                <td>80</td>
                <td>31.01%</td>
            </tr>
            <tr>
                <td>MOST ENTERTAINING</td>
                <td>1</td>
                <td>75</td>
                <td>29.07%</td>
            </tr>
            <tr>
                <td>LEAST ENTERTAINING</td>
                <td>1</td>
                <td>73</td>
                <td>28.29%</td>
            </tr>
        </tbody>
    );
}

function TableInstagram() {
    return (
        <tbody className="aggregateRanking instagram">
            <tr>
                <th>Instagram</th>
                <th>POST</th>
                <th>COUNT</th>
                <th>PERCENT</th>
            </tr>
            <tr>
                <td>MOST EDUCATIONAL</td>
                <td>2</td>
                <td>89</td>
                <td>36.48%</td>
            </tr>
            <tr>
                <td>LEAST EDUCATIONAL</td>
                <td>1</td>
                <td>105</td>
                <td>43.03%</td>
            </tr>
            <tr>
                <td>MOST ENJOYABLE</td>
                <td>2</td>
                <td>89</td>
                <td>36.48%</td>
            </tr>
            <tr>
                <td>LEAST ENJOYABLE</td>
                <td>1</td>
                <td>86</td>
                <td>35.25%</td>
            </tr>
        </tbody>
    );
}

export default DataAnalysis;