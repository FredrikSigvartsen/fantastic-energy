import create from "zustand"

const useStore = create(set => ({
  isValidated: true,
  setIsValidated: isValidated => set(() => ({ isValidated })),
}))

export default useStore
