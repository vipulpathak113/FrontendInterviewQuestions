import './Star.css'

export default function Star() {

  return (
    <>
      <h1 className="text-center mt-2 text-4xl">Star Rating</h1>
      <div className="star-container">
        {[...new Array(5)].map((item,index) => (
          <span tabIndex={1} className='star' key={index}>&#9733;</span>
        ))}
      </div>
    </>
  );
}
