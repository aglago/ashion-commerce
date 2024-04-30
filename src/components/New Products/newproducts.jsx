import ProductCard from './productcard';
import products from './products';

export default function NewProducts() {
    return (
        <section className="pt-16 pb-16 px-5 lg:p-20">
            <div className="flex flex-col gap-5 md:flex-row items-start justify-between pb-10">
                <div>
                    <h1 className="uppercase text-xl font-bold"><span className="border-b-2 border-borderColor">New </span>Product</h1>
                </div>
            
                <div>
                    <ul className="flex gap-2 lg:gap-5 text-gray-600 text-[15px] md:text-[20px]">
                        <li className="border-b-2 border-borderColor">All</li>
                        <li>Women&apos;s</li>
                        <li>Men&apos;s</li>
                        <li>Kid&apos;s</li>
                        <li>Accessories</li>
                        <li>Cosmetics</li>
                    </ul>
                </div>
            </div>
      
            <div className="flex gap-2 flex-wrap justify-center items-center">
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
