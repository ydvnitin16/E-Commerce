import { useCallback, useState } from 'react';
import { updateStoreStatus } from '../services/store.api.js';

const useUpdateStoreStatus = (setStores) => {
    const [loadingIds, setLoadingIds] = useState(() => new Set());

    const updateStatus = useCallback(
        async (storeId, status) => {
            try {
                setLoadingIds((prev) => new Set(prev).add(storeId));
                setStores((prev) =>
                    prev.map((store) =>
                        store._id === storeId ? { ...store, status } : store
                    )
                );
                await updateStoreStatus(storeId, status);

                // update the currect store state to keep UI in sync
            } catch (err) {
                console.log(err.message);
            } finally {
                setLoadingIds((prev) => {
                    const ids = new Set(prev);
                    ids.delete(storeId);
                    return ids;
                });
            }
        },
        [setStores]
    );

    return {
        approveStore: (id) => updateStatus(id, 'APPROVED'),
        rejectStore: (id) => updateStatus(id, 'REJECTED'),
        isLoading: (id) => loadingIds.has(id),
    };
};

export default useUpdateStoreStatus;
