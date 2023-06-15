import { GitHubIcon } from "../icons/github-icon";
import { InstaIcon } from "../icons/insta-icon";
import { LinkedInIcon } from "../icons/linkedin-icon";

import "./style.scss"


export function SocialBtns(){
    return(
        <div className="social">
            <a href="https://www.instagram.com/marcelinovitorgarcia/">
                <InstaIcon/>
            </a>
            <a href="https://www.linkedin.com/in/marcelino-garcia-na/">
                <LinkedInIcon/>
            </a>
            <a href="https://github.com/MarcelinoGarcia-NA">
                <GitHubIcon/>
            </a>
        </div>
    )
}