import React, { useState } from 'react';

function SimpleTodoList() {
    const [data, setData] = useState([
        { para: "Learn React Hooks" },
        { para: "Master Onyx Black CSS" },
        { para: "Build a Weather App" },
        { para: "Practice Array Filtering" },
        { para: "Complete Todo Logic" }
    ]);

    const deleteTodo = (id) => {
        const filteredData = data.filter((_, i) => i !== id);
        setData(filteredData);
    };

    // --- Inline Style Objects ---
    const styles = {
        container: {
            backgroundColor: '#353935', // Onyx Black
            padding: '40px 20px',
            borderRadius: '15px',
            maxWidth: '600px',
            margin: '20px auto',
            boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
            border: '1px solid #484d48',
            color: '#ffffff',
            textAlign: 'center'
        },
        header: {
            fontSize: '2.5rem',
            marginBottom: '30px',
            color: '#4caf50', // Accent Green
            letterSpacing: '1px'
        },
        todoItem: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: '#28282b',
            padding: '12px 20px',
            margin: '10px 0',
            borderRadius: '10px',
            border: '1px solid #484d48',
            transition: '0.3s'
        },
        text: {
            fontSize: '1.1rem',
            margin: 0,
            color: '#e0e0e0'
        },
        deleteBtn: {
            backgroundColor: '#f44336',
            color: 'white',
            border: 'none',
            padding: '6px 15px',
            borderRadius: '6px',
            cursor: 'pointer',
            fontSize: '0.9rem',
            fontWeight: 'bold',
            transition: 'background 0.2s'
        }
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.header}>Simple Todos</h1>
            
            {data.length > 0 ? (
                data.map((value, ind) => (
                    <div key={ind} style={styles.todoItem}>
                        <p style={styles.text}>{value.para}</p>
                        <button 
                            style={styles.deleteBtn} 
                            onClick={() => deleteTodo(ind)}
                            onMouseOver={(e) => e.target.style.backgroundColor = '#d32f2f'}
                            onMouseOut={(e) => e.target.style.backgroundColor = '#f44336'}
                        >
                            Delete
                        </button>
                    </div>
                ))
            ) : (
                <p style={{color: '#8fa18f', fontStyle: 'italic'}}>No tasks left! Great job.</p>
            )}
        </div>
    );
}

export default SimpleTodoList;