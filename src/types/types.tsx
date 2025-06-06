import type { z } from "zod";
import type { SchemaCurrency } from "../schemas/schemas";

export type Currency = z.infer<typeof SchemaCurrency>