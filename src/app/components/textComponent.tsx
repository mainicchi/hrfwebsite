// TODO: create new component that will hold text and a picture, picture should be able to be on either left or right.
import Image from "next/image";
import styles from "./styles/textComponentStyle.module.css"

interface TextComponentProps {
    pictureOnRight: boolean
    containsLinkButton: boolean
}

export default function TextComponent(props: TextComponentProps) {
    return (
        props.pictureOnRight ?
            <div style={{ width: '100%', height: '100%', paddingLeft: 100, paddingRight: 100, paddingTop: 50, paddingBottom: 50, justifyContent: 'space-between', alignItems: 'flex-start', display: 'inline-flex' }}>
                <div style={{ flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 30, display: 'inline-flex' }}>
                    <div style={{ width: 682, color: 'black', fontSize: 48, fontFamily: 'Open Sans', fontWeight: '700', wordWrap: 'break-word' }}>Otsikko</div>
                    <div style={{ width: 682, color: 'black', fontSize: 20, fontFamily: 'Open Sans', fontWeight: '400', wordWrap: 'break-word' }}>Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque. Ut diam quam, semper iaculis condimentum ac, vestibulum eu nisl.<br /><br />Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque. Ut diam quam, semper iaculis condimentum ac, vestibulum eu nisl.<br /><br />Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque. Ut diam quam, semper iaculis condimentum ac, vestibulum eu nisl.</div>
                    {props.containsLinkButton ?
                        <div style={{ paddingLeft: 24, paddingRight: 24, paddingTop: 16, paddingBottom: 16, background: '#E72B26', borderRadius: 8, justifyContent: 'center', alignItems: 'center', gap: 8, display: 'inline-flex' }}>
                            <div style={{ textAlign: 'center', color: 'white', fontSize: 16, fontFamily: 'Open Sans', fontWeight: '400', wordWrap: 'break-word' }}>Button</div>
                        </div> : null}
                </div>
                <img style={{ width: 667, height: 629 }} src="https://via.placeholder.com/667x629" />
            </div>
            :
            <div style={{ width: '100%', height: '100%', paddingLeft: 100, paddingRight: 100, paddingTop: 50, paddingBottom: 50, justifyContent: 'space-between', alignItems: 'flex-start', display: 'inline-flex' }}>
                <img style={{ width: 667, height: 629 }} src="https://via.placeholder.com/667x629" />
                <div style={{ flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 30, display: 'inline-flex' }}>
                    <div style={{ width: 682, color: 'black', fontSize: 48, fontFamily: 'Open Sans', fontWeight: '700', wordWrap: 'break-word' }}>Otsikko</div>
                    <div style={{ width: 682, color: 'black', fontSize: 20, fontFamily: 'Open Sans', fontWeight: '400', wordWrap: 'break-word' }}>Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque. Ut diam quam, semper iaculis condimentum ac, vestibulum eu nisl.<br /><br />Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque. Ut diam quam, semper iaculis condimentum ac, vestibulum eu nisl.<br /><br />Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque. Ut diam quam, semper iaculis condimentum ac, vestibulum eu nisl.</div>
                    {props.containsLinkButton ?
                        <div style={{ paddingLeft: 24, paddingRight: 24, paddingTop: 16, paddingBottom: 16, background: '#E72B26', borderRadius: 8, justifyContent: 'center', alignItems: 'center', gap: 8, display: 'inline-flex' }}>
                            <div style={{ textAlign: 'center', color: 'white', fontSize: 16, fontFamily: 'Open Sans', fontWeight: '400', wordWrap: 'break-word' }}>Button</div>
                        </div> : null}
                </div>
            </div>
    );
}