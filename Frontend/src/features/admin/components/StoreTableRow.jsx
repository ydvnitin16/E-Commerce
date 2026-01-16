import { Eye, Pencil } from 'lucide-react';

const StoreTableRow = ({ store }) => {
    return (
        <tr>
            <td className="px-6 py-4">
                <p className="font-medium">{store.name}</p>
                <p className="text-xs text-zinc-500">{store.email}</p>
            </td>

            <td className="px-6 py-4">{store.userId?.name}</td>
            <td className="px-6 py-4">Category</td>

            <td className="px-6 py-4">
                <span
                    className={`px-3 py-1 text-xs rounded-full ${
                        store.isActive
                            ? 'bg-green-100 text-green-700'
                            : 'bg-red-100 text-red-700'
                    }`}
                >
                    {store.isActive ? 'Active' : 'Inactive'}
                </span>
            </td>

            <td className="px-6 py-4 font-semibold">$12,400</td>
            <td className="px-6 py-4 text-zinc-500">2024-01-15</td>

            <td className="px-6 py-4 flex gap-4 text-zinc-500">
                <button>
                    <Eye size={20} />
                </button>
                <button>
                    <Pencil size={20} />
                </button>
            </td>
        </tr>
    );
};

export default StoreTableRow;
