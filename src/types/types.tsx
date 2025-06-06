import type { z } from "zod";
import type { SchemaCryptoSelect, SchemaCurrency } from "../schemas/schemas";

export type Currency = z.infer<typeof SchemaCurrency>;
export type CryptoSelect = z.infer<typeof SchemaCryptoSelect>