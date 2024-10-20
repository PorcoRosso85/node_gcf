/**
問い合わせ履歴詳細情報をCSVファイルに格納する
格納情報はCloudSQLから取得する
IDによる範囲指定を行うため、ID配列からクエリを動的に生成する
出力する項目は AnswerHistory type を参照にする
*/
function genCSVFile(answerHistoryIDs: string[]): any {}
