export default function Display({ headCount, bodyCount, bottomCount }) {
  return (
    <div className="display">
      <p>You have changed the head ${headCount} times, 
         the body ${bodyCount} times,
         and the pants ${bottomCount} times. 
         And nobody can forget your character's classic catchphrases:
      </p>
    </div>
  );
}