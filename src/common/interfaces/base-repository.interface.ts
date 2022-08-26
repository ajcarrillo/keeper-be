export interface BaseRepositoryInterface<T> {
    all(): Promise<Array<T>>;

    getById(id: string): Promise<T>;

    save(model: any): Promise<T>;

    updateById(id: string, model: T): Promise<T>;

    deleteById(id: string): Promise<void>;

    deleteByIdLogic(id: string): Promise<T>;

    search(search: string): Promise<Array<T>>;
}
