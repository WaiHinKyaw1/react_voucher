import { create } from "zustand";

const useRecordStore = create((set) => ({
  records: [],
  addRecord: (record) =>
    set((state) => ({
      records: [...state.records, record],
    })),
  removeRecord: (id) =>
    set((state) => ({
      records: state.records.filter((record) => record.product_id !== id),
    })),
  changeQuantity: (id, quantity) =>
    set((state) => ({
      records: state.records.map((record) => {
        if (record.product_id === id) {
          const newQuantity = parseInt(record.quantity) + parseInt(quantity);
          const newCost = newQuantity * parseInt(record.product.price);
          return { ...record, quantity: newQuantity, cost: newCost };
        }
        return record;
      }),
    })),
    restRecord : ()=>set(({records : []})),
}));
export default useRecordStore;
