import { z } from "zod";

export const SchemaCurrency = z.object({
    code: z.string(),
    name: z.string()
})