import { useState } from "react";

function ProductCategroyRow({ category }) {
  return (
    <tr>
      <th colSpan="2">{category}</th>
    </tr>
  );
}

function ProductRow({ product }) {
  const name = product.stocked ? (
    product.name
  ) : (
    <span style={{ color: "red" }}>{product.name}</span>
  );

  return (
    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>
  );
}

function ProductTable({ products, filterText, inStockOnly }) {
  const rows = [];
  let lastCategory = null;

  products.forEach((product) => {
    if (product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
      return;
    }
    if (inStockOnly && !product.stocked) {
      return;
    }
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategroyRow
          category={product.category}
          key={product.category}
        />
      );
    }
    rows.push(<ProductRow product={product} key={product.name} />);
    lastCategory = product.category;
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

function SearchBar({
  filterText,
  inStockOnly,
  onFilterTextChange,
  onInStockOnlyChange,
}) {
  return (
    <form>
      <input
        type="text"
        value={filterText}
        placeholder="Search..."
        onChange={(e) => onFilterTextChange(e.target.value)}
      />{" "}
      <br />
      <label>
        <input
          type="checkbox"
          checked={inStockOnly}
          onChange={(e) => onInStockOnlyChange(e.target.checked)}
        />
        Only show products in stock
      </label>
    </form>
  );
}

function FilterableProductTable({ products }) {
  const [filterText, setFilterText] = useState("");
  const [inStockOnly, setInStockOnly] = useState(false);
  return (
    <section className="centered-content about-section">
      <div>
        <SearchBar
          filterText={filterText}
          inStockOnly={inStockOnly}
          onFilterTextChange={setFilterText}
          onInStockOnlyChange={setInStockOnly}
        />
        <ProductTable
          products={products}
          filterText={filterText}
          inStockOnly={inStockOnly}
        />
      </div>
    </section>
  );
}

const PRODUCTS = [
  { category: "Panes", price: "$10", stocked: true, name: "Dulces de Nono" },
  { category: "Panes", price: "$4", stocked: true, name: "Pastel de guayaba" },
  { category: "Panes", price: "$5", stocked: false, name: "Pastel de coco" },
  { category: "Tipos de café", price: "$2", stocked: true, name: "Expresso" },
  { category: "Tipos de café", price: "$4", stocked: false, name: "Capuchino" },
  { category: "Tipos de café", price: "$5", stocked: true, name: "Frapuchino" },
  { category: "Croquetas", price: "$10", stocked: true, name: "Croqueta Bros" },
  { category: "Croquetas", price: "$4", stocked: false, name: "Sorpresa" },
  { category: "Croquetas", price: "$5", stocked: true, name: "Cubana" },
];

export default function Apps() {
  return <FilterableProductTable products={PRODUCTS} />;
}
