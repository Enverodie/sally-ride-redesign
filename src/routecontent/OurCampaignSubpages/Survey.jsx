import GenericButton from "../../buttons/GenericButton";

export const ROUTE = '/OurCampaign/Survey';
export const TITLE_SHORT = "Survey";

function Survey() {
    return ( 
<>
<h3>Overview:</h3>
<p>Tate distributed our survey using Mechanical Turk, an Amazon-provided survey distribution service. He transferred a survey we previously designed in Google Forms to IU's approved survey tool Qualtrics. This allowed us to ensure that all of our survey respondents were unique. We collected data for our write-up from October 14 to October 18. You can view the write-up below, or download the survey dissemination details pdf below.</p>
<b>In order to protect respondents' data, we have NOT included the data or cleaned data for public viewership.</b>
<GenericButton src="https://sms10.pages.iu.edu/i101/project/distributables/srvy/survey_dissemination_v2.pdf" target="_blank">Download Survey PDF</GenericButton>
<h3>Write-up:</h3>
<p>For our data cleaning, we did not need to use any VLOOKUP columns. We used a boolean lookup column to sort the number of total responses to the racial demographics question vs. the number of selections, because a decent number of people belonged to multiple racial/ethnic groups. We used lookup columns to strip text from our Likert scale questions, butwe used the Excel primitives LEFT and VALUE to get viable data.</p>
<p>We used COUNTIFS to determine the number of each qualitative response to relevant questions (demographics, social media use, post preferences) and then compared them to the total number of responses for that question to determine the percentage makeup of each option(we had several incomplete responses to our survey, so we had to determine the total response count for each question individually.)</p>
<p>We did not find it necessary to use any translation maps to clean our data. TheCOUNTIF function allowed us to directly count and average text based responses. We created a few basic charts showing an initial breakdown of age, gender, and racial demographics for our responses.</p>
<GenericButton src="https://sms10.pages.iu.edu/i101/project/distributables/srvy/Data_Cleaning_Write_Up.pdf" target="_blank">Download Write Up PDF</GenericButton>
<h3>Survey:</h3>
<p>You can find the original survey, and the Qualtrics survey, at the links below.</p>
<div style={{display: 'flex', width: '100%'}}>
    <GenericButton src="https://bit.ly/sallyridesurvey" target="_blank">Google Forms survey</GenericButton>
    <GenericButton src="https://iu.co1.qualtrics.com/jfe/form/SV_1KSKfQIKLLUcSO1" target="_blank">Qualtrics survey</GenericButton>
</div>
</>
     );
}

export default Survey;