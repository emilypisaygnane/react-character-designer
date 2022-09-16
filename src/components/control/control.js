import '../Control/control.js';

export default function Controls({
    top,
    setTop
    setTopCount,
}) {
    return (
        <div className='control'>
            <h1>Get Ready to Take on The Day!</h1>
            <label>Top</label>
            <select
                value={top} 
                onChange={(e) => {
                    setTop(e.target.value);
                    setTopCount((prevState) => prevState + 1);
                }}
                >
                <option default value="asymetrical-top">Black Asymetrical</option>
                <option default value="coral-top">Coral Halterneck</option>
                <option default value="olive-top">Olive Bustier</option>
            </select>
        </div>
    )
}