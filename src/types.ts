export interface Task {
  id: number
  text: string
  completed: boolean
}

export type Mode = 'All' | 'Completed' | 'Active'
