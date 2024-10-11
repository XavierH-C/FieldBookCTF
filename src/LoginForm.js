import React, { useState, useEffect } from 'react';
import './LoginForm.css';
import backgroundImage from './login.png'; // Import your image file

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Secret message revealed in the console if the user answers correctly
  useEffect(() => {
    const secretQuestion = () => {
      const answer = prompt('Solve this riddle: What has keys but can’t open locks?');
      if (answer && answer.toLowerCase() === 'keyboard') {
        console.log('Congratulations! The list of usernames are:');
        console.log('Username: picketayear4');
      } else {
        console.log('Incorrect answer! Think a little then try again by refreshing the page.');
      }
    };
    window.secretQuestion = secretQuestion;
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const validUsername = 'picketayear4';
    const validPassword = 'chocolatemilk';

    if (email !== validUsername || password !== validPassword) {
      setErrorMessage('Nuh uh. Try again.');
      return;
    }

    setErrorMessage('');
    alert('SYSTEM ACCESS --- NEXT CLUE: -66.643416485771, +45.96004941385844');
    setEmail('');
    setPassword('');
  };

  return (
    <div className="login-container">
      <div className="left-section" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <h1>Welcome to Picketer Systemes</h1>
        <p>Guess your crop, Grow some thing</p>
      </div>
      <div className="right-section">
        <div className="login-form">
          <h2>Sign to in Fieldbook™</h2>
          {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '1rem' }}>
              <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem' }}>Username:</label>
              <input
                type="text"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc' }}
                required
              />
            </div>
            <div style={{ marginBottom: '1rem' }}>
              <label htmlFor="password" style={{ display: 'block', marginBottom: '0.5rem' }}>Password:</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc'}}
                required
              />
            </div>
            <a
                href="https://youtu.be/NW2UTLoBW2k?si=V-g9xstNUvDPsgFZ"
                style={{ width: '100%', padding: '0.5rem', margin: '300px 0', borderRadius: '4px', color: 'black', textDecoration: 'none' }}
                >Forgot Password?</a>
            <button type="submit" className="login-button">
              Login?
            </button>

                <div>
                    <div>
                        <div>
                            <div>
                                <div>
                                    <div>
                                        <div>
                                            <div>
                                                <div>
                                                    <div style={{ width: '0', height: '0', color: 'transparent'}}>
                                                        Top Secret Database
                                                        <div>
                                                            Password: chocolatemilk
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
