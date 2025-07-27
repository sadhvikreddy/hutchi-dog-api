import z from "zod";

const createVariantRequestInputSchema = z.object({
    name: z.string().min(1, "Name cannot be empty"),
    variant: z.string().min(1, "Variant cannot be empty")
})

type CreateVariantRequestInput = z.infer<typeof createVariantRequestInputSchema>

export {
    createVariantRequestInputSchema,
    CreateVariantRequestInput
}