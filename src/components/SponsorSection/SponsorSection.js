import SponsorLogo from "../SponsorLogo";
import sponsorLogoHunterHub from "images/sponsor-logo-hunter-hub.png";
import sponsorLogoArcurve from "images/sponsor-logo-arcurve.png";
import sponsorLogoUnity from "images/sponsor-logo-unity.png";
import sponsorLogoMicrosoft from "images/sponsor-logo-microsoft.png";
import '../../App.css';
import HoverButton from '../HoverButton/HoverButton';
import './SponsorSection.css';

const SponsorSection = () => {

    const SponsorsHeaderClasses = ["SponsorsHeader"];
    SponsorsHeaderClasses.push("chonkyHeading");

    return (
        <div className="homePage__container">
            <h2 className={SponsorsHeaderClasses.join(' ')}>Sponsors</h2>

            <div className="SponsorSection">
                <SponsorLogo sponsorLink="https://www.arcurve.com/" sponsorImage={sponsorLogoArcurve} />
                <SponsorLogo sponsorLink="https://www.ucalgary.ca/hunter-hub" sponsorImage={sponsorLogoHunterHub} />
                <div className="Grayscale">
                    <SponsorLogo sponsorLink="https://unity.com/" sponsorImage={sponsorLogoUnity} />
                </div>
                <div className="Grayscale">
                    <SponsorLogo sponsorLink="https://www.microsoft.com/" sponsorImage={sponsorLogoMicrosoft} />
                </div>
            </div>

            <HoverButton
                darkMode={true}
                link="#"
                text="Interested in sponsoring us? Check out our sponsorship package!"
            />

        </div>
    );
};

export default SponsorSection;