
type Props ={
    title:string;
    normal?:boolean;
}

export function Button({title,normal}:Props){
    return(
        <button className={`${normal?'bg-[#008C04]':'bg-green-200'} text-white px-6 py-1 rounded-3xl`}>
            {title}
        </button>
    )
}