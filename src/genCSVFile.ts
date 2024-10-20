/**
問い合わせ履歴詳細情報をCSVファイルに格納する
格納情報はCloudSQLから取得する
IDによる範囲指定を行うため、ID配列からクエリを動的に生成する
出力する項目は AnswerHistory type を参照にする
*/
import { cloudSQLClient } from './path/to/cloudSQLClient'; // Adjust the import path as necessary
import { storeToBigQuery } from './AnswerHistory'; // Adjust the import path as necessary
import { writeFileSync } from 'fs';

function genCSVFile(answerHistoryIDs: string[]): any {
  const query = `
    SELECT * FROM AnswerHistory
    WHERE id IN (${answerHistoryIDs.join(',')})
  `;

  return cloudSQLClient.query(query)
    .then((results: storeToBigQuery[]) => {
      const csvContent = results.map(row => 
        `${row.id},${row.outputFormat},${row.query},${row.prompt},${row.createdAt},${row.reviewBool},${row.updatedAt}`
      ).join('\n');

      writeFileSync('answer_history.csv', csvContent);
      return 'CSV file generated successfully';
    })
    .catch((error: any) => {
      console.error('Error generating CSV file:', error);
      throw error;
    });
}
