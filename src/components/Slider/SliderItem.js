export default function SliderItem({ item, index, currentSlide }) {
  return (
    <>
      <div className={index === currentSlide ? "slide current" : "slide"}>
        <div className="content">
          <h1>{item.title}</h1>
          <p>{item.content}</p>
        </div>
      </div>
    </>
  );
}
