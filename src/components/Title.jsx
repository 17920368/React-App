import "../style/style.css";
import blusa from "../images/products/blusa.jpeg";
import mezcal from "../images/products/mezcal.jpg";
import molcajete from "../images/products/molcajete.jpeg";
function ProductCard(props) {
  return (
    <div className="container">
      <img src={props.image} alt={props.name} className="container-image" />
      <h2 className="container-name">{props.name}</h2>
      <p className="container-description">{props.description}</p>
      <p className="container-price">{props.price}</p>
      <button
        className="container-button"
        style={{ backgroundColor: props.color }}
      >
        {" "}
        AGREGAR AL CARRITO
      </button>
    </div>
  );
}
export const Product = () => {
  return (
    <>
      <div className="flex-container">
        <ProductCard
          image={blusa}
          name="GARNIER"
          description="LoremLoremLoremLorem"
          price="$600"
          color="blue"
        />
        <ProductCard
          image={mezcal}
          name="GARNIER"
          description="LoremLoremLoremLorem"
          price="$600"
          color="orange"
        />
        <ProductCard
          image={molcajete}
          name="GARNIER"
          description="LoremLoremLoremLorem"
          price="$600"
          color="cyan"
        />
        <ProductCard
          image={molcajete}
          name="GARNIER"
          description="LoremLoremLoremLorem"
          price="$600"
          color="cyan"
        />
        <ProductCard
          image={molcajete}
          name="GARNIER"
          description="LoremLoremLoremLorem"
          price="$600"
          color="cyan"
        />
        <ProductCard
          image={molcajete}
          name="GARNIER"
          description="LoremLoremLoremLorem"
          price="$600"
          color="cyan"
        />
        <ProductCard
          image={molcajete}
          name="GARNIER"
          description="LoremLoremLoremLorem"
          price="$600"
          color="cyan"
        />
        <ProductCard
          image={molcajete}
          name="GARNIER"
          description="LoremLoremLoremLorem"
          price="$600"
          color="cyan"
        />
        <ProductCard
          image={molcajete}
          name="GARNIER"
          description="LoremLoremLoremLorem"
          price="$600"
          color="cyan"
        />
        <ProductCard
          image={molcajete}
          name="GARNIER"
          description="LoremLoremLoremLorem"
          price="$600"
          color="cyan"
        />
        <ProductCard
          image={molcajete}
          name="GARNIER"
          description="LoremLoremLoremLorem"
          price="$600"
          color="cyan"
        />
        <ProductCard
          image={molcajete}
          name="GARNIER"
          description="LoremLoremLoremLorem"
          price="$600"
          color="cyan"
        />
        <ProductCard
          image={molcajete}
          name="GARNIER"
          description="LoremLoremLoremLorem"
          price="$600"
          color="cyan"
        />
        <ProductCard
          image={molcajete}
          name="GARNIER"
          description="LoremLoremLoremLorem"
          price="$600"
          color="cyan"
        />
      </div>
    </>
  );
};
// function Welcome(props) {
//   return <h1>Hello, {props.name}</h1>;
// }

// const Title = () => {
//   return (
//     <>
//       <div className="App-header">
//         <Welcome className="App" name="Sara" />
//         <Welcome className="App" name="Cahal" />
//         <Welcome className="App" name="Victor" />
//       </div>
//     </>
//   );
// };
// export default Title;
// export default Product;
