import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function ProductCard({ productId, title, subtitle, content }) {
  return (
    <Card style={{ width: '18rem', marginBottom: '20px' }}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{subtitle}</Card.Subtitle>
        <Card.Text>{content}</Card.Text>
        <Link to={`/product/${productId}`} className="card-link">View Details</Link>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
