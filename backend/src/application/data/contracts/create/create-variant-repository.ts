import Dog from '@/application/data/interfaces/db/dog'

export default interface CreateVariantRepository {
    execute(name: string, variant: string): Promise<Dog | null>
}