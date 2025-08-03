export interface Todo {
    id: number;
    name: string;
    status: 'pendente' | 'cancelada' | 'concluida';
}