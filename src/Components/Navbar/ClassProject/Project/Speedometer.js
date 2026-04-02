import React, { useState } from 'react';

function Speedometer() {
    const [speed, setSpeed] = useState(0);

    const speedincrement = () => {
        (speed >= 200 ? alert("Maximum speed reached!") : setSpeed(pre => pre + 10));
    };

    const speeddecrement = () => {
        (speed === 0 ? alert("Speed is already 0 mph") : setSpeed(pre => pre - 10));
    };

    // --- Inline Style Objects ---
    const styles = {
        container: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '20px',
            minHeight: '400px',
            fontFamily: 'Arial, sans-serif'
        },
        card: {
            backgroundColor: '#353935', // Onyx Black
            border: '1px solid #484d48',
            borderRadius: '20px',
            padding: '30px',
            width: '100%',
            maxWidth: '400px',
            textAlign: 'center',
            boxShadow: '0 15px 35px rgba(0, 0, 0, 0.5)',
            color: '#ffffff'
        },
        title: {
            fontSize: '1.8rem',
            letterSpacing: '2px',
            marginBottom: '20px',
            color: '#ffffff'
        },
        imageWrapper: {
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '20px'
        },
        image: {
            width: '150px',
            height: 'auto',
            filter: 'drop-shadow(0 0 8px rgba(76, 175, 80, 0.4))'
        },
        speedText: {
            fontSize: '1.4rem',
            margin: '10px 0'
        },
        speedNumber: {
            color: '#4caf50', // Green Glow
            fontSize: '2.5rem',
            fontWeight: 'bold',
            display: 'block'
        },
        limitText: {
            color: '#8fa18f',
            fontSize: '0.9rem',
            marginBottom: '25px'
        },
        buttonGroup: {
            display: 'flex',
            gap: '10px',
            justifyContent: 'center'
        },
        btnBase: {
            padding: '12px 20px',
            border: 'none',
            borderRadius: '8px',
            fontWeight: 'bold',
            cursor: 'pointer',
            flex: 1,
            transition: '0.2s'
        },
        btnAccel: {
            backgroundColor: '#4caf50',
            color: 'white'
        },
        btnBrake: {
            backgroundColor: '#f44336',
            color: 'white'
        }
    };

    return (
        <div style={styles.container}>
            <div style={styles.card}>
                <h1 style={styles.title}>SPEEDOMETER</h1>
                
                <div style={styles.imageWrapper}>
                    <img 
                        src="./images/Speedometer.png" 
                        alt="Gauge" 
                        style={styles.image} 
                    />
                </div>

                <div style={styles.speedText}>
                    Speed is 
                    <span style={styles.speedNumber}>{speed} mph</span>
                </div>
                
                <p style={styles.limitText}>
                    Min: 0mph | Max: 200mph
                </p>
                
                <div style={styles.buttonGroup}>
                    <button 
                        style={{...styles.btnBase, ...styles.btnAccel}} 
                        onClick={speedincrement}
                    >
                        Accelerate
                    </button>
                    <button 
                        style={{...styles.btnBase, ...styles.btnBrake}} 
                        onClick={speeddecrement}
                    >
                        Apply Brake
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Speedometer;