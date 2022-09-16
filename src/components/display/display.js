import '../Display/display.css'

export default function Display({ topCount, bottomCount, shoeCount, catchphrases }) {
  return (
    <div className="display">
      <p>You have changed your top ${topCount} times, so fab 
         you have switched out your bottoms ${bottomCount} times, 
         and changed your shoes ${shoeCount} times. LOVE IT! 
         Lastly, do not forget about your positive affirmation before you leave.
      </p>
      <h3>Your Positive Affirmation:</h3>
      <ul>
        {/* {catchphrases.map((catchphrase) => (
          <li key={catchphrase}>{catchphrase}</li> */}
        ))}
      </ul>
    </div>
  );
}