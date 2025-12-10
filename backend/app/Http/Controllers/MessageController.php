<?php

namespace App\Http\Controllers;

use App\Http\Requests\MessagesIndexRequest;
use App\Models\Message;
use Illuminate\Support\Facades\Auth;

class MessageController extends Controller
{
    public function index(MessagesIndexRequest $request)
    {
        $perPage = (int) ($request->validated()['per_page'] ?? 50);
        $query = Message::where('user_id', Auth::id())
            ->orderBy('created_at');

        $paginator = $query->paginate($perPage);

        return response()->json([
            'data' => $paginator->items(),
            'meta' => [
                'total' => $paginator->total(),
                'per_page' => $paginator->perPage(),
                'current_page' => $paginator->currentPage(),
                'last_page' => $paginator->lastPage(),
            ],
        ]);
    }

    public function store(MessagesIndexRequest $request)
    {
        return response()->json(['message' => 'Not implemented'], 404);
    }
}
