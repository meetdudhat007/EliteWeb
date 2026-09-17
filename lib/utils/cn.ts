/**
 * Class name composition utility.
 * Lightweight alternative without unnecessary external dependencies for the foundation phase.
 */
export function cn(...inputs: (string | undefined | null | false)[]): string {
  return inputs.filter(Boolean).join(" ");
}
