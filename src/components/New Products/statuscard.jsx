import PropTypes from 'prop-types';

export default function StatusCard({ productStatus, backgroundColor, display }) {
    return (
        <div className='absolute top-3 left-3 text-xs py-[2px] px-3 text-white' style={{backgroundColor: `${backgroundColor}`, display: `${display}`}}>
            <p>{productStatus}</p>
        </div>
    )
}

StatusCard.propTypes = {
    productStatus: PropTypes.string = "",
    backgroundColor: PropTypes.string,
    display: PropTypes.string = "hidden",
}