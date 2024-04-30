import PropTypes from 'prop-types';

export default function ProductCard({ productImage, productDescriptions, productPrice }) {
    return (
        <div className='relative mb-10'>
            <div className='overflow-hidden relative'>
                <img src={`/images/products/${productImage}.jpg.webp`} alt="product" className='w-[21rem] lg:w-[14rem] lg:h-[360px]' />
                <ProductOptions />
            </div>
            
            <div className="flex flex-col gap-3 items-center justify-center pt-5">
                <p>{productDescriptions}</p>
                <ul className='flex'>
                    <li><img src="/images/icons/star.png" alt="ratings icon" className='w-3 h-3' /></li>
                    <li><img src="/images/icons/star.png" alt="ratings icon" className='w-3 h-3' /></li>
                    <li><img src="/images/icons/star.png" alt="ratings icon" className='w-3 h-3' /></li>
                    <li><img src="/images/icons/star.png" alt="ratings icon" className='w-3 h-3' /></li>
                    <li><img src="/images/icons/star.png" alt="ratings icon" className='w-3 h-3' /></li>
                </ul>
                <h4 className="font-bold">{productPrice}</h4>
            </div>
        </div>
    )
}

ProductCard.propTypes = {
    productImage: PropTypes.string.isRequired,
    productDescriptions: PropTypes.string.isRequired,
    productPrice: PropTypes.string.isRequired,
}

function ProductOptions() {
    return (
        <div className='flex justify-center items-center gap-3 w-full absolute bottom-5 cursor-pointer'>
            <div className='flex justify-center items-center  h-10 w-10 rounded-full bg-white shadow'>
                <img src="/images/icons/arrow.png" alt="" className='w-3 h-4' />
            </div>

            <div className='flex justify-center items-center  h-10 w-10 rounded-full bg-white shadow'>
                <img src="/images/icons/love.png" alt="" className='w-4 h-4' />
            </div>

            <div className='flex justify-center items-center  h-10 w-10 rounded-full bg-white shadow'>
                <img src="/images/icons/product.png" alt="" className='w-4 h-4' />
            </div>
        </div>
    )
}