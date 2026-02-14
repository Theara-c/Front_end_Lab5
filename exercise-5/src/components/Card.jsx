export  function Card ({name, title, description, image:{src, alt}}){
  return(
    <>
    <div className="card">
    <img src= {src} alt= {alt}/>

    <h4>{name}</h4>
    <small> {title} </small>
    <p> {description}</p>
  </div>
    </>
    );
 }