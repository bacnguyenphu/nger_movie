function TippyCountries({conutries}) {
    return ( 
        <div className="rounded-md overflow-hidden w-full bg-[#17161B] font-light text-gray-500 p-5 text-[14px] flex flex-wrap justify-between gap-y-3 animate-height-down duration-200 after:h-[3px] after:w-full after:absolute after:bg-blue-500 after:left-0 after:top-0 after:rounded-t-md">
            <div className="triangle-up absolute -top-[9px] right-6"></div>
            {conutries && conutries.length > 0 &&
                conutries.map((item,index) => {
                    return (
                        <div
                            className="min-w-[88px] cursor-pointer hover:text-white hover:font-medium"
                            key={item._id}
                            onClick={ ()=>{}}
                        >
                            {item.name}
                        </div>
                    )
                })}
        </div>
     );
}

export default TippyCountries;