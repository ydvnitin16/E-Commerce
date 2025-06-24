import { create } from 'zustand';

const UseHomeProducts = create((set, get) => ({
    homeLatestProducts: [],
    homeBestSellerProducts: [],
    loaded: false,

    setHomeProducts: async () => {
        if (!get().loaded) {
            const latestProducts = await fetch(
                `${import.meta.env.VITE_SERVER_URL}/products?limit=10`
            )
                .then((res) => res.json())
                .then((data) => data.products);

            const bestSellerProducts = await fetch(
                `${import.meta.env.VITE_SERVER_URL}/products?bestSeller=true`
            )
                .then((res) => res.json())
                .then((data) => data.products);

            set({
                homeLatestProducts: latestProducts,
                homeBestSellerProducts: bestSellerProducts,
                loaded: true,
            });
        }
    },
}));

export { UseHomeProducts };
