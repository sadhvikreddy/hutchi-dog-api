import z from "zod";

const createBreedRequestInputSchema = z.object({
    name: z.string().min(1, "Name cant be empty"),
    variants: z.optional(z.array(z.string().min(1, "variants has empty string.")))
});

type CreateBreedRequestInput = z.infer<typeof createBreedRequestInputSchema>

export {
    createBreedRequestInputSchema,
    CreateBreedRequestInput
}