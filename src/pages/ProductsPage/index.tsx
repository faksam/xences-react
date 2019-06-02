// import libraries
import * as React from 'react';

// third-party libraries
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// styles
import './ProductsPage.scss';

// components
import {
  Checkbox,
  Col,
  Collapsible,
  CollapsibleItem,
  Collection,
  CollectionItem,
  Row
} from 'react-materialize';
import ProductCard from '../../components/ProductCard';

// interfaces

// helper functions

// fixtures
import { brands, colors } from '../../store/modules/brands/fixtures';
import { categories } from '../../store/modules/categories/fixtures';
import { menClothings, products } from '../../store/modules/products/fixtures';

export class ProductsPage extends React.Component<any, any> {
  constructor(props) {
    super(props);

    const { match } = props;
  }
  render() {
    const { match, location } = this.props;
    const catHeader = location.pathname;
    let splitCatHeader = catHeader.split('/');
    const categoryName = splitCatHeader[1];
    if (splitCatHeader.length > 2) {
      splitCatHeader = `${splitCatHeader[1].toUpperCase()} ${splitCatHeader[2].toUpperCase()}`;
    } else {
      splitCatHeader = splitCatHeader[1].toUpperCase();
    }
    return (
      <React.Fragment>
        <Row>
          <Col s={4}>
            <Collapsible accordion>
              <CollapsibleItem header={splitCatHeader} className="active">
                <Collection>
                  {menClothings.map(clothing => (
                    <CollectionItem key={`${clothing.name}-${clothing.id}`}>
                      <Link to={`${match.url}/clothing/${clothing.name.toLowerCase().replace(/\s/g, '')}`}>
                        {clothing.name}
                      </Link>
                    </CollectionItem>
                  ))}
                </Collection>
              </CollapsibleItem>
              <CollapsibleItem header={`${categoryName.toUpperCase()}`} icon="games">
                <Collection>
                  {categories.map(category => (
                    <CollectionItem key={`${category.name}-${category.id}`}>
                      <Link to={`${match.url}/${category.name.toLowerCase().replace(/\s/g, '')}`}>
                        {categoryName.charAt(0).toUpperCase() + categoryName.slice(1)} {category.name}
                      </Link>
                    </CollectionItem>
                  ))}
                </Collection>
              </CollapsibleItem>
            </Collapsible>
            <Collapsible>
              <CollapsibleItem header="PRICE">
              </CollapsibleItem>
            </Collapsible>
            <Collection header="BRAND">
              {brands.map(brand => (
                <CollectionItem key={`${brand.name}-${brand.id}`}>
                  <Checkbox label={brand.name} value={brand.name} />
                </CollectionItem>
              ))}
            </Collection>
            <Collection header="COLORS">
              {colors.map(color => (
                <CollectionItem key={`${color.name}-${color.id}`}>
                  <Checkbox label={color.name} value={color.name} />
                </CollectionItem>
              ))}
            </Collection>
          </Col>
          <Col s={8}>
            <ProductCard {...{ products }} />
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default ProductsPage;
