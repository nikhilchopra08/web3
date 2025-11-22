import { useState } from 'react'
import { generateMnemonic } from "bip39";
import { SolanaWallet } from './SolanaWallet';

function App() {
  const [mnemonic, setmnemonic] = useState("");

  const styles = {
    container: {
      minHeight: '100vh',
      minWidth: '100vw',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    },
    card: {
      backgroundColor: 'white',
      borderRadius: '16px',
      boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
      padding: '40px',
      maxWidth: '600px',
      width: '100%',
      textAlign: 'center'
    },
    title: {
      fontSize: '32px',
      fontWeight: '700',
      color: '#2d3748',
      marginBottom: '30px',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text'
    },
    button: {
      backgroundColor: '#667eea',
      color: 'white',
      border: 'none',
      borderRadius: '8px',
      padding: '14px 32px',
      fontSize: '16px',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      boxShadow: '0 4px 15px rgba(102, 126, 234, 0.4)',
      marginBottom: '30px'
    },
    buttonHover: {
      backgroundColor: '#5568d3',
      transform: 'translateY(-2px)',
      boxShadow: '0 6px 20px rgba(102, 126, 234, 0.6)'
    },
    mnemonicContainer: {
      backgroundColor: '#f7fafc',
      borderRadius: '12px',
      padding: '24px',
      marginTop: '20px',
      border: '2px solid #e2e8f0'
    },
    mnemonicTitle: {
      fontSize: '18px',
      fontWeight: '600',
      color: '#4a5568',
      marginBottom: '16px',
      textAlign: 'left'
    },
    mnemonicText: {
      backgroundColor: 'white',
      border: '1px solid #cbd5e0',
      borderRadius: '8px',
      padding: '16px',
      fontSize: '14px',
      lineHeight: '1.8',
      color: '#2d3748',
      wordBreak: 'break-word',
      textAlign: 'left',
      fontFamily: 'monospace'
    }
  };

  const [isHovered, setIsHovered] = useState(false);

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>Crypto Wallet Generator</h1>
        
        <button
          style={{
            ...styles.button,
            ...(isHovered ? styles.buttonHover : {})
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={async function() {
            const mn = await generateMnemonic();
            setmnemonic(mn);
          }}
        >
          Create Seed Phrase
        </button>

        {mnemonic && (
          <div style={styles.mnemonicContainer}>
            <div style={styles.mnemonicTitle}>Your Seed Phrase</div>
            <div style={styles.mnemonicText}>
              {mnemonic}
            </div>
          </div>
        )}

        {mnemonic && <SolanaWallet mnemonic={mnemonic} />}
      </div>
    </div>
  );
}

export default App;