import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./Link.css"

export function Link({ icon, text, url }) {
    return (
        <a href={url || "#"} target="_blank" rel="noreferrer" className="link">
            <span className="icon">
                <FontAwesomeIcon icon={icon} />
            </span>
            <span className="link-text">
                {text}
            </span>
        </a>
    );
}