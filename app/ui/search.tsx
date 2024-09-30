'use client';

import {useSearchParams, usePathname, useRouter} from 'next/navigation';
import {useDebouncedCallback} from 'use-debounce';

export default function Search({placeholder}: { placeholder: string }) {

    const searchParams = useSearchParams();
    const pathname = usePathname();
    const {replace} = useRouter();

    const handleSearch = useDebouncedCallback((term) => {
        const params = new URLSearchParams(searchParams);
        if (term) {
            params.set('query', term);
        } else {
            params.delete('query');
        }
        replace(`${pathname}?${params.toString()}`);

    }, 300);

    return (
        <>
            <label htmlFor="search" className="sr-only">
                Search
            </label>
            <input
                className="peer block w-full py-[9px] pl-[30px] text-xl leading-[54px] text-[#656ec2] placeholder:text-[#656ec2] shadow-lg outline-0"
                placeholder={placeholder}
                onChange={(e) => {
                    handleSearch(e.target.value);
                }}
                defaultValue={searchParams.get('query')?.toString()}
            />
        </>
    );
}
