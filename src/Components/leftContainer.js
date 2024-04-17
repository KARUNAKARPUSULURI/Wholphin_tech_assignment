import React, { useState } from 'react';
import { HeartOutlined, ShareAltOutlined, EyeOutlined, DownOutlined, LeftCircleOutlined, UpOutlined } from '@ant-design/icons';
import "../App.css";

const LeftContainer = () => {
    const [showFullDescription, setShowFullDescription] = useState(false);

    const toggleDescription = () => {
        setShowFullDescription(!showFullDescription);
    };

    const description = `Maitreya, the future Buddha to be, resides in the Tushita heaven as a bodhisattva waiting to redeem humanity. In Buddhism, Maitreya is the eighth Buddha, a successor of the seven historical Buddhas (sapta-manushi Buddhas). The Digha Nikaya mentions, Maitreya Buddha will be born in Ketumati, in present-day Varanasi, Uttar Pradesh. As a bodhisattva, Maitreya wears a heavily adorned with earrings, wristlets, necklaces, and an amulet. The`;

    const firstHalfDescription = description.slice(0, description.length / 2);
    const secondHalfDescription = description.slice(description.length / 2);

    return (
        <div className="left-container">
            <div className="back-icon">
                <LeftCircleOutlined style={{ fontSize: '34px', color: '#262626' }} />
            </div>
            <h1 className="heading">
                MAITREYA BUDDHA <br /> IN GESTURE OF <br /> FEARLESSNESS <br /> ( ABHAYA MUDRA )
            </h1>
            <div className="icons-container">
                <div className="icon-box">
                    <div className="icon">
                        <HeartOutlined />
                    </div>
                    <div className="icon-text">0</div>
                </div>
                <div className="icon-box">
                    <div className="icon">
                        <ShareAltOutlined />
                    </div>
                    <div className="icon-text">120</div>
                </div>
                <div className="icon-box">
                    <div className="icon">
                        <EyeOutlined />
                    </div>
                    <div className="icon-text">27</div>
                </div>
            </div>
            <div className="details">
                <p>Dynasty : Ahichchhatra</p>
                <p>Period : 200 CE</p>
                <p>Material : Sandstone</p>
                <p>Location : National Museum</p>
            </div>
            <div className="description">
                <h1>Description:</h1>
                <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400 }}>
                    {showFullDescription ? (
                        <>
                            {description}
                            <br />
                            <span className="read-more" onClick={toggleDescription} style={{ cursor: 'pointer', letterSpacing: '2px', color: '#B75210', marginTop: '10px' }}>
                                <UpOutlined style={{ fontSize: '12px', color: '#B75210', marginRight: '5px' }} />
                                Less
                            </span>
                        </>
                    ) : (
                        <>
                            {firstHalfDescription}...
                            <br />
                            {secondHalfDescription.length > 0 && !showFullDescription && (
                                <div style={{ marginTop: '10px' }}>
                                    <span className="read-more" onClick={toggleDescription} style={{ cursor: 'pointer', letterSpacing: '2px', color: '#B75210' }}>
                                        <DownOutlined style={{ fontSize: '12px', color: '#B75210', marginRight: '5px' }} />
                                        Read More
                                    </span>
                                </div>
                            )}
                        </>
                    )}
                </p>
            </div>
            <div className="buttons">
                <button className="btn-1">ADD TO COLLECTION</button>
                <button className="btn-2">SOUVENIR</button>
            </div>
        </div>
    );
}

export default LeftContainer;
