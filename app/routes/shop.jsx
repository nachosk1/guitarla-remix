import { useOutletContext } from '@remix-run/react'
import { useEffect, useState } from 'react'
import { ClientOnly } from 'remix-utils'
import styles from '~/styles/shop.css'

export function links() {
    return [
        {
            rel: 'stylesheet',
            href: styles
        }
    ]
}

export function meta() {
    return {
        title: 'GuitarLA - Carrito de compras',
        description: 'Venta de guitarras, música, blog, carrito de compras, tienda'
    }
}

const Shop = () => {
    const [total, setTotal] = useState(0)
    const { shop, updateAmount, deleteGuitar } = useOutletContext()

    useEffect(() => {
        const calculationTotal = shop.reduce((total, product) => total + (product.amount * product.price), 0)
        setTotal(calculationTotal)
    }, [shop])
    return (
        <ClientOnly fallback={'cargando...'}>
            {() => (
                <main className="container">
                    <h1 className="heading">Carrito de compra</h1>
                    <div className="content">
                        <div className='shop'>
                            <h2>Articulos</h2>
                            {shop?.length === 0 ? "Carrito vacio" : (
                                shop?.map(product => (
                                    <div className='product' key={product.id}>
                                        <div>
                                            <img src={product.image} alt={`Imagen del producto ${product.name}`} />
                                        </div>
                                        <div>
                                            <p className='name'>{product.name}</p>
                                            <p>Cantidad:</p>
                                            <select className='select' value={product.amount} onChange={e => updateAmount({
                                                amount: +e.target.value,
                                                id: product.id
                                            })}>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                            </select>
                                            <p className='price'>$ <span>{product.price}</span></p>
                                            <p className='subtotal'>Subtotal: $<span>{product.amount * product.price}</span></p>
                                        </div>
                                        <button type='button' className='btn_delete' onClick={() => deleteGuitar(product.id)}>X</button>
                                    </div>
                                ))
                            )}
                        </div>
                        <aside className="summary">
                            <h3>Resumen del Pedido</h3>
                            <p>Total a pagar: ${total}</p>
                        </aside>
                    </div>

                </main>
            )}
        </ClientOnly>
    )
}

export default Shop
