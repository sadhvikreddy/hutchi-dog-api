import z from "zod";

const upsertBreedRequestInputSchema = z.object({
    name: z.string().min(1, "Name cant be empty"),
    variants: z.optional(z.array(z.string().min(1, "variants has empty string.")))
});

type UpsertBreedRequestInput = z.infer<typeof upsertBreedRequestInputSchema>

export {
    upsertBreedRequestInputSchema,
    UpsertBreedRequestInput
}