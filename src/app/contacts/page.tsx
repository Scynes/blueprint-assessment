import { getContacts } from '@/actions/get-contacts';

export default async function Contacts () {

    const { data, error } = await getContacts();

    return (
        <div className={ 'flex h-full justify-center p-4' }>
            <div className={ 'relative overflow-x-auto w-full' }>
                <table className={ 'w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400' }>
                    <thead className={ 'text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400' }>
                        <tr>
                            <th scope="col" className={ 'px-6 py-4' }>ID</th>
                            <th scope="col" className={ 'px-6 py-1' }>Email</th>
                            <th scope="col" className={ 'px-6 py-1' }>Phone</th>
                            <th scope="col" className={ 'px-6 py-1' }>Zip</th>
                        </tr>
                    </thead>
                    <tbody>
                        { data?.map((contact: any) => (
                            <tr key={ contact.id } className={ 'border-b bg-gray-800 border-gray-700 hover:cursor-pointer hover:bg-gray-600' }>
                                <td className={ 'px-6 py-4' }>{ contact.id }</td>
                                <td className={ 'px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white' }>{ contact.email }</td>
                                <td className={ 'px-6 py-4' }>{ contact.phone }</td>
                                <td className={ 'px-6 py-4' }>{ contact.zip }</td>
                            </tr>
                        )) }
                    </tbody>
                </table>
            </div>
        </div>
    );
}