export interface DataAccess<T> {
    add(t: T): Promise<void>,
    delete(id: number): Promise<void>,
    update(id: number, updateData: Partial<T>): Promise<void>,
    get(id: number): Promise<T>
    getAll(): Promise<T[]>
}