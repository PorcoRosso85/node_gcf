import { Result, ok, err } from 'neverthrow'

/**
DialogFlowからの回答を週出し、保存用構造へ変換する
*/
function turnAnswerToStore(answer: any): Result<any, any> {
  return
}

/**
id: uuidv4
outputFormat: str
query: str
prompt: str
createdAt: iso8601
reviewdBool: null | bool
updatedAt: iso8601
*/
type storeToBigQuery = {}
