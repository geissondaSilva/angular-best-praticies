export interface Todo {
    id: number;
    name: string;
    status: 'pendente' | 'cancelada' | 'concluida';
    date: Date;
    category: 'compras' | 'limpeza' | 'estudo' | 'social' | 'lazer';
}