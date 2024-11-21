export interface Todo {
    id: number;
    title: string;
    description?: string;
    doneAt?: Date;
    priority?: Priority;
    category?: Category[];
    created_at: Date;
    updated_at?: Date;
}

export interface Priority {
    id: number;
    name: string;
    color: string; // hex
}

export interface Category {
    id: number;
    name: string;
    color?: string;
    icon?: string; // emoji
}