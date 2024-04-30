import ProductCard from './productcard';
import products from './products';

export default function NewProducts() {
    return (
        <section className="py-20  px-20">
            <div className="flex items-center justify-between pb-10">
                <div>
                    <h1 className="uppercase text-xl font-bold"><span className="border-b-2 border-borderColor">New </span>Product</h1>
                </div>
            
                <div>
                    <ul className="flex gap-5 text-gray-600">
                        <li className="border-b-2 border-borderColor">All</li>
                        <li>Women&apos;s</li>
                        <li>Men&apos;s</li>
                        <li>Kid&apos;s</li>
                        <li>Accessories</li>
                        <li>Cosmetics</li>
                    </ul>
                </div>
            </div>
      
            <div className="flex gap-2 flex-wrap">
                {
                    products.map((product, index) => {
                        return (
                            <ProductCard 
                                key={index}
                                productImage={product.image}
                                productDescriptions={product.description}
                                productPrice={product.price}
                            />
                        )
                    })
                }
            </div>
    </section>
  )
}
