<?php

namespace App\Services;

use Illuminate\Support\Facades\Http;
use Illuminate\Support\Str;
use RuntimeException;

class GroqService
{
    public function sendMessage(string $userMessage): array
    {
        $key = config('services.groq.key');
        $base = rtrim(config('services.groq.base_uri'), '/');
        $path = ltrim(config('services.groq.chat_path'), '/');
        $model = config('services.groq.model');

        if (! $key) {
            throw new RuntimeException('Missing Groq API key');
        }

        try {
            $response = Http::withToken($key)
                ->acceptJson()
                ->asJson()
                ->timeout(30)
                ->post($base.'/'.$path, [
                    'model' => $model,
                    'messages' => [
                        ['role' => 'user', 'content' => $userMessage],
                    ],
                ]);

            if (! $response->successful()) {
                return [
                    'success' => false,
                    'error' => [
                        'status' => $response->status(),
                        'message' => $response->json('error.message') ?? $response->body(),
                        'type' => $response->json('error.type') ?? null,
                        'code' => $response->json('error.code') ?? null,
                    ],
                ];
            }

            $data = $response->json();
            $choice = is_array($data['choices'] ?? null) ? ($data['choices'][0] ?? []) : [];
            $content = $choice['message']['content'] ?? '';

            return [
                'success' => true,
                'id' => $data['id'] ?? Str::uuid()->toString(),
                'created' => $data['created'] ?? time(),
                'model' => $data['model'] ?? $model,
                'content' => $content,
                'usage' => [
                    'prompt_tokens' => $data['usage']['prompt_tokens'] ?? null,
                    'completion_tokens' => $data['usage']['completion_tokens'] ?? null,
                    'total_tokens' => $data['usage']['total_tokens'] ?? null,
                ],
                'provider' => 'groq',
            ];
        } catch (\Throwable $e) {
            return [
                'success' => false,
                'error' => [
                    'status' => null,
                    'message' => $e->getMessage(),
                    'type' => 'exception',
                    'code' => $e->getCode(),
                ],
            ];
        }
    }
}

