import { Card } from 'react-bootstrap'
import { formatCurrency } from '../utilities/formatCurrency'
import { Button } from 'react-bootstrap'
import { useShoppingCart } from '../context/ShoppingCartContext'

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
  description: string;
  category: string;
  rating: number;
};

export function StoreItem ({ id, name, price, imgUrl, description, rating, category }: StoreItemProps) {
  const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart } = useShoppingCart()
  const quantity = getItemQuantity(id)
  return (
    <Card className='h-100'>
      <Card.Img
        variant='top'
        height='200px'
        src={imgUrl}
        style={{ objectFit: 'cover' }}
      />
      <Card.Body className='d-flex flex-column'>
        <Card.Title className='d-grip align-items-baseline mb-4 d-grip'>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            {description}
          </Card.Text>
          <Card.Text>
            {formatCurrency(price)}
          </Card.Text>
          <Card.Text>
            {rating}⭐
          </Card.Text>
          <Card.Text>
            {category}
          </Card.Text>
        </Card.Title>

        <div className='mt-auto'>
          {quantity === 0 ? (
            <Button onClick={() => increaseCartQuantity(id)} className='w-100 btn-dark'>+ Añadir al carrito</Button>
          ) : (
            <div
              className='d-flex align-items-center
          flex-column'
              style={{ gap: '.5rem' }}
            >
              <div
                className='d-flex align-items-center justify-content-center'
                style={{ gap: '.5rem' }}
              >
                <Button className='btn-outline-dark btn-light' onClick={() => decreaseCartQuantity(id)}>-</Button>
                <span className='fs-3'>{quantity}</span>En el carrito
                <Button className='btn-outline-dark btn-light' onClick={() => increaseCartQuantity(id)}>+</Button>
              </div>
              <Button onClick={() => removeFromCart(id)} variant='danger' size='sm'>Eliminar</Button>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  )
}