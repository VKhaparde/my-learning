import React from 'react';
import ReactDOM from 'react-dom';
class Search extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <form action="">
        <input type="text" placeholder="Search..."
          value={this.props.filterText}
          onChange={(event) => {
            this.props.filterTextChange(event.target.value);
          }} />
        <p>
          <input type="checkbox" value={this.props.inStockOnly}
            onChange={(event) => {
              this.props.handleInStockOnlyChange(event.target.value);
            }} />
          {" "}
          Only show products in stock
      </p>
      </form>
    );
  }
}

class ProductTable extends React.Component {
  render() {
    const products = this.props.products;
    let filterText = this.props.filterText;
    let inStockOnly = this.props.inStockOnly;
    let rows = products.filter((current)=>{
      return current.name.includes('filterText');
    })
    return (
      <table style = {{"border" : "2px solid brown"}}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{}</tbody>
      </table>
    );
  }
}

export default class FilterableProductTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inStockOnly: false,
      filterText: " "
    };
    this.products = [
      { category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football' },
      { category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball' },
      { category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball' },
      { category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch' },
      { category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5' },
      { category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7' }
    ];
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleInStockOnlyChange = this.handleInStockOnlyChange.bind(this);
  }
  handleFilterTextChange(newText) {
    this.setState({
      filterText: newText
    });
  }
  handleInStockOnlyChange(newValue) {
    this.setState({
      inStockOnly: newValue
    });
  }
  render() {
    return (
      <div>
        <h3>Filterable ProductTable Demo </h3>
        <Search
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
          filterTextChange={this.handleFilterTextChange}
          inStockOnlyChange={this.handleInStockOnlyChange} />
        <ProductTable
          products={this.products}
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly} />
      </div>
    );
  }
}
