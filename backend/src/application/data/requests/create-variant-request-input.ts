import z from "zod";

const createAndDeleteVariantRequestInputSchema = z.object({
    name: z.string().min(1, "Name cannot be empty"),
    variant: z.string().min(1, "Variant cannot be empty")
})

type CreateAndDeleteVariantRequestInput = z.infer<typeof createAndDeleteVariantRequestInputSchema>

export {
    createAndDeleteVariantRequestInputSchema,
    CreateAndDeleteVariantRequestInput
}