import { Result, ok, err } from 'neverthrow'
import { test } from 'node:test';
import assert from 'node:assert/strict';

/**
DialogFlowからの回答を週出し、保存用構造へ変換する
*/
function turnAnswerToStore(answerByDialogFlow: answerByDialogFlow): storeToBigQuery {
  const currentDate = new Date().toISOString()
  const prompt = answerByDialogFlow.queryResult.text;
  const answer = answerByDialogFlow.queryResult.responseMessages
    .map(message => message.text.text.join(' '))
    .join(' ');

  return {
    id: 1,
    outputFormat: 'メール文面',
    query: 'query',
    prompt: prompt,
    answer: answer,
    createdAt: currentDate,
    reviewBool: null,
    updatedAt: currentDate,
  }
}

// Test case for turnAnswerToStore
test('turnAnswerToStore should transform answerByDialogFlow to storeToBigQuery', () => {
  const input: answerByDialogFlow = {
    responseId: "38e8f23d-eed2-445e-a3e7-149b242dd669",
    queryResult: {
      text: "I want to buy a shirt",
      languageCode: "en",
      responseMessages: [
        {
          text: {
            text: [
              "Ok, let's start a new order."
            ]
          }
        },
        {
          text: {
            text: [
              "I'd like to collect a bit more information from you."
            ]
          }
        },
        {
          text: {
            text: [
              "What color would you like?"
            ]
          }
        }
      ],
      currentPage: {
        name: "projects/PROJECT_ID/locations/us-central1/agents/133b0350-f2d2-4928-b0b3-5b332259d0f7/flows/00000000-0000-0000-0000-000000000000/pages/ce0b88c4-9292-455c-9c59-ec153dad94cc",
        displayName: "New Order"
      },
      intent: {
        name: "projects/PROJECT_ID/locations/us-central1/agents/133b0350-f2d2-4928-b0b3-5b332259d0f7/intents/0adebb70-a727-4687-b8bc-fbbc2ac0b665",
        displayName: "order.new"
      },
      intentDetectionConfidence: 1,
      diagnosticInfo: {},
      match: {
        intent: {
          name: "projects/PROJECT_ID/locations/us-central1/agents/133b0350-f2d2-4928-b0b3-5b332259d0f7/intents/0adebb70-a727-4687-b8bc-fbbc2ac0b665",
          displayName: "order.new"
        },
        resolvedInput: "I want to buy a shirt",
        matchType: "INTENT",
        confidence: 1
      }
    }
  };

  const result = turnAnswerToStore(input);

  assert.strictEqual(result.prompt, "I want to buy a shirt");
  assert.strictEqual(result.answer, "Ok, let's start a new order. I'd like to collect a bit more information from you. What color would you like?");
});

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
  answer: string
  createdAt: string // iso8601
  reviewBool: boolean | null
  updatedAt: string // iso8601
}

/**
{
  "responseId": "38e8f23d-eed2-445e-a3e7-149b242dd669",
  "queryResult": {
    "text": "I want to buy a shirt",
    "languageCode": "en",
    "responseMessages": [
      {
        "text": {
          "text": [
            "Ok, let's start a new order."
          ]
        }
      },
      {
        "text": {
          "text": [
            "I'd like to collect a bit more information from you."
          ]
        }
      },
      {
        "text": {
          "text": [
            "What color would you like?"
          ]
        }
      },
      {}
    ],
    "currentPage": {
      "name": "projects/PROJECT_ID/locations/us-central1/agents/133b0350-f2d2-4928-b0b3-5b332259d0f7/flows/00000000-0000-0000-0000-000000000000/pages/ce0b88c4-9292-455c-9c59-ec153dad94cc",
      "displayName": "New Order"
    },
    "intent": {
      "name": "projects/PROJECT_ID/locations/us-central1/agents/133b0350-f2d2-4928-b0b3-5b332259d0f7/intents/0adebb70-a727-4687-b8bc-fbbc2ac0b665",
      "displayName": "order.new"
    },
    "intentDetectionConfidence": 1,
    "diagnosticInfo": { ... },
    "match": {
      "intent": {
        "name": "projects/PROJECT_ID/locations/us-central1/agents/133b0350-f2d2-4928-b0b3-5b332259d0f7/intents/0adebb70-a727-4687-b8bc-fbbc2ac0b665",
        "displayName": "order.new"
      },
      "resolvedInput": "I want to buy a shirt",
      "matchType": "INTENT",
      "confidence": 1
    }
  }
}
*/
type answerByDialogFlow = {
  responseId: string
  queryResult: {
    text: string
    languageCode: string
    responseMessages: Array<{
      text: {
        text: string[]
      }
    }>
    currentPage: {
      name: string
      displayName: string
    }
    intent: {
      name: string
      displayName: string
    }
    intentDetectionConfidence: number
    diagnosticInfo: object
    match: {
      intent: {
        name: string
        displayName: string
      }
      resolvedInput: string
      matchType: string
      confidence: number
    }
  }
}
