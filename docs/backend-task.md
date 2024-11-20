# Back-End Developer

## Сутність To-do

### Тип для зберігання
```ts
type Todo = {
    id: number; // Ідентифікатор
    title: string; // Заголовок
    description?: string; // Опис
    doneAt?: Date; // Статус виконання. Непусте значення означає про те, що завдання виконане в заданий час.
    priorityId?: number; // Посилання на пріоритет
    categoryId?: number; // Посилання на категорію
    created_at: Date; // коли створилося
    updated_at?: Date; // коли оновилося
};
```
### Як бажано повертати?

```ts
type TodoResponse = {
    id: number;
    title: string;
    description?: string;
    doneAt?: Date;
    priority?: Priority; // повертати не id, а відразу об'єкт
    category?: Category; // так само як і з приорітетом
    created_at: Date;
    updated_at?: Date;
};
```

### Методи, які потрібно імлпементувати. Повертати через Promise
- Отримати всі завдання
- Отримати завдання по id
- Створити нове завдання
- Оновити існуюче завдання: `title`, `description`, `priorityId`, `categoryId`, `updated_at`
- Видалити завдання
- Позначити як виконане/не виконане
- Пошук за назвою
- Фільтрація за категорією/пріоритетом

## Приорітет

### Тип для зберігання
```ts
type Priority = {
    id: number;
    title: string;
    color: string; // hex
};
```

### Методи
- CRUD для пріорітетів

## Категорія

### Тип для зберігання
```ts
type Category = {
    id: number;
    name: string;
    color?: string;
    icon?: string; // якесь емодзі
};
```

### Методи
- CRUD для категорій

## Сервіс для експорту та імпорту даних
- Експорт у JSON
- Імпорт з JSON. Думаю можна повістю видалити старі дані та замінити новими.