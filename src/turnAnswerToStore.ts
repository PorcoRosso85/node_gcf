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
type storeTo = {
  id: string; // uuidv4
  outputFormat: string;
  query: string;
  prompt: string;
  createdAt: string; // iso8601
  reviewedBool: boolean | null;
  updatedAt: string; // iso8601
}

type storeToBigQuery = {
  id: string; // uuidv4
  outputFormat: string;
  query: string;
  prompt: string;
  createdAt: string; // iso8601
  reviewedBool: boolean | null;
  updatedAt: string; // iso8601
}
