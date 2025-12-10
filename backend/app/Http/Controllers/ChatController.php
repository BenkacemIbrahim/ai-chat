<?php

namespace App\Http\Controllers;

use App\Http\Requests\ChatRequest;
use App\Models\Message;
use App\Models\User;
use App\Services\GroqService;
use Illuminate\Support\Facades\Auth;

class ChatController extends Controller
{
    public function __construct(private GroqService $groq)
    {
    }

    public function handle(ChatRequest $request)
    {
        $data = $request->validated();

        /** @var User $user */
        $user = Auth::user();

        if ((int) $data['userId'] !== (int) $user->id) {
            return response()->json(['message' => 'Forbidden'], 403);
        }

        $userMessage = Message::create([
            'user_id' => $user->id,
            'role' => 'user',
            'content' => $data['message'],
            'model' => null,
        ]);

        $ai = $this->groq->sendMessage($data['message']);

        if (!($ai['success'] ?? false)) {
            return response()->json([
                'userMessage' => $userMessage,
                'assistantMessage' => null,
                'error' => $ai['error'] ?? ['message' => 'Unknown error'],
            ], 422);
        }

        $assistantMessage = Message::create([
            'user_id' => $user->id,
            'role' => 'assistant',
            'content' => $ai['content'] ?? '',
            'model' => $ai['model'] ?? null,
        ]);

        return response()->json([
            'userMessage' => $userMessage,
            'assistantMessage' => $assistantMessage,
        ]);
    }
}
