export interface DeleteVariantRepository {
    execute(name: string, variant: string): Promise<boolean>
}