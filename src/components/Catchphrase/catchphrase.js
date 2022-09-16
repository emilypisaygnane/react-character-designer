import '../Catchphrase/catchphrase.css';

export default function Catchphrase({
  setCatchphrase,
  currentCatchphrase,
  setCurrentCatchphrase,
}) {
  const handleSaveCatchphrase = () => {
    setCatchphrase((prevCatchphrases) => [...prevCatchphrases, currentCatchphrase]);
    setCurrentCatchphrase('');
  };
  return (
    <div className="catchphrase">
      <label>Positive Affirmation:</label>
      <textarea 
        value={currentCatchphrase}
        onChange={(e) => setCurrentCatchphrase(e.target.value)}
      ></textarea>
      <button onClick={handleSaveCatchphrase}>Save Your Affirmation</button>
    </div>
  );
}