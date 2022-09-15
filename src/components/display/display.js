export default function Display({ topCount, bottomCount, shoeCount }) {
  return (
    <div className="display">
      <p>You have changed the head ${topCount} times, 
         the body ${bottomCount} times,
         and the pants ${shoeCount} times. 
         And nobody can forget your character's classic catchphrases:
      </p>
    </div>
  );
}