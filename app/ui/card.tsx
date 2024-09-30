import {FetchedData} from "@/app/lib/definitions";

export default function Card({data}: { data: FetchedData }) {

    return (
        <a className='
        flex
        flex-col
        justify-between
        shadow-lg text-[#282626]
        '>
            <div className='w-full max-lines-2'>
                {data.value}
            </div>
            <p className='w-full flex justify-between'>
                <span className='text-[#767676]'>{data.id}</span>
                <span className='text-[#767676]'>{data.created_at}</span>
            </p>
        </a>
    )
}