import { Result, ok, err } from 'neverthrow'

/**
DialogFlowからの回答を週出し、保存用構造へ変換する
*/
function turnAnswerToStore(answer: any): storeToBigQuery {
  return {
    id: 0000000001,
    outputFormat: "メール文面",
    query: "query",
    prompt: "prompt",
    createdAt: "",
    reviewBool: null,
    updatedAt: ""
    
  }
}

/**
id: int
outputFormat: str
query: str
prompt: str
createdAt: iso8601
reviewBool: null | bool
updatedAt: iso8601
*/
type storeToBigQuery = {
  id: number
  outputFormat: string
  query: string
  prompt: string
  createdAt: string // iso8601
  reviewBool: boolean | null
  updatedAt: string // iso8601
}
