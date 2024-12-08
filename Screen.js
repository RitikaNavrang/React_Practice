import {Products} from './Data';
import React, { useState } from'react';

function OuterBlock({ data }) 
{
    const [filterText, setFilterText] = useState('');
    const [inStockOnly, setInStockOnly] = useState(false);
    return(
    <>
        <SearchBar filterText = {filterText} inStockOnly={inStockOnly} onFilterTextChange={setFilterText} onInStockOnlyChange={setInStockOnly}/>
        <ProductTable products={data} filterText = {filterText} inStockOnly={inStockOnly}/>
    </>
    );
}

function SearchBar({filterText, inStockOnly, onFilterTextChange, onInStockOnlyChange})
{
    return (
        <>
        <input type="text" placeholder="Search..." value={filterText} onChange={(e) => onFilterTextChange(e.target.value)}/><br/>
        <label>
        <input type="checkbox" value={inStockOnly} onChange={(e) => onInStockOnlyChange(e.target.checked)}/> 
        {' '} Show Filtered Data...
        </label>
        </>
    );
}

function ProductCategoryRow({category})
{
    return(<>
        <tr>
            <th colSpan={2}>
                {category}
            </th>
        </tr>
    </>);
}

function ProductRow({product})
{
    return (<>
        <tr>
            <td>{product.name}</td>
            <td>{product.price}</td>
        </tr>
    </>);
}

function ProductTable({products, filterText, inStockOnly})
{
    const rows = [];
    let lastCategory = null;
    
    products.forEach((product) => {
        if(product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1)
        {
            return;
        }
        if(inStockOnly && !product.stocked)
        {
            return ;
        }
        if (product.category !== lastCategory) {
          rows.push(
            <ProductCategoryRow
              category={product.category}
              key={product.category} />
          );
        }
        rows.push(
          <ProductRow
            product={product}
            key={product.name} />
        );
            lastCategory = product.category;
    });

    return(<>
    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Price</th>
            </tr>
        </thead>
        <tbody>
            {rows}
        </tbody>
    </table>
    </>);
}

export default function Screen()
{
    return (
        <OuterBlock data = {Products}/>
    );
}