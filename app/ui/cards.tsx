import Card from "@/app/ui/card";
import {FetchedData} from "@/app/lib/definitions";

export default function Cards({data}: {
    data: FetchedData[];
}) {


    return (
        <ul className='
        max-w-[1600px]
        flex flex-wrap
        list-none
        gap-[20px]
        w-full
        justify-center
        mb-[60px]
        '>
            {data?.length ? data?.map((item, index: number) => <Card
                key={index} data={item}/>) : null}
        </ul>
    )
}