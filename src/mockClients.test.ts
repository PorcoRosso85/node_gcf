import { test } from 'node:test';
import assert from 'node:assert';
import { Storage, Bucket, File } from '@google-cloud/storage';

// モックの型定義
interface MockStorage {
  bucket: (bucketName: string) => MockBucket;
}

interface MockBucket {
  file: (fileName: string) => MockFile;
}

interface MockFile {
  download: () => Promise<[Buffer]>;
}

// モックの作成
const mockStorage: MockStorage = {
  bucket: (bucketName: string): MockBucket => ({
    file: (fileName: string): MockFile => ({
      download: async (): Promise<[Buffer]> => {
        return [Buffer.from('モックされたファイル内容')];
      },
    }),
  }),
};

// テスト対象の関数
async function downloadFile(bucketName: string, fileName: string): Promise<string> {
  const storage = new Storage();
  const bucket = storage.bucket(bucketName);
  const file = bucket.file(fileName);
  const [contents] = await file.download();
  return contents.toString('utf-8');
}

test('ファイルのダウンロードをテスト', async (t) => {
  // Storageクラスをモックで置き換え
  Storage.prototype.bucket = mockStorage.bucket as unknown as (bucketName: string) => Bucket;

  const result = await downloadFile('test-bucket', 'test-file.txt');
  assert.strictEqual(result, 'モックされたファイル内容');
});
