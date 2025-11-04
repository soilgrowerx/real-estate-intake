// A utility to check if an item is a non-array object.
function isObject(item: any): item is Record<string, any> {
  return item && typeof item === 'object' && !Array.isArray(item);
}

/**
 * Recursively merges properties of one object into another.
 * @param target The target object to merge into.
 * @param source The source object with new properties.
 * @returns A new object with merged properties.
 */
export function deepMerge<T extends object>(target: T, source: Partial<T>): T {
  // Create a new object to avoid mutating the original state directly.
  const output = { ...target };

  if (isObject(target) && isObject(source)) {
    // Iterate over all keys in the source object.
    Object.keys(source).forEach(key => {
      const sourceKey = key as keyof T;
      const targetValue = target[sourceKey];
      const sourceValue = source[sourceKey];

      // If both the target and source values for a key are objects, recurse.
      if (isObject(sourceValue) && isObject(targetValue)) {
        // FIX: The type guard `isObject` ensures targetValue is an object,
        // but TypeScript can't infer this to satisfy the generic constraint on the recursive call.
        // We cast targetValue to `Record<string, any>` as a safe escape hatch because of the runtime check.
        (output as any)[sourceKey] = deepMerge(targetValue as Record<string, any>, sourceValue as Partial<typeof targetValue>);
      } else {
        // Otherwise, overwrite the value in the output object.
        (output as any)[sourceKey] = sourceValue;
      }
    });
  }

  return output;
}
