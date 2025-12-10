<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
{
    public function toArray($request): array
    {
        return [
            'id' => (string) $this->id,
            'email' => $this->email,
            'name' => $this->name,
            'plan' => $this->plan ?? 'free',
            'preferences' => $this->preferences ?? [
                'theme' => 'system',
                'language' => 'en',
                'aiPersona' => 'professional',
                'voiceEnabled' => false,
                'highContrast' => false,
                'fontSize' => 'medium',
            ],
        ];
    }
}

