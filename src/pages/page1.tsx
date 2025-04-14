import LogoTopLeft from "../components/logo_topleft.tsx";
import BackgroundSquares from "../components/background_squres.tsx";
import './page1.css';
import {useState} from "react";
import { group_text } from "../utils/images.ts";

const Page1 = () => {
    const [step, setStep] = useState<number>(0);
    const [viewStep, setViewStep] = useState<number>(0);
    const [shouldFadeOut, setShouldFadeOut] = useState<boolean>(false);

    const step1 =
        <>
            <BackgroundSquares/>
            <div className="center-text">
                <div className="justify-center-wide">
                    This project began with a simple archive:
                    <br/>
                    <br/>
                    the text messages between myself and a person from my past.</div>
                <br/>
            </div>
        </>

    const step2 =
        <>
            <BackgroundSquares/>
            <div className="center-text">
                <div className="justify-center-wide">Untangling emotions can be really difficult,</div>
                <br/>
                <div className="justify-center">parsing data can be a bit easier.</div>
                <br/>
            </div>
        </>

    const step3 =
        <>
            <BackgroundSquares/>
            <div className="center-text">
                <div className="justify-center-wide">
                    What emerged was an experiment in digital haunting—
                    <br/><br/>
                    a Large Language Model (LLM) trained on our correspondence
                    <br/><br/>
                    to generate words we never wrote,
                </div>
                <br/>
                <br/>
                <div className="justify-center-wide">the conversations we might have had.</div>
            </div>
        </>

    const step4 =
        <>
            <BackgroundSquares/>
            <div className="center-text">
                <div className="justify-center-wide">
                    As a séance in code, this project takes
                    <br/><br/>
                    the corpus of a failed romance:
                    <br/><br/>
                </div>
                <br/>
                <div className="justify-center-wide">
                    texts brittle with longing,
                    <br/><br/>
                    coarse from unresolved fights
                </div>
                <br/>
                <br/>
                <div className="justify-center-wide">
                    and runs it through an LLM like a deck of tarot cards.
                </div>
            </div>
        </>


    const step5 =
        <>
            <BackgroundSquares/>
            <div className="center-text">
                <div className="justify-center-wide">Rather than a prediction, the output becomes a possession.</div>
                <br/>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '40vw',
                    alignItems: 'center'
                }}>
                    <img src={group_text} style={{maxWidth: '60%'}}/>
                </div>
            </div>

        </>


    const step6 =
        <>
            <BackgroundSquares/>
            <div className="center-text">
                <div className="justify-center-wide">
                    The machine spits back messages we might’ve written,
                    <br/><br/>
                    conversations we almost had,
                    <br/><br/>
                    alternate timelines where we were kinder, or crueler,
                </div>
                <br/>
                <br/>
                <div className="justify-center">or simply different.</div>
            </div>
        </>

    const step7 =
        <>
            <BackgroundSquares/>
            <div className="center-text">
                <div className="justify-center-wide">
                    It’s an electronic artefact of a relationship
                    <br/><br/>
                    transformed into a ouija board,
                </div>
                <br/><br/>
                <div className="justify-center">
                    where the cursor flickers between
                    <br/><br/>
                    <i>then</i> and <i>what if.</i>
                </div>
            </div>
        </>


    return <>
        <div className={`${shouldFadeOut ? 'fade-out-page' : 'fade-in-page'}`}>
            <LogoTopLeft/>
            <div className='next-button' onClick={() => {
                if(step<6) {
                    setStep(prevStep => prevStep+1);
                    setTimeout(() => {
                        setViewStep(prevViewStep => prevViewStep+1);
                    }, 400)
                } else {
                    setStep(prevStep => prevStep+1);
                    setTimeout(() => {
                        window.location.href = '/a-coded-epistolary/#gallery'
                    }, 400)
                }
            }}>
                next
            </div>
            {viewStep==0 &&
                <div className={step != 0 ? 'fade-out-page' : 'fade-in-page'}>
                    {step1}
                </div>
            }
            {viewStep==1 &&
                <div className={step != 1 ? 'fade-out-page' : 'fade-in-page'}>
                    {step2}
                </div>
            }
            {viewStep==2 &&
                <div className={step != 2 ? 'fade-out-page' : 'fade-in-page'}>
                    {step3}
                </div>
            }
            {viewStep==3 &&
                <div className={step != 3 ? 'fade-out-page' : 'fade-in-page'}>
                    {step4}
                </div>
            }
            {viewStep==4 &&
                <div className={step != 4 ? 'fade-out-page' : 'fade-in-page'}>
                    {step5}
                </div>
            }
            {viewStep==5 &&
                <div className={step != 5 ? 'fade-out-page' : 'fade-in-page'}>
                    {step6}
                </div>
            }
            {viewStep==6 &&
                <div className={step != 6 ? 'fade-out-page' : 'fade-in-page'}>
                    {step7}
                </div>
            }
        </div>
        <div className={`top-right-text-page1 ${shouldFadeOut ? 'fade-out-page' : 'fade-in-page'}`}>
            [<span className="clickable-text" onClick={() => {
            setShouldFadeOut(true);
            setTimeout(() => {
                window.location.href = '/a-coded-epistolary/#gallery'
            }, 400)
        }}><u>click here</u></span> to return to gallery]
        </div>
    </>
}

export default Page1;