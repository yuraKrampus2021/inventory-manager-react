import { create } from 'zustand'
import { productsMock } from '../data/products'

export const productStore = create((set) => ({
    products: [...productsMock],

    updateProduct: (form) =>
        set((state) => ({
            products: state.products.map((prod) =>
                prod.id === form.id ? { ...prod, ...form } : prod
            ),
        })),

    addProduct: (form) =>
        set((state) => ({
            products: [...state.products, { ...form, id: Date.now() }],
        })),

    deleteProduct: (prodId) =>
        set((state) => ({
            products: state.products.filter((product) => product.id !== prodId),
        })),
}))
