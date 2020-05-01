import React from 'react';
import ReactDOM from 'react-dom';
class Search extends React.Component {
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
              this.props.inStockOnlyChange(event.target.value);
            }} />
          {" "}
          Only show products in stock
      </p>
      </form>
    );
  }
}

class ProductRow extends React.Component {
  render() {
    const name = this.props.stocked ? this.props.name : <span style={{ "color": "red" }}>{this.props.name}</span>;
    console.log('name',name)
    return (
      <tr style={{ "border": "2px solid brown" }}>
        <td>{name}</td>
        <td>{this.props.price}</td>
      </tr>
    );
  }
}
class ProductCategoryRow extends React.Component {
  render() {
    return (
      <tr>
        <th colSpan="2">{this.props.category}</th>
      </tr>
    );
  }
}
class ProductTable extends React.Component {
  render() {
    console.log('props', this.props);
    const products = this.props.products;
    let filterText = this.props.filterText.toLowerCase();
    let inStockOnly = this.props.inStockOnly;
    let rows = [];
    let prevCategory = null;
    products.forEach((currentVal, index) => {
      let nameLower = currentVal.name.toLowerCase();
      if (nameLower.indexOf(filterText) === -1) {
        return;
      }
      if (inStockOnly && !currentVal.stocked) {
        return;
      }
      if (currentVal.category !== prevCategory) {
        rows.push(
          <ProductCategoryRow key={currentVal.category}
            category={currentVal.category} />
        );
      }
      rows.push(
        <ProductRow
          key={index}
          name={currentVal.name}
          stocked={currentVal.stocked}
          price={currentVal.price}
          category={currentVal.category} />
      );
      prevCategory = currentVal.category
    })
    // if (!inStockOnly) {
    //   rows = products.filter((current) =>
    //     current.name.includes(filterText)
    //   );
    // }
    // else if (inStockOnly) {
    //   rows = products.filter((current) =>
    //     current.name.includes(filterText) && current.stocked
    //   );
    // }
    console.log('rows', rows);
    return (
      <table style={{ "border": "5px solid brown" }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {/* {rows.map((currentVal, index) => {
            return (
            <ProductRow key={index}
              name={currentVal.name}
              stocked={currentVal.stocked}
              price={currentVal.price}
              category={currentVal.category} />
            );
          })
          } */}
          {rows}
        </tbody>
      </table>
    );
  }
}

export default class FilterableProductTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inStockOnly: false,
      filterText: ""
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
    console.log('newValue of InStock', newValue);
    this.setState({
      inStockOnly: !this.state.inStockOnly
    });
  }
  render() {
    return (
      <div style={{ "backgroundColor": "powderblue" }}>
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
