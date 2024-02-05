const prefix = '@painel-impacto-v1-'

type StorageType = {
  session: number
  bearer: string
  language: string
  selectedOptions: string[]
}

const storeManager = new Proxy<StorageType>(
  {
    session: 0,
    bearer: '',
    language: 'en',
    selectedOptions: [],
  },
  {
    get: (target, prop) => {
      try {
        const item = localStorage.getItem(prefix + String(prop))
        return item
          ? (JSON.parse(item) as string)
          : target[String(prop) as keyof StorageType]
      } catch (error) {
        console.error(`Error getting ${String(prop)} from localStorage:`, error)
        return target[String(prop) as keyof StorageType]
      }
    },
    set: (target, prop, value) => {
      try {
        const updatedValue = value || target[String(prop) as keyof StorageType]
        localStorage.setItem(
          prefix + String(prop),
          JSON.stringify(updatedValue),
        )
      } catch (error) {
        console.error(`Error setting ${String(prop)} to localStorage:`, error)
        return false
      }
      return true
    },
  },
)

export default storeManager
