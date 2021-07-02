import './WelcomeBanner.css';
import MenuButton from './MenuButton';

const WelcomeBanner = (props: any) => {

    let sparkTitle = props.userName === "" ? "Welcome to the Community!" : `Welcome to the Community, ${props.userName}!`

    return (
        <div className="welcomeBanner__container">
            <div className="sparkTitle">{sparkTitle}</div>
            <div className="sparkMissionStatement">
                Tech Start's community page helps University of Calgary students stay up to date with the latest news in
                technology and startups. We've partnered with the Hunter Hub to show news and events from within the University
                and from abroad.
                In the "See what people are saying" section, you can post your ideas, projects, requests, and connect with othe
                students. It's a great way to find projects, collaborators, or make connections with like-minded students!
            </div>
            {props.userName === "" && <MenuButton text={"Sign in"} showPost={props.showPost} showSignIn={props.showSignIn} />};
        </div>
    );
}

export default WelcomeBanner;