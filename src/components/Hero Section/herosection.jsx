import PropTypes from 'prop-types';

export default function HeroSection() {
    return (
        <section className="flex flex-col lg:flex-row md:h-[80vh] gap-3">
            {/* First Image in flex box */}
            <HeroCategoryCard
                backgroundImage="/images/heroS/category-1.jpg.webp"
                h1Text={'Women\'s Fashion'}
                pText={'Sitamet, consectetur adipiscing elit, sed do eiusmod tempor incidid-unt labore edolore magna aliquapendisse ultrices gravida.'}
            />

            {/* Second Div in flex box */}
            <div className="flex flex-col gap-3 flex-1">
                {/* First Row */}
                <div className="flex flex-col md:flex-row flex-1 gap-3">
                    <HeroCategoryCard
                        backgroundImage="/images/heroS/category-2.jpg.webp"
                        h1Text={'Men\'s Fashion'}
                        pText={'358 Items'}
                    />
                    <HeroCategoryCard
                        backgroundImage="/images/heroS/category-3.jpg.webp"
                        h1Text={'Kids\'s Fashion'}
                        pText={'273 Items'}
                    />
                </div>

                {/* Second Row */}
                <div className="flex flex-col md:flex-row flex-1 gap-3">
                    <HeroCategoryCard
                        backgroundImage="/images/heroS/category-4.jpg.webp"
                        h1Text={'Cosmetics'}
                        pText={'159 Items'}
                    />
                    <HeroCategoryCard
                        backgroundImage="/images/heroS/category-5.jpg.webp"
                        h1Text={'Accessories'}
                        pText={'792 Items'}
                    />
                </div>
            </div>
        </section>
    )
}

function HeroCategoryCard({backgroundImage, h1Text, pText}) {
    return (
        <div className={`sm:h-60 lg:h-auto bg-cover bg-no-repeat flex flex-col items-start justify-center gap-3 flex-1 px-10`} style={{backgroundImage: `url(${backgroundImage})`}}>
            <h1 className='text-2xl font-bold'>{ h1Text }</h1>
            <p className="text-gray-500 max-w-80">{ pText }</p>
            <h4 className="uppercase border-b-2 border-borderColor text-xs">shop now</h4>
        </div>
    )
}

HeroCategoryCard.propTypes = {
    backgroundImage: PropTypes.string,
    h1Text: PropTypes.string,
    pText: PropTypes.string,
}