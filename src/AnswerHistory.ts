/**
id: int
outputFormat: str
query: str
prompt: str
createdAt: iso8601
reviewBool: null | bool
updatedAt: iso8601
*/
export type AnswerHistory = {
  id: number
  outputFormat: string
  query: string
  prompt: string
  answer: string
  createdAt: string // iso8601
  reviewBool: boolean | null
  updatedAt: string // iso8601
}
