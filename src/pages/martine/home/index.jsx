import React, { useState } from 'react';
import Image from 'react-bootstrap/Image';
import img1 from '../../../images/Group 1.png';
import ScrollingComponent from '../../../components/scrollContainer';
import ScrollingTrio from '../../../components/trippleScroll';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
//import SantaHatEffect from '../santaHat';

export default function MartineHomeScreen() {

    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState('');
    const [selectedCard, setSelectedCard] = useState(null);

    const cardMessages = [
        'Mamma? Nja, det kan diskuteres! 🤔',
        'Mormor? Godt forslag, men kanskje ikke helt riktig! 😅',
        'Martine? Spot on, selvfølgelig er det deg! 🎉 Da kan du gå opp å sjekke under horeputa! Nei unnskyld, hodeputa! (Ekstra gøy siden hore betyr puta?)'
    ];

    const handleCardClick = (message, cardId) => {
        setSelectedCard(cardId); // Marker kortet som valgt
        setModalMessage(message); // Sett meldingen
        // Forsink åpningen av modalen
        setTimeout(() => {
            setShowModal(true);
        }, 300); // 800ms forsinkelse (tilpass etter animasjonslengde)
    };

    const handleModalClose = () => {
        setShowModal(false);
        setSelectedCard(null);
    };

    return(
        <div className="col-12 appearing-container d-flex flex-column align-items-center pb-5">
            <div className="h1 mt-5">
                God jul ditt rævhøl!
            </div>
            <div className="col-12">
                <Image src={img1} fluid alt="Du er bitch" />
            </div>
            <ScrollingComponent containerName="container1">
                <div className="mt-5 text-center col-10 m-auto">
                    <h3>Siden du ønsker deg noe kjedelig får du få det på en artig måte.</h3>
                </div>
            </ScrollingComponent>
            <ScrollingComponent containerName="container2">
                <div className="mt-t text-center col-10 m-auto">
                    <h3>Nemlig i form av et skatteQuizKart!</h3>
                </div>
            </ScrollingComponent>
            <ScrollingComponent containerName="container3">
                <div className="mt-t text-center col-10 m-auto">
                    La oss begynne:
                </div>
            </ScrollingComponent>
            <ScrollingComponent containerName="container5">
                <div className="mt-t text-center">
                    <h2>
                        Speil speil på veggen der, hvem er den største hoen i landet her?
                    </h2>
                </div>
            </ScrollingComponent>
            <ScrollingComponent containerName="container4">
                    <ScrollingTrio containerName="trio1">
                    {['Mamma', 'Mormor', 'Martine'].map((name, index) => (
                        <div
                            key={index}
                            className={`card shadow ${
                                selectedCard === index ? 'spinning-card' : ''
                            } card-question mt-5`}
                            onClick={() =>
                                handleCardClick(cardMessages[index], index)
                            }
                        >
                            <div className="card-body">
                                <h5 className="card-title text-center">
                                    {['A', 'B', 'C'][index]}
                                </h5>
                                <p className="card-text text-center">{name}</p>
                            </div>
                        </div>
                    ))}
                    </ScrollingTrio>
            </ScrollingComponent>
            <div className="filler">
            </div>
            <Modal show={showModal} onHide={handleModalClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Resultat</Modal.Title>
                </Modal.Header>
                <Modal.Body>{modalMessage}</Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleModalClose}>
                        Lukk
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

