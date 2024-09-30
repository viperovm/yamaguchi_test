'use client'

import Search from "@/app/ui/search";
import Cards from "@/app/ui/cards";
import {useQuery} from "@tanstack/react-query";
import {fetchJokes} from "@/app/lib/data";
import {useEffect} from "react";

export default function Home({
                                 searchParams,
                             }: {
    searchParams?: {
        query?: string;
    };
}) {

    const query = searchParams?.query || '';

    const {data, isLoading, isError, refetch, isFetching} = useQuery({
        queryKey: ['jokes'],
        queryFn: () => fetchJokes(query),
    })


    useEffect(() => {
        refetch()
    }, [query])

    return (
        <div className={`block min-h-screen`}>
            <main className="flex flex-col w-full my-auto mx-0 p-5 items-center">
                <div className="search flex flex-col mt-32 mb-[60px] mx-0 w-3/6 justify-center items-center">
                    <Search placeholder="Search jokes..."/>
                    {data?.result?.length && query?.length > 3 ?
                        <>
                            <span className='self-start mt-5 ml-9'>Total count: {data?.total}</span>
                        </> : <></>
                    }

                </div>

                {isFetching && query?.length > 3 ?
                    <>
                        <div>Loading...</div>
                    </> : <></>
                }
                {isError && query?.length > 3 ?
                    <>
                        <div>Error</div>
                    </> : <></>
                }
                {!isFetching && data?.result?.length && query?.length > 3 ?
                    <>
                        <Cards data={data.result}/>
                    </> : <></>
                }
                {!isFetching && !data?.result?.length && query?.length > 3 ?
                    <>
                        <div>No jokes here</div>
                    </> : <></>
                }
            </main>
        </div>
    );
}
