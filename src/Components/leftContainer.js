import React from 'react';
import { HeartOutlined, ShareAltOutlined, EyeOutlined, RightOutlined, LeftCircleOutlined } from '@ant-design/icons';
import "../App.css";

const LeftContainer = () => {
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
                    Maitreya, the future Buddha to be, resides in the. Tushita heaven as a bodhisattva waiting to redeem humanity. In
                    Buddhism, Maitreya is the eighth Buddha, a successor of the seven historical Buddhas (sapta-manushi Buddhas). The
                    Digha Nikaya mentions, Maitreya Buddha will be born in Ketumati, in present-day Varanasi, Uttar Pradesh. As a
                    bodhisattva, Maitreya wears a heavily adorned with earrings, wristlets, necklaces, and an amulet. The
                </p>
                <div className="more">
                    <span style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, marginRight: '5px' }}>
                        <RightOutlined style={{ fontSize: '12px', color: '#B75210' }} />
                    </span>
                    <span style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, color: '#B75210', letterSpacing: '2px' }}>
                        READ MORE
                    </span>
                </div>
            </div>
            <div className="buttons">
                <button className="btn-1">ADD TO COLLECTION</button>
                <button className="btn-2">SOUVENIR</button>
            </div>
        </div>
    );
}

export default LeftContainer;
