import { useCart } from '../hooks/useCart'
import { useFilters } from '../hooks/useFilters'
import './Footer.css'

export default function Footer() {
  const { filters } = useFilters()


  return (
    <footer className='footer'>
        <h5>Shopping Cart con useContext & useReducer</h5>
    </footer>
  )
}
