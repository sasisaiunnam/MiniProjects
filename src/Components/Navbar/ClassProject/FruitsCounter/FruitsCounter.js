import React, { useState } from 'react';

function FruitsCounter() {
    const [mango, setMango] = useState(0);
    const [banana, setBanana] = useState(0);

    const eatMango = () => setMango(prev => prev + 1);
    const eatBanana = () => setBanana(prev => prev + 1);
    const handleReset = () => {
        setMango(0);
        setBanana(0);
    };

    // --- Inline Style Objects ---
    const styles = {
        card: {
            backgroundColor: '#353935', // Onyx Black
            border: '1px solid #484d48',
            borderRadius: '20px',
            padding: '30px',
            maxWidth: '500px',
            margin: '40px auto',
            textAlign: 'center',
            color: '#ffffff',
            boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
        },
        // This is the key to bringing images side by side
        imageRow: {
            display: 'flex',
            justifyContent: 'center', // Centers the pair
            alignItems: 'center',
            gap: '20px',             // Space between the two images
            marginBottom: '30px'
        },
        fruitWrapper: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        },
        image: {
            width: '120px',          // Fixed width for alignment
            height: '120px',
            objectFit: 'contain'
        },
        countDisplay: {
            fontSize: '1.5rem',
            marginBottom: '20px'
        },
        yellowText: {
            color: '#ffdb58',
            fontWeight: 'bold'
        },
        btnGroup: {
            display: 'flex',
            gap: '10px',
            justifyContent: 'center',
            marginBottom: '15px'
        },
        actionBtn: {
            padding: '10px 20px',
            borderRadius: '8px',
            border: 'none',
            backgroundColor: '#4caf50',
            color: 'white',
            cursor: 'pointer',
            fontWeight: 'bold',
            flex: 1
        },
        resetBtn: {
            background: 'none',
            border: '1px solid #484d48',
            color: '#8fa18f',
            padding: '8px 20px',
            borderRadius: '8px',
            cursor: 'pointer'
        }
    };

    return (
        <div style={styles.card}>
            <h2 style={styles.countDisplay}>
                Bob ate <span style={styles.yellowText}>{mango}</span> mangoes 
                & <span style={styles.yellowText}>{banana}</span> bananas
            </h2>

            {/* Side by Side Images Wrapper */}
            <div style={styles.imageRow}>
                <div style={styles.fruitWrapper}>
                    <img src="./images/Mango.png" alt="Mango" style={styles.image} />
                    <p style={{color: '#8fa18f', marginTop: '5px'}}>Mango</p>
                </div>
                
                <div style={styles.fruitWrapper}>
                    <img src="./images/Banana.png" alt="Banana" style={styles.image} />
                    <p style={{color: '#8fa18f', marginTop: '5px'}}>Banana</p>
                </div>
            </div>

            <div style={styles.btnGroup}>
                <button style={styles.actionBtn} onClick={eatMango}>Eat Mango</button>
                <button style={styles.actionBtn} onClick={eatBanana}>Eat Banana</button>
            </div>

            <button style={styles.resetBtn} onClick={handleReset}>Reset</button>
        </div>
    );
}

export default FruitsCounter;