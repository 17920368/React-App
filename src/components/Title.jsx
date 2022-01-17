import "../style/style.css";
import logo from "../logo.svg";

function ProductCard(props) {
  return (
    <div className="container">
      <img src={logo} alt="" />
      <h2 className="container-name">{props.name}</h2>
      <p className="container-description">{props.description}</p>
      <p className="container-price">{props.price}</p>
      <a href="www" className="container-button">
        ADD TO CARD
      </a>
    </div>
  );
}
export const Product = () => {
  return (
    <>
      <div className="flex-container">
        <ProductCard
          name="GARNIER"
          description="LoremLoremLoremLorem"
          price="$600"
        />
        <ProductCard
          name="GARNIER"
          description="LoremLoremLoremLorem"
          price="$600"
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
