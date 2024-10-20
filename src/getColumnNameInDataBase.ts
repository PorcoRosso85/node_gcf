import { Result } from 'neverthrow'

/**
CloudSQLに接続して、バリデーションのためのカラム名を取得する
*/
function getColumnNameInDataBase(cloudSQLClient: any): Result<string[], any> {
  return cloudSQLClient.query(sql``)
}
