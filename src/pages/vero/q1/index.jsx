import React, { useState } from 'react';
import Image from 'react-bootstrap/Image';
import img1 from '../../../images/IMG_7639.JPG';
import ScrollingComponent from '../../../components/scrollContainer';
import ScrollingTrio from '../../../components/trippleScroll';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
//import SantaHatEffect from '../santaHat';

export default function VeroScreen() {

    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState('');
    const [selectedCard, setSelectedCard] = useState(null);

    const cardMessages = [
        'Neeiiiiii skatt, ikkja skaaaa',
        'Yyyyy vi ska, men det var ikkja gavana',
        'Vi skal, og han gleder seg masse og har oppgradera billettene til Plussa og skal betale hotellet også❤️❤️❤️❤️❤️❤️ wiiiiiiiii'
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
                God jul min kjære
            </div>
            <div className="col-12 mb-5">
                <Image src={img1} fluid alt="Du er bitch" />
            </div>
            <ScrollingComponent containerName="container5">
                <div className="mt-t text-center">
                    <h2>
                        Kor vi ska reisa i januara?
                    </h2>
                </div>
            </ScrollingComponent>
            <ScrollingComponent containerName="container4">
                    <ScrollingTrio containerName="trio1">
                    {['🇹🇷 Til tyrkia og fiksa rumpana våra 🇹🇷', '🇸🇪 Til Sveriga og handla 🇸🇪', '🇫🇷 På kjærlighetsreise til Parisaaa 🇫🇷'].map((name, index) => (
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