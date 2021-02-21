import React from "react";
import * as Survey from "survey-react";
import "survey-react/survey.css";
import "./styles.css";
import firebase from "firebase";

let defaultThemeColors = Survey
    .StylesManager
    .ThemeColors["modern"];
defaultThemeColors["$main-color"] = "#e91d1d";
defaultThemeColors["$main-hover-color"] = "#e40ff3";
defaultThemeColors["$text-color"] = "#000000";
defaultThemeColors["$header-color"] = "#7ff07f";

defaultThemeColors["$header-background-color"] = "#4a4a4a";
defaultThemeColors["$body-container-background-color"] = "#ec9d9d";

Survey
    .StylesManager
    .applyTheme();

class SurveyPage extends React.Component {
    constructor(props) {
        super(props);
        this.onComplete = this.onComplete.bind(this);

    }
    json = {
        "pages": [
            {
                "name": "page1",
                "elements": [
                    {
                        "type": "rating",
                        "name": "Rock",
                        "title": "Rock Music",
                        "isRequired": true,
                        "minRateDescription": "Don't enjoy at all",
                        "maxRateDescription": "Enjoy very much"
                    },
                    {
                        "type": "rating",
                        "name": "Classical music",
                        "title": "Classical Music",
                        "isRequired": true,
                        "minRateDescription": "Don't enjoy at all",
                        "maxRateDescription": "Enjoy very much"
                    },
                    {
                        "type": "rating",
                        "name": "Romantic",
                        "title": "Romantic Movies",
                        "isRequired": true,
                        "minRateDescription": "Don't enjoy at all",
                        "maxRateDescription": "Enjoy very much"
                    },
                    {
                        "type": "rating",
                        "name": "Cars",
                        "title": "Cars",
                        "isRequired": true,
                        "minRateDescription": "Not Interested",
                        "maxRateDescription": "Very Interested"
                    },
                    {
                        "type": "rating",
                        "name": "Celebrities",
                        "title": "Celebrity lifestyle",
                        "isRequired": true,
                        "minRateDescription": "Not Interested",
                        "maxRateDescription": "Very Interested"
                    },
                    {
                        "type": "rating",
                        "name": "Art exhibitions",
                        "title": "Art",
                        "isRequired": true,
                        "minRateDescription": "Not Interested",
                        "maxRateDescription": "Very Interested"
                    },
                    {
                        "type": "rating",
                        "name": "Theatre",
                        "title": "Theatre",
                        "isRequired": true,
                        "minRateDescription": "Not Interested",
                        "maxRateDescription": "Very Interested"
                    },
                    {
                        "type": "rating",
                        "name": "Musical instruments",
                        "title": "Playing musical instruments",
                        "isRequired": true,
                        "minRateDescription": "Not Interested",
                        "maxRateDescription": "Very Interested"
                    },
                    {
                        "type": "rating",
                        "name": "Law",
                        "title": "Law",
                        "isRequired": true,
                        "minRateDescription": "Not Interested",
                        "maxRateDescription": "Very Interested"
                    },
                    {
                        "type": "rating",
                        "name": "Dance",
                        "title": "Dancing",
                        "isRequired": true,
                        "minRateDescription": "Not Interested",
                        "maxRateDescription": "Very Interested"
                    },
                    {
                        "type": "rating",
                        "name": "Science and technology",
                        "title": "Science and technology",
                        "isRequired": true,
                        "minRateDescription": "Not Interested",
                        "maxRateDescription": "Very Interested"
                    },
                    {
                        "type": "rating",
                        "name": "Physics",
                        "title": "Physics",
                        "isRequired": true,
                        "minRateDescription": "Not Interested",
                        "maxRateDescription": "Very Interested"
                    },
                    {
                        "type": "rating",
                        "name": "Foreign languages",
                        "title": "Foreign languages",
                        "isRequired": true,
                        "minRateDescription": "Not Interested",
                        "maxRateDescription": "Very Interested"
                    },
                    {
                        "type": "rating",
                        "name": "Reliability",
                        "title": "I am reliable at work and always complete all tasks given to me",
                        "isRequired": true,
                        "minRateDescription": "Strongly disagree",
                        "maxRateDescription": "Strongly agree"
                    },
                    {
                        "type": "rating",
                        "name": "Decision making",
                        "title": "I take my time to make decisions.",
                        "isRequired": true,
                        "minRateDescription": "Strongly disagree",
                        "maxRateDescription": "Strongly agree"
                    },
                    {
                        "type": "rating",
                        "name": "Movies",
                        "title": "I really enjoy watching movies",
                        "isRequired": true,
                        "minRateDescription": "Strongly disagree",
                        "maxRateDescription": "Strongly agree"
                    },
                    {
                        "type": "rating",
                        "name": "Elections",
                        "title": "I always try to vote in elections",
                        "isRequired": true,
                        "minRateDescription": "Strongly disagree",
                        "maxRateDescription": "Strongly agree"
                    },
                    {
                        "type": "rating",
                        "name": "Self-criticism",
                        "title": "I often think about and regret the decisions I make.",
                        "isRequired": true,
                        "minRateDescription": "Strongly disagree",
                        "maxRateDescription": "Strongly agree"
                    },
                    {
                        "type": "rating",
                        "name": "Hypochondria",
                        "title": "I am a hypochondriac",
                        "isRequired": true,
                        "minRateDescription": "Strongly disagree",
                        "maxRateDescription": "Strongly agree"
                    },
                    {
                        "type": "rating",
                        "name": "Judgment calls",
                        "title": "I can tell if people listen to me or not when I talk to them.",
                        "isRequired": true,
                        "minRateDescription": "Strongly disagree",
                        "maxRateDescription": "Strongly agree"
                    },
                    {
                        "type": "rating",
                        "name": "Empathy",
                        "title": "I am empathetic person.",
                        "isRequired": true,
                        "minRateDescription": "Strongly disagree",
                        "maxRateDescription": "Strongly agree"
                    },
                    {
                        "type": "rating",
                        "name": "Eating to survive",
                        "title": "I eat because I have to. I don't enjoy food and eat as fast as I can.",
                        "isRequired": true,
                        "minRateDescription": "Strongly disagree",
                        "maxRateDescription": "Strongly agree"
                    },
                    {
                        "type": "rating",
                        "name": "Giving",
                        "title": "I try to give as much as I can to other people at Christmas.",
                        "isRequired": true,
                        "minRateDescription": "Strongly disagree",
                        "maxRateDescription": "Strongly agree"
                    },
                    {
                        "type": "rating",
                        "name": "Compassion to animals",
                        "title": "I don't like seeing animals suffering.",
                        "isRequired": true,
                        "minRateDescription": "Strongly disagree",
                        "maxRateDescription": "Strongly agree"
                    },
                    {
                        "type": "rating",
                        "name": "Borrowed stuff",
                        "title": "I look after things I have borrowed from others.",
                        "isRequired": true,
                        "minRateDescription": "Strongly disagree",
                        "maxRateDescription": "Strongly agree"
                    },
                    {
                        "type": "rating",
                        "name": "Loneliness",
                        "title": "I feel lonely in life.",
                        "isRequired": true,
                        "minRateDescription": "Strongly disagree",
                        "maxRateDescription": "Strongly agree"
                    },
                    {
                        "type": "rating",
                        "name": "Cheating in school",
                        "title": "I used to cheat at school.",
                        "isRequired": true,
                        "minRateDescription": "Strongly disagree",
                        "maxRateDescription": "Strongly agree"
                    },
                    {
                        "type": "rating",
                        "name": "Health",
                        "title": "I worry about my health.",
                        "isRequired": true,
                        "minRateDescription": "Strongly disagree",
                        "maxRateDescription": "Strongly agree"
                    },
                    {
                        "type": "rating",
                        "name": "Changing the past",
                        "title": "I wish I could change the past because of the things I have done.",
                        "isRequired": true,
                        "minRateDescription": "Strongly disagree",
                        "maxRateDescription": "Strongly agree"
                    },
                    {
                        "type": "rating",
                        "name": "Appearence and gestures",
                        "title": "I am well mannered and I look after my appearance.",
                        "isRequired": true,
                        "minRateDescription": "Strongly disagree",
                        "maxRateDescription": "Strongly agree"
                    },
                    {
                        "type": "rating",
                        "name": "God",
                        "title": "I believe in God.",
                        "isRequired": true,
                        "minRateDescription": "Strongly disagree",
                        "maxRateDescription": "Strongly agree"
                    },
                    {
                        "type": "rating",
                        "name": "Dreams",
                        "title": "I always have good dreams.",
                        "isRequired": true,
                        "minRateDescription": "Strongly disagree",
                        "maxRateDescription": "Strongly agree"
                    },
                    {
                        "type": "rating",
                        "name": "Charity",
                        "title": "I always give to charity.",
                        "isRequired": true,
                        "minRateDescription": "Strongly disagree",
                        "maxRateDescription": "Strongly agree"
                    },
                    {
                        "type": "rating",
                        "name": "Number of friends",
                        "title": "I have lots of friends.",
                        "isRequired": true,
                        "minRateDescription": "Strongly disagree",
                        "maxRateDescription": "Strongly agree"
                    },
                    {
                        "type": "rating",
                        "name": "Prioritising workload",
                        "title": "I try to do tasks as soon as possible and not leave them until last minute.",
                        "isRequired": true,
                        "minRateDescription": "Strongly disagree",
                        "maxRateDescription": "Strongly agree"
                    },
                    {
                        "type": "rating",
                        "name": "Storm",
                        "title": "Thunder, lightning",
                        "isRequired": true,
                        "minRateDescription": "Not afraid at all",
                        "maxRateDescription": "Very afraid of"
                    },
                    {
                        "type": "rating",
                        "name": "Rats",
                        "title": "Rats, mice",
                        "isRequired": true,
                        "minRateDescription": "Not afraid at all",
                        "maxRateDescription": "Very afraid of"
                    },
                    {
                        "type": "rating",
                        "name": "Flying",
                        "title": "Flying",
                        "isRequired": true,
                        "minRateDescription": "Not afraid at all",
                        "maxRateDescription": "Very afraid of"
                    },
                    {
                        "type": "rating",
                        "name": "Darkness",
                        "title": "Darkness",
                        "isRequired": true,
                        "minRateDescription": "Not afraid at all",
                        "maxRateDescription": "Very afraid of"
                    }
                ],
                "title": "Questionnaire"
            }
        ],
        "showCompletedPage": false,
        "navigateToUrl": "profile"
    }
    ;

    //Define a callback methods on survey complete
    onComplete(survey, options) {
        //Write survey results into database
/*        const db = firebase.firestore();

        if(localStorage.getItem("user")){
            db.collection("users").doc(localStorage.getItem("user")).set({
                survey: JSON.stringify(survey.data)
            }).then((docRef) => {
                console.log("success adding")
            })
                .catch((error) => {
                    console.error("Error adding user: ", error);
                });
            ;
        }*/
    }
    render() {

        let model = new Survey.Model(this.json);
        return (<Survey.Survey model={model} onComplete={this.onComplete}/>);
    }
}
export default SurveyPage;