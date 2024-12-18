import styles from "./styles/textCardStyle.module.css"
import { FaExternalLinkAlt } from "react-icons/fa";


interface TextCardProps {
    bodyText: string | React.ReactNode
    headerText: string
    boxHeaderText: string
    boxBodyText: string
    boxPosition: 'left' | 'right'
    buttonText?: string
    hasButton?: boolean
    textHasButton?: boolean
    textAreaButtonText?: string
}


type BoxProps = {
    position: 'left' | 'right';
    children: React.ReactNode;
    hasButton?: boolean
};

const PositionedBox = ({ position, children, hasButton }: BoxProps) => {
    return (
        <div className={`${styles[position]} ${hasButton ? styles.differentColor : styles.positionedBox}`}>
            {children}
        </div>
    );
};

function NewLineText(text: string) {
    const newText = text.split('\n').map(str => <p>{str}<br/></p>);
    return newText
}

// Usage Example
export default function TextCardSmall(props: TextCardProps) {
    return (
            <div className={styles.container}>
                <div className={styles.textSection}>
                    <h2 style={{ marginBottom: '25px' }}>{props.headerText}</h2>
                    <p>
                        {props.bodyText}
                    </p>
                    {props.textHasButton ? <div className={styles.cardLink}>
                        <div className={styles.cardLinkText}>{props.textAreaButtonText}</div>
                    </div> : null}
                </div>
                <PositionedBox position={props.boxPosition} hasButton={props.hasButton}>
                    <h2>{props.boxHeaderText}</h2>
                    <p>{NewLineText(props.boxBodyText)}</p>
                    {props.hasButton ? <div className={styles.cardLink}>
                        <div className={styles.cardLinkText}><FaExternalLinkAlt/> {props.buttonText}</div>
                    </div> : null}
                </PositionedBox>
            </div>
    );
}