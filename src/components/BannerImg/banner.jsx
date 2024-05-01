
export default function Banner() {
    return (
        <div className="h-[300px] bg-no-repeat bg-cover bg-[top_center] flex items-center justify-center" style={{ backgroundImage: "url('/images/banners/banner-1.jpg.webp')" }}>
            <div className="flex flex-col items-center justify-center gap-3">
                <h4 className="uppercase text-borderColor text-[12px]">the chloe collection</h4>
                <h1 className="capitalize text-4xl font-['Satisfy'] pb-3">The project jacket</h1>
                <a href="" className="block uppercase border-b-2 border-borderColor text-xs">Shop Now</a>
            </div>
        </div>
  )
}
